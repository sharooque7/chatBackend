const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  console.log(req.body);
  try {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    console.log(req.body);
    const user = new UserModel(req.body);
    const data = await user.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  //   console.log(req.body);
  //   console.log(email, password);
  try {
    const user = await UserModel.findOne({ email: email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(password, user.password);
    console.log(validPassword);

    !validPassword && res.status(400).json("wrong password");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ user, token: token });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const Authtesting = (req, res, next) => {
  console.log(req.body);
  try {
    res.status(200).json("hello");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { register, login, getAllUsers, Authtesting };
