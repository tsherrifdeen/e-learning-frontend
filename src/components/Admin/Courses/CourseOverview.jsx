import Header from "../Header";
import Teacher from "./teacher.jpeg"
import { Icon } from '@iconify/react'; // If you're using Iconify for the notification icon

const CourseOverview = () => {
  return (
    <div>
        <Header/>
        <div className="p-6 space-y-8">
      {/* Course Overview Header */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Course Overview</h1>
        <div className="flex gap-10">
          {/* Course Image */}
          <img
            src={Teacher}
            alt="Course"
            className="rounded-lg"
          />

          {/* Course Details */}
          <div className="space-y-4">
            <p className="text-sm text-gray-500">Date Created - Jan 21, 2020</p>
            <h2 className="text-lg font-semibold">
              Graphic Design Masterclass - Learn GREAT Design
            </h2>
            <p className="text-sm">
              Created by: <span className="font-medium">Kevin Gilbert</span>
            </p>
            <hr />
            <div className="flex items-center space-x-4">
              <p className="text-xl font-semibold">$13.99</p>
              <span className="text-sm text-gray-500">Course prices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trailer Video Section */}
      <div>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Trailer Video"
          className="rounded-lg "
        />
        <div className="absolute inset-0 flex justify-center items-center">
         
        </div>
        <h2 className="text-xl font-bold mt-4">Trailer video</h2>
        <p className="text-sm text-gray-600">
          • Category: Design • Instructor: Robert Fox • Level: Beginners - Expert
        </p>
      </div>

      {/* Next Button */}
      <div className="flex">
            <button className="bg-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2 w-40">
                <span>Next</span>
                <Icon icon="ic:baseline-greater-than" width="20" height="20" />
            </button>
     </div>

    </div>
    </div>
  );
};

export default CourseOverview;
