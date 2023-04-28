import React from 'react';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h3>Log In</h3>
        <form>
          <div className="input-container">
            <label>Username:</label>
            <input type="text" name="username" />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input type="password" name="password" />
          </div>
          <button className="submit-btn" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;


