// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/cards/Card';
import CardTable from '../components/cards/CardTable';
import Feature from '../components/cards/fragments/Feature';
import FeatureList from '../components/cards/fragments/FeatureList';
import util from '../util';

const { ElementStore, SelectorTable } = util.elements;

// ////////////////////////
// MEMBERS
// ////////////////////////

// Selectors for the elements.
const page = new ElementStore(
  new SelectorTable({
    root: '#content',
    table: '#pricing',
    links: {
      selector: 'a',
      limit: 5,
    },
  })
);

// Debug render the feature element.
const renderFeature = (label, enabled) => {
  // renderFeature('Example Feature', true);

  ReactDOM.render(
    <Feature label={'Example Feature'} enabled={true} />,
    page.elements.table
  );
};

// Debug render the feature element.
const renderFeatureList = (features = [
  <Feature key={0} label="Custom Feature 1" enabled={true} ></Feature>,
  <Feature key={1} label="Custom Feature 2" enabled={true} ></Feature>,
  <Feature key={2} label="Custom Feature 3" enabled={false} ></Feature>,
  <Feature key={3} label="Custom Feature 4" enabled={true} ></Feature>,
  <Feature key={4} label="Custom Feature 5" enabled={false} ></Feature>,
]) => {
  // renderFeatureList([
  //   { label: 'Example Feature 1', enabled: true },
  //   { label: 'Example Feature 2', enabled: false },
  //   { label: 'Example Feature 3', enabled: true }
  // ]);

  ReactDOM.render(
    <FeatureList features={features}/>,
    page.elements.table
  );
};

// Debug render the card element.
const renderCards = (featureList) => {
  ReactDOM.render(
    <>
      <Card
        title="Free Plan"
        src="https://images.unsplash.com/photo-1457131760772-7017c6180f05"
        price="$0.00/month"
        list={
          <FeatureList features={[
            <Feature key={0} label="Costs you nothing!" enabled={true} ></Feature>,
            <Feature key={1} label="Looks great!" enabled={true} ></Feature>,
            <Feature key={2} label="Limit of 5 polls!" enabled={true} ></Feature>,
            <Feature key={3} label="Unlimited polls?" enabled={false} ></Feature>,
            <Feature key={4} label="A sense of guilt?" enabled={false} ></Feature>,
          ]}></FeatureList>
        } />
      <Card
        title="Monthly Plan"
        src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
        price="$2.00/month"
        list={
          <FeatureList features={[
            <Feature key={0} label="Cheap!" enabled={true} ></Feature>,
            <Feature key={1} label="Unlimited polls!" enabled={true} ></Feature>,
            <Feature key={3} label="Gets me a coffee!" enabled={true} ></Feature>,
          ]}></FeatureList>
        } />
    </>,
    page.elements.table
  );
};

// Debug render the card element.
const renderCardTable = (cards) => {
  ReactDOM.render(
    <CardTable></CardTable>,
    page.elements.table
  );
};

// Clear the page.
const clearPage = () => {
  // Clear the table.
  console.dir(page.elements.table);
  page.elements.table.innerHTML = '';
};

// On render, this will run.
const renderPage = () => {
  // Clear the table.
  clearPage();

  // Paid features.
  /* const table = {
    free: [
      { label: 'Costs you nothing!', enabled: true },
      { label: 'Looks great!', enabled: true },
      { label: 'Fun to use!', enabled: true },
      { label: 'Unlimited polls.', enabled: false },
    ],
    paid: [
      { label: 'Cheap!', enabled: true },
      { label: 'Unlimited polls!', enabled: true },
      { label: 'Is free.', enabled: false },
    ],
  }; */


  // Render the React elements.
  renderCardTable();
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
