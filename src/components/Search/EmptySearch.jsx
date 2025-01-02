const EmptySearch = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Icon */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 15.232l4.768 4.768M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>
  
        {/* Text */}
        <h1 className="text-lg font-semibold text-gray-800 mb-2">
          Oops! No results found for your search.
        </h1>
        <p className="text-gray-600 text-center">
          Please check your spelling or try again with different keywords.
        </p>
      </div>
    );
  };
  
  export default EmptySearch;
  