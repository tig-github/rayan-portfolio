/*
    Github API data fetching
*/
import { Octokit } from "octokit";


// test function that gets issues from a repository
export const getIssues = async () => {
    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
    const issueData = await octokit.paginate("GET /repos/{owner}/{repo}/issues", {
        owner: "tig-github",
        repo: "tig-github.github.io",
        per_page: 100,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
    console.log(issueData);
    return issueData;
}

// gets commits from github user tig-github
export const getCommits = async () => {
    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
    const query_string = 'q=' + encodeURIComponent('author:tig-github');
    const commitData = await octokit.paginate(`GET /search/commits?${query_string}`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'        
        },
    });
    return commitData;
}