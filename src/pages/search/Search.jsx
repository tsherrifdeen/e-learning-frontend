/* eslint-disable react/prop-types */
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseCard = ({ course, handleAddToCart }) => (
  <div className="border rounded-lg shadow-lg max-h-[400px] flex flex-col">
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-[150px] object-cover rounded-t-lg"
    />
    <div className="p-4 flex flex-col justify-between flex-grow">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-blue font-semibold">{course.category}</span>
        {course.badge && (
          <span className="text-sm px-2 py-1 bg-brown text-white rounded-xl">
            {course.badge}
          </span>
        )}
      </div>
      <h3 className="font-bold text-lg mb-2">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{course.tutor}</p>
      <div className="flex items-center gap-1 mb-4">
        <span className="text-yellow">★★★★★</span>
        <p className="text-sm text-gray-600">{course.rating}</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-xl">
            {course.price.toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
              minimumFractionDigits: 0,
            })}
          </p>
          {course.initialPrice && (
            <p className="line-through text-gray-400 text-sm">
              {course.initialPrice.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
                minimumFractionDigits: 0,
              })}
            </p>
          )}
        </div>
        <button
          className="text-blue underline"
          onClick={() => handleAddToCart(course)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);


const CoursesPage = ({ courses = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedCourses, setDisplayedCourses] = useState(courses);

  const filterCourses = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setDisplayedCourses(courses);
    } else {
      setDisplayedCourses(
        courses.filter((course) => course.badge === category)
      );
    }
  };

  const handleAddToCart = (course) => {
    toast.success(`${course.title} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex items-center justify-between ">
  {/* Search Results Section */}
  <div>
  <h1 className="text-2xl font-bold">Search Results for &quot;JavaScript&quot;</h1>
    <p className="text-sm text-gray-600">{courses.length} Courses Found</p>
  </div>

  {/* Filter Buttons */}
  <div className="flex gap-4 m-5">
    {["All", "Popular", "Trending", "New"].map((category) => (
      <button
        key={category}
        className={`px-4 py-2 rounded-lg ${
          selectedCategory === category
            ? "bg-blue-500 text-white"
            : "bg-gray-100 text-gray-600"
        }`}
        onClick={() => filterCourses(category)}
      >
        {category}
      </button>
    ))}
  </div>
</div>


      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center gap-4">
        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
          &lt;
        </button>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg"
            >
              {page}
            </button>
          ))}
        </div>
        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
          &gt;
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};


const sampleCourses = [
  {
    id: 1,
    title: "Learn JavaScript",
    tutor: "John Doe",
    category: "Programming",
    badge: "Popular",
    rating: 4.5,
    price: 10000,
    initialPrice: 12000,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 2,
    title: "Advanced React",
    tutor: "Jane Smith",
    category: "Frontend",
    badge: "New",
    rating: 4.7,
    price: 15000,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    tutor: "Alice Johnson",
    category: "Web Design",
    badge: "Trending",
    rating: 4.9,
    price: 20000,
    initialPrice: 25000,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 4,
    title: "Advanced React",
    tutor: "Jane Smith",
    category: "Frontend",
    badge: "New",
    rating: 4.7,
    price: 15000,
    image: "https://via.placeholder.com/400",
  },
  
  // Add more course objects as needed
];
export default function App() {
  return <CoursesPage courses={sampleCourses} />;
}



