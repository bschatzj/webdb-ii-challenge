const server = require('./server');

const port = 6000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));