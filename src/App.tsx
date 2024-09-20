import { useEffect, useState } from "react";
import "./App.css";
import { ComponentListElement, ThemeToggleButton } from "./components/ui";
import { components } from "./config";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <main className="app">
      <aside className="aside">
        <div className="topics">
          <h2>Components</h2>
          <div>
            {components.map((component) => (
              <ComponentListElement
                onClick={setSelectedProject.bind(null, component)}
                key={component.id}
                isSelected={selectedProject?.id === component.id}
                label={component.label}
              />
            ))}
          </div>
        </div>
        <div className="actions">
          {/* <button onClick={toggleTheme}>
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          </button> */}
          <h4>Theme</h4>
          <ThemeToggleButton theme={theme} onClick={toggleTheme} />
        </div>
      </aside>
      <div className="main">
        <h1>Hello</h1>
      </div>
    </main>
  );
}

export default App;
