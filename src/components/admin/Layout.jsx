import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="admin-main">

        <Header />

        <div className="admin-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Layout;