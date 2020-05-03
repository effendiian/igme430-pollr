
// view.js - Special class used to help render elements to the screen.

// ////////////////////////
// MODULE / LIBRARY IMPORT
// ////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '../components/Alert';
import errors from './error.js';
import promises from './promise.js';

// ////////////////////////
// FUNCS
// ////////////////////////

// Simple boolean check.
const targetExists = (target) => {
  if (!target) {
    errors.send(errors.noRenderTarget);
    return false;
  }
  return !!target;
};

// Simple boolean check.
const contentExists = (content) => {
  if (!content) {
    errors.send(errors.noRenderContent);
    return false;
  }
  return !!content;
};

// Use fallback content.
const verifyContent = (content, fallback = 'This is fallback content.') => ((contentExists(content)) ? content : fallback);

// Clear target of its contents.
const clearTargetElement = (target) => {
  if (targetExists(target)) {
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
  }
};

// Render text to the DOM.
const renderPlaceholder = (text, target) => {
  const body = verifyContent(text, 'This page is rendering with fallback text.');
  if (targetExists(target)) {
    const node = target;
    node.innerHTML = body;
    return true;
  }
  return false;
};

// Render an element on the page.
const renderOnPage = (content, target) => {
  const body = verifyContent(content, 'This page is rendering with fallback content.');
  if (targetExists(target)) {
    ReactDOM.render(
      body,
      target
    );
    return true;
  }
  return false;
};

// Render a component to the DOM.
const renderComponent = (component, target) => renderOnPage(component, target);

// Render a notification message for a set period of time.
const renderNotification = ({ message, alert }, target, timeout) => {
  let timer;
  const component = <Alert message={message} alert={alert} visible />;

  const showElement = () => renderComponent(React.cloneElement(component, { visible: true }), target);

  const hideElement = () => renderComponent(React.cloneElement(component, { visible: false }), target);

  // Create a promise.
  promises.createPromise((resolve, reject) => {
    showElement();
    timer = window.setTimeout(() => {
      window.clearTimeout(timer);
      return resolve(true);
    }, timeout);
  }).then(() => {
    hideElement();
  });
};


// ////////////////////////
// EXPORT
// ////////////////////////

export default {
  renderOnPage,
  renderPlaceholder,
  renderComponent,
  renderNotification,
  clearTargetElement,
  verifyContent,
  contentExists,
  targetExists,
};
