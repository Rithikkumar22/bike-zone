import React from "react";
import user from "./Honda.json";
import Honda from "./Honda";

function HDisplay({ onAddToCart }){
    return(

        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <Honda key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
            
        </div>
    );
}
export default HDisplay;