<template>
  <div>
    <h1>Testing display of HTML elements</h1>

    <h2>This is 2nd level heading</h2>
    <p>This is a test paragraph.</p>

    <h2>Basic block level elements</h2>

    <p>
      This is a normal paragraph (<code>p</code> element).
      To add some length to it, let us mention that this page was
      primarily written for testing the effect of <strong>user style sheets</strong>.
      You can use it for various other purposes as well, like just checking how
      your browser displays various HTML elements by default.
      It can also be useful when testing conversions from HTML
      format to other formats, since some elements can go wrong then.
    </p>
    <p>
      This is another paragraph. I think it needs to be added that
      the set of elements tested is not exhaustive in any sense. I have selected
      those elements for which it can make sense to write user style sheet rules,
      in my opionion.
    </p>
    <blockquote>
      <p>
        This is a block quotation containing a single
        paragraph. Well, not quite, since this is not <em>really</em>
        quoted text, but I hope you understand the point. After all, this
        page does not use HTML markup very normally anyway.
      </p>
    </blockquote>

    <h2>Lists</h2>

    <p>
      This is a paragraph before an <strong>unnumbered</strong> list (<code>ul</code>). Note that
      the spacing between a paragraph and a list before or after that is hard
      to tune in a user style sheet. You can't guess which paragraphs are
      logically related to a list, e.g. as a "list header".
    </p>
    <ul>
      <li>
        One.
      </li><li>
        Two.
      </li><li>
        Three. Well, probably this list item should be longer. Note that
        for short items lists look better if they are compactly presented,
        whereas for long items, it would be better to have more vertical spacing between items.
      </li><li>
        Four. This is the last item in this list.
        Let us terminate the list now without making any more fuss about it.
      </li>
    </ul>

    <p>
      This is a paragraph before a <strong>numbered</strong> list (<code>ol</code>). Note that
      the spacing between a paragraph and a list before or after that is hard
      to tune in a user style sheet. You can't guess which paragraphs are
      logically related to a list, e.g. as a "list header".
    </p>
    <ol>
      <li>
        One.
      </li><li>
        Two.
      </li><li>
        Three. Well, probably this list item should be longer. Note that if
        items are short, lists look better if they are compactly presented,
        whereas for long items, it would be better to have more vertical spacing between items.
      </li><li>
        Four. This is the last item in this list.
        Let us terminate the list now without making any more fuss about it.
      </li>
    </ol>

    <p>
      This is a paragraph before a <strong>definition</strong> list (<code>dl</code>).
      In principle, such a list should consist of <em>terms</em> and associated
      definitions.
      But many authors use <code>dl</code> elements for fancy "layout" things. Usually the
      effect is not <em>too</em> bad, if you design user style sheet rules for <code>dl</code>
      which are suitable
      for real definition lists.
    </p>    <dl>
      <dt>
        recursion
      </dt><dd>
        see recursion
      </dd><dt>
        recursion, indirect
      </dt><dd>
        see indirect recursion
      </dd><dt>
        indirect recursion
      </dt><dd>
        see recursion, indirect
      </dd><dt>
        term
      </dt><dd>
        a word or other expression taken into specific use in
        a well-defined meaning, which is often defined rather rigorously, even
        formally, and may differ quite a lot from an everyday meaning
      </dd>
    </dl>

    <p>
      Some of the elements tested above are typically displayed in a monospace
      font, often using the <em>same</em> presentation for all of them. This
      tests whether that is the case on your browser:
    </p>

    <ul>
      <li>
        <code>This is sample text inside code markup</code>
      </li><li>
        <kbd>This is sample text inside kbd markup</kbd>
      </li><li>
        <samp>This is sample text inside samp markup</samp>
      </li><li>
        <tt>This is sample text inside tt markup</tt>
      </li>
    </ul>
    <h2>Links</h2>
    <ul>
      <li>
        <a href="../index.html">main page</a>
      </li>      <li>
        <a
          href="http://www.unicode.org/versions/Unicode4.0.0/ch06.pdf"
          title="Writing Systems and Punctuation"
          type="application/pdf"
        >Unicode Standard, chapter&nbsp;6</a>
      </li>
    </ul>

    <p>
      This is a text paragraph that contains some
      inline links. Generally, inline links (as opposite to e.g. links
      lists) are problematic
      from the
      <a href="http://www.useit.com">usability</a> perspective,
      but they may have use as
      &#8220;incidental&#8221;, less relevant links. See the document
      <cite><a href="links.html">Links Want To Be Links</a></cite>.
    </p>

    <h2>Hyphenation</h2>
    <p>
      In the following, a width setting should cause some hyphenation,
      depending on support to various methods of hyphenation.
    </p>

    <h3>CSS-based hyphenation</h3>
    <p class="limited hyphens">
      Until recently the great majority of naturalists believed that species were immutable productions, and had been separately created. This view has been ably maintained by many authors.
    </p>    <h3>JavaScript-driven hyphenation</h3>
    <p class="limited hyphenate">
      Until recently the great majority of naturalists believed that species were immutable productions, and had been separately created. This view has been ably maintained by many authors.
    </p>    <h3>Explicit hyphenation hints (soft hyphens)</h3>
    <p class="limited">
      Un­til re­cent­ly the great
      ma­jor­i­ty of nat­u­ral­ists
      be­lieved that spe­cies were
      im­mu­ta­ble
      pro­duc­tions,
      and had been sep­a­rate­ly cre­at­ed.
      This view has been ably main­tain­ed by many au­thors.
    </p>    <HR t-i-t-l-e="Information about this document" />

    <address>
      <a href="../personal.html" hreflang="en" lang="fi">Jukka Korpela</a>
    </address>
    <div>
      <A
        t-i-t-l-e="ISO 8601, the date and time representation standard"
        h-r-e-f="../iso8601.html"
      >
        Date</A> of creation: 2000-09-15.
      Last update: 2013-03-21.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
