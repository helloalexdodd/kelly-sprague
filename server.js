const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 4000;

const { joiValidator, validate } = require('./formValidation');
const mailer = require('./mailer');

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.post('/api/contact', validate(joiValidator), (req, res) => {
    const { name, email, message } = req.body;

    mailer({ email, name, text: message })
      .then(() => {
        res.send({ msg: 'success' });
      })
      .catch((err) => {
        res.send(err);
      });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> App listening on port ${PORT}...`);
  });
});
