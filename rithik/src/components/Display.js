import React from "react";
import user from "./models.json";
import Latest from "./Latest";

function Display(){
    return(
        <div className="App">
            {user.map((data)=>{
                return <Latest {...data}/>

            })}
            
            
        </div>
    );
}
export default Display;