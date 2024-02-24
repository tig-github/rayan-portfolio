/*
    Github API data fetching
*/
import { Octokit } from "octokit";
import * as env from 'env-var';


// test function that gets issues from a repository
export const getIssues = async () => {
    console.log(process.env.REACT_APP_GITHUB_TOKEN);
    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });

    const issueData = await octokit.paginate("GET /repos/{owner}/{repo}/issues", {
        owner: "octocat",
        repo: "Spoon-Knife",
        per_page: 10,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
    console.log(issueData);
}