import  { useState } from "react";
import { Icon } from "@iconify/react";
import Header from "../Header"
const CourseOverview = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
    <Header />
    <div className="p-6 md:p-12 bg-white">
      {/* Course Overview Header */}
      <h1 className="text-2xl font-bold mb-6">Course Overview</h1>
  
      {/* Requirements and Tags Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 bg-white p-6 rounded-lg border max-w-[600px]">
        {/* Requirements Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Requirements</h2>
          <ul className="list-disc pl-6 text-gray-700 text-sm">
            <li>Passion for design</li>
            <li>Patience and practice</li>
            <li>Creativity mindset</li>
            <li>Computer with compatible operating system</li>
            <li>Creativity mindset</li>
          </ul>
        </div>
  
        {/* Tags Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              "Graphic Designers",
              "Digital Artists",
              "Web Designer",
              "UI/UX Designers",
              "Photographers",
              "Photographers",
            ].map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
  
      {/* Horizontal Rule */}
      <hr className="border-gray-300 my-8 max-w-[650px] " />
  
      {/* Combined Course Description and Additional Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-8 max-w-[600px]">
        <h2 className="text-xl font-semibold mb-4">Course Details</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          The Photoshop Master Course: From Beginner to Expert is a comprehensive learning experience designed to take you from a novice to a proficient user of Adobe Photoshop. Whether you are an aspiring graphic designer, a photographer looking to enhance your images, or simply someone interested in learning the ins and outs of this powerful software, this course is perfect for you.
        </p>
        {isExpanded && (
          <>
            <p className="text-gray-700 leading-relaxed mt-4 text-sm">
              Throughout this course, you will be guided through the fundamentals of Photoshop, gradually building your skills and knowledge to achieve expert-level proficiency. The course is structured to provide a step-by-step learning approach, ensuring that you grasp each concept before moving on to the next.
            </p>
            <h2 className=" font-semibold mt-6 mb-4 text-md">
              Why Take the Photoshop Master Course: From Beginner to Expert?
            </h2>
            <ul className="list-disc pl-6 text-gray-700 text-sm">
              <li>Comprehensive curriculum covering basics to advanced techniques.</li>
              <li>Suitable for all skill levels.</li>
            </ul>
          </>
        )}
       <div
  className="text-blue-600 mt-4 cursor-pointer flex items-center space-x-1 text-blue "
  onClick={toggleExpand}
>
  <span>{isExpanded ? "Show Less" : "Show More"}</span>
  <Icon
    icon={isExpanded ? "mdi:chevron-up" : "mdi:chevron-down"}
    className="w-4 h-4"
  />
</div>
      </div>
  

      <hr className="border-gray-300 my-8 max-w-[650px] " />
      {/* Next Button */}
      <div className="flex">
        <button className="bg-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2 w-40">
          <span>Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default CourseOverview;
