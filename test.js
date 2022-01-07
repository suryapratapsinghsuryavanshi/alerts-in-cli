const alerts = require('./index.js');

alerts(); // without any data.

// with type and message.
alerts({
	type: 'error',
	msg: 'Your error!'
});

alerts({
	type: 'success',
	msg: 'Your success!'
});

alerts({
	type: 'success',
	msg: 'Work Finished!',
	name: "Done"
});

alerts({
	type: 'warning',
	msg: 'Your warning!'
});

alerts({
	type: 'warning',
	msg: 'Main mamory overflow!',
	name: "TEST"
});

alerts({
	type: 'info',
	msg: 'Your info!'
});

// `✔️ SUCCESS: All good!`
// `⚠️ WARNING: No problem!`
// `❌ ERROR: code not run successfully.`
// `ℹ INFO: go to line no. 20`
