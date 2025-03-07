import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import or from "../assets/Frame 115.svg";
import google from "../assets/🦆 icon _google_.png";
import logo from "../assets/Beta House.svg";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

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
    onSubmit: async (values) => {
      const payload = {
        email: values.email,
        password: values.password,
      };

      try {
        const response = await axios.post(
          "https://event-app-9x9f.onrender.com/api/users/sign-in",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          toast.success(response.data.message);
          localStorage.setItem("mubby-event-token", response.data.user.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/home");
          console.log("Login successful:", response.data);
        } else {
          toast.error(response.data.errMsg || "User not found");
        }
      } catch (error) {
        console.error("Error during sign in:", error);
        if (error.response) {
          toast.error(
            error.response.data.message || "An error occurred during sign in."
          );
        } else if (error.request) {
          toast.error("No response received from the server.");
        } else {
          toast.error("Error: " + error.message);
        }
      }
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
              Sign In
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
        <div className="w-full lg:block hidden  p-5 bg-authIn bg-no-repeat object-cover bg-cover rounded-bl-lg rounded-tl-lg ">
          <img src={logo} alt="" />
        </div>
      </main>
    </>
  );
};

export default SignIn;
