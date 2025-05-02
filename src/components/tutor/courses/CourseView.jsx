const ViewCourse = () => {
  const reviews = [
    {
      user: "Brooklyn Simmons",
      date: "3 months ago",
      content:
        "I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations. It's been an incredible learning adventure.",
      rating: 4.9,
    },
    {
      user: "Brooklyn Simmons",
      date: "3 months ago",
      content:
        "I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations. It's been an incredible learning adventure.",
      rating: 4.9,
    },
    {
      user: "Brooklyn Simmons",
      date: "3 months ago",
      content:
        "I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations. It's been an incredible learning adventure.",
      rating: 4.9,
    },
    {
      user: "Brooklyn Simmons",
      date: "3 months ago",
      content:
        "I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations. It's been an incredible learning adventure.",
      rating: 4.9,
    },
    {
      user: "Brooklyn Simmons",
      date: "3 months ago",
      content:
        "I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations. It's been an incredible learning adventure.",
      rating: 4.9,
    },
    {
      user: "Brooklyn Simmons",
      date: "3 months ago",
      content:
        "I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations. It's been an incredible learning adventure.",
      rating: 4.9,
    },
    // Duplicate reviews for demonstration
  ];

  return (
    <div className="min-h-screen p-4">
      {/* Header Section */}
      <div className="font-normal capitalize text-midnightBlue">
        My Courses/Course Names
      </div>
      <div className="p-6 mx-auto bg-white ">
        <div className="grid grid-cols-4 gap-6">
          {/* Course Image */}
          <div className="col-span-1">
            <img
              src="https://media.gettyimages.com/id/1458679553/photo/group-of-high-school-students-using-laptop-in-library.jpg?s=612x612&w=0&k=20&c=J3m3dun5n8O8upIbOZ_nqFG1K4EBFqh0MYonPgMfm5g="
              alt="Course Thumbnail"
              className="object-cover w-full rounded-md"
            />
          </div>
          {/* Course Details */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <h1 className="text-2xl font-bold text-gray-800">
              Graphic Design Masterclass - Learn GREAT Design
            </h1>
            <p className="mt-1 text-sm text-gray-500">Uploaded: Jan 21, 2020</p>
            <div className="flex items-center gap-4 mt-4">
              <span className="flex items-center font-semibold text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-4.518 2.374 1.218-5.356L2 8.263l5.482-.469L10 3l2.518 4.794 5.482.469-3.7 3.755 1.218 5.356z" />
                </svg>
                4.8 (451,444 Ratings)
              </span>
            </div>

            {/* Adjusted hr below */}
            <hr className="w-full my-4 border-t-2 border-gray-300" />

            <div className="flex flex-col gap-6 mt-4 sm:flex-row">
              <div>
                <p className="text-sm text-gray-500">Course Price</p>
                <p className="text-xl font-bold">$13.99</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <p className="text-xl font-bold">$131,800,455.82</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-auto my-0 border-t-2 border-gray-300" />

      {/* Statistics and Overall Rating Sections */}
      <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2">
        {/* Statistics Section */}
        <div className="p-6 bg-white">
          <h2 className="mb-4 text-lg font-bold">Statistics</h2>
          <div className="space-y-4">
            {[
              { label: "Total Comments", value: "51,429", icon: "💬" },
              { label: "Students Enrolled", value: "9,419,418", icon: "👩‍🎓" },
              { label: "Students Viewed", value: "76,395,167", icon: "👁" },
              { label: "Hours", value: "19:37:51", icon: "⏱" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center p-4 rounded-lg bg-gray-50"
              >
                <div className="mr-4 text-3xl">{stat.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Rating Section */}
        <div className="p-6 bg-white">
          <h2 className="text-lg font-bold">Overall Course Rating</h2>
          <hr className="w-full my-2 border-t-2 border-gray-300" />
          <div className="flex flex-col items-center mt-4">
            <div className="mb-6 text-center">
              <p className="text-4xl font-bold text-yellow-500">4.8</p>
              <p className="text-sm text-gray-500">Course Rating</p>
            </div>

            {/* Horizontal line under course rating */}
            <hr className="w-full my-4 border-t-2 border-gray-300" />

            <div className="w-full">
              {[
                { stars: 5, percentage: 67 },
                { stars: 4, percentage: 27 },
                { stars: 3, percentage: 5 },
                { stars: 2, percentage: 1 },
                { stars: 1, percentage: "<1" },
              ].map((rating, index) => (
                <div key={index} className="flex items-center mt-2">
                  <span className="mr-2 text-sm text-gray-500">
                    {rating.stars} Star
                  </span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-yellow-500 rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {rating.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="max-w-4xl mx-auto my-0 border-t-2 border-gray-300" />

      {/* Reviews Section */}
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg">
        <h2 className="text-lg font-bold">Reviews</h2>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 rounded-md shadow-sm bg-gray-50">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="ml-4">
                  <p className="text-sm font-bold">{review.user}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-sm text-gray-800">{review.content}</p>
              <div className="flex items-center mt-2">
                <span className="flex text-yellow-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-4.518 2.374 1.218-5.356L2 8.263l5.482-.469L10 3l2.518 4.794 5.482.469-3.7 3.755 1.218 5.356z" />
                      </svg>
                    ))}
                </span>
                <p className="ml-2 text-xs text-gray-500">{review.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
