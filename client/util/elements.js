
// helpers.js - Collection of functions for managing DOM elements.

import errors from './error.js';
import helpers from './helpers.js';
import SelectorTable from './selectors.js';

// ////////////////////////
// FUNCS
// ////////////////////////

// Find a single element.
const findElement = (selector) => new Promise((resolve, reject) => {
  helpers.onReady().then(() => {
    const el = document.querySelector(selector);
    return resolve(el);
  }).catch((e) => { reject(e); });
});

// Find a series of elements.
const findElements = (selector) => new Promise((resolve, reject) => {
  helpers.onReady().then(() => {
    const el = document.querySelectorAll(selector);
    return resolve(el);
  }).catch((e) => { reject(e); });
});

// Load element from the DOM.
const loadElement = (key, selector, limit) => {
  if (!key || !selector) {
    // If missing key or selector, bad params.
    return Promise.reject(errors.badParams);
  }
  if (limit === 0 || limit === 1) {
    return findElement(selector)
      .then((element) => {
        const exists = !!element;
        return (limit === 0) ? exists : element;
      });
  } if (limit > 1) {
    return findElements(selector)
      .then((elements) => {
        const arr = Array.from(elements);
        if (arr.length > limit) {
          arr.length = limit;
        }
        return arr;
      });
  } if (!limit) {
    return findElements(selector).then((elements) => Array.from(elements));
  }
  return Promise.reject(errors.badParams);
};

// Class for management of elements.
class ElementStore {
  // Construct the element manager from a selector table.
  constructor(selectorTable = new SelectorTable()) {
    if (!(selectorTable instanceof SelectorTable)) {
      this.table = new SelectorTable(selectorTable);
    } else {
      this.table = selectorTable;
    }
    this.elements = {};
  }

  hasElement(key) {
    return (!!this.get(key));
  }

  get(key) {
    return this.elements[key];
  }

  // Set the entry for this element.
  setElement(key, el) {
    this.elements[key] = el;
    return el;
  }

  // Clear the entry for this element.
  clearElement(key) {
    return this.setElement(key, null);
  }

  // Load the elements from the table.
  load() {
    const selectors = this.table.table;
    return Promise.all(this.table.map((key) => {
      const selector = (selectors[key] || {}).selector || selectors[key];
      let { limit } = selectors[key] || {};
      if (!limit && selector === selectors[key]) {
        limit = 1;
      }
      console.log(`Loading element [${key}] (${selector}) - Limit: ${limit}.`);
      return loadElement(key, selector, limit)
        .then((result) => {
          if (!result) {
            return this.clearElement(key);
          }
          return this.setElement(key, result);
        });
    }));
  }

  // Clear the element store of all elements.
  clear() {
    this.elements = {};
  }
}

// ////////////////////////
// EXPORT
// ////////////////////////

export default {
  SelectorTable,
  ElementStore,
  findElement,
  findElements,
  loadElement,
};
