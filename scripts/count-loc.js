const fs = require('fs');
const path = require('path');

function countLines(dir) {
  let total = 0;
  let fileCount = 0;
  
  function walk(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
      const fullPath = path.join(currentDir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('dist')) {
        walk(fullPath);
      } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.json') || file.endsWith('.css') || file.endsWith('.html'))) {
        const lines = fs.readFileSync(fullPath, 'utf8').split('\n').length;
        total += lines;
        fileCount++;
      }
    }
  }
  
  walk(dir);
  return { total, fileCount };
}

const rootDir = path.resolve(__dirname, '..');
const result = countLines(rootDir);
console.log('----------------------------------------------------');
console.log(`AegisEHR Total Lines of Code (LOC): ${result.total.toLocaleString()} lines`);
console.log(`Total Tracked Source Files: ${result.fileCount}`);
console.log('----------------------------------------------------');
