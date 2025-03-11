import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'http://localhost:3001/api',
  });

  const isValidEmail = (email) => {
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSignUp = async () => {
    try {
  
      if (!username || !email || !password) {
        setError('All fields are required');
        return;
      }

  
      if (!isValidEmail(email)) {
        setError('Invalid email address');
        return;
      }

      const response = await api.post('/signup', { username, email, password });
      if (response.status === 201) {
        navigate('/'); 
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="login">
      <h1>Sign UP</h1>
      <hr/>
      <input type="text" id='name' placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
      <input type="email" id='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input type="password" id='pass' placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button className='btn btn-success' onClick={handleSignUp}>Sign Up</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default SignUp;
