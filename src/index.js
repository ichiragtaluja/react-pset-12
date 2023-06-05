import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartTotalContext";
import { BrowserRouter } from "react-router-dom";
import { UserPreferenceProvider } from "./contexts/UserPreferenceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserPreferenceProvider>
        <UserProvider>
          <LanguageProvider>
            <ThemeProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </ThemeProvider>
          </LanguageProvider>
        </UserProvider>
      </UserPreferenceProvider>
    </BrowserRouter>
  </React.StrictMode>
);
