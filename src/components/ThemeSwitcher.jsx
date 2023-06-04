import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export const ThemeSwitcher = () => {
  const { themes } = useTheme();

  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <div className={isLightTheme ? "light" : "dark"}>
      <h1>Question 3</h1>
      <p>Current Theme: {isLightTheme ? themes[0] : themes[1]}</p>
      <button onClick={() => setIsLightTheme(!isLightTheme)}>
        Change Theme
      </button>
    </div>
  );
};
