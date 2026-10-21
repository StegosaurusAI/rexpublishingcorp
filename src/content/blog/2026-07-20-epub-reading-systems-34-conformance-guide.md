---
title: 'EPUB Reading Systems 3.4: a practical QA checklist for publishers'
description: 'Use the EPUB Reading Systems 3.4 draft to plan layout, network and accessibility tests while keeping specification status separate from proven app support.'
pubDate: '2026-10-21T13:45:00-04:00'
updatedDate: '2026-10-21T13:45:00-04:00'
author: 'Rex Publishing'
heroImage: '/images/blog/2026-07-20-epub-reading-systems-34-conformance-guide.svg'
draft: false
contentType: article
source: repo
---

<p>Digital publishing · Published and updated <time datetime="2026-10-21T13:45:00-04:00">October 21, 2026</time></p>

<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"EPUB Reading Systems 3.4: a practical QA checklist for publishers","datePublished":"2026-10-21T13:45:00-04:00","dateModified":"2026-10-21T13:45:00-04:00","author":{"@type":"Organization","name":"Rex Publishing"},"articleSection":"Digital publishing","mainEntityOfPage":"https://rexpublishingcorp.com/blog/2026-07-20-epub-reading-systems-34-conformance-guide/","image":"https://rexpublishingcorp.com/images/blog/2026-07-20-epub-reading-systems-34-conformance-guide.svg"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Blog","item":"https://rexpublishingcorp.com/blog/"},{"@type":"ListItem","position":2,"name":"EPUB reading-system QA","item":"https://rexpublishingcorp.com/blog/2026-07-20-epub-reading-systems-34-conformance-guide/"}]}]}</script>

A valid EPUB file and a usable reading experience are different things. For publishers commissioning conversion or checking an ebook before distribution, W3C's [EPUB Reading Systems 3.4](https://www.w3.org/TR/epub-rs-34/) offers a useful way to make that distinction concrete: test the software's behavior as well as the publication's structure.

At our October 21 source check, the specification identifies itself as a **Candidate Recommendation Draft dated July 21, 2026**. That supersedes the June Working Draft used in the original preparation of this guide. W3C explicitly calls the document a work in progress; its publication does not imply W3C endorsement or prove that a particular reading app implements it.

The [EPUB 3.4 overview](https://www.w3.org/TR/epub-overview-34/) also says 3.4 is in development, based on stable EPUB 3.3. W3C's [EPUB 3.3 landing page](https://www.w3.org/publishing/epub3/) remains a reference for the established stack. Our recommendation is to keep a production baseline documented separately from experiments with the draft.

## Start by assigning the right responsibility

The reading-systems specification distinguishes authoring requirements from rendering requirements. The core EPUB specification describes the publication; Reading Systems describes the software that presents it. A reading system may be visual, audio-only or distributed across components.

That matters when a defect crosses a supplier boundary. Record which file was supplied, which app and version rendered it, and what the reader could not do. A screenshot alone may show a symptom without identifying whether the cause is content, conversion or rendering.

## Four test lanes to discuss with vendors

The following is a **Rex-suggested QA record**, not a W3C certification form or a claim that we have tested particular apps.

| Test lane | Question for the supplier | Evidence to keep |
| --- | --- | --- |
| Layout | How does the target system handle the layout used in this book, including roll layout if proposed? | File version, app/device version and observed navigation or display behavior |
| Processing and fallbacks | What happens when a resource or optional feature is unsupported? | Expected fallback, observed result and responsibility for fixing the gap |
| Network access | What remains usable when the reader blocks network access? | Required remote resources, user notice and offline result |
| Accessibility controls | Can the reader reach the book, navigate, search and adjust its presentation? | Checks in the actual reading environment, alongside file-level validation |

### Layout support needs implementation evidence

Roll layouts appear in the 3.4 material, but their presence in a specification is not a compatibility statement. The overview specifically warns that availability in major reading systems will take time. Before choosing a layout for a real edition, ask for evidence from the environments your readers use. Keep an unsupported feature separate from a malformed file.

The draft's processing rules are also more precise than a blanket instruction to remove fallbacks. For example, its manifest-fallback section still requires traversal of the fallback chain for unsupported foreign content documents. Ask which requirement applies to your resource; do not infer that all fallback handling has disappeared.

### Network behavior belongs in acceptance testing

The draft permits network access but describes security and privacy risks. If developers allow it, W3C recommends notifying users when network activity occurs and allowing them to block access. For a publisher, the practical question is what the book does under that condition. Do essential explanations remain available, or does the reading path depend on a remote resource?

### Accessibility continues beyond validation

W3C's reading-system accessibility discussion includes bookshelf access, controls, search, display adjustment and zoom. Those are user-facing behaviors that a file-validation result cannot fully establish. Keep the [EPUB 3.3 baseline guide](/blog/2026-07-15-epub-33-current-baseline-guide/) for specification context and our [accessibility techniques guide](/blog/2026-06-22-epub-accessibility-techniques-12-workflow-guide/) for adjacent content work.

## Turn the draft into a bounded test plan

Pick a representative file and the actual reading environments in your distribution plan. Agree expected behavior, record results and assign unresolved defects before sign-off. The useful output is an evidence trail for that edition—not a claim that the whole market has adopted 3.4, or an invented migration deadline.

Sources checked October 21, 2026. This guide reports specification guidance and Rex editorial recommendations; it is not a firsthand app conformance review.
