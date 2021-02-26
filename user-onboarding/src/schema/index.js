import * as yup from 'yup';
const formSchema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.required('Username is required.')
		.min(3, 'Username must be at least 3 characters long.'),
	email: yup.string().email().required('Email is required.'),
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Your password must be at least 8 characters long.'),
	// passwordConfirmation: yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
	agreeTOS: yup
		.boolean()
		.oneOf([true], 'Please accept our terms of service to continue.')
		.required('Please accept our terms of service to continue.'),
});

export default formSchema;
