
// helpers.js - Collection of utility functions.

import errors from './error.js';
import promises from './promise.js';
import ajax from './ajax.js';

// ////////////////////////
// FUNCS
// ////////////////////////


// Check if the document is completely loaded.
const isDocumentReady = (readyable = document) => {
  if (!readyable || !(readyable instanceof Document)) {
    return false;
  }
  return readyable.readyState === 'complete';
};

// Check if readyable object is ready.
const isReady = (readyable = document) => {
  // If readyable not supplied, return failed.
  if (!readyable || !readyable.readyState) {
    return false;
  }

  // If readyable is a Document, check using that function.
  return isDocumentReady(readyable) || ajax.isReady(readyable);
};

// Check if document is interactive.
const isDocumentInteractive = (readyable = document) => {
  if (!readyable || !(readyable instanceof Document)) {
    return false;
  }
  return readyable.readyState === 'interactive' || isDocumentReady(readyable);
};

// Check if readyable object is interactive.
const isInteractive = (readyable = document) => {
  // If readyable not supplied, return failed.
  if (!readyable || !readyable.readyState) {
    return false;
  }

  // If readyable is a Document, check using that function.
  return isDocumentInteractive(readyable) || ajax.isInteractive(readyable);
};

// Execute once ready, but fail after a set amount of time.
const onReady = (readyable) => {
  const target = readyable || document;
  return promises.createPromise((resolve, reject) => ((isReady(target)) ? resolve(target) : reject(errors.documentNotReady)));
};

// Clear notifications.
const clearNotification = () => {
  // Remove notification message.
  document.getElementById('notifications').innerText = '';
};

// Set a message.
const setNotification = (message) => {
  document.getElementById('notifications').innerText = message;
};

// Render on load. Returns promise.
const onLoad = (timeLimit = 1000) => promises.createTimedPromise(timeLimit, (resolve, reject) => window.addEventListener('load', (evt) => {
  if (!window || !isReady(document)) {
    return reject(errors.windowNotLoaded);
  }
  return resolve({ window, evt });
}));


// ////////////////////////
// EXPORT
// ////////////////////////

export default {
  onLoad,
  onReady,
  isReady,
  isInteractive,
  clearNotification,
  setNotification,
};


/*
// Take in a set of key/value pairs and return object.
const loadElement = (selector, limit = null) => {
  if (!selector
        || !selector.length
        || typeof selector !== 'string') {
    // Bad or no selector.
    return Promise.reject(errors.badParams);
  } if (limit && (Number.isNaN(limit) && limit < 0)) {
    // If limit exists but isn't a number or less than (but not equal to) zero.
    return Promise.reject(errors.badParams);
  }

  // If limit === 0, return true if elements exist. Return false, if no element found.
  // If limit === 1, return single element.
  // If limit > 1, return array of elements, up until the length.
  // If limit < 0, error. (Handled above).

  // If valid inputs, process.
  return new Promise((resolve, reject) => {
    if (limit === 0 || limit === 1) {
      return findElement(selector).then((element) => {
        if (limit === 0) {
          return (element) ? resolve(true) : resolve(false);
        }
        return resolve(element);
      }).catch((e) => {
        errors.send(e);
        return resolve(null);
      });
    } if (limit > 1) {
      return findElements(selector).then((elements) => {
        if (elements && elements.length > limit) {
          elements.length = limit;
        }
        return resolve(elements);
      }).catch((e) => {
        errors.send(e);
        return resolve([]);
      });
    }
    return reject(errors.create('Unhandled case.'));
  });
};

// Prepare the query element.
const prepareQueryElement = (search) => {
  const queryElement = {
    id: undefined,
    selector: undefined,
    limit: undefined,
  };

  if (typeof search === 'string' || search.selector) {
    queryElement.id = search.id || search.selector || search;
    queryElement.selector = search.selector || search;
    queryElement.limit = search.limit || undefined;
    return queryElement;
  }

  // Not valid selector.
  return null;
};

// Prepare the query array.
const prepareQueryArray = (search) => {
  if (Array.isArray(search)) {
    return search.map((el) => prepareQueryElement(el));
  }
  return Object.keys(search).map((key) => {
    const el = search[key];
    const isString = (typeof el === 'string');
    return prepareQueryElement({
      id: el.id || key,
      selector: el.selector || el,
      limit: el.limit,
    });
  });
};

// Load elements.
const loadElements = (search) => {
  if (!search) {
    // Bad input.
    return Promise.reject(errors.badParams);
  }

  // If array, make it query. If not an array, convert object.
  const query = prepareQueryArray(search);
  // query = { id: string, selector: string, [ limit: number ] }

  if (search.length === 0) {
    // Return empty object if search is an empty array.
    return Promise.resolve({});
  }

  // If
  return new Promise((resolve, reject) => {


  });
};
*/
