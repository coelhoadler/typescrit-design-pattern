import { Facade } from './facade';

function clientCode(facade: Facade) {
    console.log(facade.operation());
}

const facade = new Facade();
clientCode(facade);