"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFlags = void 0;
const chalk_1 = __importDefault(require("chalk"));
function verifyFlags(handler) {
    const flags = {
        mfa: false,
        logon: true,
        secUpdate: true,
        flagX: false,
        flagY: true,
        flagZ: false,
    };
    for (const [key, value] of Object.entries(flags)) {
        const result = handler.handle(key, value);
        if (result) {
            console.log(chalk_1.default.blue(`${result}`));
        }
        else {
            console.log(chalk_1.default.red(`A flag de ${key} não foi setada.`));
        }
    }
}
exports.verifyFlags = verifyFlags;
