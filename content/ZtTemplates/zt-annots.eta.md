<% for (const annotation of it) { %>
<%- if (annotation.colorName !== 'gray') { -%>
<%~ include("annotation", annotation) %>
<% } %>
<% } %>