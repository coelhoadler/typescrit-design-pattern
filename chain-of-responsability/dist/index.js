"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const securityUpdate_handler_1 = require("./handlers/securityUpdate.handler");
const mfa_handler_1 = require("./handlers/mfa.handler");
const logon_handler_1 = require("./handlers/logon.handler");
const flags_controller_1 = require("./flags.controller");
const flowX_handler_1 = require("./handlers/flowX.handler");
const flowY_handler_1 = require("./handlers/flowY.handler");
const flowZ_handler_1 = require("./handlers/flowZ.handler");
const securityUpdate = new securityUpdate_handler_1.SecurityUpdateHandler();
const mfa = new mfa_handler_1.MFAHandler();
const logon = new logon_handler_1.LogonHandler();
const flowX = new flowX_handler_1.FlowXHandler();
const flowY = new flowY_handler_1.FlowYHandler();
const flowZ = new flowZ_handler_1.FlowZHandler();
securityUpdate
    .setNext(mfa)
    .setNext(logon)
    .setNext(flowX)
    .setNext(flowY)
    .setNext(flowZ);
console.log('==> Chain: Atualização de Segurança > MFA > Logon > FlowX > FlowY > Flow Z <=== \n');
flags_controller_1.verifyFlags(securityUpdate);
console.log('');
