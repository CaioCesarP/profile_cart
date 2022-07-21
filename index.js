import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dot from "./components/Dot.js";
import Flags from "./components/Flags.js";
import Info from "./components/Info.js";
import About from "./components/About.js";
import Interest from "./components/Interest.js";
import Experience from "./components/Experience.js"
import Footer from "./components/Footer.js";

import module from "./utils/module.js";

const App = () => {
    const ingles = module.ingles;
    const portugues = module.portugues;

    const [idioma, setIdioma] = useState(ingles);

    return (
        <section className="app" >
            <Dot />
            <Flags flag={idioma.flags} ingles={ingles} portugues={portugues} idioma={idioma} setIdioma={setIdioma} />
            <section className="informations" >
                <Info info={idioma.info} />
                <About about={idioma.about} />
                <Interest interest={idioma.interest} />
                <Experience experience={idioma.experience} />
                <Footer footer={idioma.footer} />
            </section>
        </section>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
