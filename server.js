const path = require('path');
const express = require('express');
const server = express();

server.use(express.static(path.resolve('./dist/ngx-crud-playground')));
server.get('/*', (request, response) =>
{
	response.sendFile(path.resolve('./dist/ngx-crud-playground/index.html'));
});
if (process.env.PORT)
{
	server.listen(process.env.PORT, () =>
	{
		console.log(':' + process.env.PORT);
	});
}
