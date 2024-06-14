import About from "../../components/about/About";
import ArticleCard from "../../components/Blog/article-card";
import CoursesHome from "../../components/courses/CoursesHome";
import NewCourses from "../../components/courses/NewCourses";
import HomeHeader from "../../components/header/HomeHeader";
import Testimonials from "../../components/testimonial/Testimonials";
import BecomeTutor from "../../components/instructor/BecomeTutor";
import MeetInstructor from "../../components/instructor/MeetInstructor";
import BlogCard from "../../components/Blog/Blog-card";

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
      <BlogCard />
      <ArticleCard />
    </main>
  );
};

export default Home;
