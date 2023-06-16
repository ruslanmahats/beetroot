import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactForm.scss';
import { ErrorContainer } from './ErrorContainer/ErrorContainer';

export const ContactForm = () => {
	return (
		<>
			<Formik
				initialValues={{ firstName: '', lastName: '', email: '', subject: '', textMessage: '' }}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.min(2, 'Name must be at least 2 symbols')
						.required('Required'),
					lastName: Yup.string()
						.min(2, 'Name must be at least 2 symbols')
						.required('Required'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Required'),
					textMessage: Yup.string()
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
						<Field name="firstName" type="text" placeholder="First name" />
						<ErrorMessage name="firstName">{msg => <ErrorContainer msg={msg} />}</ErrorMessage>
					</div>
					<div className='contact-form__item'>
						<Field name="lastName" type="text" placeholder="Last name" />
						<ErrorMessage name="lastName">{msg => <ErrorContainer msg={msg} />}</ErrorMessage>
					</div>
					<div className='contact-form__item'>
						<Field name="email" type="email" placeholder="Email" />
						<ErrorMessage name="email">{msg => <ErrorContainer msg={msg} />}</ErrorMessage>
					</div>
					<div className='contact-form__item'>
						<Field name="subject" type="text" placeholder="Subject" />
						<ErrorMessage name="subject">{msg => <ErrorContainer msg={msg} />}</ErrorMessage>
					</div>
					<div className='contact-form__item'>
						<Field as="textarea" name="textMessage" placeholder="Message" />
						<ErrorMessage name="textMessage">{msg => <ErrorContainer msg={msg} />}</ErrorMessage>
					</div>
					<div className='contact-form__item'>
						<button type="submit" className='button button--solid'>Send Message</button>
					</div>

				</Form>
			</Formik>
		</>
	)
};