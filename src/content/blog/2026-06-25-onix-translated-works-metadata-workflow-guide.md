---
title: "ONIX for translated books: keep the source work, translator and edition connected"
description: "A practical ONIX handoff for translated books: record both languages, credit the translator, link the translated product to its source work, and keep titles, subjects and dates under review."
pubDate: "2026-11-24T14:32:45-05:00"
updatedDate: "2026-11-24T14:32:45-05:00"
heroImage: "/images/blog/2026-06-25-onix-translated-works-metadata-workflow-guide.svg"
author: "Rex Publishing"
contentType: "article"
source: "repo"
draft: false
---

<p>Metadata operations · Published and updated <time datetime="2026-11-24T14:32:45-05:00">November 24, 2026</time></p>

<script type="application/ld+json">[{"@context":"https://schema.org","@type":"Article","headline":"ONIX for translated books: keep the source work, translator and edition connected","description":"A practical ONIX handoff for translated books: record both languages, credit the translator, link the translated product to its source work, and keep titles, subjects and dates under review.","datePublished":"2026-11-24T14:32:45-05:00","dateModified":"2026-11-24T14:32:45-05:00","author":{"@type":"Organization","name":"Rex Publishing"},"publisher":{"@type":"Organization","name":"Rex Publishing"},"articleSection":"Metadata operations","image":"https://www.rexpublishingcorp.com/images/blog/2026-06-25-onix-translated-works-metadata-workflow-guide.svg","mainEntityOfPage":"https://www.rexpublishingcorp.com/blog/2026-06-25-onix-translated-works-metadata-workflow-guide/"},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.rexpublishingcorp.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.rexpublishingcorp.com/blog/"},{"@type":"ListItem","position":3,"name":"ONIX for translated books","item":"https://www.rexpublishingcorp.com/blog/2026-06-25-onix-translated-works-metadata-workflow-guide/"}]}]</script>

<img src="/images/blog/2026-06-25-onix-translated-works-metadata-workflow-guide.svg" alt="A translated edition record carries the source and translated languages, translator credit, work relationships, titles, subjects and dates into downstream metadata." width="1200" height="630" loading="lazy" />

A translated book needs more than a new title and ISBN in the metadata feed. The record also has to say which language readers will receive, which language the work came from, who translated it, and how the new edition relates to the source work.

EDItEUR's [application note on metadata for translated texts](https://thinkpub.eu/wp-content/uploads/2026/06/APPNOTE-Metadata-for-translated-texts-in-ONIX.pdf), published in March 2026 and surfaced in ThinkPub's [ONIX Guide for Translated Works](https://thinkpub.eu/materials/onix-guide-for-translated-works/), shows how those parts fit together. The practical lesson is straightforward: build the translated-edition record from a controlled handoff, not from whatever details happen to survive in a cover brief or distributor spreadsheet.

## Record both sides of the language change

EDItEUR uses the ONIX `<Language>` composite for two separate facts. Language role `01` records the language the product is in. Role `02` records the language from which it was translated.

That distinction should be settled before export. A vague label such as "translated edition" does not tell a retailer, library or distributor whether the product is in English, Polish or another language, and it does not preserve the source language for discovery and cataloging.

The translator belongs in the contributor data as well. EDItEUR's example uses contributor role `B06` for "translated by" and includes the from-language and to-language. If the translator is credited on the book, the application note says that credit should certainly be present in ONIX.

For a small team, the handoff should answer four questions:

1. What language is this product in?
2. What was the original language?
3. Who translated it, and how should that name appear?
4. Is there a stable contributor identifier, such as an ISNI, that belongs in the record?

## Link the product to the translated work and the source work

ONIX treats a hardback, paperback or ebook as a product that manifests a work. Translation creates a derived work. The translated product can therefore be connected to its immediate translated work and to the original-language work from which it was derived.

The EDItEUR note shows relation code `01` for the work manifested by the product. It then uses relation code `02` to connect the product to the original work more generally, or code `29` when the publisher wants to state specifically that the derivation is a translation.

There is no global work identifier equivalent to the ISBN. EDItEUR says publishers may use proprietary identifiers, such as a UUID, or use an ISBN for a particular manifestation as a proxy. It also recommends exchanging work identifiers when translation-rights deals are concluded so the international chain can be joined up later.

That is metadata coordination, not rights clearance. A relationship code does not prove that translation rights were acquired, and an ISBN used as a work-ID proxy does not establish ownership. Keep the contract record and the metadata record connected, but do not confuse them.

## Review subjects and audiences instead of copying them blindly

EDItEUR says the source work's subject and audience codes will usually remain appropriate for the translation, but each code and qualifier should be reviewed. The translated edition may be positioned differently in its new market, and that can justify a change.

For fiction, Thema also includes codes for fiction in translation and children's or teenage fiction in translation. The note is explicit that there is no corresponding "non-fiction in translation" code. Do not force a fiction-specific convenience code onto another category because the book happens to be translated.

The safe workflow is to copy nothing without a check. Preserve the source classification when it still fits, add translation-specific classification where the standard supports it, and document any audience change as a real market decision.

## Keep the original title and names available where useful

The translated product has its market-facing title, but ONIX can also carry the original-language title. EDItEUR says that may improve discoverability and cataloging clarity.

Contributor names need the same care. Author names are generally transliterated rather than translated when scripts change. ONIX can hold alternative forms, name identifiers, script information and collation data. That does not mean every team should build the most elaborate possible name record. It means the preferred market form should not erase the source-script form when both are known and useful.

This article stays focused on translated-work structure. For a wider feed process, use our [ONIX creation and distribution workflow guide](/blog/2026-07-02-onix-creation-and-distribution-workflow-guide/). If territorial permissions are still unsettled, use the [ONIX sales-rights metadata guide](/blog/2026-06-17-onix-sales-rights-metadata-workflow-guide/) separately.

## Do not collapse three different dates

The translated product has its own publication date. It may also carry a date of first publication for an earlier manifestation of the translated work, such as its hardback, and a date of first publication in the original language.

Those dates answer different questions. Reusing the original-language publication date as the translated product's publication date would distort availability and planning. Omitting the original date can remove useful historical context. If the product must not be sold early, EDItEUR points to a sales embargo date rather than asking the ordinary publication date to do both jobs.

## Use a short translated-edition handoff

The following is a Rex editorial checklist, not an official EDItEUR form.

<div role="region" aria-label="Rex translated-edition metadata handoff" tabindex="0" style="overflow-x:auto">
<table>
<caption>Rex translated-edition metadata handoff</caption>
<thead><tr><th scope="col">Record area</th><th scope="col">Confirm before export</th><th scope="col">Do not assume</th></tr></thead>
<tbody>
<tr><th scope="row">Languages</th><td>Product language and original language</td><td>"Translated" is enough detail</td></tr>
<tr><th scope="row">Contributors</th><td>Translator credit, name form, language pair and identifier where available</td><td>Cover credit will populate every feed</td></tr>
<tr><th scope="row">Works</th><td>Translated-work ID, source-work ID and the correct relationship</td><td>An identifier proves rights ownership</td></tr>
<tr><th scope="row">Titles and names</th><td>Market-facing forms plus original or alternative forms where useful</td><td>One script works for every market</td></tr>
<tr><th scope="row">Subjects and audience</th><td>Review each inherited code and any market repositioning</td><td>Source-market classification is always unchanged</td></tr>
<tr><th scope="row">Dates</th><td>Product publication, first publication and original-language publication where applicable</td><td>These dates are interchangeable</td></tr>
</tbody>
</table>
</div>

This source set was checked on **November 24, 2026**. ThinkPub identifies the guide as EDItEUR material and dates its update to June 4, 2026; the linked six-page application note is dated March 19, 2026. They form one standards-source family, not independent market evidence. The guidance describes what ONIX can carry. It does not guarantee that every recipient will ingest or display every relationship in the same way.

The release check is simple: a translated product should remain identifiable as its own edition without losing the translator, source language or source work behind it. If those links exist only in the contract folder or one editor's memory, the metadata handoff is not finished.
