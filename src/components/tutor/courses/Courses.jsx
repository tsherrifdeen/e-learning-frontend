import { Link } from "react-router-dom";

const MyCourses = () => {
  const courses = [
    {
      title: "Graphic Design Masterclass - Learn GREAT Design",
      category: "DEVELOPMENTS",
      price: 20,
      rating: 5.0,
      students: "1,356,236",
      image:
        "https://media.gettyimages.com/id/1458679553/photo/group-of-high-school-students-using-laptop-in-library.jpg?s=612x612&w=0&k=20&c=J3m3dun5n8O8upIbOZ_nqFG1K4EBFqh0MYonPgMfm5g=", // Replace with actual image URL
    },
    {
      title: "Graphic Design Masterclass - Learn GREAT Design",
      category: "DEVELOPMENTS",
      price: 100,
      rating: 5.0,
      students: "1,356,236",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      title: "Graphic Design Masterclass - Learn GREAT Design",
      category: "DEVELOPMENTS",
      price: "$89.00",
      rating: 30,
      students: "1,356,236",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      title: "Graphic Design Masterclass - Learn GREAT Design",
      category: "DEVELOPMENTS",
      price: 45,
      rating: 5.0,
      students: "1,356,236",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      title: "Graphic Design Masterclass - Learn GREAT Design",
      category: "DEVELOPMENTS",
      price: 50,
      rating: 5.0,
      students: "1,356,236",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      title: "Graphic Design Masterclass - Learn GREAT Design",
      category: "DEVELOPMENTS",
      price: 89,
      rating: 5.0,
      students: "1,356,236",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    // Add more course objects here as needed
  ];

  return (
    <div>
      <div className="p-4 sm:p-6">
        <div className="mx-auto max-w-7xl font-poppins">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h2 className="text-xl font-semibold text-midnightBlue sm:text-2xl">
              My Courses
            </h2>
            <button className="flex items-center px-4 py-2 text-sm text-black rounded-2xl bg-lightblue sm:text-base sm:px-6 hover:bg-blue-600">
              + Create a new course
            </button>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-sm"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-56"
                  />
                  <button className="absolute inset-0 flex items-center justify-center transition duration-150 bg-white bg-opacity-10 hover:bg-opacity-25">
                    <div className="p-2 transition duration-300 ease-in-out bg-white rounded-full shadow-md hover:bg-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6.5 5.75v8.5L15 10l-8.5-4.25z" />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-4 ">
                  <p className="text-xs text-[#342F98] py-1 px-1.5   font-medium uppercase bg-[#EBEBFF] w-fit">
                    {course.category}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-4 text-sm ">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mr-1 text-[#FD8E1F]"
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
                        className="w-4 h-4 mr-1 text-[#564FFD]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 10a3 3 0 100-6 3 3 0 000 6zm0 2a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {course.students} students
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="mt-4 text-lg font-bold text-[#FF6636]">
                      ${course.price.toLocaleString()}
                    </p>
                    <Link
                      to={"/tutor/courses/view"}
                      className="px-4 py-2 text-sm text-white bg-midnightBlue rounded-2xl hover:bg-[#564FFD]"
                    >
                      View Course{" "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
