const { Message } = require('../models/');

// Retrieve all messages from the database.
exports.getAllMessages = (req, res, next) => {
    Message.find()
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
exports.createMessage = (req, res, next) => {
  
};
// Find a single message with an id
exports.getOneMessage = (req, res, next) => {
    Message.findOne({
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
exports.modifyMessage = (req, res, next) => {
  
};
// Delete a message with the specified id in the request
exports.deleteMessage = (req, res, next) => {
  
};