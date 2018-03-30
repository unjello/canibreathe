package main

import (
	"fmt"

	"./krakowpiosgovpl"
)

func main() {
	api, err := krakowpiosgovpl.New()
	if err != nil {
		panic(err)
	}
	fmt.Println(api.Stations)
}
