const infoCollector = require('./infoCollector')
// import { infoCollector } from './infoCollector.js'
const tplReplacer = require('./tplReplacer')
// import { tplReplacer } from './tplReplacer.js'

async function run() {
  const meta = await infoCollector()
  tplReplacer(meta)
}

run()
// run().then(() => {
//   updateDeps()
// })
