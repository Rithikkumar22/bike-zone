import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CartItem({ product }) {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {

    fetchImage(product.product_id);
  }, [product]);

  const fetchImage = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/get-product-image/${productId}`);
      if (response.status === 200) {
        setImageSrc(response.data.message); 
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  const handleEmi = async () => {
    navigate('/emi');
  };

  return (
    <div className="type2">
      <div className="cart">
        <img src={`${imageSrc}`} alt={product.name} />
        <h2>{product.name}</h2>
        <h3>Price: {product.price}</h3>
        <h4>Engine Capacity: {product.engineCapacity}</h4>
        <h4>Mileage: {product.mileage}</h4>
        <h4>Kerb Weight: {product.kerbweight}</h4>
        <h4>Seat Height: {product.seatheight}</h4>
        <h4>Fuel Tank Capacity: {product.fuelTankcapacity}</h4>
        <h4>Power: {product.power}</h4>
        <br />
        <button onClick={handleEmi} className="emi">
          Calculate EMI
        </button>
      </div>
    </div>
  );
}

export default CartItem;


