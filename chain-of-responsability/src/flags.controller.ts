import { Handler } from './abstract.handler';
import chalk from 'chalk';

export function verifyFlags(handler: Handler) {
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
            console.log(chalk.blue(`${result}`));
        } else {
            console.log(chalk.red(`A flag de ${key} não foi setada.`));
        }
    }
}
