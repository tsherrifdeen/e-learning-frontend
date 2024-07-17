// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
const User = () => {
  return (
    <section className="flex flex-col justify-between min-h-screen font-poppins">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default User;
