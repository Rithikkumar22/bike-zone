import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import axios from 'axios';

function Wishlist({ userId, onRemoveFromWishlist }) {
  const [wishlists, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user-wishlist/${userId}`);
        if (response.status === 200) {
    
          setWishlist(response.data);
          
        }
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlist();
  }, [userId]);

  return (
    <div>
      <h2 id='like'>My Wishlist</h2>
      {wishlists.length === 0 ? (
        <p id='empty'>Your wishlist is empty.</p>
      ) : (
        <div>
          <ul className='header-list'>
            {wishlists.map((item, index) => (
              <li key={index}>
                <button className='btn btn-danger' id='no' onClick={() => onRemoveFromWishlist(item.product_id)}>X</button>
                <CartItem product={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
