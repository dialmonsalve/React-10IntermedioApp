import { useFormik } from 'formik'
import { FormikErrors } from 'formik/dist/types';
import '../styles/styles.css'

interface FormValues {
	firstName:string;
		lastName: string;
		email:string;
}

export const FormikBasicPage = () => {

	const validate = ({firstName, lastName, email}: FormValues) =>{
		const errors:FormikErrors<FormValues> = {};

		if(!firstName){
			errors.firstName = 'Required';
		}else if(firstName.length >= 15){
			errors.firstName = 'Debe ser de 15 caracteres'
		}

		if(!lastName){
			errors.lastName = 'Required';
		}else if(lastName.length >= 10){
			errors.lastName = 'Debe ser de 15 caracteres'
		}

		if (!email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
			errors.email = 'Email invalido';
		}

		return errors
	}
	
	const {handleChange, values, handleSubmit, errors, touched, handleBlur} = useFormik({
		initialValues:{
			firstName:'',
			lastName: '',
			email:'',
		},
		onSubmit:(values) => {
			console.log(values)
		},
		validate

	})

	return (
		<div>
			<h1>Formik Basic Tutorial</h1>

			<form noValidate onSubmit={ handleSubmit } >

				<label htmlFor="firstName">First Name</label>
				<input 
					type="text"
					name='firstName'
					onChange={ handleChange }
					value={ values.firstName }
					onBlur = {handleBlur}
				/>
				{touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

				<label htmlFor="lastName">Last Name</label>
				<input 
					type="text"
					name='lastName'
					onChange={ handleChange }
					value={ values.lastName }
					onBlur = {handleBlur}

				/>
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor="email">First Name</label>
				<input 
					type="email"
					name='email'
					onChange={ handleChange }
					value={ values.email }
					onBlur = {handleBlur}

				/>
				{ touched.email && errors.email && <span>{errors.email}</span>}

				<button type="submit">Submit</button>

			</form>
		</div>
	)
}
