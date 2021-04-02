import { AbstractHandler } from '../abstract.handler';

export class FlowZHandler extends AbstractHandler {
    public handle(request: string, value: boolean): string {
        if (request === 'flagZ' && value) {
            return `Fazer o flow Z...`;
        }
        return super.handle(request, value);
    }
}