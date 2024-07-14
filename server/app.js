const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  session({
    secret: "tcet",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  })
);
const db = 'mongodb://localhost:27017/scholarProj'


mongoose
  .connect(db)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log("error : ", err));

app.use(express.json());
app.use(cors());
const User = require("./model/userSchemaa");
app.use(require("./router/auth.js"));
const Admin = require("./model/adminSchema.js");
app.use(require("./router/adminAuth.js"));

const Scholarships = require("./model/scholarshipModel.js");
app.use(require("./router/scholarshipAuth.js"));
const Applications = require("./model/applicationSchema.js");
app.use(require("./router/applicationsAuth.js"));
const middleware = (req, res, next) => {
  console.log("hello middleware");
  next();
};

const requireLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
    console.log("Login require");
  } else {
    next();
  }
};


app.listen(8080, () => {
  console.log("Server is running at port 8080");
});

console.log("ok");
