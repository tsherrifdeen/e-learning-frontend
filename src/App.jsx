import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useEffect } from "react";
import RootLayout from "./layouts/RootLayout";
import NoLayout from "./layouts/NoLayout";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Search from "./pages/search/Search";
import Template from "./pages/template/Template";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup";
import Contact from "./pages/contact";
import NotFound from "./pages/404";
import Development from "./pages/courses/development/Development";
import Design from "./pages/courses/design/Design";
import Marketing from "./pages/courses/marketing/Marketing";
import Business from "./pages/courses/business/Business";
// import { useLocation } from "react-router-dom";
import CourseTemDescription from "./components/Template Page/single";
import DevelopmentDesc from "./pages/courses/development/DevelopmentDesc";
import DesignDesc from "./pages/courses/design/DesignDesc";
import MarketingDesc from "./pages/courses/marketing/MarketingDesc";
import BusinessDesc from "./pages/courses/business/BusinessDesc";
import Tutor from "./pages/tutor/Tutor";
import Tutorsignup from "./components/tutor/onboarding/Signup";
import Layout from "./components/tutor/TutorDashboard/index";
import Adminlayout from './components/Admin/index'
import UserProfilelayout from './components/UserProfile/Rightside'
// import Dashboard from "./components/tutor/TutorDashboard";
// import Withdraw from "./components/tutor/TutorDashboard/withdraw/Withdraw";
import WithdrawAmount from "./components/tutor/TutorDashboard/withdraw/WIthdrawalAmount";
import WithdrawCode from "./components/tutor/TutorDashboard/withdraw/VerifyCode";
// import TutorAccount from "./components/tutor/Account/Account";
// import MyCourses from "./components/tutor/My courses/mycourses";
import CourseView from "./components/tutor/My courses/CourseView";
import AdvancedInfo from "./components/tutor/My courses/AdvancedInfo";
import CourseCurriculum from "./components/tutor/My courses/CourseCurriculum";
import SearchPage from "./components/Search/SearchPage"
import EmptySearch from "./components/Search/EmptySearch"
import PaymentReceipt from "./pages/Receipt/Receipt"


// function ScrollToTopOnRouteChange() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

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
        {/*tutor*/}
        {/* <Route element={}>
          <Route> 

          </Route>
        </Route>  */}

        {/* Not found route */}
        <Route path="*" element={<NotFound />} />

        <Route path="/tutor-dash/*" element={<Layout />} />
        <Route path="/admin-dash/*" element={<Adminlayout />} />
        <Route path="/user/*" element={<UserProfilelayout />} />


        <Route path="tutorsign" element={<Tutorsignup />} />
        <Route path="withdrawamount" element={<WithdrawAmount />} />
        <Route path="withdrawcode" element={<WithdrawCode />} />
        <Route path="courseview" element={<CourseView />} />
        <Route path="advanced" element={<AdvancedInfo />} />
        <Route path="curriculum" element={<CourseCurriculum />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="emptysearch" element={<EmptySearch/>} />
        <Route path="receipt" element={<PaymentReceipt/>} />

      </Routes>
    </Router>
  );
};

export default App;
