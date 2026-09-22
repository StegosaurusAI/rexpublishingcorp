---
title: 'EPUB accessibility under the EAA starts in the file, but it does not end there'
description: 'W3C’s EAA mapping and EPUB accessibility guidance show a practical workflow: build an accessible EPUB, attach the right metadata, and stay honest about what storefronts and reading systems still control.'
pubDate: '2026-06-16T14:30:00-04:00'
updatedDate: '2026-06-16T14:30:00-04:00'
author: 'Rex Publishing'
contentType: article
source: repo
---

<p>Too many accessibility discussions still collapse into a false shortcut: make the EPUB file compliant and assume the rest of the market will take care of itself. That is not how the workflow works.</p>

<p>W3C’s <a href="https://www.w3.org/TR/epub-a11y-eaa-mapping/">EPUB Accessibility - EU Accessibility Act Mapping</a> makes the useful point plainly. The European Accessibility Act covers products and services that include ebooks, dedicated reading software, digital rights management software, and ecommerce. The same note says it aims to show how the EPUB standard meets the technical requirements related to ebooks. For Rex readers, the practical lesson is that accessibility work belongs in the EPUB file, but not only there.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What the W3C mapping changes in practice</h2>

<p>The W3C note does more than wave at compliance. It says EPUB Accessibility 1.1 addresses four key areas: WCAG conformance, discoverability of accessibility features, specific EPUB accessibility requirements, and evaluation plus conformance reporting for accessible EPUB publications.</p>

<p>That matters because it pulls accessibility out of a narrow file-conversion mindset. A usable workflow has at least three layers:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>The EPUB file itself</strong>, where structure, navigation, alt text, reading order, and semantic markup live.</li>
  <li><strong>The metadata and distribution layer</strong>, where accessibility details have to travel beyond internal production notes.</li>
  <li><strong>The downstream delivery layer</strong>, where reading systems, DRM behavior, and storefront presentation still affect what the reader actually gets.</li>
</ul>

<p>If a team only fixes the first layer, it has not finished the job. If it ignores the first layer and hopes metadata will compensate, it has not started the job properly either.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What belongs inside the EPUB</h2>

<p>W3C’s <a href="https://www.w3.org/TR/epub-a11y-tech-12/">EPUB Accessibility Techniques 1.2</a> stays grounded in production details. Its techniques cover the practical work teams already know they should be doing, but often handle inconsistently under deadline pressure.</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Navigation:</strong> the techniques call for table-of-contents order that matches the publication’s linear order and for EPUB landmarks that help users move through the book.</li>
  <li><strong>Headings and titles:</strong> the document emphasizes publication and document titles plus heading structures that reflect the real hierarchy.</li>
  <li><strong>Descriptions:</strong> non-decorative images need alternative text descriptions that do actual explanatory work.</li>
  <li><strong>Language and text basics:</strong> language identification and clean text encoding are part of accessibility, not optional cleanup.</li>
</ul>

<p>None of that is glamorous, but that is exactly the point. Accessibility failures usually come from ordinary workflow slippage, not from a lack of abstract principles.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why metadata is part of compliance work, not a separate afterthought</h2>

<p>The same W3C techniques document includes a distribution section that says publishers should include accessibility metadata in distribution records. It also includes accessibility metadata in the EPUB package document so the information remains attached to the publication itself.</p>

<p>That split is easy to miss, and expensive to miss. File-level metadata helps the publication stay self-describing. Distribution metadata helps retailers, libraries, aggregators, and other downstream partners surface those accessibility features to real users.</p>

<p>W3C also points directly to ONIX accessibility metadata in this workflow. That is why accessibility teams, production staff, and metadata staff cannot treat their work as separate lanes. If the accessible properties never leave the EPUB and reach distribution records, discoverability still breaks.</p>

<p>We covered that metadata handoff in more detail in our <a href="/blog/2026-06-11-accessibility-metadata-onix-workflow-guide/">guide to accessibility metadata in ONIX workflows</a>. The EAA mapping makes the same operational point from the standards side: discoverability is part of accessibility.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Where teams should stay careful</h2>

<p>The strongest part of W3C’s mapping is also where publishers can overread it. The note argues that EPUB meets the technical requirements related to ebooks, but it does not say that an EPUB file alone solves every accessibility obligation across the chain.</p>

<p>That caution matters for at least three reasons:</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong>Reading systems still matter.</strong> A strong EPUB can still reach a user through software that handles features badly.</li>
  <li><strong>Storefront and ecommerce presentation still matter.</strong> Accessibility information has to be displayed and communicated downstream, not just stored upstream.</li>
  <li><strong>Fixed-layout limitations are real.</strong> W3C notes that fixed-layout EPUBs can be produced with a good level of accessibility, but some accessibility requirements cannot be met because users cannot freely change graphical formatting in the way they can with reflowable publications.</li>
</ol>

<p>That is the honest posture for small and mid-sized publishers: build the strongest accessible EPUB you can, transmit its properties clearly, and do not pretend the file solves platform behavior that sits outside the file.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why this is operationally urgent now</h2>

<p>BISG’s <a href="https://www.bisg.org/accessibility">Accessibility Working Group</a> frames the issue as a supply-chain problem, not just a standards exercise. BISG says the group exists to amplify trusted guidance from organizations including W3C, DAISY, and Benetech while improving discoverability, reducing compliance risk, and supporting library and public-sector sales.</p>

<p>Its February 2026 <a href="https://www.bisg.org/news/bisg-launches-book-industry-surveys-on-accessibility-readiness-and-workflow-pain-points">survey announcement</a> says the industry is still working through friction in creating, delivering, receiving, and supporting accessible digital products. That is a useful reality check. The bottleneck is rarely just “make a better EPUB.” It is usually the handoff between editorial, production, metadata, distribution, and downstream display.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">A workable checklist for Rex readers</h2>

<p>If your team needs a practical EAA-facing workflow, start here:</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong>Build accessibility into authoring and EPUB production.</strong> Do not leave headings, navigation, language tagging, and image description work until final QA.</li>
  <li><strong>Validate the EPUB as an accessibility file.</strong> Treat evaluation and conformance reporting as release work, not optional documentation.</li>
  <li><strong>Carry accessibility metadata into the package document and distribution records.</strong> Make sure the file and the commercial metadata agree.</li>
  <li><strong>Check downstream display.</strong> Verify how accessibility information appears in the channels that matter for your sales mix.</li>
  <li><strong>Flag exceptions honestly.</strong> If a fixed-layout title or platform limitation leaves gaps, say so internally before the title hits the market.</li>
</ol>

<p>The useful shift is procedural, not rhetorical. The EAA is easier to manage when teams stop treating accessibility as a vague legal cloud and start treating it as coordinated EPUB, metadata, and distribution work.</p>

<p>If you need help tightening that workflow, see our <a href="/blog/2026-06-15-qualebook-ebook-quality-checklist-workflow-guide/">ebook QA workflow checklist guide</a> or <a href="/contact/">contact Rex Publishing</a>.</p>
