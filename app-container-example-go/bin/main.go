package main

import (
	"fmt"
	"github.com/exproletariy/pip-services3-containers-examples/app-container-example-go/containers"
	"path"
	"sync"
)

func main() {
	shutdown := make(chan bool, 1)
	defer close(shutdown)

	var wg sync.WaitGroup
	wg.Add(2)

	fmt.Println("To shutdown the service press eny key...")

	go func(sig chan<- bool, wg *sync.WaitGroup) {
		defer wg.Done()

		container := containers.NewAppExampleContainer()
		err := container.ReadConfigFromFile("", path.Join("config", "config.yml"), nil)
		if err != nil {
			fmt.Println(err)
			return
		}

		err = container.Open("")
		if err != nil {
			fmt.Println(err)
			return
		}

		<-shutdown
		err = container.Close("")
		if err != nil {
			fmt.Println(err)
			return
		}

	}(shutdown, &wg)

	go func(sig chan bool, wg *sync.WaitGroup) {
		defer wg.Done()
		var input string
		_, _ = fmt.Scanf("%s", input)
		shutdown <- true
	}(shutdown, &wg)

	wg.Wait()
	fmt.Println("Container closed")
}
