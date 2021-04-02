"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowZHandler = void 0;
const abstract_handler_1 = require("../abstract.handler");
class FlowZHandler extends abstract_handler_1.AbstractHandler {
    handle(request, value) {
        if (request === 'flagZ' && value) {
            return `Fazer o flow Z...`;
        }
        return super.handle(request, value);
    }
}
exports.FlowZHandler = FlowZHandler;
