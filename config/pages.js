/**
 * 多页入口配置
 */

const path = require('path');

const entryDir = path.join(__dirname, '../test/');

/**
 * 获取所有入口文件夹   规则：js文件名和父级文件名相同
 * @param dir
 * @returns {Array}
 */
const getPages = (dir) => ({
        test: path.join(dir, 'main.tsx')
    });

/**
 * 返回入口文件
 */
exports.entryMap = {};

exports.getPagesEntry = () => {
    if (!Object.keys(exports.entryMap).length) {
        exports.entryMap = getPages(entryDir);
    }
    return exports.entryMap;
};
