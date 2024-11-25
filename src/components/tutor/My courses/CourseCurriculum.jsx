const CourseCurriculum = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm text-blue-500">
            <a href="#" className="hover:underline">
              My Courses
            </a>{" "}
            / <span className="text-gray-500">Create a new course</span>
          </div>
  
          {/* Header */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Course Curriculum
          </h1>
  
          {/* Sections */}
          <div className="bg-yellow-100 rounded-lg p-6 bg-lightyellow shadow-md mb-6">
            {/* Section Header */}
            <div className="flex flex-wrap justify-between items-center mb-4">
              <h2 className="text-gray-700 font-medium text-lg w-full sm:w-auto">
                Sections 01: Section name
              </h2>
              <div className="flex flex-wrap sm:space-x-2 mt-4 sm:mt-0">
                <button className="text-gray-500 hover:text-gray-700">+</button>
                <button className="text-gray-500 hover:text-gray-700">✎</button>
                <button className="text-gray-500 hover:text-gray-700">🗑️</button>
              </div>
            </div>
  
            {/* Lectures */}
            <div className="space-y-4">
              {/* Lecture Item */}
              {[1, 2].map((lecture, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                >
                  <span className="text-gray-700">Lecture name</span>
                  <div className="flex items-center space-x-4">
                    <select className="text-sm text-gray-700 border border-gray-300 rounded-lg px-3 py-1 focus:ring-blue-500">
                      <option>Content type</option>
                      <option>Video</option>
                      <option>PDF</option>
                      <option>Quiz</option>
                    </select>
                    <button className="text-gray-500 hover:text-gray-700">🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Create Section Button */}
          <button className="w-full py-3 text-blue-500 bg-lightblue hover:bg-blue-200 rounded-lg text-center mb-6">
            + Create a new section
          </button>
  
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-between gap-4 sm:gap-0">
            <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
              Previous
            </button>
            <button className="px-6 py-2 bg-blue text-white rounded-lg hover:bg-blue-700 w-full sm:w-auto">
              Submit for review
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseCurriculum;
  