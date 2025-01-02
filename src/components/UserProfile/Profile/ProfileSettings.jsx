import  { useState } from "react";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex flex-col justify-center min-h-screen p-6 ">
      <div className="max-w-2xl w-full bg-white rounded-lg p-6 ">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Profile Settings
          </h1>
          <div className="relative mt-4">
            {/* Profile Picture */}
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />
            {/* Edit Icon */}
            <span className="absolute bottom-0 right-[40%] bg-blue-500 text-white p-1 rounded-full">
              <i className="fas fa-camera"></i>
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-6 border-b border-gray-200">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "profile"
                ? "text-blue border-b-2 border-blue"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "password"
                ? "text-blue border-b-2 border-blue"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("password")}
          >
            Password
          </button>
        </div>

        {/* Forms */}
        <div className="mt-6 min-h-[400px]">
          {activeTab === "profile" && (
            <form className="h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Brown"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="David"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="browndavid@gmail.com"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Website */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Website
                  </label>
                  <input
                    type="url"
                    placeholder="Paste your link here"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Title */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your title"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Bio */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Enter your bio"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Save Changes Button */}
              <div className="mt-6 flex ">
                <button
                  type="submit"
                  className="bg-blue text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 focus:ring focus:ring-blue-300"
                >
                  Save Changes
                </button>
              </div>
            </form>
          )}

          {activeTab === "password" && (
            <form className="h-full flex flex-col justify-between">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* New Password */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Confirm Password */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Save Password Button */}
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 focus:ring focus:ring-blue-300"
                >
                  Save Password
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
