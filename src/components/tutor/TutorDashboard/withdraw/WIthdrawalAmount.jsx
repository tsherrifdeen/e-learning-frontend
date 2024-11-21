

const AccountDetailsForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        {/* Close Icon */}
        <div className="flex justify-end">
          <button className="text-gray-400 hover:text-gray-600">
            &times;
          </button>
        </div>

        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Details</h2>

        {/* Form */}
        <form>
          {/* Bank Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank name
            </label>
            <input
              type="text"
              placeholder="Enter your bank name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Account Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account number
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Account Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account name
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 focus:outline-none"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountDetailsForm;
