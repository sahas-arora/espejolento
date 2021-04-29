import React from "react";

import { languageVerbs } from "../utils/languageVerbs";

import "../../styles/VerbSentenceCard.css";

export const VerbSentenceCard = ({ language, selectedVerb, setSelectedVerb }) => {
    const renderVerbSentence = () => {
        console.log('language= ', language)
        console.log('language v l= ', languageVerbs[language])
        const sentences = languageVerbs[language] 
        ? languageVerbs[language].find(sent => sent.name === selectedVerb).sentences : [];
        // const sentences = languageVerbs[language].map(item=> item.sentences[0]);

        // return sentences.map(key => console.log(languageVerbs[language][key]))
        return sentences;
    }

    const renderVerbOptions = () => {
        return languageVerbs[language].map(item => {
            return(
                <div 
                className="verb-option"
                onClick={() => setSelectedVerb(item.name)}
                >
                    {item.name}
                </div>
            )
        })
        
    }

    

    return(
        <div className="verb-sentence-container">
            <div className="verb-sentence">
                {renderVerbSentence()}
            </div>
            <div className="verb-options-container">
                {renderVerbOptions()}
            </div>
        </div>
    );
}