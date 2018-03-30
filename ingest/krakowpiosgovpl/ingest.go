// Package krakowpiosgovpl is an API for downloading air quality measurements
// from http://monitoring.krakow.pios.gov.pl
package krakowpiosgovpl

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"net"
	"net/http"
	"strings"
	"time"
)

var (
	ErrorAPICallFailed = errors.New("monitoring.krakow.pios.gov.pl API call failed")
)

// KrakowPiosGovPl is main API interface
type KrakowPiosGovPl struct{}

// Channel describes a measurement channel as defined in PIOS
type Channel struct {
	Type string
	ID   int
}

// Station describes a station and which measurements it supports
type Station struct {
	Name     string
	ID       int
	Channels []Channel
}

const (
	krakowPiosConfigurationURL = "http://monitoring.krakow.pios.gov.pl/dane-pomiarowe/wczytaj-konfiguracje"
	krakowPiosDataURL          = "http://monitoring.krakow.pios.gov.pl/dane-pomiarowe/pobierz"
)

const (
	userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0"
)

var transport http.Transport
var client http.Client

func init() {
	transport = http.Transport{
		Proxy: http.ProxyFromEnvironment,
		Dial:  dialTimeout,
	}
	client = http.Client{
		Transport: &transport,
	}
}

func newRequest(url string) (*http.Request, error) {
	request, err := http.NewRequest("POST", url, strings.NewReader("measType=Auto"))
	if err != nil {
		return nil, err
	}

	request.Header.Set("User-Agent", userAgent)
	request.Header.Set("Host", "monitoring.krakow.pios.gov.pl")
	request.Header.Set("Accept", "application/json, text/javascript, */*; q=0.01")
	request.Header.Set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
	request.Header.Set("Connection", "keep-alive")
	request.Header.Set("Cache-Control", "max-age=0")
	return request, nil
}

type krakowPiosConfigurationResponse struct {
	Success bool
	Config  struct {
		Params []struct {
			ID   string
			Name string `json:"long_name"`
			Unit string
		}
		Stations []struct {
			ID   int
			Name string
		}
		Channels []struct {
			StationID int    `json:"station_id"`
			ChannelID int    `json:"channel_id"`
			ParamID   string `json:"param_id"`
			UnitID    string `json:"unit_id"`
		}
	}
}

const (
	stationIDKrakowAlejaKrasinskiego = 6
	stationIDKrakowNowaHuta          = 7
	stationIDKrakowKurdwanow         = 16
	stationIDKrakowDietla            = 149
	stationIDKrakowOsPiastow         = 152
	stationIDKrakowZlotyRog          = 153
	stationIDKrakowOsWadow           = 161
	stationIDKrakowTelimeny          = 163
)

var (
	stationsOfInterest = []int{
		stationIDKrakowAlejaKrasinskiego,
		stationIDKrakowNowaHuta,
		stationIDKrakowKurdwanow,
		stationIDKrakowDietla,
		stationIDKrakowOsPiastow,
		stationIDKrakowZlotyRog,
		stationIDKrakowOsWadow,
		stationIDKrakowTelimeny,
	}
)

func (s *Station) isOfInterest() bool {
	for _, v := range stationsOfInterest {
		if v == s.ID {
			return true
		}
	}
	return false
}

func getConfiguration() ([]Station, error) {
	request, err := newRequest(krakowPiosConfigurationURL)
	if err != nil {
		return nil, err
	}
	response, err := client.Do(request)
	if err != nil {
		return nil, err
	}

	defer response.Body.Close()
	contents, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return nil, err
	}

	resp := krakowPiosConfigurationResponse{}
	err = json.Unmarshal([]byte(contents), &resp)
	if err != nil {
		return nil, err
	}

	if resp.Success == false {
		return nil, ErrorAPICallFailed
	}

	stationsMap := make(map[int]Station)
	for _, s := range resp.Config.Stations {
		stationsMap[s.ID] = Station{s.Name, s.ID, nil}
	}
	stations := make([]Station, 0, len(stationsMap))
	for _, v := range stationsMap {
		if v.isOfInterest() {
			stations = append(stations, v)
		}
	}

	return stations, nil
}

const timeout = time.Duration(2 * time.Second)

func dialTimeout(network, addr string) (net.Conn, error) {
	return net.DialTimeout(network, addr, timeout)
}

// New returns new instance of monitoring.krakow.pios.gov.pl
// preloads configuration from website and does initial mapping
// and filtering of data stations.
func New() *KrakowPiosGovPl {
	api := KrakowPiosGovPl{}
	getConfiguration()
	return &api
}
