import { writeFileSync } from 'node:fs'
import fg from 'fast-glob'
import { format } from 'prettier'

const mdArr = fg.sync('./src/**/*.md')
const items: Array<{ text: string; link: string }> = []

// ./src/wu_isAndroid/wu_isAndroid.md => basis/wu_isAndroid.md
const pathExp = './src/(wu_.*)/(wu_.*).md'

mdArr.forEach((path: string) => {
  items.push({
    text: path.split('/')[2].split('.')[0],
    link: path.replace(new RegExp(pathExp), '/basis/$1.md')
  })
})

const v = `export default {
  '/basis/': [
    {
      text: '',
      items: ${JSON.stringify(items, null, 2)}
    }
  ]
}
`
const c = await format(v, {
  parser: 'babel-ts',
  semi: false,
  singleQuote: true,
  trailingComma: 'none'
})

writeFileSync('./.vitepress/sidebar.ts', c, 'utf-8')
