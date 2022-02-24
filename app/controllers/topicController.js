const { Topic } = require('../models/');

// Retrieve all messages from the database.
exports.getAllTopics = (req, res, next) => {
    Topic.find()
    .then((topics) => {
      res.status(200).json(topics);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
// Create and Save a new message
exports.createTopic = (req, res, next) => {
  
};
// Find a single message with an id
exports.getOneTopic = (req, res, next) => {
    Topic.findOne({
        _id: req.params.id,
      })
        .then((topic) => {
          res.status(200).json(topic);
        })
        .catch((error) => {
          res.status(404).json({
            error: error,
          });
        });
};
// Update a message by the id in the request
exports.modifyTopic = (req, res, next) => {
  
};
// Delete a message with the specified id in the request
exports.deleteTopic = (req, res, next) => {
  
};
