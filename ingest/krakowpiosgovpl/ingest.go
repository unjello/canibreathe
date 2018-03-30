// Package krakowpiosgovpl is an API for downloading air quality measurements
// from http://monitoring.krakow.pios.gov.pl
package krakowpiosgovpl

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"
	"strings"
	"time"
)

// KrakowPiosGovPl is main API interface
type KrakowPiosGovPl struct{}

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
	request.Header.Set("Host", "Host: monitoring.krakow.pios.gov.pl")
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

func getConfiguration() error {
	request, err := newRequest(krakowPiosConfigurationURL)
	if err != nil {
		return err
	}
	response, err := client.Do(request)
	if err != nil {
		return err
	}

	defer response.Body.Close()
	contents, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return err
	}

	resp := krakowPiosConfigurationResponse{}
	err = json.Unmarshal([]byte(contents), &resp)
	if err != nil {
		return err
	}

	fmt.Println(resp)
	return nil
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
