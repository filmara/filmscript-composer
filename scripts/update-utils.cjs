const { exec } = require('child_process');

// Function to run commands using exec, with a filter for benign stderr messages
function runGitCommands(commands, callback) {
  exec(commands, (error, stdout, stderr) => {
    // Check if stderr contains any real error messages except the typical Git output messages
    if (error) {
      console.error(`Error executing git commands: ${error}`);
      return;
    }

    // Filter out known benign messages from stderr
    if (stderr && !stderr.includes('-> FETCH_HEAD') && !stderr.includes('-> origin')) {
      console.error(`Error in git operations: ${stderr}`);
      return;
    }

    console.log(`Git operations successful: ${stdout}`);
    callback();
  });
}

// Command to change directory and pull latest changes from main
const commandsToRun = `
cd ./app/utils &&
git pull origin main
`;

// Execute the git commands
runGitCommands(commandsToRun, () => {
  console.log('Successfully pulled the latest updates from main.');
});

