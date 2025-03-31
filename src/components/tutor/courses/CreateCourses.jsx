

const CreateCourseForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white mt-6 rounded-lg p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Basic Information
        </h2>
        <form>
          {/* Title */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter your course title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Subtitle */}
          <div className="mb-6">
            <label
              htmlFor="subtitle"
              className="block text-sm font-medium text-gray-700"
            >
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              placeholder="Enter your course subtitle"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Course Category and Level */}
          <div className="mb-6 flex flex-wrap gap-6">
            <div className="w-full sm:w-[calc(50%-0.75rem)]">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Course Category
              </label>
              <select
                id="category"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Select</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
            </div>
            <div className="w-full sm:w-[calc(50%-0.75rem)]">
              <label
                htmlFor="level"
                className="block text-sm font-medium text-gray-700"
              >
                Course Level
              </label>
              <select
                id="level"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Select</option>
                <option>Beginner</option>
                <option>Intermediate</option>
              </select>
            </div>
          </div>

          {/* Duration and Price */}
          <div className="mb-6 flex flex-wrap gap-6">
            <div className="w-full sm:w-[calc(50%-0.75rem)]">
              <label
                htmlFor="duration"
                className="block text-sm font-medium text-gray-700"
              >
                Duration
              </label>
              <input
                type="text"
                id="duration"
                placeholder="Choose duration"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-full sm:w-[calc(50%-0.75rem)]">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Course Price
              </label>
              <input
                type="text"
                id="price"
                placeholder="Enter price"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center sm:justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save and Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseForm;
