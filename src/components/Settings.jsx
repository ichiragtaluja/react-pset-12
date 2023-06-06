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
        <select
          onChange={(e) => {
            console.log(e.target.value);
            setSelectedFont(e.target.value);
          }}
        >
          <option default>Select Fonts</option>
          {fontSizes.map((font) => (
            <option value={font}>{font}</option>
          ))}
        </select>
      </label>{" "}
      <label>
        Color Scheme:
        <select onChange={(e) => setSelectedColor(e.target.value)}>
          {colorSchemes.map((color) => (
            <option selected={selectedColor === color}>{color}</option>
          ))}
        </select>
      </label>
    </div>
  );
};
