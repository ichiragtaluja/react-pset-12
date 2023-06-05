import React from "react";
import { useState } from "react";
import { useUserPreference } from "../contexts/UserPreferenceContext";

export const Settings = () => {
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
      <h1>Preference Form</h1>
      <label>
        Font Size:
        <select onChange={(e) => setSelectedFont(e.target.value)}>
          {fontSizes.map((font) => (
            <option>{font}</option>
          ))}
        </select>
      </label>{" "}
      <label>
        Color Scheme:
        <select onChange={(e) => setSelectedColor(e.target.value)}>
          {colorSchemes.map((color) => (
            <option>{color}</option>
          ))}
        </select>
      </label>
    </div>
  );
};
