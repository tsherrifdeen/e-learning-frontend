import About from "../../components/home/About";
import CoursesHome from "../../components/courses/CoursesHome";
import NewCourses from "../../components/courses/NewCourses";
import HomeHeader from "../../components/common/header/HomeHeader";
import Testimonials from "../../components/home/Testimonials";
import BecomeTutor from "../../components/instructor/BecomeTutor";
import MeetInstructor from "../../components/instructor/MeetInstructor";
import BlogCard from "../../components/Blog/Blog-card";
import Partners from "../../components/home/Partners";
import Subscribe from "../../components/common/Subscribe/Subscribe";
const Home = () => {
  return (
    <main className="mt-28 md:mt-6 w-[90%] mx-auto">
      <HomeHeader />
      <NewCourses />
      <CoursesHome />
      <About />
      <MeetInstructor />
      <Testimonials />
      <BecomeTutor />
      <BlogCard>
        <div>
          <h2 className="mb-4 text-4xl font-bold text-center text-midnightBlue">
            Articles & Updates
          </h2>
          <p className="text-2xl font-normal leading-9 text-gray-600">
            Discover the latest trends and strategies in marketing through our
            insightful blog, empowering you to elevate your brand and reach new
            heights
          </p>
        </div>
      </BlogCard>
      <Partners />
      <Subscribe />
    </main>
  );
};

export default Home;
