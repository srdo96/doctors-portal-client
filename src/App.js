import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Auth/Login";
import Registration from "./Pages/Auth/Registration";
import ReqAuth from "./Pages/Auth/ReqAuth";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route
          path="appointment"
          element={
            <ReqAuth>
              <Appointment />
            </ReqAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <ReqAuth>
              <Dashboard />
            </ReqAuth>
          }
        >
          <Route index element={<MyAppointments />} />
          <Route path="review" element={<MyReview />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
