import React from "react";
import { useUserPreference } from "../contexts/UserPreferenceContext";

export const Notes = () => {
  const {
    fontSizes,
    colorSchemes,
    selectedColor,
    selectedFont,
    setSelectedColor,
    setSelectedFont,
  } = useUserPreference();
  return (
    <div className={`${selectedColor} ${selectedFont}`}>
      <h1>Notes</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum rerum et
        delectus quidem ipsam nam exercitationem nihil dolorum atque voluptas?
        Quo modi illum ex perferendis facilis ratione magni suscipit eius!
      </p>
    </div>
  );
};
