import { RestService } from 'pip-services3-rpc-nodex';
import { AppExampleController } from '../logic';
import { ConfigParams, Descriptor, IReferences } from 'pip-services3-commons-nodex';

export class AppExampleRestService extends RestService{
    private _controller: AppExampleController;

    public constructor() {
        super();
        this._baseRoute = '/example';
        this._dependencyResolver.put('controller', new Descriptor('app-example', 'controller', 'default', '*', '*'));
    }

    public configure(config: ConfigParams): void {
        super.configure(config);
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired<AppExampleController>('controller');
    }

    private greeting(req, res) {
        let promise = this._controller.greeting(req.query.name);
        this.sendResult(req, res, promise);
    }

    register(): void {
        this.registerRoute('get', '/greeting', null, this.greeting);
    }

}