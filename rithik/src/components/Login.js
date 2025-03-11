import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


function Login(props) {
  const [username, setName] = useState(''); 
  const [password, setPassword] = useState('');
  const [email, setEmail]=useState('');
  const [error, setError] = useState(null);
  // const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'http://localhost:3001/api', 
  });

  const handleSignUp = async() => {
    navigate('/signup');
  }
  // const handleLogin = async (loggedInUserId) => {
  //   try {
  //       if (!username || !password) {
  //           setError('All fields are required');
  //           return;
  //         }
      
  //     const response = await api.post('/login', { username, password });
  //     const token = response.data.token; 
  //     localStorage.setItem('token', token);

      
  //     navigate('/Page'); 
  //     setUserId(loggedInUserId)
      
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     setError('Invalid credentials'); 
  //   }
  // };
  const handleLogin = async () => {
    try {
      if (!username || !password || !email) {
        setError('All fields are required');
        return;
      }
  
      const response = await api.post('/login', { username, password, email });
      const { token, userId } = response.data; 
  
      if (!token || !userId) {
        setError('Invalid response from the server');
        return;
      }
      props.setUserId(userId);
      console.log(userId);
      // setUserId(userId);
  
      
      Cookies.set('token', token, { path: '/', secure: true, sameSite: 'strict' });

      localStorage.setItem("email",email)

     
  
      navigate('/Page', { state: { userId, token } });

    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid username email or password');
    }
  };
  

  return (
    <div className="login">
        <h1>Login</h1>
        <hr/>
      <input type="text" id="name" placeholder="username" onChange={(e) => setName(e.target.value)} /><br /><br />
      <input type="email" id='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input type="password" id="pass" placeholder="password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button id='log' className='btn btn-success' onClick={handleLogin}>Login</button>
      <button id='sig' className='btn btn-primary' onClick={handleSignUp}>Signup</button>
      {error && <p className="error">{error}</p>} 
    </div>
  );
}
export default Login;

