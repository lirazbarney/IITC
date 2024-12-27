const Business = require("../models/business.model.js");

const getAllBusinesses = async (req, res) => {
  try {
    const result = await Business.find();
    res.send(result);
  } catch (err) {
    res.status(500).send("sever error");
  }
}; //✅

const addNewBusiness = async (req, res) => {
  const { name, description, category, owner } = req.body;
  if (!name || !description || !category) {
    return res.status(400).send("please fill all the fields");
  }
  try {
    const newBusiness = { name, description, category, owner };
    const result = await Business.create(newBusiness);
    res
      .status(201)
      .send({ message: "New Business was successfully created!", result });
  } catch (err) {
    res.status(500).send(err.message);
  }
}; //✅

const updateBusiness = async (req, res) => {
  const { id } = req.params;
  const { name, description, category } = req.body;
  try {
    const result = await Business.findByIdAndUpdate(
      id,
      {
        name,
        description,
        category,
      },
      { new: true }
    );
    if (result) {
      return res.send(result);
    } else {
      return res.status(404).send("business does not exist");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("sever error");
  }
}; //✅

const deleteBusiness = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Business.findByIdAndDelete(id);
    if (result) {
      return res.send({ result, message: "business was deleted!" });
    } else {
      return res.status(404).send("business does not exist");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("server Error");
  }
}; //✅

module.exports = {
  getAllBusinesses,
  addNewBusiness,
  updateBusiness,
  deleteBusiness,
};
