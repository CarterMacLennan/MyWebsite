import React from 'react';
import pdf from "./pdf/Resume.pdf";
import Navigation from "./navigation";

export default function Resume() {
    return (
        <div>
            <Navigation />
            <iframe src={pdf} className="resume" > </iframe>
        </div>
    );
}