const VerifyAccount = () => {
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
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
          Verify account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          A verification code has been sent to the phone number linked to your
          account
        </p>

        {/* Verification Code Input */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-12 h-12 border rounded-lg text-center shadow-sm text-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          ))}
        </div>

        {/* Resend Code */}
        <p className="text-sm text-center text-gray-500 mb-6">
          Didn’t receive code?{" "}
          <button className="text-blue-600 hover:underline focus:outline-none">
            Resend code
          </button>
        </p>

        {/* Confirm Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 focus:outline-none"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default VerifyAccount;
