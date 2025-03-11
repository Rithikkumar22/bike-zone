import React from "react";
import user from "./Bmw.json";
import Bmw from "./Bmw";

function SDisplay({ onAddToCart }){
    return(
        
        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <Bmw key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
        </div>
        
    );
}
export default SDisplay;