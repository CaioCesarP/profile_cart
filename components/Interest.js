import React from "react";

const Interest = ({ interest }) => {
    
    return (
        <section className="interest" >
            <h4>{interest.title}</h4>
            <p>{interest.content}</p>
        </section>
    )
}

export default Interest;
