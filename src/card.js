import React from "react";
import Tags from "./tags";
import Links from "./links";

export default function Card(props){
    return (
        <div className="card">
            <img src={props.project.information.image} className="card-img-top proj-image" alt="..." />
            <div className="card-body">
                {/* information */}
                <h5 className="card-title"><strong>{props.project.information.title}</strong></h5>
                <p className="card-subtitle mb-2 text-muted">{props.project.information.desc}</p>
                {/* Buttons */}
                <Tags lang={props.project.languages} lib={props.project.libraries} tool={props.project.tools}/>
                <Links redirect={props.project.redirects}/>
            </div>
        </div> 
    );
}