import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components1/Home";
import AboutUs from "./components1/AboutUs";
import Blogs from "./components1/Blogs";
import Services from "./components1/Services";
import Error from "./components1/Error";
import Header from "./components1/Header";
import StudentSay from "./components1/StudentSay";
import Login from "./components1/Login";
import Registration from "./components1/Registration";
import Courses from "./components1/Courses";
import Events from "./components1/Events";
import Feedback from "./components1/Feedback";
import Footer from "./components1/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/services" element={<Services />} />
        <Route path="/studentsay" element={<StudentSay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/event" element={<Events />} />
        <Route path="/feedback" element={<Feedback />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
