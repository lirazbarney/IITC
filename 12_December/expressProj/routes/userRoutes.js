const express = require("express");

const router = express();

router.get("/", (req, res) => {
    res.send("/users/")
})
router.get("/login", (req, res) => {
    res.send("/users/login")
})
router.get("/register", (req, res) => {
    res.send("/users/register")
})

module.exports = router;