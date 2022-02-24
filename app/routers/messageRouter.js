const express = require('express');
const router = express.Router();

// Controller import
const messageCtrl = require("../controllers/messageController");

// Routes
router.get("/", auth, messageCtrl.getAllMessages);
router.post("/", auth, messageCtrl.createMessage);
router.get("/:id", auth, messageCtrl.getOneMessage);
router.put("/:id", auth, messageCtrl.modifyMessage);
router.delete("/:id", auth, messageCtrl.deleteMessage);


// Export
module.export = router;