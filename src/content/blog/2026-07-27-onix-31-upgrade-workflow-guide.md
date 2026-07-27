---
title: 'ONIX 3.1 upgrades are usually a cleanup job, not a second migration'
description: 'BookNet Canada''s July 24, 2026 guidance makes the practical point clear: teams already sending ONIX 3.0 usually need to remove a small set of deprecated baggage, fix two old element positions, and then update the ONIXMessage header to move to 3.1.'
pubDate: '2026-07-27T17:30:00-04:00'
updatedDate: '2026-07-27T17:30:00-04:00'
author: 'Rex Publishing'
heroImage: '/images/blog/2026-07-27-onix-31-upgrade-workflow-guide.svg'
contentType: article
source: repo
---

<p>BookNet Canada's <a href="https://www.booknetcanada.ca/blog/2026/7/24/updating-from-onix-30-to-31">July 24, 2026 ONIX 3.1 explainer</a> is useful because it cuts through a familiar metadata panic. For teams already sending <strong>ONIX 3.0</strong>, moving to <strong>ONIX 3.1</strong> is usually <strong>not</strong> another 2.1-to-3.0 style migration. It is mostly a cleanup pass followed by a header change.</p>

<p>That distinction matters. Metadata teams still living with old ONIX 2.1 dependencies have good reason to be wary of version-talk. But BookNet's current guidance, attributed to EDItEUR executive director Graham Bell, is narrower and more practical: <strong>if your feed is already on 3.0, the 3.1 step is modest as long as you remove the deprecated leftovers first</strong>.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What actually has to change</h2>

<p>The July 24 BookNet post says the work starts with a small list of cleanup tasks, not with a wholesale rebuild. The main items are:</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong>Replace removed deprecated elements</strong> such as old <code>AudienceCode</code>, <code>DateFormat</code>, and some older <code>Conference</code> usage with their modern equivalents.</li>
  <li><strong>Remove the old <code>Gender</code> tag</strong>, which 3.1 no longer includes.</li>
  <li><strong>Fix two deprecated element positions</strong>: <code>SalesRestriction</code> belongs inside <code>SalesRights</code>, and <code>UnnamedPersons</code> must come before contributor alternative-name, affiliation, biography, or website details.</li>
  <li><strong>Update the <code>ONIXMessage</code> declaration</strong> by changing the <code>release</code> and <code>xmlns</code> attributes once the cleanup is done.</li>
</ol>

<p>The useful operational point is that these fixes still leave a valid <strong>ONIX 3.0</strong> feed before the final declaration switch. That makes staged testing possible. A team can clean up the payload first, keep normal 3.0 delivery running, and only then flip the message header after confirming partner readiness.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why this is not the same problem as escaping ONIX 2.1</h2>

<p>BookNet Canada's separate <a href="https://www.booknetcanada.ca/blog/2026/6/12/can-we-give-up-completely-on-onix-21">June 12, 2026 post on ONIX 2.1</a> explains why so many teams still approach version changes defensively. That piece says major players are ending support for 2.1 and acknowledges the real overhead of keeping 2.1 feeds alive, especially when down-converted records create troubleshooting noise.</p>

<p>But the same June post also says some downstream dependencies still keep 2.1 in circulation. That is exactly why Rex readers should keep the current claim narrow. <strong>The 3.0-to-3.1 move is comparatively light only for organizations already operating on ONIX 3.0.</strong> It does not mean the wider supply chain is finished with legacy metadata headaches.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What can wait until after the version switch</h2>

<p>Another reason this upgrade is manageable is that BookNet says the newer 3.1-era additions are <strong>not mandatory for the initial move</strong>. Teams can replicate their existing 3.0 payload first, then decide later whether newer features are worth the effort.</p>

<p>That sequencing matters because standards projects often stall when publishers treat the version switch and the feature roadmap as one decision. They are not. The safer order is:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li>clean up deprecated baggage;</li>
  <li>verify that the feed is still sound as ONIX 3.0;</li>
  <li>confirm that trading partners can accept 3.1;</li>
  <li>change the message header;</li>
  <li>only then evaluate optional 3.1 enhancements.</li>
</ul>

<p>As of <strong>Monday, July 27, 2026</strong>, a BIC media ONIX reference page citing EDItEUR as source identifies <strong>ONIX 3.1.3 / Codelist Issue 73</strong> as the current ONIX 3 baseline. That does not prove every partner in your supply chain is fully ready for 3.1, but it does confirm that the current standards layer has moved well beyond the first 3.1 release.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Which newer 3.1 capabilities are worth keeping in view</h2>

<p>BookNet's July 24 article also gives a useful reminder of why a team might want to complete the version switch instead of deferring it indefinitely. The newer 3.1.3 revision adds capabilities around <strong>organization identifiers for professional affiliations, AI-related collateral-use limitations, prize identifiers, EU safety-related physical addresses, improved collateral-text sourcing, and translated or transliterated text</strong>.</p>

<p>Rex readers should treat that list as strategic context, not as a mandatory launch checklist. A publisher does not need to implement all of it on day one. But once the feed is cleanly declared as 3.1, those options become easier to adopt without carrying forward old structural debt.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">The practical takeaway</h2>

<p>The useful lesson is procedural. If you already send ONIX 3.0, the first job is usually <strong>housekeeping</strong>, not reinvention. Remove the small set of removed or misplaced elements, confirm that the cleaned record still behaves properly, check partner readiness, and then change the <code>ONIXMessage</code> header.</p>

<p>That is a much more manageable project than "migrate everything again." The bigger risk is not the specification change itself. It is confusing a <strong>3.0 cleanup task</strong> with the older, messier reality of escaping <strong>2.1-era dependencies</strong>.</p>

<p>For related Rex guidance, see our <a href="/blog/2026-07-02-onix-creation-and-distribution-workflow-guide/">ONIX creation-and-distribution workflow guide</a>, our <a href="/blog/2026-07-14-onix-multi-item-vs-multicomponent-workflow-guide/">multi-item versus multicomponent metadata guide</a>, and our <a href="/blog/2026-07-10-bisg-hugo-translation-rights-royalty-workflow-guide/">BISG HUGO rights-royalty workflow piece</a>. If you need help tightening metadata handoffs before a standards upgrade becomes a supply-chain problem, <a href="/contact/">contact Rex Publishing</a>.</p>
