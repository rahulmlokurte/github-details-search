import { Card, CardHeader } from "@material-ui/core";
import React from "react";

function GitHubCard({ githubcard }) {
  return (
    <div>
      <div>
        <Card elevation={1}>
          <CardHeader title={githubcard.login} />
        </Card>
        <Card elevation={1}>
          <CardHeader title={githubcard.public_repos} />
        </Card>
        <Card elevation={1}>
          <CardHeader title={githubcard.twitter_username} />
        </Card>
        <Card elevation={1}>
          <CardHeader title={githubcard.blog} />
        </Card>
        <Card elevation={1}>
          <CardHeader title={githubcard.name} />
        </Card>
      </div>
    </div>
  );
}

export default GitHubCard;
