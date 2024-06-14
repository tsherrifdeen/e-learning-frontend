import { Outlet } from "react-router-dom";
const NoLayout = () => {
  return (
    <section className="flex flex-col justify-between w-full min-h-screen">
      <Outlet />
    </section>
  );
};

export default NoLayout;
