import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-logo">
        TRUST ADMIN
      </div>

      <NavLink to="/admin/dashboard">
        Dashboard
      </NavLink>

      <NavLink to="/admin/logo">
        Logo
      </NavLink>

      <NavLink to="/admin/slider">
        Hero Slider
      </NavLink>

      <NavLink to="/admin/about">
        About
      </NavLink>

      <NavLink to="/admin/video">
        Video
      </NavLink>

      <NavLink to="/admin/category">
        Category
      </NavLink>

      <NavLink to="/admin/gallery">
        Gallery
      </NavLink>

      <NavLink to="/admin/contacts">
        Contacts
      </NavLink>

    </div>
  );
}

export default Sidebar;