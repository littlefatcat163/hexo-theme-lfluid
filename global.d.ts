import type {} from 'hexo'
declare module '*.yml' {
    const data: any;
    export default data;
}

declare module 'hexo-pagination'

declare module 'hexo-util'

// declare module 'css'