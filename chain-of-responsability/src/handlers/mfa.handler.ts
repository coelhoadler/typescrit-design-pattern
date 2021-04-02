import { AbstractHandler } from '../abstract.handler';

export class MFAHandler extends AbstractHandler {
    public handle(request: string, value: boolean): string {
        if (request === 'mfa' && value) {
            return `Fazer o fluxo de MFA...`;
        }
        return super.handle(request, value);
    }
}