/* eslint-disable react/prop-types */
import bgImg from "../../assets/course-bg.png";
import Button from "../common/button/Button";
import { useState } from "react";
import { useCartStore } from "../../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Courses = ({ buttons = [], data = [], category = "Courses", type }) => {

  const [courses, setCourses] = useState(data);
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [header, setHeader] = useState(category);
  const handleAddToCart = (course) => {
    addToCart(course);
    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleHeaderChange = (e) => {
    setHeader(e.target.innerText);
  };

  const filterCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setCourses(data);
    } else {
      setCourses(data.filter((course) => course.badge === category));
    }
  };
  return (
    <section>
      <img src={bgImg} alt="" />
      <div className="flex flex-col gap-6 my-6">
        <h2 className="text-xl text-lightslateblue">In-Demand Skills</h2>
        <div className="flex flex-wrap gap-8 ">
          {buttons.map((button) => (
            <button
              key={button.id}
              className="py-2 px-3 border text-[15px] outline-none hover:active:outline-none text-black border-[#8B919A] text-center"
              onClick={handleHeaderChange}
            >
              {button.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
        <h1 className="text-2xl font-bold md:text-3xl text-darkblue">
          {header}
        </h1>
        <div className="flex items-center gap-4 px-2 py-3 font-semibold rounded-2xl">
          <Button value="All" url="" onClick={() => setCourses(data)} />
          {["Popular", "Trending", "New"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterCategory(category)}
                  className={`p-2 rounded-xl px-6 text-center bg-[#E6EFFE] ${
                    selectedCategory === category ? "bg-blue text-white" : ""
                  }`}
                >
                  {category}
                </button>
            ))}

        </div>
      </div>

      {courses.length > 0 ? (
  <main className="grid mt-12 sm:grid-cols-2 md:grid-cols-3 gap-14">
    {courses.map((course) => (
             <div key={course.id} className="border rounded-lg shadow-lg ">
             <Link to={`/courses/${type}/${course.id}`}>
               <img
                 src={course.image}
                 alt={course.title}
                 className="w-full h-[200px] object-cover rounded-t-lg "
               />
             </Link>
             <div className="flex flex-col w-full gap-3 px-4 py-3 ">
               <div className="flex items-center gap-4">
                 <p className="text-blue">{course.category}</p>
                 {course.badge && (
  <span className="px-2 py-1 text-sm text-white bg-brown rounded-2xl">
    {course.badge}
  </span>
)}

               </div>
               <h3 className="text-lg font-bold text-darkblue">
                 {course.title}
               </h3>
               <div>
                 <p>{course.tutor}</p>
                 <div className="flex items-center">
                   <p className="text-yellow">★★★★★</p>
                   <span>{course.rating}</span>
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
                   onClick={() => handleAddToCart(course)}
                 >
                   Add to Cart
                 </button>
               </div>
             </div>
           </div>
    ))}
  </main>
) : (
  <p className="text-center text-lg text-darkblue">No courses available.</p>
)}

      <ToastContainer />
    </section>
  );
};

export default Courses;
