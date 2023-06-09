const fs = require('fs-extra')
const handlebars = require('handlebars')
const { resolve } = require('path')
// import fs from 'fs-extra'
// import handlebars from 'handlebars'
// import { resolve } from 'path'
// import path from 'path'

// const __dirname = path.resolve()

const getTplFilePath = (meta) => ({
  // docs 目录
  // readme: {
  //   from: './.template/docs/README.md.tpl',
  //   to: `../../packages/${meta.compName}/docs/README.md`
  // },
  // 测试开发环境下的预览页面
  demo: {
    from: './.template/docs/demo.vue.tpl',
    to: `../../src/views/${meta.compClassName}.vue`
  },
  // src 目录
  // 组件的vue文件
  vue: {
    from: './.template/src/index.vue.tpl',
    to: `../../packages/components/${meta.compName}/src/${meta.compClassName}.vue`
  },
  // 组件目录的ts文件
  component: {
    from: './.template/src/component.ts.tpl',
    to: `../../packages/components/${meta.compName}/src/${meta.compClassName}.ts`
  },
  // 组件目录的index.ts文件
  install: {
    from: './.template/index.ts.tpl',
    to: `../../packages/components/${meta.compName}/index.ts`
  }
})

const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta)
  Object.keys(filePaths).forEach((key) => {
    const fileTpl = fs.readFileSync(
      resolve(__dirname, filePaths[key].from),
      'utf-8'
    )
    const fileContent = handlebars.compile(fileTpl)(meta)
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, (err) => {
      if (err) console.log(err)
    })
  })
}

// 读取 packages/list.json 并更新
const listJsonTplReplacer = (meta) => {
  const listFilePath = '../../packages/list.json'
  const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8')
  const listFileContent = JSON.parse(listFileTpl)
  listFileContent.push(meta)
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
  fs.writeFile(
    resolve(__dirname, listFilePath),
    newListFileContentFile,
    (err) => {
      if (err) console.log(err)
    }
  )
  return listFileContent
}

// 更新 routes.ts
const routesTplReplacer = (listFileContent) => {
  const routerFileFrom = './.template/routes.ts.tpl'
  const routerFileTo = '../../src/routes.ts'
  const routerFileTpl = fs.readFileSync(
    resolve(__dirname, routerFileFrom),
    'utf-8'
  )
  const routerMeta = {
    routes: listFileContent.map((comp) => {
      return `{
    title: '${comp.compZhName}',
    name: '${comp.compName}',
    path: '/components/${comp.compName}',
    component: () => import('@/views/${comp.compClassName}.vue'),
  }`
    })
  }
  const routerFileContent = handlebars.compile(routerFileTpl, {
    noEscape: true
  })(routerMeta)
  fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, (err) => {
    if (err) console.log(err)
  })
}

// 更新 install.ts
const installTsTplReplacer = (listFileContent) => {
  const installFileFrom = './.template/install.ts.tpl'
  const installFileTo = '../../packages/index.ts'
  const installFileTpl = fs.readFileSync(
    resolve(__dirname, installFileFrom),
    'utf-8'
  )
  const installMeta = {
    importPlugins: listFileContent
      .map(
        ({ compName }) => `import { ${compName}Plugin } from './${compName}';`
      )
      .join('\n'),
    installPlugins: listFileContent
      .map(({ compName }) => `${compName}Plugin.install?.(app);`)
      .join('\n    '),
    exportPlugins: listFileContent
      .map(({ compName }) => `export * from './${compName}'`)
      .join('\n')
  }
  const installFileContent = handlebars.compile(installFileTpl, {
    noEscape: true
  })(installMeta)
  fs.outputFile(
    resolve(__dirname, installFileTo),
    installFileContent,
    (err) => {
      if (err) console.log(err)
    }
  )
}

module.exports = (meta) => {
  compFilesTplReplacer(meta)
  const listFileContent = listJsonTplReplacer(meta)
  routesTplReplacer(listFileContent)
  // installTsTplReplacer(listFileContent)

  console.log(`组件新建完毕`)

  // console.log(`组件新建完毕，请前往 packages/${meta.compName} 目录进行开发`);
}
// export const tplReplacer = (meta) => {
//   compFilesTplReplacer(meta)
//   // const listFileContent = listJsonTplReplacer(meta)
//   // routesTplReplacer(listFileContent)
//   // installTsTplReplacer(listFileContent)

//   console.log(`组件新建完毕`)
// }
