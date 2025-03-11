import React from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

function Header() {
  const navigate = useNavigate();

  const showWishlist = async () => {
    navigate('/wishlist');
  };

  const handleLogout = async () => {
    try {
      
      // await axios.post('http://localhost:3001/api/logout'); 

      localStorage.removeItem('token'); 

      if(window.confirm('Are you sure to Logout')){
        navigate('/');

      }
     
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header>
      <div className='head'>
        <img src='images.jpeg' className='pic' alt='Logo' />
        <h1 id='h1'>Find Yours</h1>
        <ul className='header-list'>
          <li id='cart' onClick={showWishlist}>
            Wishlist
          </li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
