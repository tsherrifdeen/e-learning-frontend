import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import RootLayout from "./layouts/RootLayout";
import NoLayout from "./layouts/NoLayout";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Search from "./pages/search/Search";
import Template from "./pages/template/Template";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/404/NotFound";
import Development from "./pages/courses/development/Development";
import Design from "./pages/courses/design/Design";
import Marketing from "./pages/courses/marketing/Marketing";
import Business from "./pages/courses/business/Business";
import { useLocation } from "react-router-dom";
import CourseTemDescription from "./components/Template Page/single";
import DevelopmentDesc from "./pages/courses/development/DevelopmentDesc";
import DesignDesc from "./pages/courses/design/DesignDesc";
import MarketingDesc from "./pages/courses/marketing/MarketingDesc";
import BusinessDesc from "./pages/courses/business/BusinessDesc";
import Tutor from "./pages/tutor/Tutor";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      {/* <ScrollToTopOnRouteChange /> */}
      <Routes>
        {/* Main routes  */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="search" element={<Search />} />
          <Route path="contact" element={<Contact />} />
          <Route path="tutor" element={<Tutor />} />
        </Route>
        {/* Auth routes */}
        <Route path="/auth" element={<NoLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        {/* Course routes */}
        <Route path="/courses" element={<RootLayout />}>
          <Route index element={<Development />} />
          <Route path="design" element={<Design />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="business" element={<Business />} />
          <Route path="development/:courseId" element={<DevelopmentDesc />} />
          <Route path="design/:courseId" element={<DesignDesc />} />
          <Route path="marketing/:courseId" element={<MarketingDesc />} />
          <Route path="business/:courseId" element={<BusinessDesc />} />
        </Route>
        {/* templates */}
        <Route path="template" element={<RootLayout />}>
          <Route index element={<Template />} />
          <Route path=":courseId" element={<CourseTemDescription />} />
        </Route>
        {/* Not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
