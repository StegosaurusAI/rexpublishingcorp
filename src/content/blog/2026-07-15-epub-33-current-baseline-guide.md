---
title: 'EPUB 3.3 is still the baseline that most publishing teams should anchor to in July 2026'
description: 'W3C''s current EPUB 3 page, last modified on July 10, 2026, still points publishing teams to the same practical baseline: EPUB 3.3, Reading Systems 3.3, and EPUB Accessibility 1.1, with companion notes used as guidance rather than confused with the core stack.'
pubDate: '2026-07-15T14:33:11-04:00'
updatedDate: '2026-07-15T14:33:11-04:00'
author: 'Rex Publishing'
heroImage: '/images/blog/2026-07-15-epub-33-current-baseline-guide.svg'
contentType: article
source: repo
---

<p>Publishing teams lose time when every new standards conversation gets treated like a baseline reset. W3C's current <a href="https://www.w3.org/publishing/epub3/">EPUB 3 page</a>, last modified on <strong>July 10, 2026</strong>, still gives a steadier answer: the live stack it points readers to is <strong>EPUB 3.3, EPUB Reading Systems 3.3, and EPUB Accessibility 1.1</strong>.</p>

<p>That matters because a lot of production confusion starts with a category error. Teams hear about newer draft work, newer notes, or accessibility pressure, then act as if the baseline itself has suddenly changed. W3C's current summary says otherwise. The core job for most publishers is still to build clean EPUB 3.3 files, understand what Reading Systems 3.3 expects, and use EPUB Accessibility 1.1 as the main conformance anchor.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What counts as the core stack right now</h2>

<p>W3C's page says EPUB 3 is currently defined by three specifications:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>EPUB 3.3</strong> for the publication format itself.</li>
  <li><strong>EPUB Reading Systems 3.3</strong> for conformance expectations on the software side.</li>
  <li><strong>EPUB Accessibility 1.1</strong> for accessibility requirements tied to EPUB publications.</li>
</ul>

<p>That list is the practical anchor. If a team is deciding what to author to, what to QA against, or what to treat as the stable documentation set for internal workflow, this is the answer W3C is still surfacing in mid-July 2026.</p>

<p>W3C also says EPUB 3.3 is backward compatible with EPUB 3.2. For most teams, that means the shift from 3.2 to 3.3 should be read as a stable baseline refinement, not as a disruptive migration story that forces a rebuild of ordinary production workflow.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why the companion notes matter without replacing the baseline</h2>

<p>The same W3C page also points to a useful set of notes. That is where some teams get tangled. These documents are valuable, but they are not the same thing as the three-part core stack.</p>

<p>The most useful notes W3C currently surfaces for operational work include:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>EPUB Accessibility Techniques 1.1</strong> for more concrete accessibility workflow guidance.</li>
  <li><strong>EPUB Accessibility - EU Accessibility Act Mapping</strong> for teams translating EPUB practice into EAA-facing compliance planning.</li>
  <li><strong>EPUB Multiple-Rendition Publications 1.1</strong> for multi-rendition use cases.</li>
  <li><strong>EPUB 3 Text-to-Speech Enhancements 1.0</strong> for better voicing support.</li>
  <li><strong>EPUB Type to ARIA Role Authoring Guide 1.1</strong> for teams updating accessibility markup habits.</li>
</ul>

<p>The clean way to use these is as <strong>supporting guidance for real workflow decisions</strong>. They help with implementation, accessibility detail, and edge cases. They do not replace the simpler question of what the stable core stack is.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What this means for production and QA</h2>

<p>If your shop is already producing EPUB competently, the message here is calmer than the standards chatter around it. The useful move is not to chase every new discussion thread. The useful move is to tighten the baseline and then layer guidance documents where they solve a real problem.</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li>Use <strong>EPUB 3.3</strong> as the default authoring and packaging reference.</li>
  <li>Use <strong>Reading Systems 3.3</strong> when QA questions depend on what reading software is expected to support.</li>
  <li>Use <strong>EPUB Accessibility 1.1</strong> as the central accessibility conformance document.</li>
  <li>Pull in the notes only when the workflow needs them, especially for EAA mapping, techniques, text-to-speech behavior, or ARIA migration.</li>
  <li>Keep claims narrow when implementation varies across platforms or storefronts.</li>
</ul>

<p>That last point matters. W3C can define the standards baseline, but it does not make every commercial reading environment behave identically. Teams still need platform-aware QA. The standards stack tells you what to target. It does not erase implementation differences downstream.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What Rex readers should do next</h2>

<p>For authors, publishers, and accessibility leads, the immediate takeaway is straightforward: treat the current W3C stack as the stable center, not as background noise. If your workflow is already healthy, this is mostly a discipline question. If your workflow is messy, it is a good moment to stop mixing draft chatter, optional guidance, and core conformance into one bucket.</p>

<p>For related Rex guidance, see our <a href="/blog/2026-06-22-epub-accessibility-techniques-12-workflow-guide/">EPUB accessibility techniques workflow guide</a>, our <a href="/blog/2026-06-16-epub-accessibility-eaa-mapping-workflow-guide/">EAA mapping workflow guide</a>, and our <a href="/blog/2026-06-16-wordtoepub-word-to-epub-adaptation-workflow-guide/">Word-to-EPUB adaptation guide</a>. If you need help tightening EPUB production or accessibility workflow before distribution problems spread, <a href="/contact/">contact Rex Publishing</a>.</p>
