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

// creates dict of form {date: count} then reprocesses into format of [...{date: date, count: count}]
export const processCommitCounts = (commits) => {
  let counts = {};
  console.log(commits)
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
  console.log(counts);
  return counts;
}
// turns the count dict into an array of individual values
export const processCommitValues = (counts) => {
    let vals = [];
    Object.keys(counts).map((commitDate) => {
        vals.push({date: commitDate, count: counts[commitDate]});
    })
    return vals;
}