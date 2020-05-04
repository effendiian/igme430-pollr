
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

const alertComponent = <Alert visible />;

const showElement = (props, target) => renderComponent(React.cloneElement(alertComponent, props), target);

const hideElement = (props, target) => renderComponent(React.cloneElement(alertComponent, props), target);

// Render a notification message for a set period of time.
const renderNotification = ({ message, alert }, target, timeout) => {
  console.log(`Test: 3 ${message}`);
  let timer;
  // Create a promise.
  promises.createPromise((resolve, reject) => {
    showElement({
      message,
      alert,
      visible: true,
    }, target);
    timer = window.setTimeout(() => {
      window.clearTimeout(timer);
      return resolve(true);
    }, timeout);
  }).then(() => {
    hideElement({
      message,
      alert,
      visible: false,
    }, target);
  });
};

// Hide notification if one is being shown.
const hideNotifications = (target) => {
  hideElement({
    visible: false,
  }, target);
};

// Handle errors.
const handleError = function submitError(message, target, timeout = 3500) {
  console.log(`Test: 2 ${message}`);
  renderNotification({
    message,
    alert: 'alert-danger',
  }, target, 3500);
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
  hideNotifications,
  handleError,
};
