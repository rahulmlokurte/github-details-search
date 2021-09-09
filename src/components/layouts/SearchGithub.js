import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GitHubCard from "./GitHubCard";
import User from "./UserCard";
import { GithubContext } from "../../context/context";

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
  const { requests } = React.useContext(GithubContext);
  const searchGitHubHandler = (event) => {
    setgitHubUser(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(gitHubUser);
    if (gitHubUser) {
    }
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
        {requests > 0 && (
          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Search
          </Button>
        )}

        <h3>requests: {requests} / 60</h3>
      </form>
      <GitHubCard githubcard={gitHubResponses} />
      <User />
    </Container>
  );
}

export default SearchGithub;
