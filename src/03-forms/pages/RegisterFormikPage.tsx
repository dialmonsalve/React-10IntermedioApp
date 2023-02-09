import { ErrorMessage, Field, Form, Formik, } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'

export const RegisterFormikPage = () => {

	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={(values) => {
					console.log(values)
				}}
				validationSchema={
					Yup.object({
						name: Yup.string()
							.min(2, 'Debe tener al mínimo 2 caracteres')
							.max(15, 'Debe tener al menos 15 caracteres')
							.required('Requerido'),
						email: Yup.string()
							.email('email no valido')
							.required('Requerido'),
						password1: Yup.string()
							.min(6, 'Debe tener al mínimo 6 caracteres')
							.required('required'),
						password2: Yup.string()
							.equals([Yup.ref('password1')], 'Passwords diferentes')
							.required('required'),
				})}
			>

				{
				(Formik)=>(

					<Form >

						<label htmlFor="name">Name</label>
						<Field type="text" name="name" placeholder="Name" />
						<ErrorMessage name="name" component="span" />

						<label htmlFor="email">Email</label>
						<Field type="email" name="email" />
						<ErrorMessage name="email" component="span" />

						<label htmlFor="password1">Password</label>
						<Field type="password" name="password1" />
						<ErrorMessage name="password1" component="span" />

						<label htmlFor="password2">Password</label>
						<Field type="password" name="password2" />
						<ErrorMessage name="password2" component="span" />

						<button type="submit">Create</button>
						{<button type="button" onClick={ Formik.handleReset} >Reset</button>}
					</Form>

				)}

			</Formik>

		</div>
	)
}
