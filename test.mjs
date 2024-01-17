import path from 'path'
import fs from 'fs'
// import { createApp, createSSRApp } from 'vue'
// import { compileTemplate } from '@vue/compiler-sfc'
// import { compile } from 'vue-template-compiler'
import { createSSRApp, h } from 'vue'
import { renderToString, ssrRenderComponent } from '@vue/server-renderer'
import { parse, compileScript, compileTemplate } from '@vue/compiler-sfc'
// import Test1 from './test1.vue'
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
    /* const a = await import('./test.vue')
    console.log(a) */
    const m = tmp.match(/<template>([\s\S]*?)<\/template>/)
    const app = createSSRApp({
        template: m[1],
        // template: tmp,
        data: () => ({
            message: 'testing',
            abc: false,
            hh: '<div>asd</div>',
            a: {test: 'testing'}}),
        methods: {
            toImgUrl(uri) {
                return `xxx/${uri}`
            }
        }
    })
    const tsr = parse(tmp)
    // console.log(compileScript(tsr.descriptor, {id: ''}))
    const tms = compileTemplate({
        source: tsr.descriptor.template.content,
        // source: tsr,
        id: 'xxx'
    })
    // console.log(tms)
    // return
    /* const app = createSSRApp({
        // template: m[1],
        template: tsr.descriptor.template.content,
        data: () => ({message: 'testing', abc: false, hh: '<div>asd</div>'}),
        // components: []
    }) */
    const p = await renderToString(app, {data: () => (
        {
            message: 'testing',
            abc: false,
            hh: '<div>asd</div>',
            a: {test: 'testing'}
        })})
    console.log(p)
    /* const s = await ssrRenderComponent(tmp)
    console.log(s) */
}

test()

function testFs() {
    const res = fs.readdirSync('asd')
    // fs.statSync('test.vue')
    console.log(res)
}

// testFs()