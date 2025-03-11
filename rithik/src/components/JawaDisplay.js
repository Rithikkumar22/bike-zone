import React from "react";
import user from "./Jawa.json";
import Jawa from "./Jawa";

function SDisplay({ onAddToCart }){
    return(
      
        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <Jawa key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
        </div>
        
    );
}
export default SDisplay;