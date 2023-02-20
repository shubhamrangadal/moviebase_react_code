import React,{useState} from "react";
import {useNavigate } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  };

  const boxStyle = {
    border: '1px solid #333',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  };

  const inputStyle = {
    margin: '1rem',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '3px',
    width: '100%',
    fontSize: '1.2em',
  };

  const buttonStyle = {
    margin: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    fontSize: '1.2em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    loginWithRedirect();
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ margin: '0' }}>Log in</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input type="email" placeholder="Email" style={inputStyle} value={email} onChange={handleEmailChange} />
          <input type="password" placeholder="Password" style={inputStyle} value={password} onChange={handlePasswordChange} />
          <button type="submit" style={buttonStyle}>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
