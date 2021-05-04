import {
    ConfigParams,
    DependencyResolver,
    IConfigurable,
    IReferenceable,
    IReferences
} from 'pip-services3-commons-nodex';

export class AppExampleController implements  IConfigurable, IReferenceable {
    private _defaultName = 'Pip User'
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

    public async greeting(name: string): Promise<string> {
        if (!name || name?.length === 0) {
            name = this._defaultName
        }
        return `Hello, ${name}!`;
    }
}