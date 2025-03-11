import React from "react";
import user from "./Royal.json";
import Royal from "./Royal";

function RDisplay({ onAddToCart }){
    return(
       
        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <Royal key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
            
        </div>
        
    );
}
export default RDisplay;