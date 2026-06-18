import "./Header.css";

function Header() {
  return (
    <div className="admin-header">
      <h3>Dashboard</h3>

      <button className="primary-btn">
        Logout
      </button>
    </div>
  );
}

export default Header;