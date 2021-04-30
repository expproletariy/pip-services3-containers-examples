package containers

import (
	"github.com/exproletariy/pip-services3-containers-examples/app-process-container-example-go/build"
	cproc "github.com/pip-services3-go/pip-services3-container-go/container"
	rpcbuild "github.com/pip-services3-go/pip-services3-rpc-go/build"
)

type AppExampleContainer struct {
	cproc.ProcessContainer
}

func NewAppExampleContainer() *AppExampleContainer {
	c := AppExampleContainer{}
	c.ProcessContainer = *cproc.NewProcessContainer("app-example", "Example of process container")
	c.AddFactory(build.NewAppExampleServiceFactory())
	c.AddFactory(rpcbuild.NewDefaultRpcFactory())
	return &c
}
