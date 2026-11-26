---
title: 'Digital comics need an accessibility plan before the format decision'
description: 'A practical workflow for comics, manga, and webtoons that separates reading behavior, open-format choices, accessibility work, multilingual assets, and testing.'
pubDate: '2026-11-26T14:45:00-05:00'
updatedDate: '2026-11-26T14:45:00-05:00'
heroImage: '/images/blog/2026-09-04-digital-visual-narratives-accessibility-workflow-guide.svg'
author: 'Rex Publishing'
draft: false
contentType: article
source: repo
---

<p>A digital comic is not automatically an ebook with more pictures. A paged graphic novel, right-to-left manga, and continuously scrolling webtoon can use the same source artwork while demanding different navigation, reading order, screen behavior, and accessibility work.</p>

<p>That is why the format decision belongs near the start of production. The <a href="https://www.w3.org/groups/tf/pm-dc/">W3C Publishing Digital Comics Task Force</a> is working on how EPUB can better handle manga, bandes dessinées, continuously scrolled comics, webtoons, and their accessibility features. Separately, EDRLab is incubating <a href="https://www.edrlab.org/open-standards/digital-visual-narratives/">Divina</a> as an open interchange format for digital visual narratives.</p>

<p>Neither effort gives publishers a universal answer today. The useful response is a documented workflow that keeps the source materials portable, makes accessibility requirements explicit, and tests the intended reading experience before distribution choices become expensive to reverse.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Start with reading behavior, not a format label</h2>

<p>Write down how the work is supposed to be read. Is it a sequence of fixed pages or spreads? Does it scroll vertically? Is the reading progression left to right, right to left, or top to bottom? Must a panel appear in a controlled viewport, or can the reader zoom and reflow parts of the experience?</p>

<p>Those answers affect more than presentation. W3C's <a href="https://www.w3.org/blog/2025/epub3-3-recommendations-published-work-begins-on-new-features/">published roadmap for digital-comics work</a> identifies continuous scrolling and serialization metadata as issues for both producers and reading systems. EDRLab's Divina documentation describes controls for viewport ratios, spreads, reading progression, continuous or discontinuous display, alternate resources, and multiple languages.</p>

<p>A production brief should therefore record at least five things: intended reading progression, navigation units, viewport assumptions, series or installment relationships, and the minimum screen sizes the team intends to support. “Digital comic” is too vague to guide conversion or QA.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Keep the source package separate from the delivery format</h2>

<p>Do not let a platform upload become the only production master. Keep the original artwork, script, panel or scene order, dialogue text, language variants, image-description work, rights notes, and export settings in a controlled source package.</p>

<p>This separation gives the team room to produce a paged edition, a scrolled edition, or a later accessible adaptation without rebuilding the title from screenshots or a proprietary export. It also makes rights and translation handoffs clearer. A translator needs stable dialogue and sequence references; an accessibility editor needs to know which visual information carries the story; a production vendor needs documented behavior rather than guesses based on the finished art.</p>

<p>Use durable identifiers for pages, panels, scenes, and text segments. Keep them consistent across language files and image-description notes. If the order changes, record the change instead of silently renumbering everything downstream.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Treat accessibility as editorial work</h2>

<p>Visual narratives create decisions that an automated file check cannot settle. The team must decide what information is essential, how dialogue and captions are exposed to assistive technology, whether panel order remains understandable, and when a short description is insufficient.</p>

<p>Do that work while the script and art direction are still available. Retrofitting descriptions after flattening text into images forces an accessibility editor to reconstruct decisions that the creative team already made. It can also create translation problems when visible text, alternate text, and long descriptions no longer share the same source.</p>

<p>Set an accessibility target in the production brief, then name the evidence required to assess it. That may include structural validation, keyboard and screen-reader review, magnification behavior, contrast checks, reading-order inspection, and tests of any guided-navigation mode. A passing export or successful upload is not proof that the story is usable.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Choose the delivery path from real constraints</h2>

<p>EPUB remains the established open publication format, and W3C's task-force work is aimed at improving its support for visual narratives. But planned features are not the same as features already supported across reading systems. Record the exact behavior needed by the title and verify it in the systems that matter to the release.</p>

<p>Divina is a separate option with an open specification and current implementation evidence. EDRLab says it supports multiple reading progressions, alternate resources, multilingual assets, and presentation controls. Its <a href="https://www.edrlab.org/software/thorium-reader/">Thorium Reader page</a> currently lists Divina among the formats the application handles.</p>

<p>That does not make Divina a settled market standard. EDRLab explicitly says the format is being incubated and is waiting for broader market support before any attempt to make it a W3C or ISO standard. Support in one reading system proves that implementation exists; it does not prove that a distributor, library platform, retailer, or reader device in your release plan accepts the format.</p>

<p>For each proposed channel, record the accepted file type, protection requirements, accessibility-metadata handling, language support, reading behavior, and known fallback. If a proprietary platform is the only current route, keep the neutral source package and document what will be lost on export.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Use a release matrix, not one universal pass</h2>

<p>A small matrix makes the unresolved choices visible:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Experience:</strong> paged, spread-based, guided, or continuously scrolled.</li>
  <li><strong>Structure:</strong> navigation units, reading progression, installment metadata, and text-to-image links.</li>
  <li><strong>Accessibility:</strong> descriptions, exposed text, reading order, controls, and documented test evidence.</li>
  <li><strong>Languages:</strong> source strings, translated strings, lettering assets, fallback fonts, and right-to-left behavior.</li>
  <li><strong>Delivery:</strong> format accepted by each channel, supported reading systems, protection, and fallback behavior.</li>
  <li><strong>Preservation:</strong> location of editable source files, identifiers, version history, and future export instructions.</li>
</ul>

<p>Test at least one representative chapter or installment before converting the full work. Include the hardest material: dense panels, unusual reading order, embedded text, long descriptions, mixed languages, and any animated or interactive transition. Record failures by reading system and version. “Works on desktop” is not a reusable QA result.</p>

<p>The standards work is still moving. That is a reason to preserve choices, not to postpone accessibility. A publisher that can explain the intended reading experience, keep an adaptable source package, and show how the release was tested is in a stronger position than one that picked a platform first and tried to recover the workflow later.</p>

<p>For related production steps, see our <a href="/blog/2026-06-18-daisy-ace-smart-manual-accessibility-testing-workflow-guide/">manual accessibility-testing workflow</a>, <a href="/blog/2026-06-11-multilingual-epub-language-and-tts-workflow-guide/">multilingual EPUB handoff guide</a>, and <a href="/blog/2026-06-11-accessibility-metadata-onix-workflow-guide/">accessibility metadata guide</a>. If you need help planning a multilingual or accessible digital edition, <a href="/contact/">contact Rex Publishing</a>.</p>

<p><em>W3C and EDRLab source pages checked November 26, 2026. The Digital Comics Task Force work and Divina incubation are ongoing; confirm current specifications and reading-system support for the release you are planning.</em></p>
