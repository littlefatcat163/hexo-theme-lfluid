function mermaid(args: string[], content?: string) {
    return `
<pre>
<code class="mermaid" ${args.join(' ')}>
${content}
</code>
</pre>`
}

/*
  {% mermaid %}
  text
  {% endmermaid %}
 */
hexo.extend.tag.register('mermaid', mermaid, { ends: true })
