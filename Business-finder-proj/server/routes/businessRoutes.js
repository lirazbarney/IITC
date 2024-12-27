const express = require("express");
const {
  getAllBusinesses,
  addNewBusiness,
  updateBusiness,
  deleteBusiness,
} = require("../controllers/businessControllers.js");
const router = express.Router();

//! Business
// GET http://localhost:3000/api/v1/businesses
router.get("/", getAllBusinesses); //✅

// POST http://localhost:3000/api/v1/businesses
router.post("/", addNewBusiness); //✅

// PUT http://localhost:3000/api/v1/businesses/:id
router.put("/:id", updateBusiness); //✅

// DELETE http://localhost:3000/api/v1/businesses/:id
router.delete("/:id", deleteBusiness); //✅

// TODO: handle subscriptions
//! Subscriptions
// POST http://localhost:3000/api/v1/businesses/:id/subscribe
router.post("/:id/subscribe", (req, res) => {
  res.send(`${req.method} ${req.baseUrl}${req.url}`);
});

// DELETE http://localhost:3000/api/v1/businesses/:id/unsubscribe
router.delete("/:id/unsubscribe", (req, res) => {
  res.send(`${req.method} ${req.baseUrl}${req.url}`);
});

// TODO: handle reviews
//! Reviews
// POST http://localhost:3000/api/v1/businesses/:id/review
router.post("/:id/review", (req, res) => {
  res.send(`${req.method} ${req.baseUrl}${req.url}`);
});

// GET http://localhost:3000/api/v1/businesses/:id/reviews
router.get("/:id/reviews", (req, res) => {
  res.send(`${req.method} ${req.baseUrl}${req.url}`);
});

module.exports = router;
