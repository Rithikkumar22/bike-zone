import React from "react";
import user from "./Yamaha.json";
import Yamaha from "./Yamaha";

function YDisplay({onAddToCart}){
    return(
        
        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <Yamaha key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
            
        </div>
        
    );
}
export default YDisplay;