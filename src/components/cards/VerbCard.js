import React from "react";
import { languageVerbs } from "../utils/languageVerbs"; 

import "../../styles/VerbCard.css";

import { VerbSentenceCard } from "./VerbSentenceCard";

export const VerbCard = ({ language, verbClicked, selectedVerb, setSelectedVerb }) => {

    const verbArr = languageVerbs[language].map(i => i.name);


    const renderVerbs = () => {
        return verbArr.map(key => {
            return(
                <div 
                className="indi-verb" 
                key={key} 
                onClick={() => verbClicked(key)}
                >
                    {key}
                </div>
            );
        })
    }

    return(
        <div className="verb-container">
            {!selectedVerb ? renderVerbs() : <VerbSentenceCard selectedVerb={selectedVerb} language={language} setSelectedVerb={setSelectedVerb}/>}
        </div>
    );
}