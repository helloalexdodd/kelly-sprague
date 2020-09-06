const { joiValidator } = require('./formValidation');
const mailer = require('./mailer');

export default (req, res) => {
  if (req.method === 'POST') {
    const { error } = joiValidator(req.body);
    console.log(error);
    if (error) return res.status(404).send(error.details[0].message);

    const { name, email, message } = req.body;

    mailer({ email, name, text: message })
      .then(() => {
        res.send({ msg: 'success' });
      })
      .catch((err) => {
        res.send(err);
      });
  }
};
