require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGO_URL;
const app = express();
app.use(cors());

app.use(express.json());

const conversationRoutes = require("./routes/conversation");
const MessageRoutes = require("./routes/messages");
const usersRoutes = require("./routes/users");

app.use("/api/conversation", conversationRoutes);
app.use("/api/message", MessageRoutes);
app.use("/api/users", usersRoutes);
app.use("/", (req, res) => {
  res.send("Hi");
});
mongoose.connect(
  MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    app.listen(PORT, () => {
      console.log(`Api Runing on ${PORT}`);
    });
  }
);
