import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";

import Login from "../pages/admin/Login";
import Logo from "../pages/admin/Logo";
import Dashboard from "../pages/admin/Dashboard";
//import   Heroslider from '../pages/admin/Heroslider';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Website */}

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
          
        />
        <Route
  path="/admin/logo"
  element={<Logo />}
/>
     {/* <Route
  path="/admin/slider"
  element={<Heroslider />}
/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;