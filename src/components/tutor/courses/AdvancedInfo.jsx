const AdvancedInformation = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">
            Advanced Information
          </h1>
  
          {/* Form */}
          <form>
            {/* Thumbnails */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Course Thumbnail */}
              <div>
                <label
                  htmlFor="course-thumbnail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Course Thumbnail
                </label>
                <div
                  id="course-thumbnail"
                  className="flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
                >
                  <p className="text-gray-500 text-xs sm:text-sm mb-4">
                    Click to browse or <br />
                    drag and drop your thumbnail
                  </p>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                  Upload your course Thumbnail here.{" "}
                  <span className="font-semibold">Important guidelines:</span>{" "}
                  1200x800 pixels or 1:28 Ratio. Supported format: jpg, jpeg, or png.
                </p>
              </div>
  
              {/* Course Trailer */}
              <div>
                <label
                  htmlFor="course-trailer"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Course Trailer
                </label>
                <div
                  id="course-trailer"
                  className="flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
                >
                  <p className="text-gray-500 text-xs sm:text-sm mb-4">
                    Click to browse or <br />
                    drag and drop your video
                  </p>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                  Students who watch a well-made promo video are 5x more likely to
                  enroll in your course. We’ve seen that statistics go up to 10x for
                  exceptionally awesome videos.
                </p>
              </div>
            </div>
  
            {/* Course Overview */}
            <div className="mb-8">
              <label
                htmlFor="course-overview"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Course Overview
              </label>
              <textarea
                id="course-overview"
                placeholder="Enter your course description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                rows="4"
              ></textarea>
            </div>
  
            {/* Key Features */}
            <div className="mb-8">
              <label
                htmlFor="key-features"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Key Features
              </label>
              <textarea
                id="key-features"
                placeholder="Enter your course description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                rows="4"
              ></textarea>
            </div>
  
            {/* Tags */}
            <div className="mb-8">
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tags
              </label>
              <input
                id="tags"
                type="text"
                placeholder="Search for tags"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 mb-4"
              />
              <div className="flex flex-wrap gap-2">
                {["Visual", "UX Design", "Design Systems"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-xs sm:text-sm font-medium text-gray-700 rounded-lg"
                  >
                    {tag} <button className="ml-2 text-gray-500">✕</button>
                  </span>
                ))}
              </div>
            </div>
  
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
              >
                Previous
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-blue text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Save and Next
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AdvancedInformation;
  