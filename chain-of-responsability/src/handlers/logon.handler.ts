import { AbstractHandler } from '../abstract.handler';

export class LogonHandler extends AbstractHandler {
    public handle(request: string, value: boolean): string {
        if (request === 'logon' && value) {
            return `Fazer o fluxo de Logon Blindado...`;
        }
        return super.handle(request, value);
    }
}