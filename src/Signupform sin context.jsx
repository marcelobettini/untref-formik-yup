import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

const validate = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Field is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Field is required"),
  email: Yup.string()
    .email("Invalid email address").required("Field is required")
});

const Signupform = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validationSchema: validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <br />
      <input
        type="text"
        id='firstName'
        name='firstName'
        // value={formik.values.firstName}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? <span>{formik.errors.firstName}</span> : null}

      <br />
      <label htmlFor="lastName">Last Name</label>
      <br />
      <input
        type="text"
        id='lastName'
        name='lastName'
        // value={formik.values.lastName}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps("lastName")}
      />
      {formik.touched.lastName && formik.errors.lastName ? <span>{formik.errors.lastName}</span> : null}
      <br />
      <label htmlFor="email">Email Address</label>
      <br />
      <input
        type="email"
        id='email'
        name='email'
        // value={formik.values.email}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
//TODO: what if... react dinamically to input change in render (cat, dog, whatever)
export default Signupform;