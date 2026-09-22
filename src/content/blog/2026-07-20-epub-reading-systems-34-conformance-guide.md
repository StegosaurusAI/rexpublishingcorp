---
title: 'EPUB Reading Systems 3.4 is a QA and vendor-conversation story, not a baseline reset'
description: 'W3C''s June 26, 2026 Working Draft for EPUB Reading Systems 3.4 adds roll-layout support and removes some older processing requirements, but the practical signal for publishers is still testing and vendor questions while EPUB 3.3 remains the stable baseline.'
pubDate: '2026-07-20T14:33:02-04:00'
updatedDate: '2026-07-20T14:33:02-04:00'
author: 'Rex Publishing'
heroImage: '/images/blog/2026-07-20-epub-reading-systems-34-conformance-guide.svg'
draft: true
contentType: article
source: repo
---

<p>W3C's <a href="https://www.w3.org/TR/epub-rs-34/">EPUB Reading Systems 3.4</a>, published as a <strong>Working Draft on June 26, 2026</strong>, is useful for publishing teams for one reason above the rest: it sharpens the next round of EPUB QA and vendor questions. It is <strong>not</strong> the new stable baseline that ordinary production teams should suddenly switch to.</p>

<p>That distinction matters because standards chatter gets misread all the time. W3C's own <a href="https://www.w3.org/TR/epub-overview-34/">EPUB 3 Overview</a> says EPUB 3.4 is still in development and based on the stable EPUB 3.3 version. W3C's current <a href="https://www.w3.org/publishing/epub3/">EPUB 3 page</a> still points readers to <strong>EPUB 3.3, EPUB Reading Systems 3.3, and EPUB Accessibility 1.1</strong> as the current stack.</p>

<p>So the practical read is narrower and more useful. If you ship EPUBs, outsource conversion, or manage accessibility QA, Reading Systems 3.4 should shape what you ask partners to test next. It should not be confused with proof that the ecosystem has already moved.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What actually changed in the draft</h2>

<p>W3C's change log for the draft highlights the parts most likely to matter in workflow conversations. The biggest visible addition is <strong>support for roll layouts</strong> under fixed layouts. W3C also logs the removal of several older processing requirements, including some fixed-layout property handling and some manifest-fallback processing rules, plus a clarification that <code>hasFeature</code> matching is case sensitive.</p>

<p>None of that means every reading app has already updated behavior. It does mean teams now have a cleaner standards reference for questions that often get lost in vague bug reports: which layout behavior is being targeted, which legacy fallback expectation is still worth testing, and whether an implementation issue is tied to old assumptions that the draft is trying to retire.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why this is a reading-system story, not an authoring story</h2>

<p>W3C is explicit that the EPUB standard separates <strong>authoring requirements</strong> from <strong>rendering requirements</strong>. The core specification defines the publication format. Reading Systems 3.4 is about the software that renders it.</p>

<p>That separation is useful because many production disputes are really handoff disputes. A publisher may deliver a valid file, a distributor may ingest it cleanly, and the reading experience can still break because a downstream reading system handles layout, navigation, scripting, or privacy controls differently. W3C also notes that a reading system might be visual, audio-only, or distributed across components, which is another reason not to reduce conformance to one app screenshot.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">The quiet workflow issue is network access and user control</h2>

<p>One of the more practical sections in the draft is not flashy at all. W3C says reading systems <em>may</em> support network access to retrieve remote resources, but warns that doing so raises security and privacy risks. It recommends that developers notify users when network activity occurs and let users block network access.</p>

<p>For publishers and service vendors, that is a concrete QA prompt. If a workflow depends on remote resources, scripted behavior, or anything that reaches outside the package, the question is no longer only whether it works in a favorable environment. The question is what happens when a reading system takes the security and privacy guidance seriously.</p>

<p>That makes this draft relevant even for teams that do not build reading software themselves. It gives production leads and accessibility reviewers better language for acceptance testing, bug escalation, and vendor sign-off.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Accessibility expectations still reach beyond the file itself</h2>

<p>W3C's accessibility section is another useful reminder that EPUB quality is not exhausted by file validity. The draft points to accessible bookshelf access, controls, full-text search, display control, and zoom as features that materially affect the reading experience.</p>

<p>That matters because accessibility conversations still get narrowed too quickly to metadata fields or pass-fail content checks. A file can be structurally respectable and still land in a reading environment that makes navigation, discovery, magnification, or interface control harder than it should be. Reading Systems 3.4 does not magically solve that problem, but it does keep the standards conversation pointed at the user-facing layer where a lot of accessibility success or failure actually happens.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What Rex readers should do with this now</h2>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li>Treat Reading Systems 3.4 as a <strong>testing and roadmap document</strong>, not as proof that the stable baseline has changed.</li>
  <li>Keep using the current EPUB 3.3 stack as the default reference for ordinary production decisions.</li>
  <li>Ask vendors and platform partners specifically about <strong>roll-layout behavior, legacy processing assumptions, network-access handling, and accessibility controls</strong>.</li>
  <li>Keep claims narrow unless you have implementation evidence from the actual reading environments your books depend on.</li>
  <li>Separate authoring conformance from reading-system behavior when triaging defects, contracts, and QA responsibility.</li>
</ul>

<p>The useful lesson is procedural. A new draft does not mean panic migration. It means the next round of EPUB QA can get more precise. For teams already working against the current baseline, that is good news: the job is to tighten testing and partner conversations, not to pretend the whole stack reset overnight.</p>

<p>For related Rex guidance, see our <a href="/blog/2026-07-15-epub-33-current-baseline-guide/">EPUB 3.3 baseline guide</a>, our <a href="/blog/2026-06-22-epub-accessibility-techniques-12-workflow-guide/">EPUB accessibility techniques workflow guide</a>, and our <a href="/blog/2026-06-16-epub-accessibility-eaa-mapping-workflow-guide/">EAA mapping guide</a>. If you need help tightening EPUB production, accessibility QA, or vendor handoffs before distribution issues multiply, <a href="/contact/">contact Rex Publishing</a>.</p>
