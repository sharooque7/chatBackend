const Conversation = require("../models/Conversation");
const newConversation = async (req, res, next) => {
  console.log(req.body);
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllcovo = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    console.log(conversation);
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { newConversation, getConversation, getAllcovo };
