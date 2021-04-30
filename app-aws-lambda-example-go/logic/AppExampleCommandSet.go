package logic

import (
	ccmd "github.com/pip-services3-go/pip-services3-commons-go/commands"
	cconv "github.com/pip-services3-go/pip-services3-commons-go/convert"
	"github.com/pip-services3-go/pip-services3-commons-go/run"
	cvalid "github.com/pip-services3-go/pip-services3-commons-go/validate"
)

type AppExampleCommandSet struct {
	ccmd.CommandSet
	controller *AppExampleController
}

func NewAppExampleCommandSet() *AppExampleCommandSet {
	c := &AppExampleCommandSet{
		CommandSet: *ccmd.NewCommandSet(),
		controller: NewAppExampleController(),
	}

	return c
}

func (c *AppExampleCommandSet) greetingCommand() ccmd.ICommand {
	return ccmd.NewCommand(
		"greeting",
		cvalid.NewObjectSchema().
			WithRequiredProperty("name", cconv.String),
		func(correlationId string, args *run.Parameters) (interface{}, error) {
			name := args.GetAsString("name")
			return c.controller.Greeting(name)
		},
	)
}
