package main

import (
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/exproletariy/pip-services3-containers-examples/app-aws-lambda-example-go/containers"
	"path"
)

func main() {
	app := containers.NewAppExampleLambdaFunction()
	err := app.ReadConfigFromFile("", path.Join("config", "config.yml"), nil)
	if err != nil {
		panic(err)
	}
	lambda.Start(app.GetHandler())
}
