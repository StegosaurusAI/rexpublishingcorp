---
title: 'An ONIX 3.0 to 3.1 upgrade should be treated as controlled cleanup, not a new migration project'
description: 'BookNet Canada''s July 24, 2026 upgrade guide and current EDItEUR release materials point to a narrow workflow: clean out removed 3.0 baggage, fix a few placements, update the message header, and leave optional 3.1 features for later.'
pubDate: '2026-08-28T17:30:00-04:00'
updatedDate: '2026-08-28T17:30:00-04:00'
author: 'Rex Publishing'
heroImage: '/images/blog/2026-07-27-onix-31-upgrade-workflow-guide.svg'
contentType: article
source: repo
---

<p>Publishing teams can waste a lot of time by treating every standards change like a platform rewrite. <a href="https://www.booknetcanada.ca/blog/2026/7/24/updating-from-onix-30-to-31">BookNet Canada's July 24, 2026 guide to moving from ONIX 3.0 to 3.1</a> is useful because it makes a narrower claim. For organizations already sending ONIX 3.0, this is mostly a cleanup job plus a header change, not a second version of the painful 2.1-to-3.0 migration story.</p>

<p>That distinction matters. A team still stuck on ONIX 2.1 has a legacy transition problem. A team already on ONIX 3.0 has a maintenance problem. Those are not the same amount of work, and they should not be managed the same way.</p>

<p>For Rex readers, the practical question is simple: <strong>what has to be fixed before you can honestly declare a message to be ONIX 3.1, and what can wait until after the switch?</strong></p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">The first job is removing what 3.1 no longer accepts</h2>

<p>BookNet's explainer says the move from 3.0 to 3.1 involves only a handful of steps. The first part is not glamorous. Teams need to remove the small set of deprecated 3.0 elements that were removed in 3.1 and replace them with their current equivalents where needed.</p>

<p>The examples BookNet highlights are useful because they keep the work concrete. If a feed still relies on deprecated <code>AudienceCode</code>, old <code>DateFormat</code> usage, or legacy <code>Conference</code> structures, the message needs to be cleaned before the version label changes. The old <code>Gender</code> tag also has to go.</p>

<p>This is why the safer sequence is <strong>cleanup first, declaration second</strong>. If the record is still carrying removed or deprecated baggage, changing the release label early only makes the feed easier to misread and harder to troubleshoot.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">A few structural fixes matter more than a long feature wish list</h2>

<p>BookNet also points to two easy-to-miss placement issues. If a sender uses <code>SalesRestriction</code>, it needs to sit inside <code>SalesRights</code>. If a sender uses <code>UnnamedPersons</code>, it needs to appear before contributor alternative-name, affiliation, biography, or website data.</p>

<p>That kind of change is easy to dismiss because it looks small in isolation. In practice, small structural mistakes are exactly what create validation failures, inconsistent partner ingestion, or months of silent downstream weirdness. The useful habit is to review the feed where it is most fragile, not only where the release notes look exciting.</p>

<p>This is also why the ONIX 3.1 upgrade should be owned as a short operational checklist. It does not need to become a grand internal transformation programme. It needs someone to verify the few parts that can break the message once the declared release changes.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">The actual version flip happens in the message header</h2>

<p>Once the cleanup work is done, BookNet says the final step is updating the <code>release</code> and <code>xmlns</code> attributes on the <code>ONIXMessage</code> element. That is the literal version switch, but it should be the end of the process, not the beginning.</p>

<p>EDItEUR's current <a href="https://www.editeur.org/93/Release-3.0-and-3.1-Downloads/">Release 3.0 and 3.1 downloads page</a> confirms that the live ONIX 3.1 baseline is now <strong>revision 3.1.3</strong>. The same page lists 3.1.3 specifications, best-practice guidance, and schemas, and it currently shows the 3.1.3 schema packages bundled with <strong>Codelists Issue 74</strong>. A separate BIC media ONIX support page, citing EDItEUR as source, still exposes <strong>Release 3.1.3 - Codelisten Ausgabe 73</strong>, which is a useful reminder that mirror pages may lag even when their core release reference is still directionally right.</p>

<p>The operational takeaway is straightforward: confirm which schema package and codelist bundle your trading partners or validation stack are actually using before rollout. Saying "we are on 3.1 now" is not enough if the surrounding tooling is still pinned to an older package or an internal validator no one has updated.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Optional 3.1 features can wait</h2>

<p>One reason this upgrade is manageable is that the new 3.1-era capabilities are not required for the first move. BookNet's guidance is explicit on that point. A sender can make a valid 3.1 message by replicating the existing 3.0 payload after the cleanup and header updates, then adopt newer features later in a controlled second phase.</p>

<p>That matters because ONIX 3.1.3 does offer worthwhile additions. BookNet's July explainer points readers to newer capabilities around organization identifiers for professional affiliations, AI-related collateral-use limitations, prize identifiers, physical addresses used for EU safety compliance, improved collateral-text sourcing, and translated or transliterated text handling. Those may deserve adoption. They just do not need to be bundled into the initial version transition.</p>

<p>For most teams, the better sequencing is:</p>

<ol class="mb-6 list-decimal pl-6 space-y-2">
  <li>make the 3.0 payload clean enough to remain valid after the switch,</li>
  <li>update the header and schema references,</li>
  <li>test what key recipients accept, and</li>
  <li>only then decide which optional 3.1 features are worth the extra implementation work.</li>
</ol>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Do not confuse this with the ONIX 2.1 problem</h2>

<p>The June 12, 2026 <a href="https://booknetcanada.ca/blog/2026/06/12/can-we-give-up-completely-on-onix-2-1/">BookNet Canada post on ONIX 2.1</a> makes the contrast clear. BookNet says there are still real costs in keeping 2.1 alive, that down-converted records often create extra troubleshooting work, and that some downstream dependencies still prevent a full stop. That is a supply-chain dependency problem, not just a tidy-XML problem.</p>

<p>If your organization is still feeding 2.1 anywhere, the ONIX 3.1 upgrade article should not be read as proof that every metadata transition is now easy. It is only easy <strong>for teams already operating in ONIX 3.0</strong>. Anyone still carrying 2.1 obligations needs a separate dependency audit, a partner map, and a plan for who breaks first when old support ends.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What metadata teams should check now</h2>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li>Identify any remaining deprecated 3.0 elements before changing the declared release.</li>
  <li>Check whether <code>SalesRestriction</code> and <code>UnnamedPersons</code> appear in the right structural positions.</li>
  <li>Update the <code>ONIXMessage</code> header only after the payload is clean.</li>
  <li>Confirm which 3.1.3 schema and codelist package your validators and recipients expect today.</li>
  <li>Separate the initial 3.1 switch from any later decision to adopt optional new features.</li>
  <li>If ONIX 2.1 is still live anywhere, treat that as a parallel risk register, not part of the same quick cleanup.</li>
</ul>

<p>The calm reading of the evidence is the right one. ONIX 3.1 is not a reason to panic, and it is not a reason to procrastinate. For teams already on 3.0, it is a bounded maintenance task that should be owned, tested, and finished before metadata debt starts posing as standards strategy.</p>

<p>For related Rex guidance, see our <a href="/blog/2026-08-11-onix-codelist-74-metadata-workflow-guide/">ONIX Codelist 74 workflow guide</a>, our <a href="/blog/2026-07-14-onix-multi-item-vs-multicomponent-workflow-guide/">bundle metadata explainer</a>, and our <a href="/blog/2026-07-02-onix-creation-and-distribution-workflow-guide/">ONIX creation and distribution workflow guide</a>. If you need help tightening metadata, validation, or distribution workflow before the next export cycle, <a href="/contact/">contact Rex Publishing</a>.</p>
