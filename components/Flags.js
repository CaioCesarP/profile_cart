import React from "react";

const Flags = ({ flag, portugues, ingles, setIdioma }) => {

    const handleClickIngles = () => {
        setIdioma(ingles)
    }

    const handleClickPortugues = () => {
        setIdioma(portugues)
    }

    return (
        <section className="flags" >
            <div className="flag ingles" onClick={() => handleClickIngles()} style={{ backgroundImage: ingles.flags }} />
            <div className="flag portugues" onClick={() => handleClickPortugues()} style={{ backgroundImage: portugues.flags }} />
        </section>
    )
}

export default Flags;
