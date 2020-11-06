import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const images = [
  "https://imgur.com/cp9TRwi.png",
  "https://imgur.com/UdbaimC.png",
  "https://i.imgur.com/H9lUfUC.jpg",
  "https://i.imgur.com/YEm1K11.jpg",
  "https://i.imgur.com/3ksi2Xn.jpg",
  "https://i.imgur.com/1YLBA21.jpg",
  "https://i.imgur.com/7Zencwd.jpg",
  "https://i.imgur.com/Gf8Ef8P.jpg",
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Person = ({ person }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {person.firstName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={person.firstName + " " + person.lastName}
        subheader={person.phoneNumber}
      />
      <CardMedia
        className={classes.media}
        image={
          images[Math.floor(Math.random() * Math.floor(images.length - 1))]
        }
        title="Person Image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {person.bio}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Persons = ({ persons }) => {
  return (
    <div className="persons__card-list-container">
      {persons.map((person) => (
        <Person
          key={person.firstName + person.lastName}
          person={person}
        ></Person>
      ))}
    </div>
  );
};

export default Persons;
