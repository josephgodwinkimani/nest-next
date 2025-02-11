const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

// Source and destination directories
const srcDir = path.join(__dirname, 'dist');
const destDir = path.join(__dirname, '..', '..', 'dist', 'frontend', 'dist'); // Change this to your desired target folder

// Function to ensure directory exists
function mkdirSyncRecursive(dirPath) {
  if (fs.existsSync(dirPath)) return true;
  mkdirSyncRecursive(path.dirname(dirPath));
  fs.mkdirSync(dirPath);
}

// Ensure destination directory exists
mkdirSyncRecursive(destDir);

// Function to copy files recursively
function copyFiles(srcPath, destPath) {
  if (fs.lstatSync(srcPath).isDirectory()) {
    const files = fs.readdirSync(srcPath);
    files.forEach((file) => {
      const filePath = path.join(srcPath, file);
      const destFilePath = path.join(destPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        mkdirSyncRecursive(destFilePath); // Ensure subdirectories exist before copying into them.
        copyFiles(filePath, destFilePath);
      } else {
        fs.copyFileSync(filePath, destFilePath); // Use sync version for simplicity; consider async for production environments.
      }
    });
  }
}

// Watcher setup
chokidar
  .watch(srcDir)
  .on('add', (filePath) => console.log(`File added: ${filePath}`))
  .on('unlink', (filePath) => console.log(`File removed: ${filePath}`))
  .on('change', (filePath) => console.log(`File changed: ${filePath}`));

console.log('Watching frontend build directory...');

setInterval(() => {
  try {
    copyFiles(srcDir, destDir);
    console.log('Copied latest changes from frontend.');
  } catch (error) {
    console.error('Error copying files:', error.message);
  }
}, 5000);
