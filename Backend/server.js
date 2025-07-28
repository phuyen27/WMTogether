import config from './src/utils/config.js';
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});


server.listen(config.server.PORT, config.server.HOST, () => {
    console.log(`Server running at http://${config.server.HOST}:${config.server.PORT}/`);
});
