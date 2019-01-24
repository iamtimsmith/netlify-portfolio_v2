/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onClientEntry = () => {
  require('bulma')
  require('prismjs/themes/prism-tomorrow.css')
  require('./src/scss/app.scss')
}
