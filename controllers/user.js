const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send({ msg: "Something went wrong!" });
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      return res.status(200).json(user);
    }
    res.status(400).send("Wrong email or password");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const { f_name, l_name, email, password } = req.body;
    if (!(f_name && l_name && email && password)) return res.status(400).send({msg: "Something went wrong!",});
      const userExists = await User.findOne({ email });
      if (userExists)
        return res.status(409).send({ msg: "You already have an account." });
      const encPas = await bcrypt.hash(password, 10);
      const user = await User.create({
        f_name,
        l_name,
        email: email.toLowerCase(),
        password: encPas,
      });
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};
