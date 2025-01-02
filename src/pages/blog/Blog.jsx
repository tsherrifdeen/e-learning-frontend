import PropTypes from "prop-types";

const buttons = [
  { id: 1, title: "Development" },
  { id: 2, title: "Marketing" },
  { id: 3, title: "Web Design" },
  { id: 4, title: "Video & Audio" },
  { id: 5, title: "Design" },
  { id: 6, title: "Health" },
  { id: 7, title: "Business" },
  { id: 8, title: "Finance" },
];

const Button = ({ title }) => {
  return (
    <button className=" text-gray px-4 py-2 rounded border-2 border-black">
      {title}
    </button>
  );
};

// Add prop-types validation
Button.propTypes = {
  title: PropTypes.string.isRequired,
};

const Blog = () => {
  return (
    <section className="mt-28 md:mt-6 w-[90%] mx-auto mb-20">
      <div className="flex  gap-4">
        {buttons.map((button) => (
          <Button key={button.id} title={button.title} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
