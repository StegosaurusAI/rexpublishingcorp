---
title: 'ONIX bundle metadata works better when teams separate separately saleable items from inseparable components'
description: 'BookNet Canada''s May 22, 2026 explainer and EDItEUR''s current ONIX guidance point to a simple workflow rule: decide whether the parts are independently saleable before choosing between multi-item and multicomponent product coding.'
pubDate: '2026-07-14T17:31:34-04:00'
updatedDate: '2026-07-14T17:31:34-04:00'
author: 'Rex Publishing'
heroImage: '/images/blog/2026-07-14-onix-multi-item-vs-multicomponent-workflow-guide.svg'
contentType: article
source: repo
---

<p>Bundled products cause metadata trouble when teams start with the packaging instead of the product logic. A box can hold three separately saleable books, or it can hold one inseparable kit. Those are not the same ONIX problem.</p>

<p>That is the practical value of <a href="https://www.booknetcanada.ca/blog/2026/5/22/understanding-multi-item-vs-multicomponent-products-in-onix-making-sense-of-one-of-onixs-trickiest-distinctions">BookNet Canada's May 22, 2026 explainer on multi-item versus multicomponent products</a>. BookNet says EDItEUR released a new application note because this distinction keeps tripping people up, especially when retailers and other downstream partners need to understand what is actually being ordered and whether the contents can be sold separately.</p>

<p>The cleanest rule for Rex readers is not "boxed set equals one code" or "kit equals another." It is narrower than that: <strong>ask first whether the parts are independently saleable products</strong>. If they are, the record logic should look different from a product whose parts only make sense as one retail unit.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What the two product compositions are trying to separate</h2>

<p>EDItEUR's ONIX codelists define <a href="https://ns.editeur.org/onix/en/2/10">ProductComposition code 10</a> as a <strong>multiple-component retail product</strong>, meaning a product retailed as a whole. The matching <a href="https://ns.editeur.org/onix/en/2/11">code 11 entry</a> is a <strong>multiple-item collection, retailed as separate parts</strong>. BookNet's plain-language explanation helps more: the real question is whether the contents are separate products or components of one product.</p>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li><strong>Use multicomponent logic</strong> when the product is the whole package and the enclosed parts are not separately sold in the ordinary market workflow.</li>
  <li><strong>Use multi-item logic</strong> when the collection consists of products that are also understood and sold separately.</li>
  <li><strong>Do not classify by appearance alone.</strong> A premium slipcase can still be multicomponent if the titles inside are not separately available.</li>
</ul>

<p>That last point matters most. BookNet explicitly says a boxed set can sometimes be multicomponent. The deciding factor is not whether the thing looks like a set. The deciding factor is whether the items inside stand on their own as separate retail products.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Why this affects more than tidy XML</h2>

<p>This is easy to misread as packaging trivia. It is not. If the product is classified badly, downstream partners can misunderstand what is included, how inventory should behave, whether item-level sale is possible, and where identifiers belong. Those are supply-chain problems, not only standards problems.</p>

<p>BookNet is right to frame the issue around practical business questions: can the set be broken apart, do the contained items have their own ISBNs, and what exactly is being sold? Those are the questions buyers, distributors, metadata recipients, and rights-facing staff actually need answered.</p>

<p>The standards side reinforces that operational reading. On EDItEUR's current <a href="https://www.editeur.org/93/Release-3.0-and-3.1-Downloads/">Release 3.0 and 3.1 downloads page</a>, the organization lists <em>Multi-item and multi-component products</em> as a new application note and says its additional guidance documents focus on ONIX areas that data providers and recipients find tricky. That is a good sign this is not an edge-case obsession. It is a recurring handoff problem.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">Where ProductPart becomes important</h2>

<p>Once a product is genuinely multicomponent, the follow-on work matters. EDItEUR's <a href="https://ns.editeur.org/onix/en/150">Product form detail codelist</a> says multiple-component retail products often need component formats to be described in <code>&lt;ProductPart&gt;</code>. That is how a record makes the package legible when it contains, for example, a book plus enclosed audio, a boxed teaching kit, or multiple digital files delivered together.</p>

<p>In practice, that means teams should stop after the first right decision and make the rest of the record support it. If the package is one product, then the parts, formats, and relationships inside that product need to be communicated clearly enough that recipients do not have to guess.</p>

<h2 class="mt-10 mb-4 text-2xl font-bold text-gray-900">What Rex readers should actually do</h2>

<ul class="mb-6 list-disc pl-6 space-y-2">
  <li>Start bundle setup with one question: can the enclosed items be bought separately as ordinary products?</li>
  <li>If the answer is no, treat the package as a whole-product problem and make the component relationships explicit.</li>
  <li>If the answer is yes, review whether the collection record is being used to describe a set of separately retailed items rather than one inseparable product.</li>
  <li>Check identifiers, contents, and downstream partner expectations before exporting live records.</li>
  <li>Keep claims narrow: ONIX can reduce ambiguity, but it does not make every retailer or recipient behave identically.</li>
</ul>

<p>The useful takeaway is calmer than the terminology makes it sound. Teams do not need to memorize one more metadata slogan. They need a repeatable decision: separate products, or components of one product. Once that is answered honestly, the ONIX record usually gets much easier to build.</p>

<p>For related Rex guidance, see our <a href="/blog/2026-07-02-onix-creation-and-distribution-workflow-guide/">ONIX creation and distribution workflow guide</a>, our <a href="/blog/2026-06-17-onix-sales-rights-metadata-workflow-guide/">ONIX sales-rights metadata guide</a>, and our <a href="/blog/2026-07-14-indigeneity-onix-thema-discoverability-guide/">metadata discoverability guide</a>. If you need help tightening metadata and rights workflow before bundle confusion spreads downstream, <a href="/contact/">contact Rex Publishing</a>.</p>
