const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const config = require('config');
const secret = config.get('secret');

exports.register = async (req, res) => {
  const { fullName, email, password, phone, address } = req.body;

  const existantUser = await User.findOne({ email });
  if (existantUser) res.status(409).json({ msg: 'user already exists' });

  try {
    const newUser = new User({
      fullName,
      email,
      password,
      phone,
      address,
    });

    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(password, salt);

    newUser.password = hash;

    const payload = {
      _id: newUser._id,
    };
    let token = jwt.sign(payload, secret);
    await newUser.save();
    res.send({
      token,
      user: {
        _id: newUser,
        fullName: newUser.fullName,
        email: newUser.email,
        password: newUser.password,
        address: newUser.address,
        phone: newUser.phone,
      },
    });
    //res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'wrong informations' });

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: 'wrong informations' });
    const payload = {
      _id: newUser._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        address: user.address,
        phone: user.phone,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.auth = (req, res) => {
  res.send(req.user);
};
