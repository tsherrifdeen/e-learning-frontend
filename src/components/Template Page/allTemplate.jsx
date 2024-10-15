import { useState } from "react";
import { allCourses } from "../../data/templates/alltem";
import Button from "../common/button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const AllTemplate = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState(allCourses);

  const [selectedCategory, setSelectedCategory] = useState("All"); // Initialize with 'All'

  const filterCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setCourses(allCourses);
    } else {
      setCourses(allCourses.filter((course) => course.category === category));
    }
  };
  return (
    <section className="mb-20">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <h1 className="text-3xl font-bold md:text-4xl text-midnightBlue">
          All <span className="text-yellow">Templates</span>
        </h1>
        <div className="flex flex-wrap items-center gap-4 px-2 py-3 rounded-2xl">
          <Button value="All" url="" onClick={() => setCourses(allCourses)} />
          <button
            onClick={() => filterCategory("Popular")}
            className={`${
              selectedCategory === "Popular" ? "bg-blue text-white" : ""
            }  p-2 rounded-xl   border-none  text-center `}
          >
            Popular
          </button>
          <button
            onClick={() => filterCategory("New")}
            className={`${
              selectedCategory === "New" ? "bg-blue text-white" : ""
            }  p-2 rounded-xl px-6   border-none  text-center `}
          >
            New
          </button>
          <button
            onClick={() => filterCategory("Price")}
            className={`${
              selectedCategory === "Price" ? "bg-blue text-white" : ""
            }  p-2 rounded-xl   border-none  text-center `}
          >
            Price
          </button>
        </div>
      </div>

      <main className="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course) => (
          <Link
            to={`/template/${course.id}`}
            key={course.id}
            className="duration-300 border rounded-lg shadow-lg"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[200px] object-cover rounded-t-lg "
            />
            <div className="flex flex-col w-full gap-3 px-4 py-3 ">
              <div className="flex items-center justify-between gap-4">
                <p className="text-blue">{course.category}</p>
                <span className="px-2 py-1 text-sm text-gray-400 rounded-2xl">
                  {course.badge}
                </span>
              </div>
              <Link to={`/template/${course.id}`}>{course.title}</Link>

              <div>
                <p>{course.tutor}</p>
                <div className="flex items-center">
                  <p className="text-yellow">★★★★★</p>
                  <span>{course.rating}</span>
                </div>
                <div className="my-3">
                  <span>{course.description}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-bold text-darkblue">
                    {course.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </h4>
                  {course.initialPrice && (
                    <span className="text-sm line-through text-lightslateblue ">
                      {course.initialPrice.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  )}
                  {course.discount && (
                    <small className="text-xs">{course.discount}% off</small>
                  )}
                </div>
                <button
                  className="font-semibold border-none outline-none bg-none text-blue"
                  onClick={() => {
                    dispatch(addToCart(course));
                    toast.success("Item added to cart", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }}
                >
                  Add to Cart
                </button>
              </div>
              <ToastContainer />
            </div>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default AllTemplate;
