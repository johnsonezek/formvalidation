import React, { Component } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// const validate = values => {
//   var errors = {};
//   if(!values.name) {
//     errors.name = 'Name is required!'
//   } else if(values.name.length > 15) {
//     errors.name = 'Maximum length is 15 charecters!'
//   } else if(values.name.length < 3) {
//     errors.name = 'Minimum 3 charecters required!'
//   }
//   return errors;
// }
const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      list: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Name is required!")
        .strict()
        .trim()
        //.uppercase()
        .min(5, "Minimum 5 charecters required!")
        .max(15, "Maximum 15 charecters only!"),
      email: yup
        .string()
        .email("Please enter Email!")
        .required("Email is required!"),
      list: yup.string().required("Select any one"),
      password: yup.string().required("Password is required"),
      confirmPassword: yup.string()
      .oneOf([yup.ref('password'),null],"Confirm password and Password must be same!!")
      .required("Confirm Password is required"),
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });
  return (
    <div className="container">
      <div className="jumbotron">
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label>Email: </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <br />

          <div className="form-group">
            <label>Select list:</label>
            <select
              className="form-control"
              id="sel1"
              name="list"
              onChange={formik.handleChange}
              value={formik.values.list}
            >
              <option value="">--Select One--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            {formik.errors.list ? (
              <div className="text-danger">{formik.errors.list}</div>
            ) : null}
          </div>
          <br />

          <div className="form-group">
            <label>Password: </label>
            <br />
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <br />

          <div className="form-group">
            <label>Confirm Password: </label>
            <br />
            <input
              className="form-control"
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword ? (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
