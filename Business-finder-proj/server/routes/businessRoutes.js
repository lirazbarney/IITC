const express = require("express");
const {
  getAllBusinesses,
  addNewBusiness,
  updateBusiness,
  deleteBusiness,
} = require("../controllers/businessControllers.js");
const {
  addSubscription,
  removeSubscription,
} = require("../controllers/subscriptionsControllers.js");
const {
  addNewReview,
  getBusinessReviews,
} = require("../controllers/reviewsControllers.js");
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

//! Subscriptions
// POST http://localhost:3000/api/v1/businesses/:id/subscribe
router.post("/:id/subscribe", addSubscription); //✅

// DELETE http://localhost:3000/api/v1/businesses/:id/unsubscribe
router.delete("/:id/unsubscribe", removeSubscription); //✅

//! Reviews
// POST http://localhost:3000/api/v1/businesses/:id/review
router.post("/:id/review", addNewReview); //✅

// GET http://localhost:3000/api/v1/businesses/:id/reviews
router.get("/:id/reviews", getBusinessReviews); //✅

module.exports = router;
