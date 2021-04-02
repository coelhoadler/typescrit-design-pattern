"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractHandler = void 0;
class AbstractHandler {
    setNext(handler) {
        this.nextHandler = handler;
        // Returning a handler from here will let us link handlers in a
        // convenient way like this:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    }
    handle(request, value) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request, value);
        }
        return null;
    }
}
exports.AbstractHandler = AbstractHandler;
