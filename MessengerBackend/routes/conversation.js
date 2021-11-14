const express = require("express");

const router = express.Router();
const conversationController = require("../controller/conversation");
const isAuth = require("../middlewares/auth");

router.post("/", isAuth, conversationController.newConversation);

router.get("/:userId", isAuth, conversationController.getConversation);

router.post(
  "/find/:firstUserId/:secondUserId",
  isAuth,
  conversationController.getAllcovo
);
module.exports = router;
