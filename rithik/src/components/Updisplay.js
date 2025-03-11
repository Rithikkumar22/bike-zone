import React from "react";
import user from "./upcoming.json";
import Upcoming from "./Upcoming";

function Display(){
    return(
        <div className="App1">
            {user.map((data)=>{
                return <Upcoming {...data}/>

            })}
            
            
        </div>
    );
}
export default Display;