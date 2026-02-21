/**
 * Pre-build security patches.
 *
 * Lovable overwrites project files on every edit, which reverts manual
 * security fixes. This script re-applies them automatically before each
 * Netlify build. Lovable doesn't manage files it didn't create, so this
 * script persists across edits.
 *
 * Run: node scripts/apply-security-patches.js
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

let patched = 0;

// --- 1. Patch vite.config.ts: add console/debugger stripping ---
{
  const file = 'vite.config.ts';
  let content = readFileSync(file, 'utf8');

  if (!content.includes('esbuild')) {
    // Insert esbuild config after the plugins line
    content = content.replace(
      /plugins:\s*\[.*?\]\.filter\(Boolean\),/s,
      (match) =>
        `${match}\n  esbuild: {\n    drop: mode === "production" ? ["console", "debugger"] : [],\n  },`
    );
    writeFileSync(file, content);
    console.log('[security] Patched vite.config.ts — console/debugger stripping enabled');
    patched++;
  }
}

// --- 2. Patch tsconfig.app.json: enable strict mode ---
{
  const file = 'tsconfig.app.json';
  let content = readFileSync(file, 'utf8');
  const config = JSON.parse(content);
  let changed = false;

  if (config.compilerOptions.strict !== true) {
    config.compilerOptions.strict = true;
    changed = true;
  }
  if (config.compilerOptions.noFallthroughCasesInSwitch !== true) {
    config.compilerOptions.noFallthroughCasesInSwitch = true;
    changed = true;
  }
  // Remove noImplicitAny: false since strict: true covers it
  if (config.compilerOptions.noImplicitAny === false) {
    delete config.compilerOptions.noImplicitAny;
    changed = true;
  }

  if (changed) {
    writeFileSync(file, JSON.stringify(config, null, 2) + '\n');
    console.log('[security] Patched tsconfig.app.json — strict mode enabled');
    patched++;
  }
}

// --- 3. Patch tsconfig.json: enable strictNullChecks ---
{
  const file = 'tsconfig.json';
  let content = readFileSync(file, 'utf8');
  const config = JSON.parse(content);
  let changed = false;

  if (config.compilerOptions.strictNullChecks !== true) {
    config.compilerOptions.strictNullChecks = true;
    changed = true;
  }
  if (config.compilerOptions.noImplicitAny !== true) {
    config.compilerOptions.noImplicitAny = true;
    changed = true;
  }

  if (changed) {
    writeFileSync(file, JSON.stringify(config, null, 2) + '\n');
    console.log('[security] Patched tsconfig.json — strict checks enabled');
    patched++;
  }
}

// --- 4. Ensure .env is in .gitignore ---
{
  const file = '.gitignore';
  let content = readFileSync(file, 'utf8');

  if (!content.includes('.env')) {
    content += '\n# Environment variables\n.env\n.env.*\n';
    writeFileSync(file, content);
    console.log('[security] Patched .gitignore — .env excluded');
    patched++;
  }
}

// --- 5. Run npm audit fix ---
try {
  const result = execSync('npm audit fix 2>&1', { encoding: 'utf8' });
  if (result.includes('changed')) {
    console.log('[security] npm audit fix — patched vulnerable packages');
    patched++;
  }
} catch {
  // npm audit fix returns non-zero if unfixable vulns remain (dev-only esbuild/vite)
  console.log('[security] npm audit fix — ran (some dev-only vulns may remain)');
}

// --- Summary ---
if (patched > 0) {
  console.log(`[security] Applied ${patched} patch(es) before build`);
} else {
  console.log('[security] All patches already in place — no changes needed');
}
