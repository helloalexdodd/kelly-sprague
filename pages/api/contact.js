export default (req, res) => {
  const { name, email, message } = req.body;

  mailer({ email, name, text: message })
    .then(() => {
      res.send({ msg: 'success' });
    })
    .catch((err) => {
      res.send(err);
    });
};
