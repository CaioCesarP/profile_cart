import React from "react";

const About = ({ about }) => {
    
    return (
        <section className="about" >
            <h4>{about.title}</h4>
            <p>{about.content}</p>
        </section>
    )
}

export default About;
