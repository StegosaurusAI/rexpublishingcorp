---
title: "The TDM opt-out protocol matters only if your publishing workflow separates discoverability from permission"
description: "As of Friday, September 4, 2026, FEP is urging publishers to use the machine-readable TDM opt-out protocol developed with AIE and EDRLab. For authors, translators, and rights teams, the practical question is not whether content is visible online. It is whether your web pages, EPUBs, and PDFs clearly reserve mining rights and point counterparties toward a licensing path."
pubDate: '2026-09-04T10:30:00-04:00'
updatedDate: '2026-09-04T10:30:00-04:00'
author: 'Rex Publishing'
heroImage: '/images/blog/2026-09-04-tdm-opt-out-protocol-publishing-workflow-guide.svg'
draft: false
contentType: article
source: repo
---

<p>As of <strong>Friday, September 4, 2026</strong>, the <a href="https://www.fep-fee.eu/TDM-opt-out-protocol">Federation of European Publishers</a> is still telling publishers that the machine-readable Text and Data Mining protocol it discussed with AIE and EDRLab on <strong>June 5, 2026</strong> is already ready to use. That matters because too many publishing teams still blur together three different ideas: content being visible on the web, content being readable by machines, and content being available for mining or AI training without permission. Those are not the same thing.</p>

<p>The useful part of this story is operational. The <a href="https://www.w3.org/community/reports/tdmrep/CG-FINAL-tdmrep-20240510/">W3C Community Group report for the TDM Reservation Protocol</a> describes a machine-readable way to reserve text-and-data-mining rights on lawfully accessible content and to point would-be miners toward a licensing policy. It is not a magic enforcement tool, and it is not a full W3C standard. But it does give publishers and rights holders one concrete method for saying, in a form machines can read, that access does not equal permission.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What the protocol actually says</h2>

<p>The report is explicit that this work is a technical response to <strong>Article 4 of EU Directive 2019/790</strong>. In that framework, rightsholders can reserve TDM rights through machine-readable means. The protocol centers on two signals:</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong><code>tdm-reservation</code></strong>, which signals whether rights are reserved.</li>
  <li><strong><code>tdm-policy</code></strong>, which points to a machine-readable policy describing contact or licensing terms.</li>
</ol>

<p>The report says <strong><code>tdm-reservation=1</code></strong> means rights are reserved, while <strong><code>tdm-reservation=0</code></strong> means they are not reserved. That is the cleanest practical distinction in the whole specification. A publisher does not need to hide content to reserve rights. The point is to keep the content accessible to ordinary readers while making the rights position legible to automated systems.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Where publishing teams can place the signal</h2>

<p>This is where the protocol becomes useful for real production workflows instead of abstract AI-policy argument. The W3C report says the reservation and policy can be expressed through a <strong><code>/.well-known/tdmrep.json</code></strong> file, through <strong>HTTP response headers</strong>, through <strong>HTML metadata</strong>, and inside <strong>EPUB</strong> and <strong>PDF metadata</strong>.</p>

<p>That matters because publishing content does not live in one place. A rights-sensitive article may appear as a web page, a downloadable PDF, an EPUB sample, or a file passed to partners. If your team only adds restrictive language to a website footer, the machine-readable signal may stop at the browser layer while the downloadable assets stay silent. The protocol gives operations teams a cleaner checklist:</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong>Web pages:</strong> decide whether the signal will live at the server level, the page level, or both.</li>
  <li><strong>Downloadable files:</strong> decide whether EPUB and PDF exports also carry the reservation metadata.</li>
  <li><strong>Policy routing:</strong> decide where the licensing or contact policy lives and who owns it internally.</li>
  <li><strong>Rights governance:</strong> decide which content classes should carry the reservation by default and which exceptions need approval.</li>
</ol>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why this is bigger than a web-robots problem</h2>

<p>The protocol is often misread as a fancier <code>robots.txt</code> debate. That is too narrow. The <a href="https://www.edrlab.org/2026/04/17/notes-from-the-ietf-ai-pref-toronto-meeting-april-2026/">EDRLab note from April 17, 2026</a> is useful precisely because it extends the conversation beyond HTML pages. It describes the TDM reservation flag as something that can be embedded in publications such as <strong>EPUB</strong> and <strong>PDF</strong>, in video files such as <strong>MP4</strong>, or logically attached to web content, with more granular AI-use preference signals potentially layered on afterward.</p>

<p>That is a better framing for rights holders. A publisher that thinks only in terms of website scraping may miss the more obvious exposure point: sample chapters, rights guides, catalogues, and other files that circulate well beyond one domain. If those assets are part of the publishing workflow, the reservation workflow has to include them too.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What the protocol does not solve</h2>

<p>This is where weak coverage usually drifts into overclaim. The protocol does <strong>not</strong> guarantee that every crawler will comply. It does <strong>not</strong> replace contracts, licensing, or jurisdiction-specific legal analysis. It does <strong>not</strong> turn a W3C Community Group report into a universal legal standard. The W3C Community Group itself says the report is <strong>not on the W3C Standards Track</strong>.</p>

<p>That limit does not make the protocol useless. It just means Rex readers should treat it as a practical signaling and routing tool. If your content matters enough to protect, your workflow should still include contract terms, partner controls, and a clear internal decision about who handles permissions requests when a machine-readable policy points someone to contact you.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">The practical publishing takeaway</h2>

<p>The real test is simple. If your team says its content is not available for unrestricted mining, can that position be read in a machine-readable way across the places where the content actually appears?</p>

<p>If the answer is no, the gap is probably not legal theory. It is workflow design. The TDM opt-out protocol matters only if you use it to separate <strong>discoverability</strong> from <strong>permission</strong>, and to make that distinction visible across your web pages, EPUBs, PDFs, and policy infrastructure before someone else assumes silence means convenience.</p>

<p>For related Rex coverage, see our <a href="/blog/2026-08-13-eu-ai-generated-content-transparency-code-guide/">EU AI-content transparency guide</a>, our <a href="/blog/2026-07-30-uk-ai-licensing-market-rights-guide/">UK AI licensing market guide</a>, and our <a href="/blog/2026-07-24-book-metadata-ownership-distribution-guide/">book metadata ownership workflow guide</a>. If you need help turning rights reservations, metadata, and digital distribution into one workable publishing process, <a href="/contact/">contact Rex Publishing</a>.</p>
