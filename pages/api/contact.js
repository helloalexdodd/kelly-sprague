const { joiValidator } = require('../../formValidation.js');
const mailer = require('../../mailer');

export default (req, res) => {
  const { error } = joiValidator(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const { name, email, message } = req.body;

  mailer({ email, name, text: message })
    .then(() => {
      res.send({ msg: 'success' });
    })
    .catch((err) => {
      res.send(err);
    });
};
