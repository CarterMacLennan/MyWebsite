import React from "react";

export default function Links(props){
    return (
        <div class="container">
            <div class="row">
                {props.redirect.map(obj => <div class="col link"><a class={"btn btn-block btn-lg " + obj.style} href={obj.link} role="button"><i class={obj.name}/></a></div>)}
            </div>
        </div>
    );
}