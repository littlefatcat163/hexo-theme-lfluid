import path from 'path'
import fs from 'fs'
// const path = require('path')
const runPath = process.cwd()
async function test() {
    // const xxx = require(path.resolve(runPath, 'package.json'));
    // const configPath = path.join(runPath, 'package.json')

    /* if (fs.existsSync(configPath)) {
        const res = fs.readFileSync(configPath, 'utf-8')
        const dir = path.dirname(res)
        console.log('success')
        console.log(dir)
    } */
    const name = 'yaml'
    // const a = require.resolve(`${name}/package.json`)
    const a = import.meta.resolve(`${name}/package.json`)
    const dir = path.dirname(a)
    console.log(a, dir)
}

test()