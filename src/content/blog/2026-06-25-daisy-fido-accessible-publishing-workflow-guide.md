---
title: 'DAISY Fido can shorten accessible publishing work, but it still needs human review and EPUB QA'
description: 'DAISY’s Fido app can speed up PDF conversion, image descriptions, language markup, heading repair, and metadata drafting, but the official guidance makes clear that teams still need review, verification, and EPUB accessibility checking.'
pubDate: '2026-06-25T10:30:00-04:00'
updatedDate: '2026-06-25T10:30:00-04:00'
author: 'Rex Publishing'
contentType: article
source: repo
---

<p>AI-assisted remediation is getting more useful, but that does not make it automatic.</p>

<p>That is the clearest lesson from DAISY’s <a href="https://daisy.org/activities/software/fido/">Fido</a> documentation. DAISY positions Fido as an experimental DAISY Labs app that can help with PDF conversion, image descriptions, language markup, heading analysis, and metadata generation. The practical value is real. So is the warning: AI output still has to be reviewed and verified.</p>

<p>For Rex readers, the point is not whether Fido is exciting. It is where it fits in an accessible publishing workflow without turning into another false promise that software can replace editorial judgment and conformance checks.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Where Fido can save time</h2>

<p>DAISY says Fido was first released on its website at the end of April 2026 and had already been used for about a year to test AI workflows. On its software page, DAISY says the app can convert image-only and searchable PDFs into Word, EPUB, and HTML while extracting text, headings, lists, images, tables, and math.</p>

<p>That matters because accessible production work often stalls long before formal QA begins. Teams lose time reconstructing structure from poor PDFs, cleaning up headings, drafting descriptions for images, and filling metadata fields that should not be left blank.</p>

<p>DAISY also says Fido can generate image descriptions, detect and mark up multilingual text, analyze heading structure, and draft metadata such as title, authors, publisher, ISBN, language, keywords, and summary. Those are exactly the categories where a first-pass assist can remove repetitive labor, especially when a publishing team is remediating inherited files rather than starting from clean source documents.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why the experimental status matters</h2>

<p>The same DAISY page makes an important distinction that too many AI workflow articles skip. Fido is described as an incubator from DAISY Labs, not as a production-standard app with long-term support like DAISY’s more established software.</p>

<p>That should shape adoption decisions. An incubator tool can still be genuinely useful, but teams should treat it as a workflow accelerator to test carefully, not as infrastructure they assume will behave like a mature enterprise platform. DAISY says partner organizations have used Fido in accessible-book production across multiple languages and reported major time savings, while also stressing that the tool is not a silver bullet.</p>

<p>That is the right posture for smaller publishers, conversion vendors, and accessibility teams. If Fido turns a multiday cleanup task into a shorter review cycle, it has done valuable work. If a team starts talking as if that means the book is now accessibility-safe by default, the workflow has drifted into risk.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What the official guidance says about real-world use</h2>

<p>DAISY’s <a href="https://daisy.org/info-help/guidance-training/tags/fido/">Fido guidance hub</a> is a useful signal by itself. The project already has separate help pages on choosing PDF conversion models, getting API keys for supported AI services, and using local models. That is a reminder that this is not one magic button. It is a stack of choices around input quality, model behavior, access method, and review effort.</p>

<p>Operationally, that means publishers should decide where the tool sits in the workflow before they adopt it broadly:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Use it to accelerate first-pass conversion work.</strong> Fido is strongest where it reduces repetitive cleanup from PDF and Word-originated files.</li>
  <li><strong>Use it to surface structural problems earlier.</strong> Heading analysis and language markup can help reviewers find issues before a file reaches final QA.</li>
  <li><strong>Use it to draft, not finalize.</strong> Image descriptions and metadata fields still need editorial review for accuracy, usefulness, and completeness.</li>
  <li><strong>Use it with clear responsibility lines.</strong> Someone still has to own verification, accessibility checks, and final signoff.</li>
</ul>

<p>That last point matters more when teams rely on external AI services. DAISY says most AI features require either an unlock code or at least one cloud-service API key, and it says users are responsible for complying with each service’s terms on data processing and storage.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What Fido does not replace</h2>

<p>DAISY’s <a href="https://daisy.org/activities/software/ace/">Ace by DAISY</a> page is the cleanest guardrail here. DAISY describes Ace as a free, open source tool for checking EPUB accessibility and generating reports on issues such as violations, metadata, outlines, and images.</p>

<p>That is a different job from what Fido is doing. Fido helps with production, remediation, and drafting tasks. Ace helps check whether the EPUB itself holds up against accessibility expectations. One tool can make people faster. The other helps them test the file they are about to ship.</p>

<p>The workflow is stronger when teams keep those categories separate: source repair, AI-assisted drafting, human review, EPUB checking, and downstream reading validation. That is also why our <a href="/blog/2026-06-18-daisy-ace-smart-manual-accessibility-testing-workflow-guide/">Ace and SMART workflow guide</a>, <a href="/blog/2026-06-17-daisy-pipeline-format-conversion-workflow-guide/">DAISY Pipeline guide</a>, and <a href="/blog/2026-06-22-epub-accessibility-techniques-12-workflow-guide/">EPUB accessibility techniques guide</a> all point to the same conclusion: faster production only helps if QA remains explicit.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">A practical way to test Fido without overclaiming</h2>

<p>If your team wants to evaluate Fido sensibly, start with a narrow workflow:</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong>Choose one remediation-heavy file type.</strong> A difficult PDF backlist title is a better test than a clean born-digital EPUB.</li>
  <li><strong>Measure time saved in discrete tasks.</strong> Track conversion cleanup, heading repair, metadata drafting, and image-description review separately.</li>
  <li><strong>Keep a human editor in the loop.</strong> Review every AI-generated description, language tag, and metadata field before reuse.</li>
  <li><strong>Run formal EPUB checks afterward.</strong> Treat AI assistance as preparation for QA, not as proof that QA is complete.</li>
  <li><strong>Check vendor and data terms before scale-up.</strong> Make sure the service mix fits the rights and privacy posture of the content you handle.</li>
</ol>

<p>That approach keeps the benefit clear and the claims modest. Fido looks most useful when it shortens the messy middle of accessible publishing work. The official documentation does not support a broader conclusion than that, and it does not need to. In publishing workflows, a serious shortcut is already valuable.</p>

<p>If you need help tightening your accessibility, adaptation, or production workflow, <a href="/contact/">contact Rex Publishing</a>.</p>
