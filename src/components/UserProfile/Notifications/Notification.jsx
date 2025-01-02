import { Icon } from "@iconify/react";

const NoNotifications = () => {
  return (
    <div className="absolute top-1/4 left-0 right-0 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md sm:max-w-xl w-full text-center border ">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Icon
            icon="hugeicons:note-04"
            className="text-blue"
            width="80" // Default size for smaller screens
            height="80"
            style={{ maxWidth: "100px", maxHeight: "100px" }} // For larger screens
          />
        </div>

        {/* Message */}
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          No new notifications for now!
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Don’t worry, we’ll keep you updated with exciting news and updates.
          Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default NoNotifications;
