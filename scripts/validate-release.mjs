import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
const errors = [];
const requireText = (file, text, label = text) => {
  if (!read(file).includes(text)) errors.push(`${file}: missing ${label}`);
};

const requiredFiles = [
  'static/CNAME',
  'static/img/favicon-black.svg',
  'static/img/favicon-white.svg',
  'static/site.webmanifest',
  'docusaurus.config.js',
  '.github/workflows/deploy-pages.yml',
];

for (const file of requiredFiles) {
  if (!exists(file) || fs.statSync(path.join(root, file)).size === 0) {
    errors.push(`${file}: missing or empty`);
  }
}

if (errors.length === 0) {
  const cname = read('static/CNAME').trim();
  if (cname !== 'aacca.skunkworksacademy.com') {
    errors.push(`static/CNAME: expected aacca.skunkworksacademy.com, found ${cname || '(empty)'}`);
  }

  requireText('docusaurus.config.js', "const siteUrl = 'https://aacca.skunkworksacademy.com'", 'custom domain URL');
  requireText('docusaurus.config.js', "baseUrl: '/'", 'root base URL');
  requireText('docusaurus.config.js', "href: '/img/favicon-black.svg'", 'light favicon link');
  requireText('docusaurus.config.js', "href: '/img/favicon-white.svg'", 'dark favicon link');
  requireText('docusaurus.config.js', "media: '(prefers-color-scheme: light)'", 'light colour-scheme favicon');
  requireText('docusaurus.config.js', "media: '(prefers-color-scheme: dark)'", 'dark colour-scheme favicon');
  requireText('docusaurus.config.js', "srcDark: darkIcon", 'dark navigation logo');
  requireText('docusaurus.config.js', "href: '/site.webmanifest'", 'web manifest link');
  requireText('docusaurus.config.js', "onBrokenMarkdownLinks: 'throw'", 'strict Markdown-link gate');

  requireText('static/site.webmanifest', '"start_url": "/"', 'root manifest start URL');
  requireText('static/site.webmanifest', '"scope": "/"', 'root manifest scope');
  requireText('.github/workflows/deploy-pages.yml', 'actions/upload-pages-artifact@v4', 'current Pages artifact action');
}

const rootsToScan = ['docs', 'src', 'static', 'docusaurus.config.js', 'README.md'];
const textExtensions = new Set(['.js', '.jsx', '.json', '.md', '.mdx', '.txt', '.yml', '.yaml', '.html', '.css', '']);
const staleChecks = [
  {
    regex: /(?:https|webcal):\/\/skunkworks-academy\.github\.io\/aacca(?:\/|\b)/g,
    label: 'legacy GitHub Pages domain',
  },
  {
    regex: /\b(?:href|src|to)=["']\/aacca\//g,
    label: 'legacy project-root asset or route path',
  },
];

function scan(target) {
  const full = path.join(root, target);
  if (!fs.existsSync(full)) return;
  const stat = fs.statSync(full);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(full)) scan(path.join(target, entry));
    return;
  }
  if (!textExtensions.has(path.extname(target).toLowerCase())) return;
  const content = fs.readFileSync(full, 'utf8');
  for (const {regex, label} of staleChecks) {
    regex.lastIndex = 0;
    if (regex.test(content)) errors.push(`${target}: contains ${label}`);
  }
}

for (const target of rootsToScan) scan(target);

if (errors.length) {
  console.error('Enhanced release validation failed.');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Enhanced release validation passed: custom domain, root routing, adaptive favicons, manifest and Pages deployment are configured with no stale project-domain links.');
