// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

import util from '../util';

// ////////////////////////
// COMPONENTS
// ////////////////////////

// Selectors for the elements.
const elements = {
  root: '#pricing',
  test: {
    id: 'paragraphs',
    selector: 'p',
    limit: 5,
  }
};

// React components.
const components = {};

// ////////////////////////
// RENDER
// ////////////////////////

// Run this function to render the window on load.
util.helpers.renderOnLoad(1000).then(({ window, evt }) => {
  console.log('Loading elements.');
  return util.helpers.loadElements(elements);
}).then((el) => {
  console.dir(el);

  console.dir(components);
}).catch((e) => {
  console.error(e);
});


/* const renderOnLoad = (window, e) => {
  util.debug.isLoaded('pricing.js');
  console.log('Loading React for this page.');

  util.helpers.loadElements(elements).then((els) => {
    console.dir(els);
  }).catch((err) => {
    console.error(err);
  });
};

window.addEventListener('load', function start(e) {
  renderOnLoad(this, e);
}); */
