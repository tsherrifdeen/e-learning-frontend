const AccountSettings = () => {
  return (
    <div>
      <div className="px-4 py-8 sm:px-8">
        <div className="p-6 bg-white rounded-lg ">
          {/* Account Settings */}
          <section>
            <h2 className="mb-4 text-xl font-semibold">Account Settings</h2>
            <div className="flex flex-wrap gap-10">
              {/* Profile Photo */}
              <div className="flex flex-col items-center w-full md:w-1/3">
                <div className="relative w-40 h-40">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="object-cover w-full h-full border border-gray-300 rounded-full"
                  />
                  <button className="absolute px-3 py-1 text-sm text-white transform -translate-x-1/2 rounded-md bottom-2 left-1/2 bg-blue">
                    Upload Photo
                  </button>
                </div>
                <p className="mt-2 text-sm text-center text-gray-500">
                  Image size should be under 1MB and image ratio needs to be 1:1
                </p>
                {/* Biography Input */}
                <div className="w-full mt-6">
                  <label className="block text-sm font-medium">Biography</label>
                  <textarea
                    placeholder="Enter your biography"
                    className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  />
                </div>
                <button className="px-4 py-2 mt-4 text-white rounded-md bg-blue hover:bg-blue-600">
                  Save Changes
                </button>
              </div>

              {/* Form */}
              <div className="flex-1 w-full md:w-auto">
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bank Details */}
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-semibold">Bank Details</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">
                  Account Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your account name"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Bank Name</label>
                <input
                  type="text"
                  placeholder="Enter your bank name"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Account Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your account number"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <button className="px-4 py-2 mt-4 text-white rounded-md bg-blue hover:bg-blue-600">
              Save Changes
            </button>
          </section>

          {/* Change Password */}
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-semibold">Change Password</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your current password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your new password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <button className="px-4 py-2 mt-4 text-white rounded-md bg-blue hover:bg-blue-600">
              Save Changes
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
