const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  scholarshipName: {
    type: String,
    //require: true
  },
  amount: {
    type: Number,
    //require: true
  },
  category: {
    type: String,
    //require: true
  },
  name: {
    type: String,
    //require: true
  },
  mobile: {
    type: Number,
    //require: true
  },
  email: {
    type: String,
    //require : true
  },
  dob: {
    type: String,
    //require: true
  },
  age: {
    type: Number,
    //require:true
  },
  gender: {
    type: String,
    //require: true
  },
  address: {
    type: String,
    //require: true
  },
  country: {
    type: String,
    //require: true
  },
    timestamp: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Under Process', 'Accepted', 'Rejected'],
    default: "Under Process",
  },
  reason: {
    type: String
  }
});

const Applications = mongoose.model("applications", applicationSchema);

module.exports = Applications;
