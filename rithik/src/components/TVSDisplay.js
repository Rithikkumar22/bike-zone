import React from "react";
import user from "./TVS.json";
import TVS from "./TVS";

function TDisplay({onAddToCart}){
    return(
        
        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <TVS key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
        </div>
    
    );
}
export default TDisplay;