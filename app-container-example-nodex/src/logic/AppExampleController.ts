import { CommandSet } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { DependencyResolver } from 'pip-services3-commons-nodex';
import { IConfigurable } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { AppExampleCommandSet } from "./AppExampleCommandSet";

export class AppExampleController implements  IConfigurable, IReferenceable {
    private _defaultName = 'Pip User'
    private _commandSet: AppExampleCommandSet;

    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.default_name', 'Pip User'
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(AppExampleController._defaultConfig);

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
        this._defaultName = config.getAsStringWithDefault('default_name', this._defaultName);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new AppExampleCommandSet(this);
        return this._commandSet;
    }

    public async greeting(name: string): Promise<string> {
        if (!name || name?.length === 0) {
            name = this._defaultName
        }
        return `Hello, ${name}!`;
    }
}