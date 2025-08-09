
export const lib = [
{
  name: 'dialog-opener',
  tagName: 'a',
  tmpl: '<a class="dialog-opener" @click="0"> <img loading="lazy" src="img/settings.svg" class="icon"> </a>',
  Impl: class { 
    open() {
      const key = this.root.getAttribute('key')
      const dialog = window[key]
      if (dialog) dialog.showModal()
    }
   },
  fns: [
    (_,e) => { _.open.call(_, e) }
  ]
},{
  name: 'theme-selector',
  tagName: 'dialog',
  tmpl: '<dialog> <h2>Select theme</h2> <section class="theme-options"> <label :for="0" :style="1" class="theme"> <input name="theme" type="radio" $checked="2" @change="3"> <h4>:4:</h4> </label> </section> </dialog>',
  Impl: class { 
    checkedIndex = 0
    change(el, e, i) {
      this.checkedIndex = i 
      document.body.className = el.class || el.name.toLowerCase()
      themes.close()
    }
   },
  fns: [
    _ => ['el', _.themes, 'i'],
    _ => ['background-color: #',_.el.color],
    _ => _.i === _.checkedIndex,
    (_,e) => { _.change(_.el, e, _.i) },
    _ => [_.el.name]
  ]
},{
  name: 'markdown-loader',
  tagName: 'section',
  tmpl: '<section class="markdown-body"> </section>',
  Impl: class { 
    async connected() {
      try {
        const srcPath = this.root.getAttribute('path')
        if (!srcPath) return
        const res = await fetch(srcPath)
        const md = await res.text()
        this.root.innerHTML = this.mdToHtml(md)
      } catch (e) {
        this.root.innerHTML = '<p>Failed to load content.</p>'
      }
    }
    mdToHtml(md) {
      // very small markdown-to-html: headings, lists, links, paragraphs
      let html = md
        .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
        .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
        .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>')
        .replace(/^-\s+(.*)$/gm, '<li>$1</li>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1<\/a>')
      // wrap list items
      html = html.replace(/(<li>[\s\S]*?<\/li>)(?!(.|\n)*<li>)/g, '<ul>$1</ul>')
      // horizontal rule
      html = html.replace(/^---$/gm, '<hr ></hr>')
      // paragraphs: blank-line separated
      html = html
        .split(/\n\n+/)
        .map(block => /<(h\d|ul|hr)/.test(block) ? block : `<p>${block}</p>`)
        .join('\n')
      return html
    }
   },
}]
export default lib[0]