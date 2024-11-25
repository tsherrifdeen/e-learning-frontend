

const AddCaption = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            &times;
          </button>
  
          {/* Header */}
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Add Lecture Caption
          </h2>
  
          {/* Description Label */}
          <label htmlFor="description" className="text-sm font-medium text-gray-700">
            Caption
          </label>
  
          {/* Text Area */}
          <textarea
            id="caption"
            placeholder="Write your Caption here "
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="5"
          ></textarea>
  
          {/* Add Description Button */}
          <button
            className="w-full bg-blue text-white py-3 mt-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Add Caption
          </button>
        </div>
      </div>
    );
  };
  
  export default AddCaption;
  