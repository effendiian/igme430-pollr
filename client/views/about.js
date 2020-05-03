// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

import React from 'react';
import util from '../util';
import MediaElement from '../components/cards/MediaElement';
import MediaElementThumbnail from '../components/cards/fragments/MediaElementThumbnail';

const { ElementStore, SelectorTable } = util.elements;

// ////////////////////////
// MEMBERS
// ////////////////////////

// Selectors for the elements.
const page = new ElementStore(
  new SelectorTable({
    root: '#content',
    resources: '#about',
  })
);

// Render component to Resources.
const renderResourceComponent = (component) => {
  util.view.renderComponent(
    component,
    page.elements.resources,
  );
};

// Render placeholder component.
const renderText = (text) => {
  renderResourceComponent(
    <div>{text}</div>
  );
};

// Media element.
const renderMediaElement = () => {
  renderResourceComponent(

    <>
      <MediaElement
        thumbnail={undefined}
        title={'Resource'}
        description={'Description'}
        link={ { href: '#', isStretched: true } }
      />
      <MediaElement
        thumbnail={
          <MediaElementThumbnail icon={false} img={ {
            alt: 'Resource thumbnail',
            src: 'https://webpack.js.org/dcd5e077cf9f54ebe52d4f7ebe8c3080.png',
            className: '',
            size: '48px'
          } } /> }
        title={'Resource'}
        description={'Description'}
        link={ { href: '#', isStretched: true } }
      />
    </>
  );
};

// Clear the page.
const clearPage = () => {
  // Clear the table.
  console.dir(page.elements.root);
  page.elements.resources.innerHTML = '';
};

// On render, this will run.
const renderPage = () => {
  // Clear the table.
  clearPage();
  renderMediaElement();
};

// ////////////////////////
// RENDER
// ////////////////////////

// Run this function to render the window on load.
util.helpers.onLoad(1000)
  .then(() => page.load())
  .then(() => renderPage())
  .catch((e) => {
    console.error(e);
  });
