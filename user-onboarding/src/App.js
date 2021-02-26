import React, { useState, useEffect } from 'react';
import Form from './Form';
import UserList from './UserList';
import * as yup from 'yup';
import './App.css';
import axios from 'axios';
import formSchema from './schema';

const initialFormState = {
	name: '',
	email: '',
	password: '',
	agreeTOS: false,
};

const initialFormErrors = {
	name: '',
	email: '',
	password: '',
	agreeTOS: '',
};

const initialUsers = [];
const initialDisabled = true;

function App() {
	const [userList, setUserList] = useState(initialUsers);
	const [formState, setFormState] = useState(initialFormState);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const handleChange = (name, value) => {
		yup
			.reach(formSchema, name)
			.validate(value)
			.then(() => {
				setFormErrors({ ...formErrors, [name]: '' });
			})
			.catch((err) => {
				setFormErrors({ ...formErrors, [name]: err.errors });
			});
		setFormState({
			...formState,
			[name]: value,
		});
	};
	const handleSubmit = () => {
		const newUser = {
			name: formState.name.trim(),
			email: formState.email.trim(),
			password: formState.password.trim(),
		};
		postUser(newUser);
	};

	const postUser = (newUser) => {
		axios
			.post('https://reqres.in/api/users', newUser)
			.then((res) => {
				console.log('res: ', res);
				setUserList([...userList, res.data]);
				console.log('userList: ', userList);
				setFormState(initialFormState);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		formSchema.isValid(formState).then((valid) => setDisabled(!valid));
		// console.log('disabled: ', disabled);
	}, [formState, disabled]);

	return (
		<div className='app'>
			<div className='.app-container'>
				App
				<Form
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					formState={formState}
					formErrors={formErrors}
					disabled={disabled}
				/>
				<UserList userList={userList} />
			</div>
		</div>
	);
}

export default App;
