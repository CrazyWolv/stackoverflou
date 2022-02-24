const express = require('express');
const router = express.Router();

// Controller import
const userCtrl = require("../controllers/userController");

// Routes
router.post("/login", userCtrl.login);
router.post("/register", userCtrl.register);


// Export
module.export = router;