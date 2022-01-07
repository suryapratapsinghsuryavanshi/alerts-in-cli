const alerts = require('alerts-in-cli');

alerts({
	type: 'success',
	message: 'All good!'
});

// `✔️ SUCCESS: All good!`
// `⚠️ WARNING: No problem!`
// `❌ ERROR: code not run successfully.`
// `ℹ INFO: go to line no. 20`
