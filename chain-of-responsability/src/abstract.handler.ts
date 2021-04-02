/**
 * The Handler interface declares a method for building the chain of handlers.
 * It also declares a method for executing a request.
 */
 export interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string, value: boolean): string;
}

export abstract class AbstractHandler implements Handler
{
    private nextHandler: Handler | undefined;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        // Returning a handler from here will let us link handlers in a
        // convenient way like this:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    }

    public handle(request: string, value: boolean): any {
        if (this.nextHandler) {
            return this.nextHandler.handle(request, value);
        }

        return null;
    }
}