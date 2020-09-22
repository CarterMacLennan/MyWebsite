import React from "react";
import Home from "./home";
import Resume from "./resume";
import { Route, Switch } from 'react-router-dom';

export default function App(){
    return(
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Resume" component={Resume} />
            </Switch>
        </main>
    );
}