const Joi = require('joi');

const joiValidator = (req) => {
  schema = Joi.object({
    name: Joi.string().required().label('Name'),
    email: Joi.string().required().email(),
    message: Joi.string().required(),
  });
  return schema.validate(req);
};

const validate = (validator) => {
  return (req, res, next) => {
    const { error } = validator(req.body);
    if (error) return res.status(400).send(error);
    next();
  };
};

module.exports = { joiValidator, validate };
