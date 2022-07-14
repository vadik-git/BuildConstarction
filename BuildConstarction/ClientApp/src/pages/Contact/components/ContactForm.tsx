import React from 'react';
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
    return (<div className='container_form_contact'>
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = { email: "" };
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <div className='custom_form p-5'>
                        <Form>
                            <div className='row'>
                                <div className='col-6'>
                                    <label htmlFor="fname">Your Name</label>
                                    <input className='custom_input' type="text" id="fname" name="firstname" placeholder="Your name.." />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="fname">Your Email</label>
                                    <input className='custom_input' type="text" id="fname" name="firstname" placeholder="Your email.." />
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'>
                                    <input className='custom_input custom_input_subject' type="text" id="fname" name="firstname" placeholder="Subject.." />
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'>
                                    <textarea className='custom_input custom_input_message' placeholder="Message.." />
                                </div>
                            </div>

                        </Form>
                    </div>

                )}
            </Formik>
        </div>

    </div>);
};

export default ContactForm;