import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CourseOverview = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="p-6 md:p-12">
      {/* Header Section */}
      <h1 className="text-2xl font-bold mb-6">Course Overview</h1>

      {/* Video Section */}
      <div className="mb-8">
        <video
          className="w-full rounded-lg shadow-lg"
          controls
          src="/path-to-your-video.mp4"
        />
      </div>

      {/* Course Content Section */}
      <h2 className="text-xl font-semibold mb-4">Course Content</h2>

      {/* Modules */}
      <div className="space-y-4">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="border rounded-lg">
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                expandedModule === index ? "bg-blue-100" : "bg-gray-100"
              }`}
              onClick={() => toggleModule(index)}
            >
              <h3 className="text-lg font-medium">
                Module {index + 1}: Basic Image Editing
              </h3>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">2 Lectures</span>
                <span className="text-sm text-gray-600">20min</span>
                {expandedModule === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {expandedModule === index && (
              <div className="bg-white p-4">
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Photoshop interface and workspace</li>
                  <li>Photoshop tools and features</li>
                  <li>Photoshop templates</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Approve
        </button>
        <button className="bg-red-100 text-red-600 px-6 py-2 rounded-lg hover:bg-red-200">
          Decline
        </button>
      </div>
    </div>
  );
};

export default CourseOverview;
