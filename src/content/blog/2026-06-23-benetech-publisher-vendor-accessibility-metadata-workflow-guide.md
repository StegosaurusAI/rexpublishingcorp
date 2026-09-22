---
title: 'Publishers still own accessibility metadata when EPUB production is outsourced'
description: 'Benetech’s workflow guidance is useful because it draws a clean line: conversion vendors can execute file work and add publisher-provided metadata, but the publisher still owns the accessibility claim, specifications, and final review.'
pubDate: '2026-06-23T10:31:47-04:00'
updatedDate: '2026-06-23T10:31:47-04:00'
author: 'Rex Publishing'
contentType: article
source: repo
---

<p>Outsourcing EPUB production does not outsource responsibility for accessibility metadata. That is the practical point small and midsize publishing teams need to keep straight.</p>

<p>Benetech says publishers are the only entity that can create accessibility metadata for a title, while conversion vendors can add publisher-provided metadata to the file. Its Born Accessible guidance makes the same boundary more operational: publishers should provide title-specific accessibility specifications, review the completed file, and treat ONIX as a supplement to the schema.org metadata carried in the EPUB itself.</p>

<p>That matters because accessibility workflows often break at the handoff. The vendor may do the file work well, but the publisher still owns the claim being made to readers, retailers, libraries, and other downstream partners.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What Benetech actually says about the handoff</h2>

<p>In Benetech’s guidance on working with a digital production vendor, the organization says conversion vendors should receive accessibility specifications for each title and that the completed file should be reviewed by the publisher’s production team. The same page says vendors can add publisher-provided accessibility metadata, but cannot create that metadata for the publisher.</p>

<p>The Born Accessible publisher guidance repeats the same rule in slightly plainer workflow terms. The publisher provides the specifications. The vendor executes against them. The publisher reviews the result.</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Publisher role:</strong> define accessibility expectations, create the metadata claim, and approve the final file.</li>
  <li><strong>Vendor role:</strong> implement the file work, add the publisher-provided metadata, and return a file that can be reviewed against the brief.</li>
  <li><strong>Shared risk:</strong> if the handoff is vague, the final EPUB may be cleaner than the metadata suggests, or the metadata may overstate what the file really supports.</li>
</ul>

<p>That division is useful because it prevents a common excuse. A publisher cannot assume the vendor will invent the right metadata layer on its behalf, and a vendor should not be expected to make the publisher’s conformance claim for it.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why the metadata owner matters</h2>

<p>Accessibility metadata is not just a technical appendix. It is part of how a publishing team describes what a title supports and where its limitations still sit.</p>

<p>Born Accessible says accessible EPUB files in its workflow should include required accessibility metadata and conformance-reporting metadata created with schema.org. It also says vendors must not use the program-specific certification markers unless those are supplied by a certified publisher.</p>

<p>The practical lesson is broader than one certification program. Metadata authority belongs with the party making the publishing claim. That is why the publisher has to own the summary, the features being asserted, and any certification language attached to the file.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Where ONIX fits after the EPUB is done</h2>

<p>Born Accessible’s metadata guidance also says ONIX codelist 196 contains EPUB accessibility details and should be treated as a supplement to schema.org accessibility and conformance metadata.</p>

<p>That is an important workflow point for Rex readers. The EPUB file and the commercial metadata record are doing different jobs:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Schema.org metadata in the EPUB</strong> carries file-level accessibility and conformance details.</li>
  <li><strong>ONIX metadata downstream</strong> helps distributors, retailers, and library-facing systems expose those details beyond the file package itself.</li>
  <li><strong>Publisher review across both layers</strong> keeps the accessibility claim consistent from production through distribution.</li>
</ul>

<p>Without that connection, teams can end up with a reasonable file and weak discoverability, or with sales metadata that promises more than the reading experience actually delivers.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">A safer workflow for small publishing teams</h2>

<p>The cleanest way to use this guidance is to treat vendor outsourcing as an execution handoff, not a responsibility transfer.</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong>Write title-specific accessibility specifications before conversion starts.</strong> Do not rely on a generic vendor assumption about what the book should support.</li>
  <li><strong>Decide who owns the metadata package internally.</strong> The role may sit with production, metadata, or digital operations, but it should not be ownerless.</li>
  <li><strong>Require the vendor to return both the file and the implemented metadata details.</strong> That makes review faster and cleaner.</li>
  <li><strong>Review the completed EPUB against the original specifications.</strong> Benetech is explicit that the publisher should check whether the requirements were actually met.</li>
  <li><strong>Push matching accessibility details into ONIX.</strong> Distribution metadata should reflect the same reality the EPUB file does.</li>
</ol>

<p>This is less dramatic than compliance-heavy accessibility talk, but more useful. A disciplined handoff is often what separates an accessible workflow from an accessible-looking one.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">The practical takeaway</h2>

<p>If your publishing team outsources EPUB production, keep the roles straight. The vendor can execute the work and add the metadata you provide, but the publisher still owns the accessibility specifications, the metadata claim, and the final signoff.</p>

<p>That is the safer rule for authors, rights holders, and publishing teams because it keeps responsibility attached to the organization making the book available in the market.</p>

<p>For related workflow guidance, see our piece on <a href="/blog/2026-06-11-accessibility-metadata-onix-workflow-guide/">accessibility metadata in ONIX</a>, our guide to <a href="/blog/2026-06-18-daisy-ace-smart-manual-accessibility-testing-workflow-guide/">manual EPUB accessibility review after automated checks</a>, or <a href="/contact/">contact Rex Publishing</a>.</p>
