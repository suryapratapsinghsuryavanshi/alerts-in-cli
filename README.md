# Alerts-In-CLI
This module helps you to manage your colorful alerts in Terminal. And they also care about the alerts are shown on any of the platforms like Windows, Linux, or Mac also.

It throws the message without blocking any other process so you can use it anywhere.

![](static/alerts-in-cli.svg)

## Installation
```bash
npm install alerts-in-cli

# or

yarn add alerts-in-cli
```

## Usage

### Options Types
- success
- info
- warning
- error
- custom `name`

### Type success
```javascript
const alerts = require('alerts-in-cli');

alerts({
	type: 'success',
	msg: 'Success alert'
});
```

### Type info
```javascript
const alerts = require('alerts-in-cli');

alerts({
	type: 'info',
	msg: 'Info alert'
});
```

### Type warning
```javascript
const alerts = require('alerts-in-cli');

alerts({
	type: 'warning',
	msg: 'Warning alert'
});
```

### Type error
```javascript
const alerts = require('alerts-in-cli');

alerts({
	type: 'error',
	msg: 'Error alert'
});
```

### Type custom
In the name parameter, you can enter the text of your choice, which will appear in the colored bullet, you can use it with any type. It is not mandatory to use `name` they are optional for use.

```javascript
const alerts = require('alerts-in-cli');

alerts({
	type: 'success',
	msg: 'File saved!',
	name: 'Done'
});
```
