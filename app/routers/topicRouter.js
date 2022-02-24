const express = require('express');
const router = express.Router();

// Controller & Middleware import
const topicCtrl = require("../controllers/topicController");
const auth = require("../middlewares/AUTH/auth");

const topicCtrl = require("../controllers/topic");


// Routes
router.get("/", auth, topicCtrl.getAllTopics);
router.post("/", auth, topicCtrl.createTopic);
router.get("/:id", auth, topicCtrl.getOneTopic);
router.put("/:id", auth, topicCtrl.modifyTopic);
router.delete("/:id", auth, topicCtrl.deleteTopic);


// Export
module.export = router;