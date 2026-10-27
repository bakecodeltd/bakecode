import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../', import.meta.url).pathname.replace(/^\/(.:\/)/, '$1');
const dist = join(root, 'dist');
const htmlFiles = readdirSync(dist, { recursive: true })
  .filter((file) => typeof file === 'string' && file.endsWith('.html'))
  .map((file) => join(dist, file));

const failures = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const name = relative(dist, file);

  if (html.includes('http-equiv="refresh"') || html.includes("http-equiv='refresh'")) continue;

  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;

  if (h1Count !== 1) failures.push(`${name}: expected exactly one h1, found ${h1Count}`);
  if (!html.includes('<meta name="description"')) failures.push(`${name}: missing meta description`);
  if (!html.includes('<link rel="canonical"')) failures.push(`${name}: missing canonical URL`);

  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const path = href.split(/[?#]/)[0];
    if (path === '') continue;

    const target = path === '/'
      ? join(dist, 'index.html')
      : /\.[a-z0-9]+$/i.test(path)
        ? join(dist, path.slice(1))
        : join(dist, path.slice(1), 'index.html');

    if (!existsSync(target)) failures.push(`${name}: broken internal link ${href}`);
  }
}

for (const required of ['robots.txt', 'sitemap.xml', 'favicon.svg', 'assets/og-image.png']) {
  if (!existsSync(join(dist, required))) failures.push(`missing generated asset: ${required}`);
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages, internal links, metadata and key assets.`);
