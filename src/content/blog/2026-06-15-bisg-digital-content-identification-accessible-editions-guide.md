---
title: 'BISG’s 2026 identifier update is a practical check on when an accessible ebook becomes a separate product'
description: 'A worked edition register helps teams check ISBN decisions for translations, print, EPUB, unchanged reprints and internal masters without assigning one number per file.'
pubDate: '2026-06-15T17:35:00-04:00'
updatedDate: '2026-10-28T10:31:54-04:00'
author: 'Rex Publishing'
contentType: article
source: repo
---

<p>Publishing teams get into trouble when they treat every digital file as the same ebook. That shortcut can blur metadata, confuse downstream partners, and make accessible or platform-specific editions harder to track properly.</p>

<p>A useful 2026 update from <a href="https://www.bisg.org/news/identifying-digital-content-bisg-updates-its-guidance">Book Industry Study Group</a> sharpens that decision. BISG said its board approved revisions to Policy 11-01 in April 2026, and said the update better addresses current requirements for describing accessible content. The group also said it extended its examples to show when accessible content should be distinguished with a unique ISBN or proprietary identifier, while removing the older assumption that a trading partner might assign the ISBN instead of the publisher.</p>

<p>That does <strong>not</strong> mean every accessibility improvement automatically requires a new ISBN. It does mean publishers should stop assuming that all digital variants belong under one product record just because the source text started in the same place.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What the baseline rule already says</h2>

<p>The <a href="https://www.isbn-international.org/content/isbn-assignment">International ISBN Agency</a> is already clear on the broad structure. Each different language edition needs its own ISBN. Different formats need different ISBNs. And for digital publications, each separate publication should be identified separately.</p>

<p>Its <a href="https://www.isbn-international.org/content/guidelines-assignment-e-books/26">ebook-assignment guidance</a> adds the practical test many small teams need: if a version requires specific software or devices, or carries different usage constraints around functions such as copying, printing, or lending, it may be a distinct product even when the editorial text is otherwise the same. Device limitations alone do not create a new product; interoperable versions with the same format, DRM and substantially identical constraints share an ISBN. For proprietary platform-bound DRM, separate ISBNs apply if ISBNs are assigned.</p>

<p>That is the part publishers often under-manage. A file can look like “the same book” to editorial, while behaving like a different product in distribution, accessibility, or platform terms.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Where BISG’s 2026 update matters</h2>

<p>BISG’s revision matters because accessible-content handling is exactly where old simplifications break down. A publisher may have:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li>a standard EPUB sold broadly across retailers,</li>
  <li>a platform-specific version with proprietary constraints,</li>
  <li>a language edition for another market, or</li>
  <li>an accessibility-focused variant whose features or distribution treatment make it operationally distinct.</li>
</ul>

<p>If those versions are all managed as one undifferentiated product, the metadata can stop describing what users and trading partners are actually receiving.</p>

<p>BISG’s update is useful precisely because it keeps the discussion operational. The question is not whether accessibility is important in the abstract. The question is whether the edition in hand should still be treated as the same product record or as a separately identified publication.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">A workable decision path for small teams</h2>

<p>For Rex readers, the cleanest way to use the guidance is as a short review sequence before release or redistribution:</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong>Start with language.</strong> If the edition is in a different language, it needs its own ISBN.</li>
  <li><strong>Check format and platform dependence.</strong> If the digital product is tied to a specific format, device, software environment, or proprietary channel, review whether it functions as a separate publication.</li>
  <li><strong>Check usage constraints.</strong> If one version allows materially different copying, printing, lending, or other reader functions, the ISBN Agency’s guidance treats that difference as potentially product-defining.</li>
  <li><strong>Check accessibility treatment carefully.</strong> Do not assume an accessibility enhancement always creates a new ISBN, but do review whether the accessible version is being positioned, distributed, or managed as a separate product under BISG’s updated examples.</li>
  <li><strong>Keep internal files separate from public identifiers.</strong> The ISBN Agency says a master file that is not itself distributed in that same public form should not carry the public-facing ISBN for downstream versions.</li>
</ol>

<p>This is a better workflow than waiting for a retailer, distributor, or conversion partner to guess what counts as the real product.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">A worked translation-edition register</h2>

<p>Here is a fictional handoff for a book called <em>River Notebook</em>. The English paperback already has an ISBN; a Polish translation and digital release are in preparation. No numbers below have been assigned. These are Rex’s suggested workflow fields, not agency-required metadata. Reviewer roles and dates illustrate a completed team check, not real work on a real book.</p>

<div class="overflow-x-auto mb-6">
<table>
  <caption>Fictional edition register — illustrative review date: October 28, 2026</caption>
  <thead><tr><th scope="col">Edition label</th><th scope="col">Language</th><th scope="col">Public format / distribution</th><th scope="col">Identifier decision</th><th scope="col">Rationale / source</th><th scope="col">Responsible reviewer / check date</th></tr></thead>
  <tbody>
    <tr><th scope="row">Original paperback</th><td>English</td><td>Paperback; public</td><td>Existing ISBN</td><td>Baseline edition record</td><td>Production editor / 2026-10-28</td></tr>
    <tr><th scope="row">Translation paperback</th><td>Polish</td><td>Paperback; planned public release</td><td>Separate ISBN to be assigned</td><td>Different language; assignment guidance</td><td>Translation editor / 2026-10-28</td></tr>
    <tr><th scope="row">Translation EPUB</th><td>Polish</td><td>EPUB; planned public release</td><td>Separate from paperback; to be assigned</td><td>Different format; assignment guidance</td><td>Digital production lead / 2026-10-28</td></tr>
    <tr><th scope="row">Paperback reprint</th><td>English</td><td>Paperback; same publisher, text and binding</td><td>Retain original ISBN</td><td>Unchanged reprint; assignment guidance</td><td>Production editor / 2026-10-28</td></tr>
    <tr><th scope="row">Conversion master</th><td>Polish</td><td>Internal only; not publicly distributed in this form</td><td>Internal job ID, not a public-product ISBN</td><td>Undistributed master; ebook guidance</td><td>Conversion coordinator / 2026-10-28</td></tr>
    <tr><th scope="row">Restricted EPUB option</th><td>Polish</td><td>Proposed separate public version; printing disabled</td><td>Hold until constraints confirmed; separate ISBN if materially different from the offered print-enabled EPUB</td><td>Distinct usage constraints; ebook guidance</td><td>Digital production lead / 2026-10-28</td></tr>
  </tbody>
</table>
</div>

<p>The row decisions draw on the Agency’s <a href="https://www.isbn-international.org/content/isbn-assignment">assignment rules</a> and <a href="https://www.isbn-international.org/content/guidelines-assignment-e-books/26">ebook guidance</a>, rechecked October 28, 2026. Keep an unresolved option on hold rather than guessing its identifier. ISBN assignment does not clear translation or distribution rights. Reconcile the finished register with the metadata handoff before release.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why publisher assignment matters</h2>

<p>One subtle but important change in BISG’s update is the assumption that the publisher assigns the ISBN. That matters because identifier discipline is really product-management discipline. If publishers leave the logic too vague, intermediaries may end up compensating with their own workarounds, and the resulting metadata can become harder to reconcile across systems.</p>

<p>The ISBN Agency’s ebook guidance still notes that intermediaries may assign identifiers as a last resort when publishers do not provide them. But that is fallback behavior, not a clean operating model.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">The practical takeaway</h2>

<p>The safest rule is not “one file, one ISBN” or “one book, one ISBN.” It is closer to this: one <em>distinct product offered to the market</em> should have identifier treatment that matches what it actually is.</p>

<p>For authors, rights holders, and small publishing teams, that means reviewing digital editions with four questions in view: Is the language different? Is the format or platform different? Are the usage constraints different? Is the accessible variant being managed as a distinct publication? If the answer shifts at the product level, the identifier logic may need to shift too.</p>

<p>If you are tightening digital-metadata operations, see our <a href="/blog/2026-06-11-accessibility-metadata-onix-workflow-guide/">guide to accessibility metadata in ONIX</a> and our <a href="/blog/2026-06-15-qualebook-ebook-quality-checklist-workflow-guide/">Qualebook workflow checklist overview</a>. If you need help cleaning up edition logic before distribution, <a href="/contact/">contact Rex Publishing</a>.</p>
