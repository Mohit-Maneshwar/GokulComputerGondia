import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Faculty from "../pages/Faculty";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import CourseDetails from "../pages/CourseDetails";
import NotFound from "../pages/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />

<Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default MainRoutes;
