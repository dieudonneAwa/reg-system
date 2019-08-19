/* eslint-disable no-param-reassign */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

const { User } = require('../models');


config();

const creatToken = (user) => {
  const token = jwt.sign({
    email: user.email,
    password: user.password,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
  }, process.env.JWT_SECRET);

  return token;
};

module.exports = {
  async signUp(req, res) {
    try {
      req.body.password = await bcrypt.hashSync(req.body.password, 10);
      const user = await User.create(req.body);
      const token = await creatToken(user);
      user.token = token;
      delete user.password;
      console.log(token);
      return res.status(201).json({ status: 'success', data: user });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
