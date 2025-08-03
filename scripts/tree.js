import fs from 'fs';
import path from 'path';

function generateTree(dir, prefix = '') {
  const files = fs.readdirSync(dir).filter((file) => !['node_modules', '.git', '.next'].includes(file));
  let result = '';

  files.forEach((file, index) => {
    const fullPath = path.join(dir, file);
    const isLast = index === files.length - 1;
    const stat = fs.statSync(fullPath);

    result += prefix + (isLast ? '└── ' : '├── ') + file;

    if (stat.isDirectory()) {
      result += '/\n' + generateTree(fullPath, prefix + (isLast ? '    ' : '│   '));
    } else {
      result += '\n';
    }
  });

  return result;
}

console.log(generateTree(process.argv[2] || '.'));
