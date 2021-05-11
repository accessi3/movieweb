import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return(
        <nav className ="navigation">
            <Link to ="/">Home</Link>
            <Link 
              to ={{
                pathname : "/about",
                state : {
                    fromNavigation : true
                }
            }}>About</Link>
        </nav>
    )
}

export default Navigation;