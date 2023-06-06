import { createContext, useContext } from "react";
import { useState } from "react";

const UserPreferenceContext = createContext();
export const UserPreferenceProvider = ({ children }) => {
  const fontSizes = ["large","medium","small"];
  const colorSchemes = ["dark", "light"];

  const [selectedFont, setSelectedFont] = useState(fontSizes[0]);
  const [selectedColor, setSelectedColor] = useState(colorSchemes[0]);

  return (
    <UserPreferenceContext.Provider
      value={{
        fontSizes,
        colorSchemes,
        selectedColor,
        selectedFont,
        setSelectedColor,
        setSelectedFont,
      }}
    >
      {children}
    </UserPreferenceContext.Provider>
  );
};

export const useUserPreference = () => {
  return useContext(UserPreferenceContext);
};
