import React from "react";
import Tags from "./tags";
import Links from "./links";

export default function Card(props){
    return (
        <div class="card">
            <img src={props.project.information.image} class="card-img-top proj-image" alt="..." />
            <div class="card-body">
                {/* information */}
                <h5 class="card-title"><strong>{props.project.information.title}</strong></h5>
                <p class="card-subtitle mb-2 text-muted">{props.project.information.desc}</p>
                {/* Buttons */}
                <Tags lang={props.project.languages} lib={props.project.libraries} tool={props.project.tools}/>
                <Links redirect={props.project.redirects}/>
            </div>
        </div> 
    );
}