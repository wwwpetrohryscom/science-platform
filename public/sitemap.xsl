<?xml version="1.0" encoding="UTF-8"?>
<!--
  XSLT stylesheet for /sitemap.xml.

  Browsers apply this when fetching the sitemap directly so the page
  renders as a readable table instead of Chrome's default tag-stripped
  flat-text view. Crawlers ignore the xml-stylesheet PI, so this has
  no effect on indexing — purely a humans-and-debuggers UX layer.

  This file is committed (not generated). If you change the sitemap's
  XML schema, update the templates below to match.
-->
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sitemap — EcoScienceHub</title>
        <style>
          :root {
            --bg: #ffffff;
            --bg-muted: #f7f9f7;
            --ink: #1a2421;
            --ink-muted: #475a55;
            --line: #e4eae6;
            --accent: #2e7d32;
          }
          * { box-sizing: border-box; }
          html, body {
            margin: 0;
            padding: 0;
            font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
            background: var(--bg);
            color: var(--ink);
            -webkit-font-smoothing: antialiased;
          }
          .wrap { max-width: 1200px; margin: 0 auto; padding: 32px 24px; }
          header {
            border-bottom: 1px solid var(--line);
            padding-bottom: 20px;
            margin-bottom: 24px;
          }
          h1 {
            margin: 0 0 6px 0;
            font-family: "Source Serif 4", Georgia, serif;
            font-size: 28px;
            letter-spacing: -0.01em;
          }
          .meta { color: var(--ink-muted); font-size: 14px; }
          .meta strong { color: var(--ink); font-weight: 600; }
          .summary {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
            margin: 16px 0 0;
            font-size: 14px;
            color: var(--ink-muted);
          }
          .summary span strong { color: var(--accent); font-weight: 600; }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
          }
          thead th {
            text-align: left;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--ink-muted);
            font-weight: 600;
            padding: 10px 12px;
            border-bottom: 1px solid var(--line);
            background: var(--bg-muted);
          }
          tbody td {
            padding: 10px 12px;
            border-bottom: 1px solid var(--line);
            vertical-align: top;
          }
          tbody tr:hover { background: var(--bg-muted); }
          a { color: var(--accent); text-decoration: none; }
          a:hover { text-decoration: underline; }
          code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
          .pill {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            background: var(--bg-muted);
            font-size: 11px;
            color: var(--ink-muted);
          }
          .alts {
            color: var(--ink-muted);
            font-size: 11px;
            margin-top: 4px;
          }
          .alts code { background: var(--bg-muted); padding: 1px 4px; border-radius: 3px; margin-right: 3px; }
          footer {
            margin-top: 32px;
            padding-top: 16px;
            border-top: 1px solid var(--line);
            font-size: 12px;
            color: var(--ink-muted);
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <header>
            <h1>EcoScienceHub sitemap</h1>
            <p class="meta">
              This is the <code>sitemap.xml</code> served at
              <strong>/sitemap.xml</strong> for crawler discovery. The
              underlying XML follows the
              <a href="https://www.sitemaps.org/protocol.html">sitemaps.org 0.9</a>
              schema with <code>xhtml:link</code> hreflang alternates.
            </p>
            <div class="summary">
              <span><strong><xsl:value-of select="count(s:urlset/s:url)" /></strong> URLs indexed</span>
              <span><strong><xsl:value-of select="count(s:urlset/s:url/xhtml:link)" /></strong> hreflang alternates</span>
            </div>
          </header>

          <table>
            <thead>
              <tr>
                <th style="width: 60%">URL</th>
                <th>Last modified</th>
                <th>Change freq</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td>
                    <a>
                      <xsl:attribute name="href"><xsl:value-of select="s:loc" /></xsl:attribute>
                      <xsl:value-of select="s:loc" />
                    </a>
                    <xsl:if test="xhtml:link">
                      <div class="alts">
                        <xsl:for-each select="xhtml:link">
                          <code><xsl:value-of select="@hreflang" /></code>
                        </xsl:for-each>
                      </div>
                    </xsl:if>
                  </td>
                  <td>
                    <xsl:value-of select="substring(s:lastmod, 1, 10)" />
                  </td>
                  <td><span class="pill"><xsl:value-of select="s:changefreq" /></span></td>
                  <td><xsl:value-of select="s:priority" /></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <footer>
            Stylesheet: <code>/sitemap.xsl</code>. Crawlers ignore it; this
            page is rendered for humans only. View source to inspect the raw XML.
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
