

const MyCourses = () => {
  const courses = [
    {
      title: "Graphic Design Masterclass - Learn GREAT Design",
      category: "DEVELOPMENTS",
      price: "$89.00",
      rating: 5.0,
      students: "1,356,236",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      title: "Graphic Design Masterclass - Learn GREAT Design",
      category: "DEVELOPMENTS",
      price: "$89.00",
      rating: 5.0,
      students: "1,356,236",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
        title: "Graphic Design Masterclass - Learn GREAT Design",
        category: "DEVELOPMENTS",
        price: "$89.00",
        rating: 5.0,
        students: "1,356,236",
        image: "https://via.placeholder.com/300", // Replace with actual image URL
      },
      {
        title: "Graphic Design Masterclass - Learn GREAT Design",
        category: "DEVELOPMENTS",
        price: "$89.00",
        rating: 5.0,
        students: "1,356,236",
        image: "https://via.placeholder.com/300", // Replace with actual image URL
      },
      {
        title: "Graphic Design Masterclass - Learn GREAT Design",
        category: "DEVELOPMENTS",
        price: "$89.00",
        rating: 5.0,
        students: "1,356,236",
        image: "https://via.placeholder.com/300", // Replace with actual image URL
      },
      {
        title: "Graphic Design Masterclass - Learn GREAT Design",
        category: "DEVELOPMENTS",
        price: "$89.00",
        rating: 5.0,
        students: "1,356,236",
        image: "https://via.placeholder.com/300", // Replace with actual image URL
      },
    // Add more course objects here as needed
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap gap-4  items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">My Courses</h2>
          <button className="bg-blue text-white text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md hover:bg-blue-600 flex items-center">
            + Create a new course
          </button>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6.5 5.75v8.5L15 10l-8.5-4.25z" />
                  </svg>
                </button>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <p className="text-xs font-medium text-blue-500 uppercase">
                  {course.category}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-gray-800">
                  {course.title}
                </h3>
                <div className="mt-4 flex flex-wrap items-center text-sm text-gray-500 gap-2">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 15l-4.518 2.374 1.218-5.356L2 8.263l5.482-.469L10 3l2.518 4.794 5.482.469-3.7 3.755 1.218 5.356z" />
                    </svg>
                    {course.rating}
                  </span>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 10a3 3 0 100-6 3 3 0 000 6zm0 2a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {course.students} students
                  </span>
                </div>
                <p className="mt-4 text-lg font-bold text-red-600">
                  {course.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
