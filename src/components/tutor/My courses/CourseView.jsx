
const CourseDashboard = () => {
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
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto bg-white p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Course Image */}
          <div className="col-span-1">
            <img
              src="https://via.placeholder.com/300"
              alt="Course Thumbnail"
              className="rounded-md object-cover w-full"
            />
          </div>
          {/* Course Details */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <h1 className="text-2xl font-bold text-gray-800">
              Graphic Design Masterclass - Learn GREAT Design
            </h1>
            <p className="text-gray-500 text-sm mt-1">Uploaded: Jan 21, 2020</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-yellow-500 font-semibold flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
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

            <div className="mt-4 flex flex-col sm:flex-row gap-6">
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

      <hr className="max-w-4xl mx-auto my-0 border-t-2 border-gray-300" />

      {/* Statistics and Overall Rating Sections */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Statistics Section */}
        <div className="bg-white p-6">
          <h2 className="text-lg font-bold mb-4">Statistics</h2>
          <div className="space-y-4">
            {[{ label: "Total Comments", value: "51,429", icon: "💬" },
              { label: "Students Enrolled", value: "9,419,418", icon: "👩‍🎓" },
              { label: "Students Viewed", value: "76,395,167", icon: "👁" },
              { label: "Hours", value: "19:37:51", icon: "⏱" }].map((stat, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl mr-4">{stat.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Rating Section */}
        <div className="bg-white p-6">
          <h2 className="text-lg font-bold">Overall Course Rating</h2>
          <hr className="w-full border-t-2 border-gray-300 my-2" />
          <div className="mt-4 flex flex-col items-center">
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-yellow-500">4.8</p>
              <p className="text-sm text-gray-500">Course Rating</p>
            </div>

            {/* Horizontal line under course rating */}
            <hr className="w-full border-t-2 border-gray-300 my-4" />

            <div className="w-full">
              {[{ stars: 5, percentage: 67 },
                { stars: 4, percentage: 27 },
                { stars: 3, percentage: 5 },
                { stars: 2, percentage: 1 },
                { stars: 1, percentage: "<1" }].map((rating, index) => (
                <div key={index} className="flex items-center mt-2">
                  <span className="text-sm text-gray-500 mr-2">
                    {rating.stars} Star
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
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
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg">
        <h2 className="text-lg font-bold">Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-md shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-bold text-sm">{review.user}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-sm text-gray-800">{review.content}</p>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-500 flex">
                  {Array(5).fill(0).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-4.518 2.374 1.218-5.356L2 8.263l5.482-.469L10 3l2.518 4.794 5.482.469-3.7 3.755 1.218 5.356z" />
                    </svg>
                  ))}
                </span>
                <p className="text-xs text-gray-500 ml-2">{review.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
