const User = require('./user.models');

exports.registerUser = async (req, res) => {
  try {
    const user = new User({
      uID: req.body.uID,
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
    });
    const savedUser = await user.save();
    res.status(201).send({
      user: savedUser,
      message: 'User registered in database',
    });
  } catch (err) {
    res.status(400).send(err);
    //res.status(400).json({ message: err.message });
  }
};

exports.findUser = async (req, res) => {
  try {
    const user = req.params.uID;
    const targetUser = await User.findOne({
      uID: user,
    });
    if (targetUser) {
      res.status(200).send({
        user: targetUser,
      });
    } else {
      res.status(200).send('Please register card');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.topUp = async (req, res) => {
  try {
    const user = req.body.uID;
    const amount = req.body.amount;
    let targetUser = await User.findOne({
      uID: user,
    });
    if (!targetUser) {
      res.status(200).send(`User not found`);
    } else {
      targetUser.balance = amount + targetUser.balance;
      const response = await targetUser.save();
      res.status(200).send(`New balance: £${response.balance}`);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
