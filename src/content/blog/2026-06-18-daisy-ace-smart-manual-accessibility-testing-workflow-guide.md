---
title: 'Ace can catch EPUB accessibility errors, but SMART is where manual review becomes repeatable'
description: 'DAISY’s SMART workflow shows publishers how to move from automated Ace scans into structured manual accessibility testing, clearer checkpoints, and more consistent reporting.'
pubDate: '2026-06-18T10:30:00-04:00'
updatedDate: '2026-06-18T10:30:00-04:00'
author: 'Rex Publishing'
contentType: article
source: repo
---

<p>A clean automated accessibility report is useful, but it is not the same thing as a finished accessibility review.</p>

<p>That is the practical gap DAISY’s <a href="https://inclusivepublishing.org/toolbox/ace-smart/">Ace SMART</a> is trying to close. Inclusive Publishing describes SMART as a free online accessibility reporting system, with SMART standing for Simple Manual Accessibility Reporting Tool. The workflow matters because it starts where too many teams stop: after the EPUB has already passed through an automated scan.</p>

<p>For Rex readers, the lesson is straightforward. Automated EPUB checking should speed up QA, not end it. The harder part is turning the remaining human judgments into something consistent enough to repeat title after title.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why automated checks are only the first pass</h2>

<p>DAISY’s <a href="https://inclusivepublishing.org/toolbox/accessibility-checker/getting-started/">Ace getting-started guide</a> is unusually clear about the limit of automation. It says only a limited portion of accessibility checks can be automated, and that Ace is not a complete conformance evaluation tool. Instead, it is an aid for a broader human-driven evaluation process.</p>

<p>That warning should reshape how small and midsize publishing teams think about QA. Automated testing is good at finding certain classes of structural, metadata, and markup problems quickly. It is much worse at deciding whether an image description is actually helpful, whether the heading structure reflects the logic of the book, or whether a standards-compliant choice is still confusing in practice.</p>

<p>If your workflow treats a successful automated scan as proof that the title is accessible, you are not really running an accessibility review. You are running a first filter.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What SMART adds after Ace</h2>

<p>Inclusive Publishing says the SMART workflow begins by running Ace on the EPUB and loading Ace’s JSON report into SMART. From there, SMART uses the automated findings plus the publication’s detected characteristics to configure the manual testing protocol.</p>

<p>That is a more useful handoff than a loose instruction like “do a manual review next.” DAISY says SMART then guides the user through the manual checking process, tailors checkpoints to the properties of the publication, and generates a consistent and clear report.</p>

<p>Operationally, that does three things many teams still handle inconsistently:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>It separates machine findings from human judgment.</strong> The scan identifies what can be checked automatically, while manual review focuses on what still needs interpretation.</li>
  <li><strong>It makes checkpoints more repeatable.</strong> Reviewers are less likely to skip the same categories differently from one title to the next.</li>
  <li><strong>It improves reporting.</strong> A structured report is easier to hand back to vendors, production staff, or internal stakeholders than scattered notes in email or spreadsheets.</li>
</ul>

<p>That is especially valuable for publishers who outsource parts of conversion or QA. A repeatable manual protocol is easier to manage across partners than a vague expectation that someone will “check accessibility carefully.”</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What still needs human review</h2>

<p>The strongest use of SMART is not as a compliance badge, but as a workflow discipline. Some checks still depend on context, editorial judgment, and standards interpretation.</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Image review:</strong> an automated tool can tell you an alt attribute exists, but not whether the description helps the reader.</li>
  <li><strong>Structure review:</strong> heading order, landmarks, and navigation can pass technical checks while still being awkward or misleading.</li>
  <li><strong>Metadata review:</strong> accessibility metadata can be present without being complete, honest, or aligned with the actual reading experience.</li>
  <li><strong>Standards interpretation:</strong> some questions sit at the boundary between markup, content judgment, and conformance expectations under EPUB Accessibility and WCAG.</li>
</ul>

<p>That is why SMART’s connection to the <a href="https://inclusivepublishing.org/toolbox/daisy-accessible-publishing-knowledge-base/">DAISY Accessible Publishing Knowledge Base</a> matters. Inclusive Publishing describes the Knowledge Base as a reference for best practices in accessible digital publications, primarily focused on EPUB, with summaries, explanations, techniques, examples, FAQs, and related guidance. In practice, that gives reviewers somewhere more stable to go than ad hoc memory or improvised house rules.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">How this fits into a broader accessibility workflow</h2>

<p>SMART solves one important problem, but not every one.</p>

<p>Inclusive Publishing’s <a href="https://inclusivepublishing.org/toolbox/accessibility-guidelines/">standards and guidelines overview</a> points teams toward EPUB 3.3, EPUB Accessibility 1.1, WCAG 2.2, and WAI-ARIA. That standards stack is a reminder that accessible publishing is broader than a single tool. SMART helps organize title-level manual review. It does not replace upstream authoring discipline, metadata handoff, or downstream reading-system testing.</p>

<p>A title can be well-prepared and still encounter platform-specific problems once it reaches the user. SMART is best understood as the middle layer between automated EPUB checking and broader delivery testing.</p>

<p>It also complements, rather than replaces, earlier QA work such as our <a href="/blog/2026-06-16-epub-accessibility-eaa-mapping-workflow-guide/">EPUB accessibility under the EAA guide</a>, our <a href="/blog/2026-06-15-qualebook-ebook-quality-checklist-workflow-guide/">ebook quality checklist guide</a>, and our <a href="/blog/2026-06-11-accessibility-metadata-onix-workflow-guide/">accessibility metadata ONIX workflow guide</a>. The workflow is stronger when file checks, manual checks, metadata checks, and downstream validation all line up.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">A practical way to use SMART without overclaiming</h2>

<p>If your team wants a workable process, the cleanest approach looks like this:</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong>Run an automated EPUB scan first.</strong> Use it to catch obvious structural and metadata issues quickly.</li>
  <li><strong>Load the JSON output into SMART.</strong> Let the manual protocol start from the file’s actual characteristics.</li>
  <li><strong>Review the title systematically.</strong> Focus on the issues automation cannot settle cleanly.</li>
  <li><strong>Produce one consistent report.</strong> Use that report to assign fixes, document exceptions, and compare vendor performance over time.</li>
  <li><strong>Keep the claims modest.</strong> Treat the result as evidence of a stronger review process, not as a guarantee that every reading environment will behave perfectly.</li>
</ol>

<p>That last point matters most. SMART is useful because it makes manual accessibility review less improvised. It is not useful if teams turn it into a false signal that no further judgment is needed.</p>

<p>The better posture is calmer than that: automate what you can, review what you must, document the difference, and keep testing where real readers will encounter the book.</p>

<p>If you need help tightening EPUB accessibility, metadata, or QA workflows, <a href="/contact/">contact Rex Publishing</a>.</p>
