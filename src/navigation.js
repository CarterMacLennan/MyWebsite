import React from "react";

export default function Navigation(){
    return (
        <nav class="navbar navbar-expand navbar-dark">
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav pull-left">
                    <li class="nav-item active">
                        <a class="nav-link" href="//codeply.com">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Resume</a>
                    </li>
                </ul>
            </div>
            <span class="navbar-text pull-right">16/09/2020</span>
        </nav>
    );
}
 