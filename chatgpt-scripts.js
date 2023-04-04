const { Octokit } = require("@octokit/rest");
const fs = require("fs");

const postComment = async (token, owner, repo, issue_number, body) => {
  const octokit = new Octokit({ auth: token });

  await octokit.rest.issues.createComment({
    owner,
    repo,
    issue_number,
    body,
  });
};

const main = async () => {
  // Read the content of the pr_diff.txt file
  const pr_diff = fs.readFileSync("pr_diff.txt", "utf8");

  // Set your variables
  const token = process.env.GITHUB_TOKEN;
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  const issue_number = process.env.PR_NUMBER;
  const body = `Changes in this pull request:\n\`\`\`diff\n${pr_diff}\n\`\`\``;

  // Post the comment
  await postComment(token, owner, repo, issue_number, body);
};

main().catch((err) => console.error(err));