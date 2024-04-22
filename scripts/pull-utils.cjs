const fs = require('fs');
const path = require('path');
const { exec } = require('child_process'); // Import exec from child_process

// Correctly resolve the path to package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = require(packageJsonPath);

// Get the current package version
const currentVersion = packageJson.version;

// Function to run commands using exec
function runGitCommands(commands, callback) {
  exec(commands, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing git commands: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`Error in git operations: ${stderr}`);
      return;
    }
    console.log(`Git operations successful: ${stdout}`);
    callback();
  });
}

// Commands to change directory, create a new branch, add, commit, and push changes
const commandsToRun = `
cd ./app/utils &&
git checkout -b "${currentVersion}" &&
git add . &&
git commit -m "filmscript-composer-${currentVersion}" &&
git push origin "${currentVersion}" &&
git checkout main &&
open "https://github.com/filmara/utils/pull/new/${currentVersion}"
`;

// Execute the git commands
runGitCommands(commandsToRun, () => {
  console.log('All operations completed successfully.');
});
