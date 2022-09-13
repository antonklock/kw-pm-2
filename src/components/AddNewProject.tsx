import { Card, Button } from "@mui/joy";
import Popup from "reactjs-popup";
import "../scss/components/addNewProject.scss";

const AddNewProject = () => {
  return (
    <Popup trigger={<Button className="button">New Project</Button>}>
      <div className={"popUpContainer"}>
        <Card className={"popUp"}>
          <h1>Hello World!</h1>
        </Card>
      </div>
    </Popup>
  );
};

export default AddNewProject;
