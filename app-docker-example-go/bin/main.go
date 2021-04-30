package main

import (
	"github.com/exproletariy/pip-services3-containers-examples/app-process-container-example-go/containers"
	"os"
	"path"
)

func main() {
	app := containers.NewAppExampleContainer()
	app.SetConfigPath(path.Join("config", "config.yml"))
	app.Run(os.Args)
}
