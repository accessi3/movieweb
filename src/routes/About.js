import React from "react";
import "./About.css";

const About = (props) =>{
    console.log(props);
    return(
        <div className="about">
            <span className = "desc">This web is a sample site of ReactJS!</span>
        </div>
    )
}

export default About;
