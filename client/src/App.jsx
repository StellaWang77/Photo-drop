// App.jsx
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Too short").required("Password is required"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Login attempt:", values);
    // your API call here
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/your-bg-image.jpg')" }}>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
        </div>
        <h2 className="text-2xl font-semibold text-center">Log in</h2>
        <p className="text-center text-sm text-gray-500 mt-1">
          Don’t have an account? <a href="#" className="text-blue-500 underline">Sign up</a>
        </p>

        <div className="space-y-3 mt-6">
          <button className="w-full border rounded-full py-2 flex items-center justify-center gap-2">
            <FaFacebookF className="text-blue-600" /> Log in with Facebook
          </button>
          <button className="w-full border rounded-full py-2 flex items-center justify-center gap-2">
            <FaGoogle className="text-red-500" /> Log in with Google
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Your email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full border rounded px-3 py-2"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label className="block text-sm mb-1">Your password</label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full border rounded px-3 py-2 pr-10"
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                <div className="text-right mt-1">
                  <a href="#" className="text-sm text-blue-500 underline">Forget your password</a>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !isValid || !dirty}
                className={`w-full py-2 rounded-full text-white ${
                  isSubmitting || !isValid || !dirty
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Logging in..." : "Log in"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
