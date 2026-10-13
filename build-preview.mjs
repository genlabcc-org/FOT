// Builds preview.html: the same JSX components inlined into one page that loads React
// and Babel from a CDN. No npm install needed. Run: node build-preview.mjs
import { readFileSync, writeFileSync } from 'node:fs'

const order = [
  'src/data.js',
  'src/components/Art.jsx',
  'src/components/Chrome.jsx',
  'src/components/Hero.jsx',
  'src/components/About.jsx',
  'src/components/Sessions.jsx',
  'src/components/Talk.jsx',
  'src/App.jsx',
]

const code = order
  .map((f) => readFileSync(f, 'utf8'))
  .join('\n')
  .split('\n')
  .filter((line) => !/^import\s/.test(line))
  .map((line) => line.replace(/^export default function /, 'function ').replace(/^export (function|const) /, '$1 '))
  .join('\n')

const css = readFileSync('src/styles.css', 'utf8')
const fonts = readFileSync('index.html', 'utf8').match(/<link rel="stylesheet" href="([^"]+)"/)[1]

const html = `<title>FOT Friends of Tech</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${fonts}">
<style>
${css}
</style>
<div id="root"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.26.0/babel.min.js"></script>
<script type="text/babel" data-presets="react">
const { useState, useEffect, useRef } = React;
${code}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
`

writeFileSync('preview.html', html)
console.log('preview.html written,', html.length, 'bytes')
