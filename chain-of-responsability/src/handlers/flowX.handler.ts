import { AbstractHandler } from '../abstract.handler';

export class FlowXHandler extends AbstractHandler {
    public handle(request: string, value: boolean): string {
        if (request === 'flagX' && value) {
            return `Fazer o flow X...`;
        }
        return super.handle(request, value);
    }
}