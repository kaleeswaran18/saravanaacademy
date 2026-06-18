import "./../../styles/Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-left">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="office"
          />
        </div>

        <div className="login-right">
          <h1>Welcome</h1>

          <p>
            Log in to your account
          </p>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button className="primary-btn">
            Login
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;