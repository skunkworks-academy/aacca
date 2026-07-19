---
id: governance
title: Privacy, Security and Governance
sidebar_label: Privacy & Governance
description: Public-repository boundaries, POPIA, access control, vendor governance and safe evidence rules.
---

# Privacy, Security and Governance

## Public repository boundary

This GitHub Pages site and repository are public. The source IDR is marked confidential. Therefore:

- publish only the learning plan and sanitised evidence;
- keep operational datasets and client records private;
- use synthetic data for labs;
- remove names, addresses, account numbers and identifiers from screenshots;
- never commit credentials, tokens, secrets or private keys;
- do not upload lease, payment, identity or legal documents;
- store private mentor notes in an approved access-controlled system.

## Minimum project controls

- least-privilege access;
- separate test and operational environments;
- clear data owners;
- documented lawful purpose;
- retention and deletion rules;
- consent and disclosure controls where required;
- audit logs;
- backup and manual fallback;
- vendor and processor review;
- incident escalation;
- rollback and recovery testing.

## Primary risks

| Risk | Level | Mitigation |
|---|---|---|
| Transformation scope becomes too broad | High | Limit phase one to a representative portfolio and three measurable processes. |
| Fragmented or poor-quality data | High | Define source ownership, reconciliation, quality rules and exceptions first. |
| Low internal IT capability | High | Use managed support, runbooks and explicit ownership. |
| POPIA, payment and document risk | High | Apply classification, least privilege, consent, retention, audit and approved vendors. |
| Tool proliferation | Medium | Use architecture decision records and reuse the current stack where practical. |
| Insufficient protected development time | Medium | Schedule fixed weekly blocks and review fortnightly. |

## Evidence publication checklist

- [ ] Synthetic or authorised data only.
- [ ] No personal or commercially sensitive details.
- [ ] Screenshots sanitised.
- [ ] Assumptions and limitations stated.
- [ ] Source and date recorded.
- [ ] Mentor or process-owner review recorded.
- [ ] Benefit claims tied to a baseline.
- [ ] Rollback and failure paths tested.
