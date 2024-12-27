const express = require("express");
const { signup, login, logout } = require("../controllers/authControllers");
const router = express.Router();

// POST http://localhost:3000/api/v1/auth/signup
router.post("/signup", signup); //✅

// POST http://localhost:3000/api/v1/auth/login
router.post("/login", login); //✅

// TODO: doing the logout function
// POST http://localhost:3000/api/v1/auth/logout
router.post("/logout", logout);

module.exports = router;
