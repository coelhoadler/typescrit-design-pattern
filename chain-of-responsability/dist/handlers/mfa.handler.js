"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MFAHandler = void 0;
const abstract_handler_1 = require("../abstract.handler");
class MFAHandler extends abstract_handler_1.AbstractHandler {
    handle(request, value) {
        if (request === 'mfa' && value) {
            return `Fazer o fluxo de MFA...`;
        }
        return super.handle(request, value);
    }
}
exports.MFAHandler = MFAHandler;
