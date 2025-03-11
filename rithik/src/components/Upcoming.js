import React from 'react';

function Upcoming(props){
    const {name,image,price}=props;
    return(
        <div className='type1'>
            <img src={image} className='photo1'/>
            <h2>Name : {name}</h2>
            <h4>Price : {price}</h4>
            
        </div>
    );
}
export default Upcoming;