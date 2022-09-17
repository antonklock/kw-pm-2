import { Button, TextField, Typography, Sheet } from "@mui/joy";
import AddNewProject from "../AddNewProject";
import ProjectItems from "../ProjectItems";
import "../../scss/components/views/projectViews.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Popup from "reactjs-popup";

type Project = {
  name: string;
  client: string;
  path: string;
  starred: boolean;
  id: string;
};

const ProjectsView = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [projectItems, setProjectItems] = useState<Project[]>([]);

  return (
    <>
      <div className="topWrapper">
        <div className="topRow">
          <Typography level="h4" fontWeight="400">
            Projects
          </Typography>
          <div>
            <Button className="button" variant="outlined">
              Add Project
            </Button>
            <AddNewProject
              projectItems={projectItems}
              setProjectItems={setProjectItems}
            />
          </div>
        </div>
        <div className="textField">
          <TextField placeholder="Search" />
        </div>
        <Sheet className="filterBar" variant="soft">
          <Button
            variant="plain"
            sx={{
              background: "none",
            }}
          >
            <KeyboardArrowDownIcon /> Star
          </Button>
          <p>Name</p>
          <p>Client</p>
          <p>Path</p>
          <p>Settings</p>
        </Sheet>
      </div>
      <div className="projectItems">
        <ProjectItems
          projectItems={projectItems}
          setProjectItems={setProjectItems}
        />
      </div>
    </>
  );
};

export default ProjectsView;
