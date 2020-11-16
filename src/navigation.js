import React from "react";

export default function Navigation(){
    return (
        <nav className="navbar navbar-expand navbar-dark">
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav pull-left">
                    <li className="nav-item active">
                        <a className="nav-link" href="/MyWebsite/#/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/MyWebsite/#/Resume">Resume</a>
                    </li>
                </ul>
            </div>
            <span className="navbar-text pull-right">2020-11-15</span>
        </nav>
    );
}