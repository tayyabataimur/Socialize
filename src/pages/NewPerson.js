import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Navbar from "../components/Navbar";
import classRoomService from "../services/classroom-service";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "400px",
    maxHeight: "520px",
  },
  header: {
    textAlign: "center",
  },
  input: {
    width: "100%",
    marginBottom: "1rem",
  },
  button: {
    width: "100%",
    marginTop: "1rem",
  },
}));

const NewPerson = () => {
  const classes = useStyles();
  let history = useHistory();
  const classRoomId = localStorage.getItem("classRoomId");

  const submitForm = async (event) => {
    event.preventDefault();

    const payload = {
      firstName: event.target.firstName.value,
      lastName: event.target.secondName.value,
      phoneNumber: event.target.phoneNumber.value,
      email: event.target.email.value,
      bio: event.target.bio.value,
      id: classRoomId,
    };

    console.log("creating person");

    await classRoomService.createPerson(payload);

    event.target.firstName.value = "";
    event.target.secondName.value = "";
    event.target.phoneNumber.value = "";
    event.target.email.value = "";
    event.target.bio.value = "";

    history.push(`/classroom/${classRoomId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="newPerson">
        <Card className={classes.root}>
          <CardHeader className={classes.header} title="Add a new person" />
          <CardContent>
            <form onSubmit={submitForm}>
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                name="firstName"
              />
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Second Name"
                variant="outlined"
                name="secondName"
              />
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
              />
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
              />
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Bio"
                variant="outlined"
                name="bio"
              />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                type="submit"
              >
                Submit Form
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewPerson;
