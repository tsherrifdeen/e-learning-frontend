import { useState } from "react";

const ProgressBar = ({ step, totalSteps }) => {
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="w-full px-4 mt-2">
      <div className="relative w-full h-2 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-blueazsdqwe  \ rounded-full transition-all duration-300"
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
      <div className="flex justify-between items-center w-full px-4 py-3">
        <div>
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-6 w-auto" // Replace with your logo
          />
        </div>
        <a
          href="/login"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Log in
        </a>
      </div>

      {/* Progress Bar */}
      <ProgressBar step={step} totalSteps={totalSteps} />

      {/* Form Section */}
      <div className="mt-6 w-full">
        {step === 1 && (
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
            <h2 className="text-lg font-bold text-center">Create Your Account</h2>
            <form className="space-y-6 mt-4">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-1/2 px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-1/2 px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-1/2 px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-1/2 px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleNextStep}
                  type="button"
                  className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
            <h2 className="text-lg font-bold text-center">
              Select What You Want to Do
            </h2>
            <div className="mt-4">
              <label
                htmlFor="options"
                className="block text-gray-700 font-medium mb-2"
              >
                Choose an option
              </label>
              <select
                id="options"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose an option</option>
                <option value="create">I want to create my own courses</option>
                <option value="republish">
                  I want to republish my existing course(s)
                </option>
              </select>
            </div>
            <div className="mt-6 flex justify-between">
             
              <button
                onClick={handleNextStep}
                type="button"
                className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
            <h2 className="text-lg font-bold text-center">
              Become a Course Creator
            </h2 >
            <h4 className="text-lg font-bold text-center">Tells us a bit about your background</h4>
            <p className="text-sm text-center">You can write about your professional experience, area of expertise or your eductional background</p>
            <form className="space-y-6 mt-4">
              <textarea
                placeholder="Tell us about your goals"
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
              ></textarea>
              <div className="">
               
                <button
                  onClick={handleNextStep}
                  type="button"
                  className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
            <h2 className="text-lg font-bold text-center">How much of a video “pro” are you?</h2>
            <div className="flex flex-col items-center space-y-4 mt-6">
      {[
        "I am a beginner",
        "I have some knowledge",
        "I am experienced",
        "I have videos to upload",
      ].map((option, index) => (
        <label
          key={index}
          className="flex items-center w-full max-w-md px-4 py-3 border-2 rounded-lg cursor-pointer border-gray-300 hover:border-blue-500 transition-all"
        >
          <input
            type="radio"
            name="experience"
            value={option}
            className="mr-3 w-4 h-4 border-2 border-gray-300 rounded-full"
          />
          <span className="text-gray-700">{option}</span>
        </label>
      ))}
    </div>
              <div className="flex justify-between">
               
                <button
                  onClick={handleNextStep}
                  type="button"
                  className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            
          </div>
        )}

        {step === 5 && (
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
            <h2 className="text-lg font-bold text-center">Which type of video will you like to upload</h2>
            <div className="flex flex-col items-center space-y-4 mt-6">
      {[
        "Educational videos",
        "Inspiration Vidoes",
       
        
      ].map((option, index) => (
        <label
          key={index}
          className="flex items-center w-full max-w-md px-4 py-3 border-2 rounded-lg cursor-pointer border-gray-300 hover:border-blue-500 transition-all"
        >
          <input
            type="radio"
            name="experience"
            value={option}
            className="mr-3 w-4 h-4 border-2 border-gray-300 rounded-full"
          />
          <span className="text-gray-700">{option}</span>
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
