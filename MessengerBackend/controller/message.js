const MessageModel = require("../models/Message");
const addMessage = async (req, res, next) => {
  const newMessge = new MessageModel(req.body);

  try {
    const Message = await newMessge.save();
    res.status(200).json(Message);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getMessage = async (req, res, next) => {
  try {
    const messages = await MessageModel.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { addMessage, getMessage };
