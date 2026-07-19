# Alberto IDR — Enhanced Custom-Domain Release

## Release 1.1.0

Primary site: **https://aacca.skunkworksacademy.com/**

### Corrected

- Replaced the repository-path deployment configuration with the custom-domain root configuration.
- Removed legacy `/aacca/` asset and calendar paths.
- Replaced the old `skunkworks-academy.github.io/aacca` calendar subscription address.
- Added the custom-domain `CNAME` file to the generated Docusaurus site.
- Made browser-generated PDF downloads more reliable across Chromium, Firefox and Safari-style download flows.
- Retained strict broken-link and privacy validation.

### Enhanced

- Added light- and dark-theme Skunkworks Academy favicon variants.
- Applied favicon and manifest metadata globally through Docusaurus so every generated page receives the same browser-tab identity.
- Added a web manifest for the IDR portal.
- Updated the navigation logo to switch between black and white artwork with the site theme.
- Upgraded validation and deployment workflows to Node.js 24.
- Added deployment checks for every generated HTML page, custom-domain metadata, adaptive favicons, the calendar file and stale URL patterns.

### Deployment prerequisite

The GitHub Pages custom-domain setting must be `aacca.skunkworksacademy.com`, and DNS must contain a CNAME record for `aacca` pointing to `skunkworks-academy.github.io`. HTTPS should be enforced after GitHub provisions the certificate.
