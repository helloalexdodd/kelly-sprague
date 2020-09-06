const nodemailer = require('nodemailer');
const config = require('config');

const user = config.get('username');
const pass = config.get('password');

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
