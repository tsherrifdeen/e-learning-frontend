import { Icon } from "@iconify/react"; // If you're using Iconify for the notification icon

const HeaderTutor = () => {
  return (
    <div className="flex items-center justify-end gap-8 p-4">
      {/* Left Section with Notification Icon */}
      <div className="flex items-center">
        <span className="text-3xl text-black">
          <Icon icon="bx:bell" />
        </span>
      </div>

      {/* Right Section with Profile Image */}
      <div className="flex items-center">
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <img
            src="" // Replace with the actual URL of the profile image
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTutor;
