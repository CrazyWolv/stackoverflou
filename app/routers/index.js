const express = require('express');

// Routers import
const messageRouter = require('./messageRouter');
const topicRouter = require('./topicRouter');
const userRouter = require('./userRouter');

const router = express.Router();


// Export
module.exports = router;