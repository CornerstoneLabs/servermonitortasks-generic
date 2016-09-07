var spawn = require("./spawn.js");

var command = {
	command: 'node',
	parameters: ['-v'],
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