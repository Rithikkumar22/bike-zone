import React from "react";
import user from "./popular.json";
import Popular from "./Popular";

function Display(){
    return(
        <div className="App2">
            {user.map((data)=>{
                return <Popular {...data}/>

            })}
            
            
        </div>
    );
}
export default Display;