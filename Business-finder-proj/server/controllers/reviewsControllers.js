const Business = require("../models/business.model.js");

const addNewReview = async (req, res) => {
  const { id } = req.params;
  const { userId, comment } = req.body;
  try {
    const business = await Business.findById(id);
    business.reviews.push({ userId, comment });
    business.save();
    res.status(201).send(business);
  } catch (err) {
    if (err.message === "Cannot read properties of null (reading 'reviews')") {
      return res.status(404).send("could not find a business with that id!");
    }
    res.status(500).send(err.message);
  }
}; //✅
//send 201, 404, 500

const getBusinessReviews = async (req, res) => {
  const { id } = req.params;
  try {
    const business = await Business.findById(id);
    return res.send(business.reviews);
  } catch (err) {
    if (err.message === "Cannot read properties of null (reading 'reviews')") {
      return res.status(404).send("could not find business with that id!");
    }
    res.status(500).send(err.message);
  }
}; //✅
// send 200, 404, 500

module.exports = {
  addNewReview,
  getBusinessReviews,
};
