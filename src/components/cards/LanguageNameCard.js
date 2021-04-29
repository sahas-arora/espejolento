import React from "react";
import { languageVerbs } from "../utils/languageVerbs"; 

import "../../styles/LanguageCard.css";

export const LanguageNameCard = ({ displayVerbs }) => {

    const keys = Object.keys(languageVerbs);
    const renderLanguageCard = () => {
        return keys.map(name => {
            return(
                <div 
                className="lang-card"
                onClick={() => {
                    displayVerbs(name);
                }}
                >
                    {name}
                </div>
            );
        })
    }

    return(
        <div className="lang-card-container">
            {renderLanguageCard()}
        </div>
    )
}
