import { Formik, Form } from 'formik'
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';


// console.log(formJson)

const initialValues: {[key:string]:any} = {}
const requiredFields: {[key:string]:any} = {}

for (const input of formJson) {
	initialValues[input.name] = input.value;

	if( !input.validations) continue;

	let schema = Yup.string()

	for(const rule of input.validations) {
		if( rule.type === 'required' ){
			schema = schema.required(rule.message)
		} 
		if( rule.type === 'minLength' ){
			schema = schema.min((rule as any).value, rule.message)
		} 
		if( rule.type === 'email' ){
			schema = schema.email(rule.message)
		} 
	}

	requiredFields[input.name] = schema
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
	return (
		
		<Formik
		validationSchema={ validationSchema }
			initialValues={ initialValues	}
			onSubmit= {(values)=>{
				console.log(values)
			}}
		>
			{
				(formik) =>(

					<Form noValidate >
						{formJson.map(( {type, label, name, placeholder, options}) => {

							if( type === 'input' || type === 'password' || type === 'email'){

								return <MyTextInput 
													key={name}
													type={(type as any)} 
													name={name} 
													label={label} 
													placeholder={placeholder}
	
												/>
							}else if (type === 'select'){

								return (<MySelect key={name} label={label} name={name} >
													<option value="">Select an option</option>
													{
														options?.map(({id, label} )=>(
															<option key={id} value={id}>{label}</option>
														))
													}
												</MySelect>)
							}

						})}
						<button type='submit'>Submit</button>
					</Form>

				)
			}


		</Formik>
	)
}
