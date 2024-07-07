const Faq = () => {
  return (
    <div className="py-12 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-8 text-4xl font-semibold text-center">FAQs</h2>

        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-2 text-lg font-semibold">
              What is Tailwind CSS?
            </h3>
            <p className="text-gray-600">
              Tailwind CSS is a utility-first CSS framework that helps you build
              modern and responsive web interfaces.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-2 text-lg font-semibold">
              How do I install Tailwind CSS?
            </h3>
            <p className="text-gray-600">
              You can install Tailwind CSS using npm or yarn. Check the official
              documentation for detailed instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
