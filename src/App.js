import "./App.css";
import { UserProfile } from "./components/UserProfile";
import { Translate } from "./components/Translate";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <UserProfile />
      <Translate />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
