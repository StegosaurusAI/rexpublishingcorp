---
title: "What South Korea's accessible EPUB portal gets right about verification"
description: "Use South Korea's five-stage accessible EPUB service as a workflow model: control the file, separate automated and manual checks, record fixes, and verify the release build."
pubDate: "2026-11-27T19:31:37+00:00"
updatedDate: "2026-11-27T19:31:37+00:00"
heroImage: "/images/blog/2026-08-31-korea-accessible-epub-verification-workflow-guide.svg"
author: "Rex Publishing"
contentType: "article"
source: "repo"
draft: false
---

<p>Accessible publishing workflow · Published and updated <time datetime="2026-11-27T19:31:37+00:00">November 27, 2026</time></p>

<script type="application/ld+json">[{"@context":"https://schema.org","@type":"Article","headline":"What South Korea's accessible EPUB portal gets right about verification","description":"Use South Korea's five-stage accessible EPUB service as a workflow model: control the file, separate automated and manual checks, record fixes, and verify the release build.","datePublished":"2026-11-27T19:31:37+00:00","dateModified":"2026-11-27T19:31:37+00:00","author":{"@type":"Organization","name":"Rex Publishing"},"publisher":{"@type":"Organization","name":"Rex Publishing"},"articleSection":"Accessible publishing workflow","image":"https://www.rexpublishingcorp.com/images/blog/2026-08-31-korea-accessible-epub-verification-workflow-guide.svg","mainEntityOfPage":"https://www.rexpublishingcorp.com/blog/2026-08-31-korea-accessible-epub-verification-workflow-guide/"},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.rexpublishingcorp.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.rexpublishingcorp.com/blog/"},{"@type":"ListItem","position":3,"name":"Korea accessible EPUB verification workflow","item":"https://www.rexpublishingcorp.com/blog/2026-08-31-korea-accessible-epub-verification-workflow-guide/"}]}]</script>

<img src="/images/blog/2026-08-31-korea-accessible-epub-verification-workflow-guide.svg" alt="Five-stage accessible EPUB workflow: control the file, run automated checks, complete manual review, record fixes, and verify the release build." width="1200" height="630" loading="lazy" />

An accessibility checker can find a problem. A publishing workflow has to carry that finding through correction, review and distribution without losing the evidence.

South Korea's National Library for the Disabled now presents that work as one public service. Its [Electronic Publication Accessibility Integrated Portal](https://nld.go.kr/eacnew/eacMain.do) shows five stages: create an accessible EPUB, upload it, run automated and manual verification, review the result and receive the Korean service's confirmation mark, then provide the verified file through library or distribution channels.

The mark and the legal framework are specific to South Korea. The useful lesson for teams elsewhere is the shape of the handoff: intake, mixed testing, correction support, a recorded result and a controlled route to the file that readers receive.

## Start by controlling the file under review

The portal begins with production, then asks for an EPUB upload. That order sounds obvious, but it fixes a common QA failure: a report is useful only when the team can identify the exact file that produced it.

Give the candidate EPUB a stable build label or hash. Record its language, edition, identifier and production source. Freeze that copy while the first review is in progress. If the team rebuilds the EPUB, create a new build record instead of silently replacing the file under an old report.

This matters for translated editions. A translated EPUB may have different text, navigation, image descriptions and reading order from the source edition. Do not carry a pass, exception or unresolved issue from one language edition into another without checking the actual file.

## Keep automated and manual findings in separate lanes

The Korean portal explicitly describes its verification stage as **automated and manual**. The Library's [support-services page](https://www.nld.go.kr/home/businessWorking.do) also describes an automated service that checks EPUB 3.0 files against standard specifications and accessibility requirements, then points out areas needing improvement.

DAISY's [August 2026 account of the system](https://daisy.org/news-events/articles/smart-libraries-ai-use-in-south-korea/) attributes the technical checks to Ace and EPUBCheck, with a chatbot that explains issues and suggests sample solutions. That combination can make a report easier to act on. It does not turn an automated result into evidence that the book works well for readers.

Keep at least three result types distinct:

- **format validation:** whether the package follows the relevant EPUB specification;
- **automated accessibility findings:** issues a checker can detect consistently;
- **manual and reader-facing review:** judgments about meaning, sequence, navigation and actual use that software cannot settle.

An image can have an alt attribute and still have an unhelpful description. A heading structure can be technically present and still misrepresent the book. A file can also behave differently across reading systems. Those are reasons to route findings, not to collapse them into one score.

## Turn explanations into assigned corrections

The National Library's [e-book accessibility page](https://www.nld.go.kr/home/businessEbook.do) says the service combines automated inspection with chatbot explanations, an EPUB 3.0 production manual, consultation and coaching. The portal also points users to guidance based on EPUB Accessibility 1.1 and WCAG 2.2.

That support layer matters in practice. A bare error code tells a production team what a tool rejected. It may not explain who should fix it, whether the proposed correction fits the content, or how the team will verify the next build.

For each finding, record:

1. the source build and report;
2. the affected location or resource;
3. whether the finding came from format validation, an automated accessibility check or manual review;
4. the proposed correction and its owner;
5. the editorial or technical decision made;
6. the build in which the correction was applied;
7. the result of the verification pass.

Treat chatbot output as guidance to review, not as an approved edit. A sample solution may be technically plausible and still be wrong for the image, language or reading order in front of you.

## Use one register from intake to release

The following register is **Rex Publishing's editorial framework**, not a form supplied by the National Library for the Disabled and not a certification checklist.

<div role="region" aria-label="Suggested accessible EPUB verification register" tabindex="0" style="overflow-x:auto">
<table>
<caption>Suggested evidence fields for an accessible EPUB verification handoff</caption>
<thead><tr><th scope="col">Checkpoint</th><th scope="col">Evidence to keep</th><th scope="col">Release question</th></tr></thead>
<tbody>
<tr><th scope="row">Intake</th><td>Edition, language, identifier, build label or hash, production source</td><td>Are we reviewing the file intended for this release?</td></tr>
<tr><th scope="row">Automated checks</th><td>Tool and rules versions, dated reports, unresolved errors and warnings</td><td>Can another reviewer reproduce the result?</td></tr>
<tr><th scope="row">Manual review</th><td>Applicable checkpoints, reviewer role, findings and items not assessed</td><td>Which content and interaction questions remain open?</td></tr>
<tr><th scope="row">Corrections</th><td>Decision, owner, changed resource and replacement build</td><td>Did the approved fix reach the EPUB?</td></tr>
<tr><th scope="row">Release verification</th><td>Final reports, manual recheck, reading-system sample and distribution file identity</td><td>Is the delivered file the verified file?</td></tr>
</tbody>
</table>
</div>

Use **not assessed** when a review did not cover a checkpoint. Use **unresolved** when the team knows a problem remains. A blank cell should never be allowed to look like a pass.

## Verify the release build, not the memory of the fix

The Korean portal ends with confirmation and distribution. In a local workflow, the equivalent control is simple: rerun the applicable checks on the rebuilt EPUB, repeat the manual checks affected by the changes, and compare the verified file with the file handed to the distributor or library.

A production note that says "fixed" is not the same as a corrected deliverable. Nor does a successful automated rerun prove that navigation, image descriptions or reading order are useful. Keep the last human review attached to the final build, and sample the intended reading environments when the title's content or audience makes that necessary.

The National Library's English site says its verification service launched on [November 15, 2022](https://www.nld.go.kr/home/aboutHistory.do). The newer portal puts the whole chain on one page. Quality control is not one scan at the end of conversion. It runs from file intake to downstream service.

For a title-level manual protocol, use our [Ace and SMART review guide](/blog/2026-06-18-daisy-ace-smart-manual-accessibility-testing-workflow-guide/). Our [backlist accessibility triage guide](/blog/2026-06-15-ebook-backlist-accessibility-remediation-guide/) covers the earlier decision about which files need assessment or source investigation. Teams preparing a new conversion can also start with the [Word-to-EPUB workflow](/blog/2026-06-16-wordtoepub-word-to-epub-adaptation-workflow-guide/).

The practical standard is modest: identify the file, preserve each kind of evidence, assign the correction and verify the build that will actually ship. A portal result can support that discipline. It cannot replace the people who decide whether the book works.

Learn about [Rex Publishing's cross-language and format work](/about/) or use our [contact page](/contact/) to discuss an EPUB project.

*Sources checked November 27, 2026. No EPUB was uploaded to the Korean service for this article, and no claim is made that its confirmation mark applies outside that service or replaces disabled-reader testing.*
