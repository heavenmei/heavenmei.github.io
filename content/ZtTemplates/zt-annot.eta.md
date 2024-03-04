[!<%= it.colorName %>] Page <%= it.pageLabel %> [link](<%= it.backlink %>)
<% if (it.text) { -%>
<p style="
<%- if (it.color) { _%> color: <%= it.color %>; <%_ } -%>
<%- if (it.bgColor) { _%> background-color: <%= it.bgColor %>; <%_ } -%>
"><%= it.text %></p>
<% } %>
<%= it.imgEmbed %>
---
<%- if (it.comment) { %>
<%= it.comment %>
<% } %>





