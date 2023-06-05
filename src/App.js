import "./App.css";
import { UserProfile } from "./components/UserProfile";
import { Translate } from "./components/Translate";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { CartSummary } from "./components/CartSummary";
import { NavLink, Routes, Route } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Notes } from "./components/Notes";
import { Settings } from "./components/Settings";

function App() {
  return (
    <div className="App">
      {/* <UserProfile />
      <Translate />
      <ThemeSwitcher />
      <CartSummary /> */}
      <NavLink to="profile">Profile</NavLink> ||
      <NavLink to="notes">Notes</NavLink> ||
      <NavLink to="settings">Settings</NavLink>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
