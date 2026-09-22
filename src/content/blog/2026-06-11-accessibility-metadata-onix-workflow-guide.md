---
title: 'Accessibility metadata belongs in your ONIX workflow, not at the end of EPUB QA'
description: 'BISG, DAISY, and EPUB accessibility guidance all point to the same lesson: accessible production work needs matching metadata in ONIX so readers and channels can actually discover it.'
pubDate: '2026-06-11T10:30:00-04:00'
updatedDate: '2026-06-11T10:30:00-04:00'
author: 'Rex Publishing'
contentType: article
source: repo
---

<p>Passing an EPUB accessibility check is not the end of the job. If the accessibility details never reach distribution metadata, retailers, libraries, and readers may have no clear way to tell what the file can actually do.</p>

<p>That is why accessibility metadata should be treated as a publishing workflow, not as a private production note. Recent guidance from the <a href="https://www.bisg.org/news/bisg-launches-new-working-group-on-accessibility-metadata">Book Industry Study Group</a>, implementation guidance from the <a href="https://kb.daisy.org/publishing/docs/metadata/onix/">DAISY Consortium</a>, and the <a href="https://www.w3.org/TR/epub-a11y-11/">EPUB Accessibility 1.1 specification</a> all point in the same direction: accessible files need discoverable metadata.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why this has moved from niche detail to core workflow</h2>

<p>BISG says it launched a working group on accessibility metadata to help the U.S. book industry prepare for the European Accessibility Act environment and to build on work already done by organizations including DAISY, Benetech, and Fondazione LIA.</p>

<p>That matters because it reframes accessibility metadata as normal trade infrastructure. It is no longer only a specialist concern for conversion vendors or accessibility teams. Metadata staff, production leads, and distribution teams all touch the part of the workflow that tells downstream channels what an ebook includes.</p>

<p>BISG also argues that publishers should think operationally about how accessible EPUB classification, alt text work, and file review connect to transparency and discovery. That is the useful lesson for Rex readers: if accessibility work stays inside editorial or production, the market may never see it.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What DAISY says ONIX is supposed to do</h2>

<p>DAISY’s guidance is unusually plain on this point: include accessibility metadata in ONIX records so it is available in distribution channels for presentation to customers.</p>

<p>In practice, that means the accessibility facts about a digital publication should travel with the commercial metadata package sent to distributors and vendors, not remain trapped inside internal QA notes.</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>ONIX codelist 196</strong> is used to express accessibility properties and conformance details.</li>
  <li><strong>ONIX codelist 143</strong> is used to express hazard information.</li>
  <li><strong>The purpose is reader decision-making</strong>: DAISY says users need this information to judge whether a publication will work for them.</li>
</ul>

<p>DAISY also makes the business case clearly. Without this metadata, a user may have no easy way to distinguish one EPUB’s accessibility quality from another. That is a discoverability failure, not just a compliance failure.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What the EPUB standard requires at the publication level</h2>

<p>The EPUB Accessibility 1.1 specification requires accessibility metadata for discoverability. Among other things, it calls for machine-readable details such as access modes and accessibility features, with room for a human-readable accessibility summary when useful.</p>

<p>The practical point is simple: accessible production work and accessible metadata are separate jobs that have to meet in the same release workflow.</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Production work</strong> covers the file itself: semantics, navigation, image descriptions, reading order, and other accessibility basics.</li>
  <li><strong>Metadata work</strong> exposes the file’s accessible properties so stores, libraries, and other channels can surface them.</li>
</ul>

<p>One without the other leaves a gap. A file can be stronger than its metadata suggests, or its metadata can claim clarity that the file does not fully support. Either way, readers lose trust.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">A practical workflow for small and mid-sized teams</h2>

<p>For many independent or mid-sized publishers, the easiest mistake is to treat accessibility as a final technical check. A more durable workflow is to connect editorial, production, and metadata steps before files go out.</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong>Establish the file baseline.</strong> BISG recommends using the ACE Checker from DAISY to understand how current EPUBs perform.</li>
  <li><strong>Capture the accessibility work being done.</strong> If alt text, structural markup, or other accessible features are added, record those decisions in a way metadata staff can use.</li>
  <li><strong>Map those details into ONIX.</strong> Do not leave accessibility information behind in production tickets or vendor emails.</li>
  <li><strong>Add a readable summary when it helps.</strong> A short accessibility summary can make the machine-readable metadata more usable for buyers and channel partners.</li>
  <li><strong>Check channel output, not just source files.</strong> Verify how the metadata appears once it reaches distributor or retailer systems.</li>
</ol>

<p>This is also the safest way to keep the article honest: metadata does not make a bad file accessible, but good metadata helps readers discover a good file.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What Rex readers should take from this</h2>

<p>The useful shift is to stop thinking of accessibility metadata as clerical cleanup. It is part of how a publishing team communicates quality to the market.</p>

<p>If your EPUB workflow ends at file validation, you are only solving half the problem. Readers and channel partners need the metadata layer too.</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Authors and rights holders</strong> should ask how accessible properties are represented downstream, not just whether the file passed internal checks.</li>
  <li><strong>Production teams</strong> should hand accessibility outcomes into metadata workflows deliberately.</li>
  <li><strong>Metadata and sales teams</strong> should treat accessibility fields as reader-facing discovery information, not optional decoration.</li>
</ul>

<p>That workflow is more useful than panic about regulation, and more valuable than treating accessibility as a box to tick after export.</p>

<p>If you are tightening your digital publishing workflow, see our <a href="/blog/2026-06-08-translation-rights-checklist-for-authors/">translation rights checklist for authors</a> or <a href="/contact/">contact Rex Publishing</a>.</p>
