import HeraderImg from "../../assets/Background.png";
import BlogCard from "../../components/Blog/Blog-card";
import Blogs from "./Blog"

const Blog = () => {
  return (
    <main className="mt-28 md:mt-6 w-[90%] mx-auto">
      <div>
        <img src={HeraderImg} alt="" />
        <Blogs/>
        <BlogCard>
          <h3 className="text-xl font-bold">
            Popular<span className="text-[#F0A305] px-2">Articles</span>
          </h3>
        </BlogCard>
        <BlogCard>
          <div>
            <h3 className="text-xl font-bold">
              Latest<span className="text-[#F0A305] px-2">Articles</span>
            </h3>
          </div>
        </BlogCard>
      </div>
    </main>
  );
};

export default Blog;
