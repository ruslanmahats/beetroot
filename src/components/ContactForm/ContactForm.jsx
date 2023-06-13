import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactForm.scss';

export const ContactForm = () => {
	return (
		<>
			<Formik
				initialValues={{ firstName: '', lastName: '', email: '', subject: '', textMessage: '' }}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, 'Must be 15 characters or less')
						.required('Required'),
					lastName: Yup.string()
						.max(20, 'Must be 20 characters or less')
						.required('Required'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Required'),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				<Form className='contact-form'>

					<div className='contact-form__item'>
						<Field name="firstName" type="text" />
						<ErrorMessage name="firstName" />
					</div>
					<div className='contact-form__item'>
						<Field name="lastName" type="text" />
						<ErrorMessage name="lastName" />
					</div>
					<div className='contact-form__item'>
						<Field name="email" type="email" />
						<ErrorMessage name="email" />
					</div>
					<div className='contact-form__item'>
						<Field name="subject" type="text" />
						<ErrorMessage name="lastName" />
					</div>
					<div className='contact-form__item'>
						<Field as="textarea" name="textMessage" type="textarea" />
						<ErrorMessage name="lastName" />
					</div>

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	)
};