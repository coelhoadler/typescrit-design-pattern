"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowYHandler = void 0;
const abstract_handler_1 = require("../abstract.handler");
class FlowYHandler extends abstract_handler_1.AbstractHandler {
    handle(request, value) {
        if (request === 'flagY' && value) {
            return `Fazer o flow Y...`;
        }
        return super.handle(request, value);
    }
}
exports.FlowYHandler = FlowYHandler;
