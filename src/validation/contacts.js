import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber:Joi.string()
    .pattern(/^\+?\d{12}$/)
    .required()
    .messages({
      'string.pattern.base': 'Номер мае бути з 12 цифр +380XXXXXXXXX',
    }),
  email: Joi.string().email().required().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().min(3).max(20).valid('work', 'home', 'personal').default('personal'),
});

export const updateContactSchema = Joi.object({
 name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string()
    .pattern(/^\+?\d{12}$/)
    .required()
    .messages({
      'string.pattern.base': 'Номер мае бути з 12 цифр +380XXXXXXXXX',
    }),
  email: Joi.string().email().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().min(3).max(20).valid('work', 'home', 'personal'),
});
