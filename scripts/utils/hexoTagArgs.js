/**
 * @description 解析hexo没有end的参数，出现 '@'后面的都是要显示内容
 * @param {string[]} args 参数字符串
 */
function noEndingArgs(args) {
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

module.exports = {
    noEndingArgs
}