import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput  } from '../components';
import '../styles/styles.css';

export const FormikAbstract = () => {

	return (
		<div>
			<h1>Formik Abstract</h1>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={(values) => {
					console.log(values)
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, 'Debe tener al menos 15 caracteres')
						.required('required'),
					lastName: Yup.string()
						.max(10, 'Debe tener al menos 15 caracteres')
						.required('required'),
					email: Yup.string()
						.email('email no valido')
						.required('required'),
					terms: Yup.boolean()
						.oneOf([true], 'Debe aceptar las condiciones'),
					jobType: Yup.string()
						.notOneOf(['it-junior'], ' no se puede usar')
						.required('Requerido')
				})
				}>
				{
					(Formik) => (
						<Form>
							<MyTextInput
								label='firstName'
								name="firstName"
								placeholder='diego'
							/>

							<MyTextInput
								label='lastName'
								name="lastName"
								placeholder='Monsalve'
							/>

							<MyTextInput
								label='email'
								name="email"
								type='email'
								placeholder='correo@correo.com'
							/>
							<MySelect label="jobType" name='jobType'>
								<option value="developer">developer</option>
								<option value="designer">designer</option>
								<option value="it-senior">it-senior</option>
								<option value="it-junior">it-junior</option>
							</MySelect>

							<MyCheckbox label="Terms & condiciones" name="terms" />

							<button type="submit">Submit</button>

						</Form>
					)
				}

			</Formik>

		</div>
	)
}
