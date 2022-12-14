import React, { useState } from "react";
import "./scss/components/main.scss";
import ProjectsView from "./components/views/ProjectsView";
import SettingsView from "./components/views/SettingsView";
import Menu from "./components/Menu";
import ThirdView from "./components/views/ThirdView";

const App: React.FC = () => {
  const [view, setView] = useState("Projects");
  return (
    <div className="main">
      <Menu setView={setView} />
      <div className="views">
        {view === "Projects" && <ProjectsView />}
        {view === "Settings" && <SettingsView />}
        {view === "Third view" && <ThirdView />}
      </div>
    </div>
  );
};

export default App;
