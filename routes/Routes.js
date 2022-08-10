const express = require("express");
const User = require("../models/User");
const router = express.Router();
//get all users
router.get("/", async (req, res) => {
  try {
    const getUsers = await User.find();
    res.send(getUsers);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});
//add a new user
router.post("/", async (req, res) => {
  try {
    const findUser = User.findOne({ name: req.body.name });
    if (findUser) {
      return res.status(400).send({ msg: "user already existed" });
    }
    const addUser = new User({ ...req.body });
    await addUser.save();
    res.send({ addUser, msg: "successeflly adding" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
//edit user by id
router.put("/:id"),
  async (req, res) => {
    try {
      const editUser = await User.updateOne(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      const updateUser = await User.find({ _id: req.params.id });

      res.send({ updateUser });
    } catch (error) {
      consolelog(error);
      res.status(400).send(error.message);
    }
  };
//remove a user by id
router.delete("/:id", async (req, res) => {
  try {
    const removeUser = await User.deleteOne({ _id: req.params.id });

    return res.send({ removeUser });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;
