import { useState } from "react";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const ProgressBar = ({ step, totalSteps }) => {
  const progressPercentage = (step / totalSteps) * 100;
  return (
    <div className="w-full px-4">
      <div className="relative w-full h-2 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-full transition-all duration-300 rounded-full bg-midnightBlue"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SignupProgress = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto font-poppins">
      {/* Header */}
      <header className="fixed top-0 left-0 z-10 w-full bg-white">
        <div className="flex items-center justify-between w-full max-w-6xl px-8 py-4 mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            {/* <img
            src="/logo.svg" // Replace with your logo path
            alt="Logo"
            className="w-auto h-8"
          />
          <span className="ml-2 text-lg font-bold text-gray-800 ">Sigvarsity</span> */}
          </div>

          {/* Login Button */}
          <Link
            to="/login"
            className="text-lg font-bold text-midnightBlue hover:underline"
          >
            Log in
          </Link>
        </div>
      </header>

      <div className="flex items-center w-full mt-20">
        {/* Progress Bar */}
        <button onClick={handlePrevStep}>
          <Icon
            icon="material-symbols:chevron-left-rounded"
            width="32"
            color="midnightBlue"
            height="32"
          />
        </button>
        <ProgressBar step={step} totalSteps={totalSteps} />
      </div>

      {/* Form Section */}
      <div className="w-full mt-6">
        {step === 1 && (
          <div className="flex items-center justify-center w-full">
            <div className="w-full p-4 bg-white ">
              <h2 className="text-3xl font-bold text-center text-midnightBlue">
                Create Your Account
              </h2>
              <form className="w-full p-3 mt-4 space-y-10 border rounded-lg">
                <div className="w-full max-w-md mx-auto mt-6">
                  {/* Divider */}
                  <div className="flex items-center mb-6 text-gray-400">
                    <span className="flex-grow border-t border-gray-300"></span>
                    <span className="px-4 text-sm">or sign up with</span>
                    <span className="flex-grow border-t border-gray-300"></span>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
                      <Icon icon="devicon:google" />
                      <span className="font-medium text-gray-700">Google</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
                      <Icon icon="devicon:apple" />
                      <span className="font-medium text-gray-700">Apple</span>
                    </button>
                  </div>
                </div>
                {/* First Row */}
                <div className="grid max-w-screen-md mx-auto lg:grid-cols-2 gap-y-14 gap-x-24">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  {/* Second Row */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
                {/* Button */}
                <div className="flex flex-col items-center justify-center gap-2 p-2 mt-6">
                  <button
                    onClick={handleNextStep}
                    type="button"
                    className="w-full max-w-sm py-2 text-white rounded-xl bg-blue hover:bg-blue-700"
                  >
                    Sign up & Continue
                  </button>{" "}
                  <p className="w-full max-w-sm mx-auto text-base text-center text-lightgrey">
                    By continuing, you agree to our{" "}
                    <span className="text-midnightBlue">Term of Service</span>
                    and{" "}
                    <span className="text-midnightBlue"> Privacy Policy</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex items-center justify-center bg-white">
            <div className="w-full max-w-xl p-8 bg-white rounded-lg">
              <h2 className="text-3xl font-bold text-center text-midnightBlue">
                Select What You Want to Do
              </h2>
              <div className="mt-4">
                <select
                  id="options"
                  placeholder="Choose an option"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="create">
                    I want to create my own courses
                  </option>
                  <option value="republish">
                    I want to republish my existing course(s)
                  </option>
                </select>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleNextStep}
                  type="button"
                  className="w-full max-w-[180px] py-2 text-white rounded-xl bg-blue hover:bg-blue-700"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex items-center justify-center bg-white">
            <div className="w-full max-w-screen-md p-4 mx-auto bg-white rounded-lg lg:p-6">
              <h2 className="text-3xl font-bold text-center text-midnightBlue">
                Become a Course Creator
              </h2>
              <div className="mt-8 space-y-2">
                <h4 className="text-lg font-bold text-center text-midnightBlue">
                  Tell us a bit about your background
                </h4>
                <p className="max-w-lg mx-auto text-sm text-center">
                  You can write about your professional experience, area of
                  expertise, or your educational background
                </p>
              </div>
              <form className="mt-6 space-y-6">
                <textarea
                  placeholder="Tell us about your goals"
                  className="w-full max-w-3xl px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={8}
                ></textarea>
                <div className="flex justify-center">
                  <button
                    onClick={handleNextStep}
                    type="button"
                    className="flex px-6 py-2 text-white rounded-xl bg-blue hover:bg-blue-700"
                  >
                    Continue{" "}
                    <Icon
                      icon="material-symbols:chevron-right-rounded"
                      width="24"
                      height="24"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex items-center justify-center ">
            <div className="w-full max-w-xl p-8 bg-white rounded-lg">
              <h2 className="text-lg font-bold text-center">
                How much of a video “pro” are you?
              </h2>
              <div className="flex flex-col items-center mt-6 space-y-4">
                {[
                  "I am a beginner",
                  "I have some knowledge",
                  "I am experienced",
                  "I have videos to upload",
                ].map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center justify-center w-full max-w-md px-4 py-3 transition-all border rounded-lg cursor-pointer border-midnightBlue hover:border-blue-500"
                  >
                    <input
                      type="radio"
                      name="experience"
                      value={option}
                      onChange={handleNextStep}
                      className="w-4 h-4 mr-3 border-2 border-gray-300 rounded-full"
                    />
                    <span className="text-lg font-semibold text-center ">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {/* <div className="flex justify-center mt-6">
                <button
                  onClick={handleNextStep}
                  type="button"
                  className="w-full max-w-xs py-2 text-white bg-blue-700 rounded-xl bg-blue hover"
                >
                  Continue
                </button>
              </div> */}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="w-full max-w-xl p-8 mx-auto bg-white rounded-lg">
            <h2 className="text-lg font-bold text-center">
              Which type of video will you like to upload
            </h2>
            <div className="flex flex-col items-center mt-6 space-y-4">
              {["Educational videos", "Inspiration Vidoes"].map(
                (option, index) => (
                  <label
                    key={index}
                    className="flex items-center justify-center w-full max-w-md px-4 py-3 transition-all border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-500"
                  >
                    <input
                      type="radio"
                      name="experience"
                      value={option}
                      onChange={handleNextStep}
                      className="w-4 h-4 mr-3 border-2 border-gray-300 rounded-full"
                    />
                    <span className="text-lg font-semibold text-center ">
                      {option}
                    </span>
                  </label>
                )
              )}
            </div>
            <div className="flex justify-center mt-6">
              <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
                Finish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupProgress;
