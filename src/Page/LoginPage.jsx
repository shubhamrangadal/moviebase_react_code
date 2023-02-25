import React,{useState} from "react";
import {useNavigate } from "react-router-dom"


const LoginComponent = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  const navigate = useNavigate();

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

  const handleLogin= async(email,password) => {
    try {
      const response = await fetch(
        `http://localhost:8080/users/${email}/${password}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      if(!data) {
        throw Error("Login Failed");
      }else{
        localStorage.setItem("userId",data["id"])
        localStorage.setItem("username",data["username"])
        props.isAuthenticated(true);
      }
      
    } catch (error) {
      setError(error.message);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    handleLogin(email,password);
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
