"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowXHandler = void 0;
const abstract_handler_1 = require("../abstract.handler");
class FlowXHandler extends abstract_handler_1.AbstractHandler {
    handle(request, value) {
        if (request === 'flagX' && value) {
            return `Fazer o flow X...`;
        }
        return super.handle(request, value);
    }
}
exports.FlowXHandler = FlowXHandler;
