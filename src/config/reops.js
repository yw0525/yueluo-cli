/**
 * @file 模板相关配置
 * @module src/config/template
 * @author 月落 <yueluo.yang@qq.com>
 */

const { BASE_PREFIX } = require('./config');

const REPOS = [
  'vite-vue3-starter',
  'vite-vue3-components-starter',
  'nuxt3-ssr-starter',
  'electron-react-starter',
  'nest-server-starter'
];

/**
 * @constant {object} TEMPLATES - 模板地址
 */
const REOPS_CONFIG = REPOS.map(repo => ({
  name: repo,
  url: `${BASE_PREFIX}${repo}.git`
}));

module.exports = {
  REOPS_CONFIG
};