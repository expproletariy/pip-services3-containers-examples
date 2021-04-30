package build

import (
	"github.com/exproletariy/pip-services3-containers-examples/app-process-container-example-go/logic"
	"github.com/exproletariy/pip-services3-containers-examples/app-process-container-example-go/services"
	cref "github.com/pip-services3-go/pip-services3-commons-go/refer"
	cbuild "github.com/pip-services3-go/pip-services3-components-go/build"
)

type AppExampleServiceFactory struct {
	cbuild.Factory
}

func NewAppExampleServiceFactory() *AppExampleServiceFactory {
	c := AppExampleServiceFactory{}
	c.Factory = *cbuild.NewFactory()
	c.RegisterType(
		cref.NewDescriptor("app-example", "controller", "default", "*", "1.0"),
		logic.NewAppExampleController,
	)
	c.RegisterType(
		cref.NewDescriptor("app-example", "service", "http", "*", "1.0"),
		services.NewAppExampleRestService,
	)
	return &c
}
