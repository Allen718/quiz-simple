/**
 * @description 用正则获取 URL 中的 host，一定要用正则哦
 * @param {string} url 完整的url
 * @returns {string} 返回 url 中的 host
 */
const getHostName = (url) => {
    let tag = /(https:\/\/)/g
    tag2 = /\/cn\/\w+/g
    return url.replace(tag, '').replace(tag2, '')
}

// * ---------------- 实现的效果：
{
  console.log(getHostName(`https://help.github.com/cn/github`)); // => `help.github.com`
}
