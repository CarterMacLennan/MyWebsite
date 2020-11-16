import React from "react";

export default function Links(props){
    return (
        <div className="container">
            <div className="row">
                {props.redirect.map((obj, index) => <div key={index} className="col link"><a className={"btn btn-block btn-lg " + obj.style} href={obj.link} role="button"><i className={obj.name}/></a></div>)}
            </div>
        </div>
    );
}