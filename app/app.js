// Import
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routers");

// Let's use Express
const app = express();



// Database Connection
mongoose
  .connect(process.env.DB_URL, {useNewUrlParser:true})
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("MongoDB Connexion Error"));


// JSONify
app.use(express.json());


// CORS Options
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type'
}));

app.use(router);

// app.listen(process.env.PORT || 3000, () => {
//     console.log('API is ready');
// });

module.exports = app;