import { AbstractHandler } from '../abstract.handler';

export class FlowYHandler extends AbstractHandler {
    public handle(request: string, value: boolean): string {
        if (request === 'flagY' && value) {
            return `Fazer o flow Y...`;
        }
        return super.handle(request, value);
    }
}