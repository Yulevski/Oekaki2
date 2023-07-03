import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';


function LoginPage({ setUser }) {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(username);
    console.log(`User ${username} logged in.`);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter your username" />
        <button type="submit">Login</button>
      </form>
      <Link to="/themepage">次へ</Link>
    </div>
  );
}

export default LoginPage;
