import { useState } from "react";

import { Icon } from '@iconify/react';  
const ProgressBar = ({ step, totalSteps }) => {
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="w-full px-4 mt-2">
      <div className="relative w-full h-2 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-midnightBlue  \ rounded-full transition-all duration-300"
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

 

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      {/* Header */}
      <header className="w-full bg-white     fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between w-full px-8 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.svg" // Replace with your logo path
            alt="Logo"
            className="h-8 w-auto"
          />
          <span className="ml-2 text-lg font-bold text-gray-800 ">Sigvarsity</span>
        </div>

        {/* Login Button */}
        <a
          href="/login"
          className="text-md font-bold text-midnightBlue hover:underline"
        >
          Log in
        </a>
      </div>
    </header>

    <div className="mt-20 w-full">
        {/* Progress Bar */}
        <ProgressBar step={step} totalSteps={totalSteps} />
        </div>

      {/* Form Section */}
      <div className="mt-6 w-full">
        {step === 1 && (
  <div className="flex items-center justify-center ">
    <div className="bg-white p-4 sm:p-6 md:p-8 w-full max-w-2xl ">
      <h2 className="text-lg font-bold text-center">Create Your Account</h2>
      <form className="space-y-10 mt-4 border rounded-lg p-5">
        <div className="w-full max-w-md mx-auto mt-6">
          {/* Divider */}
          <div className="flex items-center text-gray-400 mb-6">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="px-4 text-sm">or sign up with</span>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
            <Icon icon="devicon:google" />
              <span className="text-gray-700 font-medium">Google</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
            <Icon icon="devicon:apple" />
              <span className="text-gray-700 font-medium">Apple</span>
            </button>
          </div>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6 p-2">
          <button
            onClick={handleNextStep}
            type="button"
            className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700"
          >
            Sign up & Continue
          </button>
        </div>
      </form>
    </div>
  </div>
)}


{step === 2 && (
  <div className="flex items-center justify-center  bg-white">
    <div className="bg-white p-8 rounded-lg w-full max-w-xl">
      <h2 className="text-lg font-bold text-center">
        Select What You Want to Do
      </h2>
      <div className="mt-4">
       
        <select
          id="options"
          className="w-full px-4 py-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Choose an option</option>
          <option value="create">I want to create my own courses</option>
          <option value="republish">
            I want to republish my existing course(s)
          </option>
        </select>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleNextStep}
          type="button"
          className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
)}


{step === 3 && (
  <div className="flex items-center justify-center  bg-white">
    <div className="bg-white p-8 rounded-lg w-full max-w-xl">
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-center">Become a Course Creator</h2>
        <h4 className="text-lg font-bold text-center">
          Tell us a bit about your background
        </h4>
        <p className="text-sm text-center">
          You can write about your professional experience, area of expertise, or your educational background
        </p>
      </div>
      <form className="space-y-6 mt-4">
        <textarea
          placeholder="Tell us about your goals"
          className="w-full max-w-3xl px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
        ></textarea>
        <div className="flex justify-center">
          <button
            onClick={handleNextStep}
            type="button"
            className="px-6 py-2 bg-blue text-white rounded-lg hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  </div>
)}


{step === 4 && (
  <div className="flex items-center justify-center ">
    <div className="bg-white p-8 rounded-lg w-full max-w-xl">
      <h2 className="text-lg font-bold text-center">
        How much of a video “pro” are you?
      </h2>
      <div className="flex flex-col items-center space-y-4 mt-6">
        {[
          "I am a beginner",
          "I have some knowledge",
          "I am experienced",
          "I have videos to upload",
        ].map((option, index) => (
          <label
            key={index}
            className="flex items-center justify-center w-full max-w-md px-4 py-3 border-2 rounded-lg cursor-pointer border-gray-300 hover:border-blue-500 transition-all"
          >
            <input
              type="radio"
              name="experience"
              value={option}
              className="mr-3 w-4 h-4 border-2 border-gray-300 rounded-full"
            />
            <span className="text-gray-700 text-center">{option}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleNextStep}
          type="button"
          className="px-6 py-2 bg-blue text-white rounded-lg hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
)}


        {step === 5 && (
          <div className="bg-white p-8 rounded-lg w-full max-w-xl">
            <h2 className="text-lg font-bold text-center">Which type of video will you like to upload</h2>
            <div className="flex flex-col items-center space-y-4 mt-6">
      {[
        "Educational videos",
        "Inspiration Vidoes",
       
        
      ].map((option, index) => (
        <label
          key={index}
          className="flex items-center justify-center w-full max-w-md px-4 py-3 border-2 rounded-lg cursor-pointer border-gray-300 hover:border-blue-500 transition-all"
        >
          <input
            type="radio"
            name="experience"
            value={option}
            className="mr-3 w-4 h-4 border-2 border-gray-300 rounded-full"
          />
          <span className="text-gray-700 text-center">{option}</span>
        </label>
      ))}
    </div>
            <div className="mt-6 flex justify-center">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
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
