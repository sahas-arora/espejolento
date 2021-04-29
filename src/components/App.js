import React, { useState } from "react";

import "../styles/App.css";

// import { languageVerbs } from "./utils/languageVerbs"; 


import { LanguageNameCard } from "./cards/LanguageNameCard";
import { VerbCard } from "./cards/VerbCard";

export const App = () => {

    // const [displayVerb, setDisplayVerb] = useState(false);
    const [language, setLanguage] = useState("Spanish");
    const [selectedVerb, setSelectedVerb] = useState('');
    // const [sentence, setSentence] = useState('');

    const cardClicked = (language) => {
        setLanguage(language);
        setSelectedVerb('');
    }

    const verbClicked = (v) => {
        setSelectedVerb(v);
    }


    return(
        <div className="app-container">
            <LanguageNameCard displayVerbs={cardClicked} />
            <VerbCard language={language} verbClicked={verbClicked} selectedVerb={selectedVerb} setSelectedVerb={setSelectedVerb} />
        </div>
    );
}

