package containers

import (
	"github.com/exproletariy/pip-services3-containers-examples/app-container-example-go/build"
	cproc "github.com/pip-services3-go/pip-services3-container-go/container"
	rpcbuild "github.com/pip-services3-go/pip-services3-rpc-go/build"
)

type AppExampleContainer struct {
	cproc.Container
}

func NewAppExampleContainer() *AppExampleContainer {
	c := AppExampleContainer{}
	c.Container = *cproc.NewContainer("app-example", "Example of simple container")
	c.AddFactory(build.NewAppExampleServiceFactory())
	c.AddFactory(rpcbuild.NewDefaultRpcFactory())
	return &c
}
