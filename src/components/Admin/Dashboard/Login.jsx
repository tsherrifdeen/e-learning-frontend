

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/path/to/logo.png"
          alt="Sigvarsity"
          className="h-10"
        />
      </div>

      {/* Form Container */}
      <div className="bg-white p-8 rounded-lg  w-full max-w-md border">
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue    text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
