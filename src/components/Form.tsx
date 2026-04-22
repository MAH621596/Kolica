// import { register } from "./UserFunctions";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .required("First Name is Required.")
      .min(4, "First Name is Too Short."),
    last_name: Yup.string()
      .required("Last Name is Required.")
      .min(4, "Last Name is Too Short."),
    email: Yup.string().email().required("Email is Required."),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
            /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
            "Password must contain a number and a special character."
        ),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },

    validationSchema: validationSchema,

    onSubmit: (values, { resetForm }) => {
      const newUser = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
      };

      console.log(formik.errors);
      console.log("onsbmit form values", newUser);

      resetForm(); // 🔥 fields clear ho jayengi

    //   //if register function succesful, redirect to login page
    //   register(newUser).then((res) => {
    //     history.push(`/login`);
    //   });
    },
    
  });

  return (
    <div className="container bg-white">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={formik.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <div className="form-group">
              <label htmlFor="name">First name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="Enter your first name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // 🔥 add this
              />
              {formik.errors.first_name && formik.touched.first_name && (
                <div className="input-feedback">{formik.errors.first_name}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="name">Last name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Enter your last name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // 🔥 add this
              />
              {formik.errors.last_name && formik.touched.last_name && (
                <div className="input-feedback">{formik.errors.last_name}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // 🔥 add this
              />
              {formik.errors.email && formik.touched.email && (
                <div className="input-feedback">{formik.errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="input-feedback">{formik.errors.password}</div>
              )}
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={() => console.log("BUTTON CLICKED")}>
              Register!
            </button>
          </form>          
        </div>
      </div>
    </div>
  );
};

export default Register;