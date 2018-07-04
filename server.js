const http = require('http');
const app = require('./main');

const port = process.env.port || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
