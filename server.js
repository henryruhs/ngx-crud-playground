const express = require('express');
const server = express();
const compression = require('compression');
const path = require('path');
const os = require('os');

server.use(compression());
server.use(express.static(path.resolve('./dist/ngx-crud-playground')));
server.get('*', (request, response) =>
{
	response.sendFile(path.resolve('./dist/ngx-crud-playground/index.html'));
});
if (process.env.PORT)
{
	server.listen(process.env.PORT, () =>
	{
		process.stdout.write(':' + process.env.PORT + os.EOL);
	});
}
