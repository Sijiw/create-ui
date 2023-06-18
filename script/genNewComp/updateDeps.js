const fs = require('fs')

const baseName = 'C'
const componentsDirPath = './packages/components/'
const componentsIndexPath = './packages/components/index.ts'
const componentsTsPath = './packages/component.ts'
const componentsPath = '@create-ui/components'
const dirItems = fs.readdirSync(componentsDirPath)
// Like Button Items
const components = []
// Like CButton Items
const componentNames = []
const packagesIndexContent = []
let packagesIndexText = ''
const componentsIndexContent = []
let componentsIndexText = ''

// find components
const searchDir = () => {
  dirItems.forEach((item) => {
    const itemPath = `${componentsDirPath}/${item}`
    const stat = fs.statSync(itemPath)
    if (stat.isDirectory()) {
      components.push(item)
      componentNames.push(`${baseName}${item}`)
    }
  })
}

// write index.ts in the packages dir
const writePackagesIndex = () => {
  const n = components.length
  packagesIndexContent.push(`import { Plugin } from 'vue'\n`)
  for (let i = 0; i < n; i++) {
    packagesIndexContent.push(
      `import ${componentNames[i]} from '${componentsPath}/${components[i]}'\n`
    )
  }

  packagesIndexContent.push(
    `\nexport default [${componentNames.join()}] as Plugin[]\n`
  )

  packagesIndexText = packagesIndexContent.join('')
  fs.writeFile(componentsTsPath, packagesIndexText, { flag: 'w' }, (err) => {
    if (err) {
      console.log(err)
    }
  })

  // console.log(packagesIndexContent)
}

// write index.ts in packages/components dir
const writeComponentsIndex = () => {
  const n = components.length
  for (let i = 0; i < n; i++) {
    componentsIndexContent.push(`export * from './${components[i]}'\n`)
  }
  componentsIndexText = componentsIndexContent.join('')

  console.log(componentsIndexText)
  fs.writeFile(
    componentsIndexPath,
    componentsIndexText,
    { flag: 'w' },
    (err) => {
      console.log(err)
    }
  )
}

const main = () => {
  searchDir()
  writePackagesIndex()
  writeComponentsIndex()
}

// module.exports = () => {
//   main()
// }
main()
