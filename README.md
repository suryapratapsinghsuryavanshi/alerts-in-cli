# Alerts-In-CLI

This module helps yout to manage your alerts in your CLI. And the also care about your alerts are show any of the platform like Windows, Linux or Mac.

## Installation
```bash
npm install alerts-in-cli

# or

yarn add alerts-in-cli
```

## Usage
```bash
const alerts = require('alerts-in-cli');

# for info
alerts({
	type: 'info',
	msg: 'This is an info message',
});

# for success
alerts({
	type: 'success',
	msg: 'This is a success message',
});

# for warning
alerts({
	type: 'warning',
	msg: 'This is a warning message',
});

# for error
alerts({
	type: 'error',
	msg: 'This is an error message',
});
```
