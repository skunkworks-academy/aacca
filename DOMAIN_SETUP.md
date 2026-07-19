# Custom-domain activation checklist

Target domain: `aacca.skunkworksacademy.com`

## Repository release

- [x] Docusaurus `url` points to the custom domain.
- [x] Docusaurus `baseUrl` is `/`.
- [x] `static/CNAME` contains the custom domain.
- [x] Calendar download and subscription links use the custom domain.
- [x] Light and dark browser-tab favicons are injected into every page.
- [x] GitHub Actions validates and deploys the custom-domain build.

## GitHub Pages settings

1. Open **Repository Settings → Pages**.
2. Confirm **Source** is **GitHub Actions**.
3. Set **Custom domain** to `aacca.skunkworksacademy.com`.
4. Enable **Enforce HTTPS** once the certificate is available.

## DNS

Create the following record with the DNS provider for `skunkworksacademy.com`:

| Type | Name | Value |
|---|---|---|
| CNAME | `aacca` | `skunkworks-academy.github.io` |

Do not use a wildcard record for this mapping. DNS and certificate provisioning can take time to propagate.
