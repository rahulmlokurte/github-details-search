import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GitHubCard from "./GitHubCard";

const useStyles = makeStyles({
  field: {
    marginTop: 50,
    marginBottom: 20,
    display: "block",
    width: 800,
  },
});

function SearchGithub() {
  const classes = useStyles();
  const [gitHubUser, setgitHubUser] = useState();
  const [gitHubResponses, setgitHubResponses] = useState([]);

  const searchGitHubHandler = (event) => {
    setgitHubUser(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("https://api.github.com/users/" + gitHubUser)
      .then((res) => res.json())
      .then((data) => setgitHubResponses(data));
    console.log("I am submitted ", gitHubUser);
  };
  return (
    <Container>
      <form noValidate autoComplete="false" onSubmit={submitHandler}>
        <TextField
          label="Enter GitHub User"
          variant="outlined"
          fullWidth
          className={classes.field}
          onChange={searchGitHubHandler}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Search
        </Button>
      </form>
      <GitHubCard githubcard={gitHubResponses} />
    </Container>
  );
}

export default SearchGithub;
