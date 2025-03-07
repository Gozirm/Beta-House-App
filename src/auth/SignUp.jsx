import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import or from "../assets/Frame 115.svg";
import google from "../assets/🦆 icon _google_.png";
import logo from "../assets/Beta House.svg";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      agree: Yup.bool().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const fullName = `${values.firstName} ${values.lastName}`;
        const response = await axios.post(
          "https://event-app-9x9f.onrender.com/api/users/sign-up",
          {
            email: values.email,
            fullname: fullName,
            password: values.password,
            confirmPassword: values.confirmPassword,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          toast(response.data.message);
          navigate("/home");
        } else {
          toast.error(response.data.message);
        }
        console.log("Successful:", response.data);
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred during sign up");
        console.error("Error during sign up:", error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      {isLoading && <Loader />} {/* Show loader when loading */}
      <main className="flex flex-col md:flex-row font-outfit">
        <div className="w-full px-[20px] py-[40px] md:px-[53px] md:py-[84px]">
          <h1 className="font-bold text-[28px] leading-[26px]">
            Join our community of home seekers and explore the possibilities
            that await.
          </h1>
          <p className="text-gray-black mt-2">
            Let's get started by filling out the information below
          </p>

          <form className="mt-9" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="space-y-2 mb-4 lg:mb-0">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="input-box"
                  placeholder="Enter Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="input-box"
                  placeholder="Enter Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>
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
            <div 
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
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
            <div className="space-y-2 mt-5">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="input-box-lg"
                placeholder="Confirm your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <div className="space-y-2 mt-5 flex items-center gap-2">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className="checkbox-input mt-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.agree}
              />
              <label htmlFor="agree" className="p-0">
                I agree to{" "}
                <span className="text-green cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-green cursor-pointer">
                  Privacy Policies
                </span>
              </label>
              {formik.touched.agree && formik.errors.agree ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.agree}
                </div>
              ) : null}
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
            Already have an account?{" "}
            <Link className="text-green cursor-pointer" to="/signin">
              Sign In
            </Link>
          </p>
        </div>
        <div className="w-full lg:block hidden p-5  bg-authUp bg-no-repeat object-cover bg-cover rounded-bl-lg rounded-tl-lg ">
          <img src={logo} alt="" className="" />
        </div>
      </main>
    </>
  );
};

export default SignUp;
