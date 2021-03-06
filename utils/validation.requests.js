import { celebrate, Joi } from 'celebrate'

const creditCardValidateValues = celebrate({
	body: Joi.object().keys({
		CardNumber: Joi.string().required(),
		ExpDate: Joi.string().required(),
		Cvv: Joi.string().required(),
		Amount: Joi.number().required(),
	})
})
export default creditCardValidateValues
