// import app.js
const app = require('./app');
const port = 3001
const host = '127.0.0.1'
// create a server
const server = app.listen(port, host, () => {
    console.log(`node server is running!! ${server.address().port}`)
});