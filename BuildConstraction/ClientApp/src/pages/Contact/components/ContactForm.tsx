import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import { contactValidationSchema } from "./validation";
import CustomFormInput from "./CustomFormInput";
import "../styles.css";

const defaultValues = {
  firstName: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: contactValidationSchema,
  });

  return (
    <div className="container_form_contact">
      <p className="contactWithUsText">Contact with us</p>
      <form className="custom_form p-5" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-6">
            <CustomFormInput
              name="firstName"
              type="text"
              title="Your Name"
              className="custom_input"
              placeholder="Enter your name..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={formik.errors.firstName}
              touched={formik.touched.firstName}
              required
            />
          </div>

          <div className="col-6">
            <CustomFormInput
              name="email"
              type="email"
              title="Your Email"
              className="custom_input"
              placeholder="Enter your email..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
              required
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <CustomFormInput
              name="subject"
              type="text"
              title="Subject"
              className="custom_input custom_input_subject"
              placeholder="Enter subject..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              error={formik.errors.subject}
              touched={formik.touched.subject}
              required
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <textarea
              name="message"
              className="custom_input custom_input_message"
              placeholder="Message.."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.errors.message && formik.touched.message && (
              <p className="errorMessage">{formik.errors.message}</p>
            )}
          </div>
        </div>
        <div className="buttonContainer">
          <button
            className="submitButton"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
