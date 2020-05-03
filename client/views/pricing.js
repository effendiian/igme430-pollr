// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

import util from '../util';

const { ElementStore, SelectorTable } = util.elements;

// ////////////////////////
// COMPONENTS
// ////////////////////////

// Selectors for the elements.
const store = new ElementStore(
  new SelectorTable({
    root: '#content',
    table: '#pricing',
    links: {
      selector: 'a',
      limit: 5,
    },
  })
);

// ////////////////////////
// RENDER
// ////////////////////////

// Run this function to render the window on load.
util.helpers.renderOnLoad(1000).then(() => {
  console.log('Loading elements.');
  return store.load();
}).then((el) => {
  console.log('Elements loaded.');
  console.dir(store.elements.root);
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
