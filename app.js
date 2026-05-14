const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello ECS Deployment');
    res.end();
});

server.listen(3000);