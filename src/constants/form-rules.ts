import { RegisterOptions } from "react-hook-form/dist/types/validator";

export const requiredRule = {
	required: {
		value: true,
		message: 'This field is required'
	}
}

export const passwordRules: RegisterOptions = {
	pattern: {
		value: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),
		message: 'Password must have a length of at least 8 characters. One uppercase, one lowercase, one digit, and one special character.'
	},
	...requiredRule
}

export const emailRules: RegisterOptions = {
	pattern: {
		value: /\S+@\S+\.\S+/,
		message: 'Invalid email format'
	},
	...requiredRule
}
