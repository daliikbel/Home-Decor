const User = require("../models/user.schema");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        telephoneNumber,
        userType,
      } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
      }

      const emailExist = await User.findOne({ email: email });
      if (emailExist) {
        return res.status(400).json("Email already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        telephoneNumber,
        userType,
      });

      const registeredUser = await newUser.save();

      const payload = {
        id: registeredUser._id,
        role: registeredUser.role,
        userType: registeredUser.userType,
      };

      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: "1d",
      });

      return res.status(200).json({
        token: accessToken,
        user: {
          userType: registeredUser.userType,
        },
      });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json(error);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const existUser = await User.findOne({ email });
      if (!existUser) {
        return res.status(404).json("Email not found");
      }

      const passwordMatch = await bcrypt.compare(password, existUser.password);
      if (!passwordMatch) {
        return res.status(400).json("Wrong password");
      }

      const payload = {
        id: existUser._id,
        role: existUser.role,
        userType: existUser.userType,
      };

      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: "1d",
      });

      console.log({
        token: accessToken,
        user: {
          userType: existUser.userType,
        },
      });

      res.json({ token: accessToken, user: payload });
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal server error");
    }
  },

  getMe: async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findOne({ _id: userId }).select({ password: 0 });

      return res.status(200).json(user);
    } catch (error) {
      console.log("error", error);
      return res.status(500).json(error);
    }
  },
};

module.exports = userCtrl;
