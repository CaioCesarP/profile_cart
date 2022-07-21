import React from 'react';

const Info = ({ info }) => {

    const mail = info.email;

    const handleClick = () => {
        window.location = mail;
    }

    return (
        <section className="info" >
            <div className="info-img" style={{ backgroundImage: info.image }} />
            <h1>{info.name}</h1>
            <h3>{info.profission}</h3>
            <small>{info.website}</small>
            <section className="button" >
                <button id="email" onClick={() => handleClick()} ><i className="fa-solid fa-envelope"></i> Email</button>
            </section>
        </section>
    )
}

export default Info;
