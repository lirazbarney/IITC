const express = require("express");
const {
  getUsers,
  getRandomUser,
  getSpecificUser,
} = require("../controllers/usersController");
const router = express.Router();

//GET users/random
router.get("/random", getRandomUser);

//GET users/:id
router.get("/:id", getSpecificUser);

//GET users/
router.get("/", getUsers);

module.exports = router;
