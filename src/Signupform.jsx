import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const validate = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Field is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Field is required"),
  email: Yup.string()
    .email("Invalid email address").required("Field is required"),
  message: Yup.string().min(10, "ten or more characters...").required(),
  pet: Yup.string().required()
});

const Signupform = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        pet: ""
      }}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 5));
          setSubmitting(false);
        }, 500);
      }}>

      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <br />
          <Field type="text" id='firstName' name='firstName' />
          <ErrorMessage name='firstName' />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <br />
          <Field type="text" id='lastName' name='lastName' />
          <ErrorMessage name='lastName' />
          <br />
          <label htmlFor="email">Email Address</label>
          <br />
          <Field type="email" id='email' name='email' />
          <ErrorMessage name="email" />
          <br />
          <label htmlFor="message">Your message</label>
          <br />
          <Field name="message" as="textarea" />
          <ErrorMessage name="message" />
          <br />
          <Field name="pet" as="select">

            <option value="noPet">Select a pet</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="tortoise">Tortoise</option>
          </Field>
          <ErrorMessage name="pet" />
          <button type="submit" disabled={formik.isSubmitting}>Submit</button>
        </form>
      )}

    </Formik>
  );
};

export default Signupform;