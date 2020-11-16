import React from "react";

export default function Tags(props){
    function createTag(obj, index) {
        return (<button key={index} type="button" className={"tag btn btn-sm btn-outline-" + obj.color} disabled>{obj.name}</button>);
    }
    return (
        <div>
            { props.lang.map(createTag)}
            < br />
            { props.lib.map(createTag)}
            < br />
            { props.tool.map(createTag)}
            < br />
        </div>
    );
}