/**
 * alerts-in-cli
 *
 * Cross platform alerts in the terminal
 * work on both windows and linux as well as mac os also
 * Alerts: error, warning, success, info
 *
 * @author Suryapratap Singh Suryavanshi <suryprtaps@gmail.com>
 */

const chalk = require('chalk');
const sym = require('log-symbols');

// color items
const success = chalk.green;
const successInverse = success.inverse;
const error = chalk.red;
const errorInverse = error.inverse;
const warning = chalk.keyword(`orange`);
const warningInverse = warning.inverse;
const info = chalk.blue;
const infoInverse = info.inverse;

module.exports = options => {
	const defaultOption = {
		type: `error`,
		msg: `You forgot to define all options.`,
		name: ``
	};

	const finalOption = { ...defaultOption, ...options };

	const {type, msg, name} = finalOption;

	const finalName = name ? name : type.toUpperCase();

	switch(type) {
		case "success":
			console.log(`\n${sym.success}  ${successInverse(` ${finalName} `)} ${success(msg)}\n`);
			break;
		case "warning":
			console.log(`\n${sym.warning}  ${warningInverse(` ${finalName} `)} ${warning(msg)}\n`);
			break;
		case "info":
			console.log(`\n${sym.info}  ${infoInverse(` ${finalName} `)} ${info(msg)}\n`);
			break;
		default:
			console.log(`\n${sym.error}  ${errorInverse(` ${finalName} `)} ${error(msg)}\n`);
	}
};
