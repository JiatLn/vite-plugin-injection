import type { Plugin } from 'vite'

interface InjectionOptions { }

// TODO: add plugin InjectionOptions here
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function VitePluginInjection(options: InjectionOptions = {}): Plugin {
  return {
    name: 'vite-plugin-injection',
    apply: 'build',
    enforce: 'pre',
    transformIndexHtml(html) {
      const buildTime = new Date().toLocaleString()
      return html.replace(
        '<div id="app"></div>',
        `<div id="app"></div>
        <!-- build at ${buildTime} -->`,
      )
    },
  } as Plugin
}

export default VitePluginInjection
