const chokidar = require('child_process');

// Function to run next build command
function runNextBuild() {
  console.log("Building Next.js application...");
  try {
    // Use child_process to execute the next build command.
    const buildProcess = chokidar.execSync('pnpm run build', { stdio: 'inherit' });
    console.log("Build completed.");
  } catch (error) {
    console.error("Error building application:", error.message);
  }
}

// Initial Build
runNextBuild();

// Watcher setup
const watcher = require('chokidar').watch([
  './src',
  './public',
], {
  persistent: true,
});

watcher.on('change', (filePath) => {
  console.log(`File changed: ${filePath}`);
  
  // Rebuild on change detection.
  runNextBuild();
});

console.log("Watching for changes...");
