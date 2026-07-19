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

if (errors.length) {
  console.error('Enhanced release validation failed.');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Enhanced release validation passed: custom domain, root routing, adaptive favicons, manifest and Pages deployment are configured.');
