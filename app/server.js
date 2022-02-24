// Import
require('dotenv').config();
const http = require('http');
const app = require('./app');


// parse url encoded objects- data sent through the url
app.use(urlencoded({ extended: true})) 

// create a server
const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
    console.log(`Ready`);
});
