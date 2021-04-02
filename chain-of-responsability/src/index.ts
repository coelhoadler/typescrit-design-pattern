import { SecurityUpdateHandler } from './handlers/securityUpdate.handler';
import { MFAHandler } from './handlers/mfa.handler';
import { LogonHandler } from './handlers/logon.handler';
import { verifyFlags } from './flags.controller';
import { FlowXHandler } from './handlers/flowX.handler';
import { FlowYHandler } from './handlers/flowY.handler';
import { FlowZHandler } from './handlers/flowZ.handler';

const securityUpdate = new SecurityUpdateHandler();
const mfa = new MFAHandler();
const logon = new LogonHandler();
const flowX = new FlowXHandler();
const flowY = new FlowYHandler();
const flowZ = new FlowZHandler();

securityUpdate
    .setNext(mfa)
    .setNext(logon)
    .setNext(flowX)
    .setNext(flowY)
    .setNext(flowZ);

console.log('==> Chain: Atualização de Segurança > MFA > Logon > FlowX > FlowY > Flow Z <=== \n');
verifyFlags(securityUpdate);
console.log('');
