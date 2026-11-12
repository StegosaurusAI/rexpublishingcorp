---
title: 'Audiobook handoff: a finished master is not distribution acceptance'
description: 'Build an audiobook handoff record that separates master files, consumer-format metadata, recipient requirements and acceptance evidence, with a fictional example.'
pubDate: '2026-11-12T15:33:23+00:00'
updatedDate: '2026-11-12T15:33:23+00:00'
author: 'Rex Publishing'
draft: false
contentType: article
source: repo
---

<p>Audiobook workflows · Published and updated <time datetime="2026-11-12T15:33:23+00:00">November 12, 2026</time></p>

<script type="application/ld+json">{"@context": "https://schema.org", "@graph": [{"@type": "Article", "headline": "Audiobook handoff: a finished master is not distribution acceptance", "datePublished": "2026-11-12T15:33:23+00:00", "dateModified": "2026-11-12T15:33:23+00:00", "author": {"@type": "Organization", "name": "Rex Publishing"}, "articleSection": "Audiobook workflows", "mainEntityOfPage": "https://rexpublishingcorp.com/blog/2026-06-11-audiobook-best-practices-workflow-guide/", "image": "https://rexpublishingcorp.com/images/blog/2026-06-11-audiobook-best-practices-workflow-guide.svg"}, {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Blog", "item": "https://rexpublishingcorp.com/blog/"}, {"@type": "ListItem", "position": 2, "name": "Audiobook handoff: a finished master is not distribution acceptance", "item": "https://rexpublishingcorp.com/blog/2026-06-11-audiobook-best-practices-workflow-guide/"}]}]}</script>

A studio can finish an audiobook master while the distribution handoff remains unresolved. The files, product description and recipient's submission requirements answer different questions. Keep them separate, then record the evidence that connects them.

For authors and rights teams, a short handoff record makes the next action visible: what is supplied, what still needs an answer, and who will obtain it. The record below is Rex Publishing's suggested working document—not an official standard, a retailer specification or proof that an audiobook is ready for sale.

<figure>
<img src="/images/blog/2026-06-11-audiobook-best-practices-workflow-guide.svg" width="1600" height="900" alt="Audiobook handoff: keep masters and consumer-format metadata separate, confirm recipient requirements, then record acknowledgement and acceptance evidence or an open action with its owner." />
<figcaption>A supplied package and a delivery receipt do not establish acceptance. Keep the recipient's response tied to the relevant version.</figcaption>
</figure>

## Separate the master from the product description

EDItEUR's [*Audiobook products in ONIX* application note](https://www.editeur.org/files/ONIX%203/APPNOTE%20Audiobook%20products%20in%20ONIX.pdf), internally updated October 20, 2026, distinguishes the final consumer file format from the file delivered to a distributor. Its audio guidance also distinguishes contributor roles, abridged or adapted editions, and running time with a stated unit (pages 3–6). A production file's format therefore should not silently become the consumer-format description.

Our suggested record gives those details their own fields. Describe who wrote and who read or performed the work rather than using one ambiguous contributor label. State whether the audio is abridged, unabridged or adapted; leave a question open if the team has not confirmed it. Record duration with its unit, not just a track count. This article does not supply ONIX codes or a validated feed.

## Ask the recipient, then keep the answer

BIC's [*Good File Management*, June 2023 version 1.0](https://bic.org.uk/wp-content/uploads/2023/06/BIC_Digital-Audiobook-Good-File-Management-v1.0-June-2023.pdf), addresses the journey from studio masters to downstream availability. Its guidance covers final-file/version control, partner-specific submission requirements and checking that updates are accepted and applied (pages 3–5). That is dated UK/Ireland guidance, not a universal technical threshold or a newly issued North American standard.

BISG's [2026 working-group charter](https://www.bisg.org/audiobooks-best-practices) describes an intended North American adaptation of BIC's work. The charter is prospective context, not evidence here that final guidance has been delivered. These connected initiatives should not be counted as independent confirmation of a new standard.

For your own handoff, ask the receiving organisation which requirements apply to this product and submission. Keep the answer's date or version and the responsible contact alongside the record. Do not fill an unanswered question with settings taken from another partner.

## One fictional handoff, with the gaps left open

The following example is entirely fictional and untested. No audio was recorded, measured, uploaded, cleared or accepted. Names, files and duration are stipulated examples. The rows are editorial suggestions, not mandatory standard fields.

<div role="region" aria-label="Fictional audiobook handoff record" tabindex="0" style="overflow-x:auto;">
<table>
<caption>Fictional planning record: recipient requirements pending; distribution acceptance not established.</caption>
<thead><tr><th scope="col">Field</th><th scope="col">Illustrative entry</th><th scope="col">Next action and suggested owner</th></tr></thead>
<tbody>
<tr><th scope="row">Responsible sender and recipient</th><td>Production coordinator → distribution intake team; recipient contact not confirmed.</td><td>Coordinator: identify the receiving contact before submission.</td></tr>
<tr><th scope="row">Audio product and related edition</th><td>Internal project AUDIO-01; English audio linked to the English text edition TEXT-01. Public product identifiers not entered.</td><td>Metadata editor: confirm product identity and the edition relationship.</td></tr>
<tr><th scope="row">Supplied file manifest and version</th><td>Proposed package v1: audio_01.wav, audio_02.wav, metadata-v1.csv and manifest-v1.csv. No files actually supplied or inspected.</td><td>Production coordinator: reconcile the real package, filenames and version before delivery.</td></tr>
<tr><th scope="row">Contributors and roles</th><td>Alex Vale: author; Robin Ellis: single-voice reader. Fictional credits only.</td><td>Metadata editor: confirm actual credits and roles against production records.</td></tr>
<tr><th scope="row">Abridgement or adaptation</th><td>Unabridged reading in the fictional brief; not a dramatization.</td><td>Content editor: confirm the actual audio edition before describing it publicly.</td></tr>
<tr><th scope="row">Total duration and unit</th><td>180 minutes stipulated for illustration; not measured from files.</td><td>Production lead: obtain the actual total duration and reconcile the metadata.</td></tr>
<tr><th scope="row">Master versus consumer format</th><td>Proposed delivery masters: WAV. Consumer format: unknown; not inferred from the masters.</td><td>Distribution lead: confirm consumer-product description and the recipient's master requirements separately.</td></tr>
<tr><th scope="row">Recipient-specific open requirements</th><td>Required file settings, naming, transfer method, collateral and checks all pending.</td><td>Coordinator: obtain the recipient's applicable specification and resolve each gap.</td></tr>
<tr><th scope="row">Delivery acknowledgement</th><td>Not sent; no acknowledgement.</td><td>Coordinator: after an agreed submission, retain a dated receipt tied to the package version.</td></tr>
<tr><th scope="row">Acceptance and update evidence</th><td>Not established; no acceptance or applied-update report.</td><td>Distribution lead: obtain a recipient response identifying the accepted version or unresolved rejection.</td></tr>
</tbody>
</table>
</div>

The important entry is not “WAV” or “180 minutes.” It is the unresolved recipient requirement with an owner. In this example the team cannot claim an accepted handoff. It has a proposed package and a list of answers to obtain.

## Keep acknowledgement and acceptance apart

Use separate status fields for your own tracking. “Sent” records an outgoing action. “Acknowledged” records a receipt. “Accepted” needs the recipient's evidence for the relevant package or version. If the response only confirms arrival, leave acceptance open. These are suggested workflow labels, not standardised platform statuses.

When a correction is needed, identify the replacement files and metadata version, retain the earlier record, and ask what the recipient has actually applied. A replacement upload alone should not close the issue. Record the unresolved action and its owner until the response supports closure. Product availability is a further question; do not treat a receipt as evidence of a live listing.

## Use this record at the audio boundary

For broader identifier decisions, use our [digital-edition identification guide and fictional edition register](/blog/2026-06-15-bisg-digital-content-identification-accessible-editions-guide/). For software procurement, see our [workflow-tool evaluation guide](/blog/2026-06-16-bisg-workflow-tool-evaluation-guide/). This record has a narrower purpose: audio contributors, duration, supplied masters, consumer-format description and recipient acceptance.

Start with the next real handoff, not a new software purchase. Put the proposed package beside the recipient's requirements, leave unknowns visible, and give each gap an owner. That gives the author or rights holder a clear question to ask without pretending distribution has already succeeded.

Learn about [Rex Publishing's cross-language and format work](/about/) or visit our [contact page](/contact/) to discuss a project.

*Source review: November 12, 2026. EDItEUR and BISG were retrieved from their origins. BIC's dated document was checked through a reader copy; direct origin access returned 403. No receiver validation, audio-quality test, rights clearance or delivery outcome is claimed.*
