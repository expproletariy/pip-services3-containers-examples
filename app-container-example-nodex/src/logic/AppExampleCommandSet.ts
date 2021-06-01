import { CommandSet } from 'pip-services3-commons-nodex';
import { Command } from 'pip-services3-commons-nodex';
import { ObjectSchema } from 'pip-services3-commons-nodex';
import { ICommand } from 'pip-services3-commons-nodex';
import { TypeCode } from 'pip-services3-commons-nodex';
import { Parameters } from 'pip-services3-commons-nodex';
import { AppExampleController } from './AppExampleController';


export class AppExampleCommandSet extends CommandSet {
    private _logic: AppExampleController

    constructor(logic: AppExampleController) {
        super();
        this._logic = logic;

        this.addCommand(this.greetingCommand());
    }

    private greetingCommand(): ICommand {
        return new Command(
            'greeting',
            new ObjectSchema(true).withOptionalProperty('name', TypeCode.String),
            (correlationId: string, args: Parameters): Promise<string> => {
                const name = args.getAsString('name');
                return this._logic.greeting(name);
            }
        );
    }
}