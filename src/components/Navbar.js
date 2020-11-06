import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import EqualizerIcon from "@material-ui/icons/Equalizer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  navbar: {
    backgroundColor: "#5b0367",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.navbar} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link className="navbar__link" to="/classroom">
            Socialize
          </Link>
        </Typography>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Link className="navbar__link" to="/statistics">
            <EqualizerIcon />{" "}
          </Link>
        </IconButton>
        <Button variant="outlined" color="inherit" startIcon={<AddIcon />}>
          <Link className="navbar__link" to="/newPerson">
            Add yourself
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
