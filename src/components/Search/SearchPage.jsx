const courses = [
    {
      id: 1,
      category: "Development",
      tag: "JavaScript",
      title: "Web Development Masterclass & Certification",
      instructor: "Albert Flores",
      price: "₦15,000",
      oldPrice: "₦20,000",
      rating: 4.8,
      reviews: 641,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    // Add more course objects as needed...
  ];
  
  const SearchPage = () => {
    return (
      <div className="p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            Search Results for <span className="text-blue-600">JavaScript</span>
          </h1>
          <p className="text-gray-600">24 Courses found</p>
        </div>
  
        {/* Filters Section */}
        <div className="flex gap-4 mb-8">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">All</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Popular
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Trending
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            New
          </button>
        </div>
  
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span className="text-blue-600">{course.category}</span>
                  <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">
                    {course.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">By {course.instructor}</p>
                <div className="flex items-center gap-2 text-yellow-500 text-sm mt-2">
                  <span>{course.rating} ★</span>
                  <span className="text-gray-600">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">{course.price}</span>
                    <span className="line-through text-gray-400">
                      {course.oldPrice}
                    </span>
                  </div>
                  <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex items-center justify-center mt-8 gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            1
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">2</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            3
          </button>
          <span className="px-4 py-2 text-gray-500">...</span>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            5
          </button>
        </div>
      </div>
    );
  };
  
  export default SearchPage;
  