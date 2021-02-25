import React from 'react';
import './App.css';

export default function Form(props) {
	const { handleSubmit, handleChange, formState, formErrors, disabled } = props;

	const onChange = (e) => {
		const { name, checked, type, value } = e.target;
		const valueToUse = type === 'checkbox' ? checked : value;
		// setFormState({ ...formState, [name]: valueToUse });
		handleChange(name, valueToUse);
		// console.log('state is changing: ', formState);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		handleSubmit();
	};

	return (
		<div className=''>
			<form className='app-form-container' onSubmit={onSubmit}>
				<div className='text-input-container'>
					<label for='name'>Name:</label>
					<input
						name='name'
						type='text'
						placeholder='Type your name...'
						onChange={onChange}
						value={formState.name}
					/>
				</div>
				<div className='text-input-container'>
					<label for='email'>Email:</label>
					<input
						name='email'
						type='email'
						onChange={onChange}
						placeholder='Type your email...'
						value={formState.email}
					/>
				</div>
				<div className='text-input-container'>
					<label for='password'>Password:</label>
					<input
						name='password'
						type='password'
						onChange={onChange}
						placeholder='Type your password...'
						value={formState.password}
					/>
				</div>
				<label>
					<input
						name='agreeTOS'
						type='checkbox'
						onChange={onChange}
						checked={formState.agreeTOS}
					/>
					<a href='#'>I agree to the Terms of Service</a>
				</label>
				<input className='form-submit-btn' type='submit' disabled={disabled} />
				<div className='errors'>
					{/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
					<div>{formErrors.name}</div>
					<div>{formErrors.email}</div>
					<div>{formErrors.password}</div>
					<div>{formErrors.agreeTOS}</div>
					{/* </div> */}
				</div>
			</form>
		</div>
	);
}
