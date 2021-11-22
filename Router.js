const express = require("express");
const model = require("./model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = await model.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json({ message: "created successfully", data });
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await model.findById(req.params.id);
    res.status(200).json({ message: "successfully gotten", data });
  } catch (err) {
    res.status(404).json({ message: "error found while trying to get" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await model.find();
    res.status(200).json({ message: "successfully gotten all" });
  } catch (err) {
    res.status(404).json({ message: "error while trying to get all" });
  }
});

router.patch("/", async (req, res) => {
  try {
    const details = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      passwod: req.body.password,
    };
    const data = await model.findByIdAndUpdate(req.params.id, details);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.delete("/", async (req, res) => {
  try {
    const data = await model.findByIdAndRemove(req.paramsms.id, req.body);
    res.status(200).json({ message: "deleted successfully" });
  } catch (err) {
    res.status(404).json(err.message);
  }
});

module.exports = router;
