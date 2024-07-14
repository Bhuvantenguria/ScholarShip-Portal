
const nodemailer = require('nodemailer');
const User = require('./model/userSchemaa'); 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sharmadev13579@gmail.com', 
    pass: 'cfiimbhksvmvqihq', 
  },
});

const sendScholarshipNotification = (userEmail, scholarshipDetails) => {
    console.log("commed");
  const mailOptions = {
    from: 'sharmadev13579@gmail.com', 
    to: userEmail, 
    subject: 'New Scholarship Added!', 
    text: `A new scholarship has been added:\n\nName: ${scholarshipDetails.name}\nDescription: ${scholarshipDetails.description}\nApply here`,
    html: `
      <h1>New Scholarship Added!</h1>
      <p><strong>Name:</strong> ${scholarshipDetails.name}</p>
      <p><strong>Description:</strong> ${scholarshipDetails.description}</p>
      <p><a href="${scholarshipDetails.link}">Apply here</a></p>
    `,
    
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
};


const AcceptOrRejectMail  = (userEmail, status) => {
    console.log("commed");
  const mailOptions = {
    from: 'sharmadev13579@gmail.com',
    to: userEmail,
    subject: 'New Scholarship Added!', 
    text: `Your scholarship is :\n\nName: ${status}\nDescription: ${status}\nApply here`,
    html: `
      <h1>New Scholarship Added!</h1>
      <p><strong>Name:</strong> ${status}</p>
      <p><strong>Description:</strong> ${status}</p>
      <p><a href="${status}">Apply here</a></p>
    `,
    
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
  };
  


const userEmail = 'bhuvantenguria37@gmail.com';
const scholarshipDetails = {
  name: ' New Scholarship',
  description: 'This scholarship is for students with outstanding academic performance.',
  link: 'http://example.com/scholarship-apply',
};

sendScholarshipNotification(userEmail, scholarshipDetails);
const bro = async () => {
    try {
      const users = await User.find({}, 'email');
      console.log("Hello Guys, mail sending initiated...");
  
      users.forEach(user => {
        sendScholarshipNotification(user.email, scholarshipDetails);
      });
  
      console.log("Mail sent to all users.");
    } catch (error) {
      console.error("Error sending emails:", error);
    }
  };
  
 module.exports = {bro , AcceptOrRejectMail};
