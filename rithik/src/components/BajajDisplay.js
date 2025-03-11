import React from "react";
import user from "./bajaj.json";
import Bajaj from "./Bajaj";

function BDisplay({ onAddToCart }){
    return(

        <div style={{backgroundColor:"#E2E3D2"}} className="App">
            {user.map((data)=>{
                return <Bajaj key={data.name} product={data} onAddToCart={onAddToCart}/>

            })}
            
            
        </div>
       
    );
}
export default BDisplay;