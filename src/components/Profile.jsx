import React from "react";
import { useUserPreference } from "../contexts/UserPreferenceContext";

export const Profile = () => {
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
      <h1>Profile</h1>
      <h3>Name: Tanay Pratab</h3>
      <h3>Role: Super Mentor</h3>
    </div>
  );
};
