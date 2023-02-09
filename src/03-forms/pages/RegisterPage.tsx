import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

const user= {
	name: '',
	email:'',
	password1:'',
	password2:'',
}

export const RegisterPage = () => {

	const {email, name, password1, password2, onChange, resetForm, isValidEmail} = useForm(user)

	const onSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	} 

	return (
		<div>
			<h1>Register Page</h1>

			<form noValidate onSubmit={ (e) =>onSubmit} >
				
				<input 
				type="text" 
				placeholder='Name'
				value={name}
				onChange={onChange}
				name="name"
			/>

				<input 
				type="email" 
				placeholder='Password'
				value={email}
				onChange={onChange}
				name="email"
			/>

				<input 
				type="password" 
				placeholder='Password'
				value={password1}
				onChange={onChange}
				name="password1"
			/>

				<input 
				type="password" 
				placeholder='Repeat Password'
				value={password2}
				onChange={onChange}
				name="password2"
			/>

			<button type="submit">Create</button>
			<button type="button" onClick={ resetForm } >Reset</button>
			</form>
		</div>
	)
}
