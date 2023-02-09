import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

	return (
		<div>
			<h1>Formik Components</h1>

			<Formik 
				initialValues={{
					firstName:'',
					lastName: '',
					email:'',
					terms:false,
					jobType:'',
				}}
				onSubmit={(values) => {
					console.log(values)
				}}
				validationSchema={Yup.object({
					firstName:Yup.string()
											.max(15, 'Debe tener al menos 15 caracteres')
											.required('required'),
					lastName: Yup.string()
											.max(10, 'Debe tener al menos 15 caracteres')
											.required('required'),
					email:Yup.string()
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

							<label htmlFor="firstName">First Name</label>
							<Field type="text"name="firstName"/>
							<ErrorMessage name="firstName" component="span" />
			
							<label htmlFor="lastName">Last Name</label>
							<Field type="text"name="lastName"/>
							<ErrorMessage name="lastName" component="span" />
							
							<label htmlFor="email">First Name</label>
							<Field type="email"name="email"/>
							<ErrorMessage name="email" component="span" />
							
							<label htmlFor="jobType">Job Type</label>
							<Field name="jobType" as="select">							
								<option value="developer">developer</option>
								<option value="designer">designer</option>
								<option value="it-senior">it-senior</option>
								<option value="it-junior">it-junior</option>
							</Field>


							<ErrorMessage name="jobType" component="span" />
							
							<label>
								<Field type="checkbox"name="terms"/>
								Términos y condiciones
							</label>
							<ErrorMessage name="terms" component="span" />

							<button type="submit">Submit</button>
			
							</Form>
						)
					}
			
			</Formik>

		</div>
	)
}
