// This script patches react-native-maps to make it compatible with web builds.
// It creates an empty module for the web to prevent the Metro bundler from
// trying to resolve native-only dependencies. This is a common workaround for
// a known issue with react-native-maps.
// See: https://github.com/react-native-maps/react-native-maps/issues/4641

const chalk = require('chalk')
const { readFile, writeFile, copyFile } = require('fs').promises

function log(...args) {
  console.log(chalk.yellow('[react-native-maps]'), ...args)
}

async function reactNativeMaps() {
  log('Creating web compatibility of react-native-maps using an empty module loaded on web builds')
  const modulePath = 'node_modules/react-native-maps'
  try {
    await writeFile(`${modulePath}/lib/index.web.js`, 'module.exports = {}', 'utf-8')
    await copyFile(`${modulePath}/lib/index.d.ts`, `${modulePath}/lib/index.web.d.ts`)
    const pkg = JSON.parse(await readFile(`${modulePath}/package.json`))
    pkg['react-native'] = 'lib/index.js'
    pkg['main'] = 'lib/index.web.js'
    await writeFile(`${modulePath}/package.json`, JSON.stringify(pkg, null, 2), 'utf-8')
    log('✓ script ran successfully')
  } catch (error) {
    log('Could not patch react-native-maps', error)
  }
}

reactNativeMaps()