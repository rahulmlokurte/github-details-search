import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";
import SearchGithub from "./SearchGithub";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "blocks",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

function Layout({ children }) {
  const classes = useStyles();

  const logoutHandler = () => {
    console.log("I am clicked");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Rahul Lokurte Github Stats
          </Typography>
          <Button color="inherit" onClick={logoutHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <SearchGithub />
    </div>
  );
}

export default Layout;
