import React from "react";
import user from "./Suzuki.json";
import Suzuki from "./Suzuki";

function SDisplay({onAddToCart}){
    return(
       
        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <Suzuki key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
        </div>
        
    );
}
export default SDisplay;