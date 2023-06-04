import React from "react";
import { useState } from "react";
import { useLanguge } from "../contexts/LanguageContext";

export const Translate = () => {
  const { translations, languageOptions } = useLanguge();
  const [buttonSelected, setButtonSelected] = useState(languageOptions[0]);

  return (
    <div>
      <h1>Question 2</h1>
      <div className="btn-container">
        {languageOptions.map((language) => (
          <button key={language} onClick={() => setButtonSelected(language)}>
            {language}
          </button>
        ))}
      </div>
      <p>{translations[buttonSelected]?.hello}</p>
      <p>{translations[buttonSelected]?.goodbye}</p>
    </div>
  );
};
