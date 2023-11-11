import path from 'path'
import fs from 'fs'
// import { createApp, createSSRApp } from 'vue'
// import { compileTemplate } from '@vue/compiler-sfc'
// import { compile } from 'vue-template-compiler'
import { createSSRApp } from 'vue'
import { renderToString, ssrRenderComponent } from '@vue/server-renderer'
// const path = require('path')
// const runPath = process.cwd()

function abc() {
    let str
    let staus = 'pending'
    const tmp = fs.readFileSync('test.vue', 'utf-8')
    const app = createSSRApp({template: tmp, data: () => ({message: 'testing'})})
    renderToString(app)
        .then((s) => {
            str = s
            staus = 'fulfilled'
        })
        .catch(() => {
            staus = 'rejected'
        })
    return {
        done() {
            return staus !== 'pending'
        },
        getResult() {
            return str
        }
    }
}

function* readVue() {
    const tmp = fs.readFileSync('test.vue', 'utf-8')
    const app = createSSRApp({template: tmp, data: () => ({message: 'testing'})})
    
    renderToString(app)
    return a
}

async function test() {
    const res = fs.existsSync('test.vue')
    if (!res) {
        return
    }
    const tmp = fs.readFileSync('test.vue', 'utf-8')
    const m = tmp.match(/<template>([\s\S]*?)<\/template>/)
    const app = createSSRApp({
        // template: m[1],
        template: tmp,
        data: () => ({message: 'testing', abc: false})
    })
    const p = await renderToString(app, { comment: false })
    console.log(p)
    /* const s = await ssrRenderComponent(tmp)
    console.log(s) */
}

// test()

function testFs() {
    const res = fs.existsSync('global.d.ts')
    // fs.statSync('test.vue')
    console.log(res)
}

testFs()