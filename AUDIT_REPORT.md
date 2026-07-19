# Repository audit report

Audit scope: Docusaurus configuration, custom-domain routing, browser identity, calendar links, PDF download behaviour, release validation and GitHub Pages deployment.

## Findings corrected

| Severity | Finding | Resolution |
|---|---|---|
| High | Production configuration still used the project-site URL and `/aacca/` base path. | Changed the canonical URL to `https://aacca.skunkworksacademy.com` and `baseUrl` to `/`. |
| High | Calendar download and subscription links referenced the legacy GitHub Pages address. | Replaced them with root-relative and custom-domain links. |
| High | The landing-page logo used `/aacca/img/favicon.svg`, which breaks on the custom domain. | Replaced it with `/img/favicon-black.svg`. |
| Medium | The browser-tab icon was not explicitly verified on every generated page. | Added adaptive light/dark favicon links globally and CI checks over every HTML file. |
| Medium | No deployed custom-domain file existed. | Added `static/CNAME` and output verification. |
| Medium | Generated PDF downloads revoked the object URL immediately. | Added a DOM-backed download anchor and delayed URL revocation for browser compatibility. |
| Medium | The deployment workflow used Node.js 20 and lacked the Pages configuration action. | Upgraded to Node.js 24 and added `actions/configure-pages@v5`. |
| Medium | Release checks did not detect stale GitHub Pages URLs or `/aacca/` paths. | Added a dedicated enhanced-release validator. |
| Low | No site manifest, crawler policy, security contact or route recovery page existed. | Added a manifest, `robots.txt`, `security.txt`, `.well-known/security.txt` and custom-domain `404.html`. |

## Release gates

The enhanced build is required to validate:

- IDR content, privacy and credential counts;
- custom-domain and root-routing configuration;
- favicon declarations on every generated page;
- absence of stale project-domain links;
- the CNAME, manifest, calendar and required IDR routes;
- successful Docusaurus client and server compilation.
