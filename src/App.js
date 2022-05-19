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
import Users from "./Pages/Dashboard/Users";
import ReqAdmin from "./Pages/Auth/ReqAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment";

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

        {/* Dashboard Route */}
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
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="users"
            element={
              <ReqAdmin>
                <Users />
              </ReqAdmin>
            }
          />
          <Route
            path="addDoctor"
            element={
              <ReqAdmin>
                <AddDoctor />
              </ReqAdmin>
            }
          />
          <Route
            path="manageDoctors"
            element={
              <ReqAdmin>
                <ManageDoctors />
              </ReqAdmin>
            }
          />
        </Route>
        {/* Dashboard Route End */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
