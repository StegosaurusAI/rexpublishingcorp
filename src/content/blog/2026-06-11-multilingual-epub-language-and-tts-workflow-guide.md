---
title: 'Translated EPUBs: language metadata versus markup'
description: 'A practical handoff checklist for authors and translators: separate EPUB publication language, metadata-text language and document or inline language markup.'
pubDate: '2026-10-26T10:35:00-04:00'
updatedDate: '2026-10-26T10:35:00-04:00'
author: 'Rex Publishing'
heroImage: '/images/blog/2026-06-11-multilingual-epub-language-and-tts-workflow-guide.svg'
draft: false
contentType: article
source: repo
---

<p>Digital publishing · Published and updated <time datetime="2026-10-26T10:35:00-04:00">October 26, 2026</time></p>

<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Translated EPUBs: language metadata versus markup","datePublished":"2026-10-26T10:35:00-04:00","dateModified":"2026-10-26T10:35:00-04:00","author":{"@type":"Organization","name":"Rex Publishing"},"articleSection":"Digital publishing","mainEntityOfPage":"https://rexpublishingcorp.com/blog/2026-06-11-multilingual-epub-language-and-tts-workflow-guide/","image":"https://rexpublishingcorp.com/images/blog/2026-06-11-multilingual-epub-language-and-tts-workflow-guide.svg"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Blog","item":"https://rexpublishingcorp.com/blog/"},{"@type":"ListItem","position":2,"name":"EPUB language handoff","item":"https://rexpublishingcorp.com/blog/2026-06-11-multilingual-epub-language-and-tts-workflow-guide/"}]}]}</script>

An English translation can have the right language in its catalogue record and still need language corrections inside the EPUB. Before signing off a converted file, ask the production team for a language map—not just confirmation that “the book is set to English.”

This guide separates three places to inspect. It uses EPUB 3.3 as its reference and offers an original handoff checklist for authors, translators and production editors. It is not a conversion tutorial or a reading-app review.

## Three questions, three places to look

| Question | Place to inspect | Illustrative decision |
| --- | --- | --- |
| What are the publication's primary content languages? | Package metadata: `dc:language` | English translation: `en` |
| What language is the metadata text written in? | Package `xml:lang`, with local overrides where needed | English title and description: `en` |
| What language is this document or passage? | XHTML document default and local language attributes | English chapter; Polish quoted sentence |

The key boundary comes from [W3C's EPUB 3.3 language specification](https://www.w3.org/TR/epub-33/#sec-opf-dclanguage): `dc:language` is required, repeatable and uses BCP 47 language tags. Reading systems treat the first entry as primary. **That value does not set the language inside the content documents.** Each resource needs its own language declaration mechanism.

For our illustrative English edition of a Polish work, the source language is not automatically another publication-language entry. [DAISY's language guidance](https://kb.daisy.org/publishing/docs/epub/language.html) says to list the primary content languages, not every language appearing in a few phrases. A genuinely bilingual edition needs a different map from a translation containing occasional quotations.

## Inspect the package without confusing its two jobs

This original fragment separates English metadata text from the publication-language value:

```xml
<package xmlns="http://www.idpf.org/2007/opf"
         version="3.0" xml:lang="en">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>The Quiet Platform</dc:title>
    <dc:language>en</dc:language>
  </metadata>
</package>
```

Here, `xml:lang="en"` describes the language of metadata text; `dc:language` identifies the publication's content language. DAISY also describes local metadata-language overrides when text differs from the package default. Neither mechanism replaces checking the chapter files. See [DAISY's package and content examples](https://kb.daisy.org/publishing/docs/epub/language.html).

**These are illustrative fragments, not a complete or validated EPUB.** The package fragment deliberately omits other required publication structures and metadata. Do not use it as a replacement package file.

## Follow the language into a chapter

Our example chapter has an English default and a Polish sentence:

```xml
<html xmlns="http://www.w3.org/1999/xhtml"
      xml:lang="en" lang="en">
  <head><title>At the station</title></head>
  <body>
    <p>She read the note aloud:
      <span xml:lang="pl" lang="pl">Pociąg odjeżdża rano.</span>
    </p>
  </body>
</html>
```

DAISY recommends including matching `xml:lang` and `lang` values in XHTML. The document default applies until a local declaration changes it. The Polish span does not change the surrounding English paragraph. [DAISY explains the declaration pattern](https://kb.daisy.org/publishing/docs/epub/language.html).

This matters beyond how one voice sounds. W3C's [Language of Page explanation](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) connects a programmatically identifiable default language with text interpretation by assistive technology.

Do not mechanically tag every unfamiliar word. [Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) preserves exceptions for proper names, technical terms, indeterminate-language words and expressions adopted into the surrounding language. A translator or editor should resolve ambiguous cases rather than leave a converter to guess.

## Give the supplier a language-map handoff

The following is a Rex editorial checklist, not an official certification form. Fill it in for the actual edition before conversion; ask for the completed record back with the final file.

1. **Define the edition.** Record whether this is a translation, a bilingual text or a main text with occasional foreign passages. Name the person who can resolve editorial language questions.
2. **List the expected declarations.** Record publication-language entries in order, the metadata-text default and any exceptions. Avoid a single unexplained “language” field.
3. **Map the files.** List each chapter, introduction, notes section and navigation document with its expected default. Include a separately authored preface rather than assuming it matches the main text.
4. **Flag passages for inspection.** Supply locations and intended language tags for retained quotations or other changes. Keep an exceptions column with the editor's reasoning.
5. **Request evidence from the returned EPUB.** Ask the supplier to identify the relevant package entries, document roots and representative local changes. Compare those with the agreed map.
6. **Record unresolved defects.** Keep the file version, location, expected declaration, observed markup and correction owner together. Recheck the corrected file, not only the supplier's email.

For teams starting in Word, our [WordToEPUB guide](/blog/2026-06-16-wordtoepub-word-to-epub-adaptation-workflow-guide/) covers the earlier conversion handoff. For wider QA, use the [EPUB accessibility techniques guide](/blog/2026-06-22-epub-accessibility-techniques-12-workflow-guide/). This language map is one focused part of that process.

## Keep markup checks separate from playback results

Inspect the underlying markup as well as listening in the intended reading environments. W3C's Language of Parts explanation notes that flattened accessible names can obscure language changes even when the code identifies them correctly. Spoken output alone cannot settle whether the tagging is correct. [See W3C's evaluation limits](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts).

Correct declarations do not guarantee an available voice or a particular pronunciation. DAISY's [text-to-speech overview](https://kb.daisy.org/publishing/docs/text-to-speech/overview.html) reports no reading-system support for the PLS, SSML and CSS Speech enhancements it lists. That is DAISY's guidance, not a Rex device test; those enhancements are outside this checklist.

The acceptance question is concrete: can the team show where this edition's languages are declared, explain its exceptions and account for remaining playback problems? Keep that evidence with the production file. For a translation-to-format project discussion, see [Rex Publishing](/about/) or our [contact page](/contact/).

Sources checked October 26, 2026. Examples are original illustrations; no full-EPUB validation, device compatibility test or accessibility certification is claimed.
