import Vue from 'vue'
import cheerio from 'cheerio'

// eslint-disable-next-line import/no-webpack-loader-syntax
const svgFileContent = require('!!raw-loader!../assets/sprite/gen/icons.svg').default

export default Vue.component('SvgSymbols', {
  render (createElement) {
    const $svg = cheerio.load(svgFileContent)('svg')
    const attributes = $svg[0].attribs;
    attributes.style = "height: 0; width: 0; position: absolute; top: 0; z-index: -1";
    return createElement('svg', {domProps: {innerHTML: $svg.html()}, attrs: attributes});
  }
})