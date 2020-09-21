import React from "react";
import Card from "./card";
import CardInfo from "./cardInfo";

export default function GridLayout(){
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {CardInfo.map(projects => <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12"><Card project={projects} /></div>)}
            </div>
        </div>
    );
}