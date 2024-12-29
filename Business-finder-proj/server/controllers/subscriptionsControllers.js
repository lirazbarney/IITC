const Business = require("../models/business.model.js");

const addSubscription = async (req, res) => {
  const businessID = req.params.id;
  const { userID } = req.body;
  try {
    const business = await Business.findById(businessID);
    if (business.owner.toString() === userID) {
      return res
        .status(401)
        .send("owner can not subscribe to his own business");
    }
    const isAlreadyIn =
      business.subscribers.findIndex((id) => {
        return id.toString() === userID;
      }) >= 0;

    if (isAlreadyIn) {
      return res
        .status(400)
        .send("user already registered as a subscriber to this business");
    } else {
      business.subscribers.push(userID);
      business.save();
      res.status(201).send({ message: "subscription was successfully added" });
    }
  } catch (err) {
    if (
      err.message === "Cannot read properties of null (reading 'subscribers')"
    ) {
      res.status(404).send("could not find business with this id!");
    } else {
      res.status(500).send("server error!");
    }
  }
}; //✅
// send 201, 400, 401, 404, 500

const removeSubscription = async (req, res) => {
  const businessID = req.params.id;
  const { userID } = req.body;
  try {
    const business = await Business.findById(businessID);
    const userIndex = business.subscribers.findIndex((id) => {
      return id.toString() === userID;
    });
    if (userIndex >= 0) {
      business.subscribers.splice(userIndex, 1);
      business.save();
      res.send("user deleted as subscriber!");
    } else {
      res.status(400).send("user was not a subscriber to this business");
    }
  } catch (err) {
    if (
      err.message === "Cannot read properties of null (reading 'subscribers')"
    ) {
      return res.status(404).send("could not find business with that ID");
    } else {
      return res.status(500).send(err.message);
    }
  }
}; //✅
//send 200, 400, 404, 500

module.exports = {
  addSubscription,
  removeSubscription,
};
