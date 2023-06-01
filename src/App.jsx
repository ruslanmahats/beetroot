import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.scss';


function App() {
	return (
		<Formik
			initialValues={{ firstName: '', lastName: '', date: '', gender: '', email: '', phone: '', subject: '' }}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(15, 'Must be 15 characters or less')
					.required('Required'),
				lastName: Yup.string()
					.max(20, 'Must be 20 characters or less')
					.required('Required'),
				email: Yup.string().email('Invalid email address').required('Required'),
				phone: Yup.string().required('Please, enter your phone')
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			<Form className='form'>

				<h1 className='title'>Registration Form</h1>

				<div className='row'>
					<div className='column'>
						<label htmlFor="firstName">First Name</label>
						<Field name="firstName" type="text" />
						<span className='error-message'><ErrorMessage name="firstName" /></span>
					</div>
					<div className='column'>
						<label htmlFor="lastName">Last Name</label>
						<Field name="lastName" type="text" />
						<span className='error-message'><ErrorMessage name="lastName" /></span>
					</div>
				</div>


				<div className='row'>
					<div className='column'>
						<label htmlFor="date">Birthday</label>
						<Field name="date" type="date" />
						<span className='error-message'><ErrorMessage name="date" /></span>
					</div>
					<div className='column'>
						<p className='label'>Gender</p>
						<div className='radio'>
							<label ><Field name="gender" type="radio" value="male" />Male</label>
							<label ><Field name="gender" type="radio" value="female" />Female</label>
						</div>
						<span className='error-message'><ErrorMessage name="gender" /></span>
					</div>
				</div>


				<div className='row'>
					<div className='column'>
						<label htmlFor="email">Email</label>
						<Field name="email" type="email" />
						<span className='error-message'><ErrorMessage name="email" /></span>
					</div>
					<div className='column'>
						<label htmlFor="phone">Phone Number</label>
						<Field name="phone" type="text" />
						<span className='error-message'><ErrorMessage name="phone" /></span>
					</div>
				</div>

				<div className='select'>
					<label htmlFor="subject">Subject</label>
					<Field name="subject" as="select" className="my-select">
						<option value="" selected disabled='disabled'>Choose option</option>
						<option value="green">subject 1</option>
						<option value="blue">subject 2</option>
						<option value="blue">subject 3</option>
					</Field>
				</div>


				<button type="submit" className='btn'>Submit</button>
			</Form>
		</Formik>
	);
};

export default App;
