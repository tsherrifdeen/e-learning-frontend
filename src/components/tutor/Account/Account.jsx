

const AccountSettings = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-8 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Account Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <div className="flex flex-wrap gap-6">
            {/* Profile Photo */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <div className="relative w-40 h-40">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border border-gray-300"
                />
                <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue text-white text-sm px-3 py-1 rounded-md">
                  Upload Photo
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Image size should be under 1MB and image ratio needs to be 1:1
              </p>
              {/* Biography Input */}
              <div className="w-full mt-6">
                <label className="block text-sm font-medium">Biography</label>
                <textarea
                  placeholder="Enter your biography"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <button className="mt-4 bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-600">
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
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bank Details */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Account Name</label>
              <input
                type="text"
                placeholder="Enter your account name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Bank Name</label>
              <input
                type="text"
                placeholder="Enter your bank name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Account Number</label>
              <input
                type="text"
                placeholder="Enter your account number"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button className="mt-4 bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Save Changes
          </button>
        </section>

        {/* Change Password */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Current Password</label>
              <input
                type="password"
                placeholder="Enter your current password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                placeholder="Enter your new password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button className="mt-4 bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Save Changes
          </button>
        </section>
      </div>
    </div>
  );
};

export default AccountSettings;
