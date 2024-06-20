import blogData from "../../data/blog/blog.json";
import BlogA from "../../assets/Blog 1.png";
import BlogB from "../../assets/Business.png";
import BlogC from "../../assets/Design 1.png";
import BlogD from "../../assets/Design 2.png";
import BlogE from "../../assets/Design 3.png";
import BlogG from "../../assets/Development 4.png";
const imageMap = {
  BlogA,
  BlogB,
  BlogC,
  BlogD,
  BlogE,
  BlogG,

  // Add mappings for other blog images
};

const BlogCard = ({ children }) => {
  return (
    <div className="my-9">
      {children}

      <div className="w-full mx-auto">
        <div className="grid mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="items-center w-full bg-white rounded-lg shadow-md"
            >
              <a href="#" className="h-[200px] overflow-hidden">
                <img
                  className="bg-cover rounded-t-lg"
                  src={imageMap[blog.image]}
                  alt="product image"
                />
              </a>
              <div className="px-2 py-5">
                <div className="flex justify-between text-sm">
                  <div>
                    <a className="text-blue">{blog.category}</a>
                  </div>
                  <div>
                    <span className="text-gray-500">{blog.date}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a className="my-8" href="#">
                    <h3 className="text-[15px] tracking-tight font-bold">
                      {blog.title}
                    </h3>
                  </a>
                  <div className="flex items-center justify-between mt-5">
                    <span className="text-xs text-gray-900 ">
                      By {blog.author}
                    </span>
                    <a href="#" className="text-sm font-bold text-blue">
                      Read post
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
