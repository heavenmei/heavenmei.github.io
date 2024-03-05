```ad-info
title-zh:  <% if (it.extra) { -%>
<% = it.extra[0].split("titleTranslation: ")[1] .split("abstractTranslation:")[0] -%>
<% } -%>
pdf:  [Zotero](<%= it.backlink %>) <%= it.fileLink %>
```

## Abstract
<% if (it.extra) { -%>
<% = it.extra[0].split("titleTranslation: ")[1] .split("abstractTranslation:")[1] -%>
<% } %>
**原文：**
<%= it.abstractNote.first().replace(/[\r\n]+/g, " ") %>

## Research Objectives


## Advantage


## Limitations


## Annotations
<%~ include("annots", it.annotations) %>