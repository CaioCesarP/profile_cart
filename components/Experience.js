import React from "react";

const Experience = ({ experience }) => {
    const content = experience.content;

    return (
        <section className="experience" >
            <h3>{experience.title}</h3>
            <section className="job" >
                <div className="describe">
                    <h5>{content[1].name}</h5>
                    <h6>{content[1].profission}</h6>
                </div>
                <small>{content[1].time}</small>
            </section>
            <p>{content[1].content}</p>
        </section>
    )
}

export default Experience;
