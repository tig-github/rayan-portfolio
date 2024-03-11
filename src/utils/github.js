/*
    Github API data fetching
*/
import { Octokit } from "octokit";

/* 
    gets commits from github user tig-github from 2024
    sends an unauthenticated request meant to run on deployment
*/
export const getCommits = async () => {
    const octokit = new Octokit();
    const query_string = 'q=' + encodeURIComponent(`author:tig-github author-date:2024-01-01..2024-12-31`);
    const commitData = await octokit.paginate(`GET /search/commits?${query_string}`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'        
        },
    });
    return commitData;
}

/* 
    gets commits from 2021-2023 and saves them to JSON
    sends an authenticated request meant only to run for processing prior to deployment
*/
export const getPriorCommits = async () => {
    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
    const query_string = 'q=' + encodeURIComponent(`author:tig-github author-date:2021-01-01..2024-01-01`);
    const commitData = await octokit.paginate(`GET /search/commits?${query_string}`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'        
        },
    });
    return commitData;
}

// test function that gets issues from a repository, used for testing the github API
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

// creates dict of form {date: count} then reprocesses into format of [...{date: date, count: count}]
export const processCommitCounts = (commits) => {
  let counts = {};
  commits.forEach(
      (commit) => {
          let commitDate = (commit['commit']['author']['date']).slice(0,10);
          if (commitDate in counts) {
              counts[commitDate]++;
          }
          else {
              counts[commitDate] = 1;
          }
      }
  )
  return counts;
}

// turns the count dict into an array of individual values
export const processCommitValues = counts => {
    let vals = [];
    Object.keys(counts).map((commitDate) => {
        vals.push({date: commitDate, count: counts[commitDate]});
    })
    return vals;
}