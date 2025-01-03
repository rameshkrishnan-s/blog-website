import "./Login.css";

function AuthLogin() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Sign in to your account</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="form-input"
            />
          </div>

          <button type="submit" className="auth-button">Sign In</button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <a href="/register" className="auth-link">Register</a>
        </p>
      </div>
    </div>
  );
}

export default AuthLogin;
