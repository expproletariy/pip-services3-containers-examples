package containers

import (
	"github.com/exproletariy/pip-services3-containers-examples/app-aws-lambda-example-go/build"
	cproc "github.com/pip-services3-go/pip-services3-aws-go/container"
)

type AppExampleLambdaFunction struct {
	cproc.CommandableLambdaFunction
}

func NewAppExampleLambdaFunction() *AppExampleLambdaFunction {
	c := AppExampleLambdaFunction{}
	c.CommandableLambdaFunction = *cproc.NewCommandableLambdaFunction("app-example", "Example of aws lambda container")
	c.AddFactory(build.NewAppExampleServiceFactory())
	return &c
}
