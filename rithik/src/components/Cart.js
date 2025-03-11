import React from 'react';

function Cart({cart,onRemoveFromCart}){
    return(
        <div className='cart'>
        <h2>Your Wishlist</h2>
        <ul>
            {cart.map((item,index)=>(
                <li key={index}>
                    <img src={item.image}/>
                    <h2>Name : {item.name}</h2>
                    <h3>Price : {item.price}</h3>
                    <h4>Engine Capacity : {item.engineCapacity}</h4>
                    <h4>Mileage : {item.mileage}</h4>
                    <h4>Kerb Weight : {item.kerbweight}</h4>
                    <h4>Seat Height : {item.seatheight}</h4>
                    <h4>Fuel Tank Capacity : {item.fuelTankcapacity}</h4>
                    <h4>Power : {item.power}</h4><br/>
                    <button onClick={()=> onRemoveFromCart(index)}>Remove</button>
                    
                </li>
            ))}
        </ul>
    </div>

    );
}
export default Cart;