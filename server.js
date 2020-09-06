const express = require('express');
const next = require('next');
const transporter = require('./transporter');
const config = require('config');
const { joiValidator, validate } = require('./formValidation');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 4000;

const user = config.get('username');

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.post('/api/contact', validate(joiValidator), (req, res) => {
    const { name, email, message } = req.body;

    const mail = {
      from: email,
      to: user,
      subject: `New Message from ${name}`,
      text: message,
    };

    transporter.sendMail(mail, (err) => {
      if (err) {
        res.status(400).send({ msg: 'fail' });
      } else {
        res.send({ msg: 'success' });
      }
    });
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> App listening on port ${PORT}...`);
  });
});
