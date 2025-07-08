import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { execSync } from 'child_process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function getBuildTimestamp() {
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, '0');
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}`;
}

function checkUncommittedChanges() {
  try {
    const output = execSync('git status --porcelain').toString().trim();
    if (output.length > 0) {
      console.log('⚠️ Uncommitted changes detected:\n');
      console.log(output);
      return true;
    }
    return false;
  } catch (err) {
    console.error('❌ Failed to check git status:', err.message);
    return true; // Để an toàn, coi như có thay đổi
  }
}

async function main() {
  // ⚠️ Kiểm tra uncommitted changes
  if (checkUncommittedChanges()) {
    const proceed = (await ask('\n⚠️ You have uncommitted changes. Continue anyway? (y/N): ')).trim().toLowerCase();
    if (proceed !== 'y') {
      console.log('🚫 Deploy aborted.');
      rl.close();
      return;
    }
  }

  const versionPath = path.join(process.cwd(), 'public', 'version.json');

  let versionData = {
    major: 1,
    minor: 0,
    build: '202501010000',
  };

  if (fs.existsSync(versionPath)) {
    try {
      const raw = fs.readFileSync(versionPath, 'utf-8');
      versionData = JSON.parse(raw);
    } catch (err) {
      console.warn('⚠️ Failed to parse version.json. Using default.', err);
    }
  }

  console.log(`📦 Current version: v${versionData.major}.${versionData.minor}.${versionData.build}`);

  const ansMajor = (await ask('🔢 Increase major version? (y/N): ')).trim().toLowerCase();
  const ansMinor = (await ask('➕ Increase minor version? (y/N): ')).trim().toLowerCase();
  const ansTag = (await ask('🏷️  Create Git tag for this version? (y/N): ')).trim().toLowerCase();

  if (ansMajor === 'y') {
    versionData.major += 1;
    versionData.minor = 0;
  }

  if (ansMinor === 'y') {
    versionData.minor += 1;
  }

  versionData.build = getBuildTimestamp();
  const fullVersion = `v${versionData.major}.${versionData.minor}.${versionData.build}`;

  fs.writeFileSync(versionPath, JSON.stringify(versionData, null, 2));
  // console.log(`✅ Updated version: ${fullVersion}`);

  if (ansTag === 'y') {
    try {
      execSync('git add public/version.json', { stdio: 'inherit' });
      execSync(`git commit -m "🔖 Update version to ${fullVersion}"`, { stdio: 'inherit' });

      execSync(`git tag ${fullVersion}`, { stdio: 'inherit' });
      execSync(`git push origin HEAD`, { stdio: 'inherit' });
      execSync(`git push origin ${fullVersion}`, { stdio: 'inherit' });

      console.log(`🏷️  Git tag ${fullVersion} created and pushed.`);
    } catch (err) {
      console.error('❌ Failed to create Git tag:', err.message);
    }
  }

  rl.close();

  console.log('🏗️ Building...');
  execSync('npm run build', { stdio: 'inherit' });
}

main();
