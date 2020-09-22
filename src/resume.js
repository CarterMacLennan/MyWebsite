import React, { useState } from 'react';
import pdf from "./pdf/Resume.pdf";
import Navigation from "./navigation";

export default function Resume() {
    return (
        <div>
            <Navigation />
            <embed className = "resume" src={pdf}/>
        </div>
    );
}