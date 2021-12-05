const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`server is listen on: ${process.env.PORT}`)
});