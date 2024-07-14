const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const session = require("express-session");
const db = 'mongodb://localhost:27017/scholarProj'
const Scholarships = require("../model/scholarshipModel.js");
// const mailSend = require("../sendmail.js");


router.post("/createscholarships", async (req, res) => {
  try {
    const {
      scholarshipName,
      deadline,
      amount,
      category,
      eligibility,
      documents,
      description,
    } = req.body;

    if (
      !scholarshipName ||
      !deadline ||
      !amount ||
      !category ||
      !eligibility ||
      !documents
    ) {
      return res
        .status(422)
        .send({ success: false, message: "Please fill all the input fields" });
    }
    const dateObj = new Date(deadline);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDateStr = dateObj.toLocaleDateString("en-US", options);
    const scholarshipExist = await Scholarships.findOne({ scholarshipName });
    if (scholarshipExist) {
      return res
        .status(200)
        .send({ success: false, message: "Scholarship Name already exists" });
    }

    const scholarship = new Scholarships({
      scholarshipName,
      deadline: formattedDateStr,
      amount,
      category,
      eligibility,
      documents,
      description,
    });
    const scholarshipRegister = await scholarship.save();

    if (scholarshipRegister) {
      // mailSend();
      return res.status(201).send({
        success: true,
        message: "Scholarship added Successfully",
        scholarshipRegister,
      });
    }
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({
      success: false,
      message: "Error ",
      error,
    });
  }
});

router.get("/get-scholarships", async (req, res) => {
  try {
    const scholarship = await Scholarships.find({}).limit(50).sort({ timestamp: "-1" });
    res.status(200).send({
      success: true,
      message: "All Scholarships",
      scholarship,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Details",
      error,
    });
  }
});
router.get("/get-scholarships/:category", async (req, res) => {
  try {
    const category = req.params.category
    const scholarship = await Scholarships.find({category}).sort({ timestamp: "-1" });
    res.status(200).send({
      success: true,
      message: `All ${category} Scholarships `,
      scholarship,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Details",
      error,
    });
  }
});

router.get("/scholarship/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const scholarship = await Scholarships.findById(_id);
    if (!scholarship) {
      return res.status(404).send("Scholarship not found");
    } else {
      res.status(200).send({
        success: true,
        message: "Scholarship",
        scholarship,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Details",
      error,
    });
  }
});

router.delete("/get-scholarships/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteScholarship = await Scholarships.findByIdAndDelete(_id);
    if (!deleteScholarship) {
      return res.status(404).send("This scholarship is not available");
    } else {
      res.status(200).send({
        success: true,
        message: "Scholarship Deleted",
        deleteScholarship,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting",
      error,
    });
  }
});

router.put("/get-scholarships/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateScholarship = await Scholarships.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    if (!updateScholarship) {
      return res.status(404).send("This scholarship is not available");
    } else {
      res.status(200).send({
        success: true,
        message: "Scholarship Updated",
        updateScholarship,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Updating",
      error,
    });
  }
});

module.exports = router;