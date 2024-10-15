import { useParams } from "react-router-dom";
import { allCourses } from "../../data/templates/alltem";
const CourseTemDescription = () => {
  const { courseId } = useParams();

  const selectedCourse = allCourses.find(
    (course) => course.id === parseInt(courseId)
  );

  return (
    <div className="">
      {selectedCourse ? (
        <div>
          <div>
            <div className="p-7 md:p-7 lg:p-14 lg:grid lg:grid-cols-3 md:gap-7">
              <div className="max-w-[800px] md:max-w-full lg:max-w-[800px] md:col-span-2">
                <div className="border-b-2">
                  <div>
                    <img
                      src={selectedCourse.image}
                      className="w-[800px] md:w-full"
                    />
                  </div>
                  <br />
                  <p className="font-bold text-4xl text-[#353F50]">
                    {selectedCourse.title}
                  </p>
                </div>
                <div className="border-b-2">
                  <h1 className="font-semibold text-[20px] py-3">Overview: </h1>
                  <p className="text-[16px] text-[#555E6C]">
                    {selectedCourse.description}
                  </p>
                </div>
                <div>
                  <h1 className="font-semibold text-[20px] py-3">
                    Key Features:
                  </h1>
                  <p>{selectedCourse.keyfeature}</p>
                </div>
              </div>
              <div className="max-w-full lg:max-w-[500px] pt-16 lg:pt-0 md:px-16 lg:px-0">
                <div className="">
                  <div className="bg-[#E6EFFE] flex flex-col p-8 rounded-xl">
                    <h1 className="text-[#0751CB] pb-5 text-[18px] flex justify-center">
                      One Time Payment
                    </h1>
                    <p className="text-[#033484] py-3 font-bold text-[24px] flex justify-center">
                      {selectedCourse.price.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                      <span className="line-through text-[#8B919A] text-[16px] flex items-center">
                        {" "}
                        {selectedCourse.discount}
                      </span>
                    </p>
                    <div className="py-3">
                      <div className="py-3 border border-[#B1B5BB] rounded-2xl flex justify-center">
                        <a className="font-semibold text-[16px] text-[#353F50]">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="py-3">
                      <div className="bg-[#055FF0] py-3 rounded-2xl flex justify-center">
                        <a className="font-semibold text-[16px] text-[#d2b1b1]">
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <p className="flex justify-center text-[12px] text-[#8B919A]">
                      A month money back guarantee
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="text-[#353F50] text-[20px] font-semibold py-5">
                    Included files and component
                  </h1>
                  <ul>
                    <li className="text-[#555E6C] text-[16px] pb-3">
                      Pre-designed UI Elements
                    </li>
                    <li className="text-[#555E6C] text-[16px] pb-3">
                      Wireframe Templates
                    </li>
                    <li className="text-[#555E6C] text-[16px] pb-3">
                      Interactive Prototyping Tools
                    </li>
                    <li className="text-[#555E6C] text-[16px] pb-3">
                      5000+ Icon Library
                    </li>
                    <li className="text-[#555E6C] text-[16px] pb-3">
                      Typography Styles
                    </li>
                    <li className="text-[#555E6C] text-[16px] pb-3">
                      Color Palette
                    </li>
                    <li className="text-[#555E6C] text-[16px] pb-3">
                      Additional Design Assets
                    </li>
                    <li className="text-[#555E6C] text-[16px] pb-3">
                      Design Documentation
                    </li>
                  </ul>
                </div>
                <div className="py-5">
                  <div className="p-8 border border-[#E6E7E9] rounded-xl">
                    <div className="flex justify-between pb-6">
                      <h1 className="text-[18px] text-[#555E6C] font-semibold">
                        Last Updated
                      </h1>
                      <p className="text-[16px] text-[#555E6C]">
                        February 2023{" "}
                      </p>
                    </div>
                    <div className="flex justify-between pb-6">
                      <h1 className="text-[18px] text-[#555E6C] font-semibold">
                        Published
                      </h1>
                      <p className="text-[16px] text-[#555E6C]">
                        January 2023{" "}
                      </p>
                    </div>
                    <div className="flex justify-between pb-6">
                      <h1 className="text-[18px] text-[#555E6C] font-semibold">
                        Graphics Asset
                      </h1>
                      <p className="text-[16px] text-[#555E6C]">Figma FIG</p>
                    </div>
                    <div className="flex justify-between pb-6">
                      <h1 className="text-[18px] text-[#555E6C] font-semibold">
                        Compatible Software Version
                      </h1>
                      <p className="text-[16px] text-[#555E6C]">Figma </p>
                    </div>
                    <div>
                      <h1 className="text-[20px] text-[#353F50]">Tags</h1>
                      <div className="flex justify-between gap-4 py-5">
                        <a className="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">
                          Visual Design
                        </a>
                        <a className="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">
                          UI/UX Designers
                        </a>
                        <a className="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">
                          Design Workflow
                        </a>
                      </div>
                      <div className="flex justify-around gap-4">
                        <a className="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">
                          Visual Design
                        </a>
                        <a className="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">
                          Design Elements
                        </a>
                        <a className="text-[12px] text-[#555E6C] px-6 py-3 border border-[#B1B5BB] rounded-xl">
                          Patterns
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-7 py-7 md:px-7 lg:px-14">
              <h1 className="text-[24px] font-semibold text-[#020F24]">
                Student Reviews
              </h1>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <div className="p-5 bg-white shadow-xl rounded-xl">
                    <span className="text-[#8B919A] text-[10px] flex justify-end">
                      2 months ago
                    </span>
                    <div className="md:flex md:justify-between">
                      <div className="flex">
                        <img
                          src={selectedCourse.avarta}
                          alt=""
                          className="object-cover w-10 h-10 rounded-full"
                        />
                        <p className="flex items-center text-[#020F24] text-[16px] font-medium">
                          hello
                        </p>
                      </div>
                      <div className="flex items-center justify-end">
                        <i className="fa fa-star text-[#FFC728] text-[16px] px-1"></i>
                        <i className="fa fa-star text-[#FFC728] text-[16px] px-1"></i>
                        <i className="fa fa-star text-[#FFC728] text-[16px] px-1"></i>
                        <i className="fa fa-star text-[#FFC728] text-[16px] px-1"></i>
                        <i className="fa fa-star text-[#FFC728] text-[16px] px-1"></i>
                        <span className="flex items-center text-[#8B919A] text-[10px]">
                          (4.5)
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#353F50] text-[14px] pt-5">
                        I've tried various online learning platforms, but this
                        one stands out from the rest. The quality of content,
                        the interactive learning experience, and the valuable
                        resources provided have surpassed my expectations. It's
                        been an incredible learning adventure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Course not found.</div>
      )}
    </div>
  );
};

export default CourseTemDescription;
