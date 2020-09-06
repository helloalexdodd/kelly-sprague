const nodemailer = require('nodemailer');

const user = process.env.username;
const pass = process.env.password;

const transport = {
  host: 'mail.hover.com',
  auth: {
    user,
    pass,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

module.exports = transporter;
