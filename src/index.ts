import type { Plugin } from 'vite'

interface InjectionOptions { }

export function VitePluginInjection(options: InjectionOptions = {}): Plugin {
  console.log(options)
  return {
    name: 'vite-plugin-injection',
    apply: 'build',
    enforce: 'pre',
    transformIndexHtml(html) {
      console.log(html)
      return html.replace(
        /<title>(.*?)<\/title>/,
        '<title>Title replaced!</title>',
      )
    },
  } as Plugin
}

export default VitePluginInjection
