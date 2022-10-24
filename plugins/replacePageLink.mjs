import { visit } from 'unist-util-visit'

export default function replacePageLink() {
  return function (tree) {
    visit(tree, 'text', (node) => {
      let { value } = node

      if (/\[\[.+?\]\]/.test(value)) {
        const replaceValue = value.replace(/\[\[(.+?)\]\]/, '<a href="/documents/">$1</a>')

        node.type = 'html'
        node.value = replaceValue
      }
    })
  }
}
