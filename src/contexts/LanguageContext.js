import { createContext, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const translations = {
    en: {
      hello:
        "Hello! I hope you're having a great day filled with joy and happiness. Hello and welcome to you!",
      goodbye:
        "Goodbye! I hope we'll see each other again soon. May your day be filled with happiness and success. Goodbye and until next time!",
    },
    es: {
      hello:
        "¡Hola! Espero que estés teniendo un excelente día lleno de alegría y felicidad. ¡Hola y bienvenido/a a ti!",
      goodbye:
        "¡Adiós! Espero que nos volvamos a ver pronto. Que tu día esté lleno de felicidad y éxito. ¡Adiós y hasta la próxima!",
    },
    fr: {
      hello:
        "Salut! J'espère que tu passes une excellente journée remplie de joie et de bonheur. Bonjour et bienvenue à toi!",
      goodbye:
        "Au revoir! J'espère que nous nous reverrons bientôt. Que ta journée soit remplie de bonheur et de réussite. Salut et à la prochaine!",
    },
  };

  const languageOptions = Object.keys(translations);
  return (
    <LanguageContext.Provider value={{ translations, languageOptions }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguge = () => useContext(LanguageContext);
