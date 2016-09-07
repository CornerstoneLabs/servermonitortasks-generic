const spawn = require('child_process').spawn;

module.exports = function (log, error, close, data, command) {
	if (typeof command.options.env === 'undefined') {
		command.options.env = process.env;
	}

	try {
		const ls = spawn(command.command, command.parameters, command.options);

		ls.stdout.on('data', (data) => {
			console.log(`stdout: ${data}`);

			log(data);
		});

		ls.stderr.on('data', (data) => {
			console.log(`stderr: ${data}`);

			error(data);
		});

		ls.on('error', function (err) {
			console.log(`stderr: ${err}`);
			error(err);
		});

		ls.on('close', (code) => {
			console.log(`child process exited with code ${code}`);

			close(code);
		});
	} catch (e) {
		error(e);
	}
}
