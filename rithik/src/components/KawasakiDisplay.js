import React from "react";
import user from "./Kawasaki.json";
import Kawasaki from "./Kawasaki";

function SDisplay({onAddToCart}){
    return(
        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <Kawasaki key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
        </div>
    
    );
}
export default SDisplay;