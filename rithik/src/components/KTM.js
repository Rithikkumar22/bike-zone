import React from "react";
import { useNavigate } from "react-router-dom";

function KTM({ product, onAddToCart }) {
  const { name, image, price, engineCapacity, mileage, kerbweight, seatheight, fuelTankcapacity, power } = product;
  const navigate = useNavigate();

  // const handleAddToWishlist = () => {
  //   // Call the onAddToCart function with the product object
  //   onAddToCart(product);
  // };

  const handleEmi = async () => {
    navigate("/emi");
  };

  return (
    <div className="type2">
      <img src={product.image} className="photo1" alt={name} />
      <h2>Name : {product.name}</h2>
      <h3>Price : {product.price}</h3>
      <h4>Engine Capacity : {product.engineCapacity}</h4>
      <h4>Mileage : {product.mileage}</h4>
      <h4>Kerb Weight : {product.kerbweight}</h4>
      <h4>Seat Height : {product.seatheight}</h4>
      <h4>Fuel Tank Capacity : {product.fuelTankcapacity}</h4>
      <h4>Power : {product.power}</h4>
      <br />
      <button onClick={handleEmi} className="emi">
        Calculate EMI
      </button>
      <button className="emi" onClick={() => onAddToCart(product)}>
        Add to Wishlist
      </button>
    </div>
  );
}

export default KTM;
