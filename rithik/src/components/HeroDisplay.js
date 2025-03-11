import React from "react";
import user from "./Hero.json";
import Hero from "./Hero";

function HeDisplay({ onAddToCart }){
    return(
       
        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <Hero key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
        </div>
        
    );
}
export default HeDisplay;