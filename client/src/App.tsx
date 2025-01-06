import FaucetForm from "./components/FaucetForm";
import axios, { config } from "./configure";
import "./App.css";
import "./styleConfig";

import { createContext, useState, SetStateAction, Dispatch } from "react";
type Context = {
  theme: string;
  toggleTheme: Dispatch<SetStateAction<Context>>;
};

const initialState: Context = {
  theme: "",
  toggleTheme: (): void => {
    throw new Error("toggleTheme function must be overridden");
  },
};

export const ThemeContext = createContext(initialState);
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <FaucetForm axios={axios} config={config} />
        {/* <img alt="powered-by-logo" className="power-by-logo"/> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
