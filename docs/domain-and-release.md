---
id: domain-and-release
title: Domain and Release Controls
sidebar_label: Domain & Release
description: Operational controls for Alberto's custom-domain IDR deployment.
---

# Domain and Release Controls

## Canonical address

The Alberto IDR portal is published at:

```text
https://aacca.skunkworksacademy.com/
```

## GitHub Pages configuration

- Repository: `skunkworks-academy/aacca`
- Publishing method: GitHub Actions
- Custom domain: `aacca.skunkworksacademy.com`
- DNS target: `skunkworks-academy.github.io`
- HTTPS: enforce after GitHub provisions the certificate

## Browser identity

Every generated page receives:

- a black Skunkworks Academy favicon for light browser colour schemes;
- a white Skunkworks Academy favicon for dark browser colour schemes;
- a fallback shortcut icon;
- a web manifest;
- the same theme-aware logo in the Docusaurus navigation bar.

## Release gates

A release is blocked when:

- the custom-domain file is missing or incorrect;
- the site is built under the legacy `/aacca/` base path;
- a source or generated page references the legacy GitHub Pages URL;
- any generated HTML page is missing either favicon declaration or the web manifest;
- required IDR routes, the downloadable calendar or privacy controls are missing;
- the Docusaurus production build fails.

## Privacy boundary

This repository is public. Do not commit tenant, payment, identity, lease, legal-document, credential, private-assessment or commercially sensitive information. Use sanitised or synthetic evidence only.
