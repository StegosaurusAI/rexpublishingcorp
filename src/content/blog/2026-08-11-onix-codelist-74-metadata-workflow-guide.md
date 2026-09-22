---
title: "ONIX Codelist 74 matters most where metadata teams still treat standards updates as optional maintenance"
description: "BookNet Canada's August 10, 2026 release note and EDItEUR's updated codelists make one practical point clear: ONIX Issue 74 is small, but it creates immediate review work around human-authorship links, hybrid physical-and-digital products, audiobook labeling, accessibility notes, and any remaining ONIX 2.1 dependency."
pubDate: '2026-08-11T10:30:00-04:00'
updatedDate: '2026-08-11T10:30:00-04:00'
author: 'Rex Publishing'
heroImage: '/images/blog/2026-08-11-onix-codelist-74-metadata-workflow-guide.svg'
contentType: article
source: repo
---

<p><a href="https://booknetcanada.ca/blog/2026/08/10/onix-codelist-74-released/">BookNet Canada's August 10, 2026 ONIX Codelist 74 release note</a> is useful because it does not pretend this is a giant standards revolution. It is a modest update. But it is still the kind of modest update that can leave live metadata slightly wrong for months if nobody owns the cleanup.</p>

<p>For Rex readers, the practical question is simple: <strong>which existing ONIX workflows now deserve a short review pass before old assumptions harden into bad records?</strong> Based on BookNet's release summary and EDItEUR's updated Issue 74 codelists, the answer sits in five places: human-authorship signaling, mixed physical-and-digital retail products, audiobook labeling, accessibility notes, and any remaining ONIX 2.1 dependency.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">The AI-related additions are links, not proof</h2>

<p>The part most likely to attract sloppy interpretation is in <a href="https://ns.editeur.org/onix/en/73">EDItEUR List 73</a>. Issue 74 adds code <strong>55</strong> for a link to third-party certification of the absence of AI-generated content and code <strong>56</strong> for a link to a first-party declaration of the absence of AI-generated content.</p>

<p>That matters operationally because it gives publishers and contributors a clearer place to point when they want to signal human authorship. It does <strong>not</strong> mean ONIX now certifies authorship on its own. The metadata can link to a declaration or certification page. It does not replace the underlying scheme, and it does not guarantee that every downstream partner will ingest or display the link the same way.</p>

<p>The safer workflow is to treat these as <strong>link-management and claim-governance fields</strong>. If a press wants to use them, someone should confirm:</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li>what the declaration or certification actually covers,</li>
  <li>whether the linked page is product-specific,</li>
  <li>whether the claim survives legal and editorial review, and</li>
  <li>whether downstream recipients already accept the field without breaking validation or display logic.</li>
</ul>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Hybrid retail products now need more exact classification</h2>

<p>BookNet's summary also flags a new List 150 code for <strong>multi-component retail products that contain both physical and digital parts</strong>. That addition matters because mixed bundles have a habit of being described vaguely even when the commercial offer is not vague at all.</p>

<p>If a team sells a print component plus a digital component as one retail product, the new vocabulary is a prompt to revisit whether the current record still hides too much inside generic bundle language. This is less about standards purity than about making the package legible to retailers, distributors, and internal operations teams.</p>

<p>For publishing staff, the immediate check is blunt: <strong>which live products combine physical and digital parts, and are they still being described with older workarounds that Issue 74 now makes unnecessary?</strong></p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Dual and duet audiobooks should not be flattened into one generic audio label</h2>

<p>In <a href="https://ns.editeur.org/onix/en/81">EDItEUR List 81</a>, Issue 74 adds new codes for <strong>audiobook - dual</strong> and <strong>audiobook - duet</strong>. That is a small-looking change with real merchandising and accessibility value.</p>

<p>A dual narration structure and a duet narration structure are not the same listening experience. If audiobook teams, distributors, or retailers care about discoverability and reader expectation-setting, those distinctions are worth capturing cleanly instead of burying them in free text.</p>

<p>The useful action here is not to recode the entire backlist blindly. It is to identify new releases and priority catalog titles where narration structure is commercially meaningful, then make sure the metadata and the descriptive copy are not contradicting each other.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">The accessibility edits are a reminder to review notes, not just codes</h2>

<p>BookNet also highlights clarifying notes in Lists <a href="https://ns.editeur.org/onix/en/81">81</a> and <a href="https://ns.editeur.org/onix/en/196">196</a> around accessibility. That matters because accessibility metadata often degrades not when the code list is absent, but when teams copy old assumptions forward without re-reading the note text.</p>

<p>Issue 74's value here is not that it suddenly invents accessibility practice. It is that it nudges publishers to re-check how they describe accessibility summaries, navigation, reading order, and alternative descriptions. If the codes are technically present but the notes were interpreted loosely, this is the moment to tighten them.</p>

<p>That is especially important for teams handling EPUB remediation, adapted editions, or distribution to partners that surface accessibility metadata more explicitly than the publisher's own storefront does.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">The ONIX 2.1 deadline is no longer a background warning</h2>

<p>The most operational line in BookNet's post may be the least glamorous one. BookNet says ONIX 2.1 users must continue using Issue 36, and it says <strong>BookNet Canada plans to decommission the ONIX 2.1 dataset in October 2026</strong>.</p>

<p>As of <strong>Tuesday, August 11, 2026</strong>, that is not a distant cleanup idea. It is a near-term dependency problem. Any publisher, distributor, or vendor still relying on ONIX 2.1 should read Issue 74 less as "new features we may adopt later" and more as "evidence that the live standards lane has moved on without us."</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li>If your feeds are already ONIX 3.x, review where Issue 74 changes improve current records.</li>
  <li>If your organization still exports ONIX 2.1 anywhere, identify the remaining recipient, system, or contract dependency now.</li>
  <li>If your metadata governance is split across vendors, confirm who owns the codelist-update cycle and who approves production rollout.</li>
</ul>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What teams should check this week</h2>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li><strong>Human-authorship claims:</strong> decide whether any current declaration or certification pages justify List 73 codes 55 or 56.</li>
  <li><strong>Bundle logic:</strong> review products that mix print and digital components and see whether List 150 now gives a cleaner classification path.</li>
  <li><strong>Audiobook metadata:</strong> flag titles where dual or duet narration deserves structured labeling.</li>
  <li><strong>Accessibility notes:</strong> re-read the note language in Lists 81 and 196 instead of assuming old internal guidance is still exact.</li>
  <li><strong>Legacy feeds:</strong> confirm whether any ONIX 2.1 workflow is still live before October 2026 forces the issue.</li>
</ol>

<p>The useful takeaway is not that ONIX Codelist 74 changes everything. It is that <strong>small codelist updates are exactly where metadata debt starts to show</strong>. Teams that treat this as a short, owned review cycle will probably absorb it without drama. Teams that treat it as optional maintenance may discover in autumn that they are running yesterday's assumptions through tomorrow's feed.</p>

<p>For related Rex guidance, see our <a href="/blog/2026-07-27-onix-31-upgrade-workflow-guide/">ONIX 3.1 upgrade workflow guide</a>, our <a href="/blog/2026-07-24-onix-codelist-73-rights-and-embargo-guide/">ONIX Codelist 73 guide</a>, and our <a href="/blog/2026-07-14-onix-multi-item-vs-multicomponent-workflow-guide/">bundle metadata explainer</a>. If you need help tightening metadata, accessibility, or distribution workflow before the next export cycle, <a href="/contact/">contact Rex Publishing</a>.</p>
