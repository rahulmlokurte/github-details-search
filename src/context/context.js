import axios from "axios";
import React, { useState, useEffect } from "react";
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

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setrequests(remaining);
        if (remaining === 0) {
          //throw on error
        }
      })
      .catch((error) => console.log(error));
  };
  //request loading
  const [requests, setrequests] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(checkRequests, []);
  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, requests }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
