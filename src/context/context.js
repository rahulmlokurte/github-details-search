import React, { useState } from "react";
import mockFollowers from "./mockdata/mockFollowers";
import mockRepos from "./mockdata/mockRepos";
import mockUser from "./mockdata/mockUser";
const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

//provider, consumer

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
