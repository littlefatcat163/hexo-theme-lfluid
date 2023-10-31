/**
 * @description 解析hexo没有end的参数，出现 '@'后面的都是要显示内容
 * @param {string[]} args 参数字符串
 */
export function noEndingArgs(args: string[]) {
    const arr = [...args];
    const atIndex = arr.findIndex(item => /^@/.test(item));
    let content = undefined;
    if (atIndex > -1) {
        content = arr.splice(atIndex).join(' ').replace(/^@/, '');
    }
    return {
        arr,
        content
    }
}

/**
 * @description 多图片，一行放几张图
 *  - 1. 一行最多三张
 *  - 2. 根据图片数量，尽量铺满的方式去计算一行该放多少
 *  - 3. 只处理图片两行没铺满，剩余多的case
 * @param {number} imageCount 图片数量
 * @returns 
 */
export function igRowCol(imageCount: number) {
    // 一行最多放三张图
    const MAX = 3
    if (imageCount < MAX) {
        return imageCount
    }
    if (imageCount === MAX + 1) {
        return MAX - 1
    }
    return MAX
}