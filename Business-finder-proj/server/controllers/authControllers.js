const bcrypt = require("bcrypt");
const User = require("../models/user.model.js");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("please fill all the fields");
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword };
    const result = await User.create(newUser);
    res.status(201).send({ message: "signed up successfully", result });
  } catch (err) {
    if (err.message === "email already exists!") {
      res.status(409).send("email already exists!");
    } else {
      res.status(500).send(err.message);
    }
  }
}; //✅

const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(`from the server: email is ${email} and password is ${password}`);

  if (!email || !password) {
    return res.status(400).send("please fill both email and password!");
  }
  const user = await User.findOne({ email });
  if (user == null) {
    return res.status(404).send("there is no user with that email");
  }
  try {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        throw err;
      }
      if (result) {
        res.send({ message: "logged in successfully!", user });
      } else {
        res.status(401).send("invalid password!");
      }
    });
  } catch (err) {
    res.send(err.message);
  }
}; //✅

// TODO
const logout = async (req, res) => {
  res.send(`${req.method} ${req.baseUrl}${req.url}`);
};

module.exports = {
  login,
  signup,
  logout,
};
