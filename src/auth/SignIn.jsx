import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import or from "../assets/Frame 115.svg";
import google from "../assets/🦆 icon _google_.png";
import logo from "../assets/Beta House.svg";
import { Link, useNavigate } from "react-router";
const SignIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/home");
    },
  });
  return (
    <>
      <main className="flex flex-col md:flex-row font-outfit">
        <div className="w-full px-[20px] py-[40px] md:px-[53px] md:py-[84px] m-auto">
          <h1 className="font-bold text-[28px] leading-[26px]">
            Welcome Back to BetaHouse!
          </h1>
          <p className="text-gray-black mt-2">
            Lets get started by filling out the information below{" "}
          </p>

          <form className="mt-9" onSubmit={formik.handleSubmit}>
            <div className="space-y-2 mt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-box-lg"
                placeholder="Enter your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="space-y-2 mt-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input-box-lg"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="space-y-2 mt-5 flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  className="checkbox-input mt-2"
                />
                <label htmlFor="agree" className="p-0 text-green mt-2">
                  Remember Me
                </label>
              </div>
              <span className="text-red-500 text-sm cursor-pointer">
                Forgot Password
              </span>
            </div>
            <button
              type="submit"
              className="bg-green w-full p-4 rounded-2xl text-white mt-5"
            >
              Sign Up
            </button>
          </form>
          <img src={or} alt="" className="m-auto mt-4" />
          <button className="outline-1 w-full flex items-center justify-center gap-2 rounded-2xl mt-5 p-3">
            <img src={google} alt="" className="" />
            Continue with Google
          </button>
          <p className="text-center text-gray-black mt-5">
            New User?
            <Link className="text-green cursor-pointer" to="/">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
        <div className="w-full p-5 bg-auth-singup bg-no-repeat object-cover bg-cover rounded-bl-lg rounded-tl-lg ">
          <img src={logo} alt="" />
        </div>
      </main>
    </>
  );
};

export default SignIn;
