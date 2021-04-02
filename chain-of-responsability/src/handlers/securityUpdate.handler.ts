import { AbstractHandler } from '../abstract.handler';

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
 export class SecurityUpdateHandler extends AbstractHandler {
    public handle(request: string, value: boolean): string {
        if (request === 'secUpdate' && value) {
            return `Fazer o fluxo de de Atualização de Segurança...`;
        }
        return super.handle(request, value);

    }
}