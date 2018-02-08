// We require the babel polyfill because the swagger2openapi module uses generators
require('babel-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');
const { AppContainer } = require('react-hot-loader');

function render(Component) {
  ReactDOM.render(<AppContainer><Component /></AppContainer>, document.getElementById('hub-content'));
}

render(require('./src/Demo'));

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./src/Demo', () => render(require('./src/Demo')));
}
