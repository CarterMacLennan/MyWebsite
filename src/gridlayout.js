import React from "react";
import Card from "./card";
import CardInfo from "./cardInfo";

export default function GridLayout(){
    return (
        <div className="container-fluid" >
            <div className="card-columns">
                {CardInfo.map((projects, index) => <div key={index} ><Card project={projects} /></div>)}
            </div>
        </div>
        
    );
}