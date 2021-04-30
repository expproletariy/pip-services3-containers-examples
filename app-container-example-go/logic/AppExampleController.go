package logic

import (
	"fmt"
	cconf "github.com/pip-services3-go/pip-services3-commons-go/config"
)

type AppExampleController struct {
	defaultName string
}

func NewAppExampleController() *AppExampleController {
	c := AppExampleController{}
	c.defaultName = "Pip User"
	return &c
}

func (c *AppExampleController) Configure(config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}

func (c *AppExampleController) Greeting(name string) (result string, err error) {
	if name == "" {
		name = c.defaultName
	}
	return fmt.Sprintf("Hello, %s!", name), nil
}
