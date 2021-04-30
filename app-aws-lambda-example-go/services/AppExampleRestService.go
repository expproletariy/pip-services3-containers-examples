package services

import (
	"github.com/exproletariy/pip-services3-containers-examples/app-aws-lambda-example-go/logic"
	"net/http"

	crefer "github.com/pip-services3-go/pip-services3-commons-go/refer"
	rpc "github.com/pip-services3-go/pip-services3-rpc-go/services"
)

type AppExampleRestService struct {
	*rpc.RestService
	controller *logic.AppExampleController
}

func NewAppExampleRestService() *AppExampleRestService {
	c := AppExampleRestService{}
	c.RestService = rpc.InheritRestService(&c)
	c.BaseRoute = "/example"
	c.DependencyResolver.Put("controller", crefer.NewDescriptor("app-example", "controller", "*", "*", "1.0"))
	return &c
}

func (c *AppExampleRestService) SetReferences(references crefer.IReferences) {

	c.RestService.SetReferences(references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("controller")
	if depErr == nil && depRes != nil {
		c.controller = depRes.(*logic.AppExampleController)
	}
}

func (c *AppExampleRestService) greeting(res http.ResponseWriter, req *http.Request) {
	name := req.URL.Query().Get("name")
	result, err := c.controller.Greeting(name)
	c.SendResult(res, req, result, err)

}

func (c *AppExampleRestService) Register() {
	c.RegisterRoute("get", "/greeting", nil, c.greeting)
}
