var spawn = require("./spawn.js");

var command = {
	command: 'df',
	parameters: ['-h'],
	options: {
		cwd: ''
	}
};

var Task = {
	task: function (log, error, close, data) {
		spawn(log, error, close, data, command);
	}
};

module.exports = Task;