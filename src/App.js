import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Auth/Login";
import Registration from "./Pages/Auth/Registration";
import ReqAuth from "./Pages/Auth/ReqAuth";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/appointment"
          element={
            <ReqAuth>
              <Appointment />
            </ReqAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
