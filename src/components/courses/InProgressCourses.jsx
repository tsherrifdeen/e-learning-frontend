import React from "react";
import InProgressCourseCard from "./InProgressCourseCard";

const coursesData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f032a53bade7a324f0b91370e6cf873c15ca924510cc06a6010285c078cf619b?apiKey=773458c8cc044c55a6297f97d04f683e&",
    title: "Web Development Masterclass & Certification",
    currentLecture: 15,
    totalLectures: 20,
    timeLeft: "15min",
    progress: 80,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f032a53bade7a324f0b91370e6cf873c15ca924510cc06a6010285c078cf619b?apiKey=773458c8cc044c55a6297f97d04f683e&",
    title: "Web Development Masterclass & Certification",
    currentLecture: 15,
    totalLectures: 20,
    timeLeft: "15min",
    progress: 50,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f032a53bade7a324f0b91370e6cf873c15ca924510cc06a6010285c078cf619b?apiKey=773458c8cc044c55a6297f97d04f683e&",
    title: "Web Development Masterclass & Certification",
    currentLecture: 15,
    totalLectures: 20,
    timeLeft: "15min",
    progress: 20,
  },
];

const InProgressCourses = () => {
  return (
    <section className="flex flex-col">
      <header className="flex gap-2.5 px-5 py-2 font-semibold max-md:flex-wrap">
        <h2 className="flex-1 text-2xl text-gray-700 max-md:max-w-full">
          In Progress
        </h2>
        <nav className="my-auto text-base leading-7 text-blue-600">
          <a href="#my-courses">My Courses</a>
        </nav>
      </header>
      <main className="flex justify-between w-full gap-5 px-5 mt-8 overflow-x-auto max-md:flex-wrap max-md:max-w-full">
        {coursesData.map((course, index) => (
          <InProgressCourseCard key={index} {...course} />
        ))}
      </main>
    </section>
  );
};

export default InProgressCourses;
