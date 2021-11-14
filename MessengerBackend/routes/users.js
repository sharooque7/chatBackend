const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");
const isAuth = require("../middlewares/auth");

router.post("/register", usersController.register);

router.post("/login", usersController.login);

router.get("/all", isAuth, usersController.getAllUsers);

router.post("/test/", usersController.Authtesting);

module.exports = router;
