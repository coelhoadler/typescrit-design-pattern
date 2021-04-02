"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityUpdateHandler = void 0;
const abstract_handler_1 = require("../abstract.handler");
/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
class SecurityUpdateHandler extends abstract_handler_1.AbstractHandler {
    handle(request, value) {
        if (request === 'secUpdate' && value) {
            return `Fazer o fluxo de de Atualização de Segurança...`;
        }
        return super.handle(request, value);
    }
}
exports.SecurityUpdateHandler = SecurityUpdateHandler;
