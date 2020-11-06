import React, { useState } from "react";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import classRoomService from "../services/classroom-service";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: "1rem",
    width: "300px",
  },
  input: {
    width: "300px",
    marginBottom: "0.5rem",
  },
}));

const Landing = () => {
  const [showInput, setShowInput] = useState(false);
  const [classroomCode, setClassroomCode] = useState("");
  const classes = useStyles();
  let history = useHistory();

  const addClassRoom = async () => {
    const newClassRoomId = await classRoomService.createClassroom();
    localStorage.setItem("classRoomId", newClassRoomId);
    history.push(`/classroom/${newClassRoomId}`);
  };

  const joinClassroom = async () => {
    localStorage.setItem("classRoomId", classroomCode);
    history.push(`/classroom/${classroomCode}`);
  };

  const handleOnClassroomCodeChange = (event) => {
    setClassroomCode(event.target.value);
  };

  return (
    <div>
      <Header />
      <section className="home__actions-section">
        <Button
          onClick={() => setShowInput(!showInput)}
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddIcon />}
        >
          Join a classroom
        </Button>

        {showInput ? (
          <div className="landing__join-classroom">
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Classroom code"
              variant="outlined"
              value={classroomCode}
              onChange={handleOnClassroomCodeChange}
            />
            <Button
              onClick={() => joinClassroom()}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </div>
        ) : null}

        <p>OR</p>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => addClassRoom()}
          className={classes.button}
          startIcon={<CreateIcon />}
        >
          Create a classroom
        </Button>
      </section>
    </div>
  );
};

export default Landing;
