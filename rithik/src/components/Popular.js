import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Popular(props){
    const {name,image,price,engineCapacity,mileage,kerbweight,seatheight,fuelTankcapacity,power}=props;
    const navigate = useNavigate();

    const handleEmi = async () =>{
        navigate('/emi')

    }
    return(
        <div className='type2'>
            <img src={image} className='photo1'/>
            <h2>Name : {name}</h2>
            <h3>Price : {price}</h3>
            <h4>Engine Capacity : {engineCapacity}</h4>
            <h4>Mileage : {mileage}</h4>
            <h4>Kerb Weight : {kerbweight}</h4>
            <h4>Seat Height : {seatheight}</h4>
            <h4>Fuel Tank Capacity : {fuelTankcapacity}</h4>
            <h4>Power : {power}</h4><br/>
            <button onClick={handleEmi} className='emi'>Calculate EMI</button>

        </div>
    );
}
export default Popular;