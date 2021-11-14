const express = require("express");
const router = express.Router();
const messageController = require("../controller/message");
const isAuth = require("../middlewares/auth");

router.post("/", isAuth, messageController.addMessage);

router.get("/:conversationId", isAuth, messageController.getMessage);
module.exports = router;
