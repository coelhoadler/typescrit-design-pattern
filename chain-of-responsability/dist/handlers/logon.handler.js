"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogonHandler = void 0;
const abstract_handler_1 = require("../abstract.handler");
class LogonHandler extends abstract_handler_1.AbstractHandler {
    handle(request, value) {
        if (request === 'logon' && value) {
            return `Fazer o fluxo de Logon Blindado...`;
        }
        return super.handle(request, value);
    }
}
exports.LogonHandler = LogonHandler;
