import React from "react";
import user from "./Yezdi.json";
import Yezdi from "./Yezdi";

function SDisplay({ onAddToCart }){
    return(
        
        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <Yezdi key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
        </div>
        
    );
}
export default SDisplay;