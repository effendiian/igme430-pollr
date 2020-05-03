
// selectors.js - Special class.

// ////////////////////////
// FUNCS
// ////////////////////////

// Class for managing selectors.
class SelectorTable {
  // Construct the table.
  constructor(data) {
    this.table = {};
    if (Array.isArray(data)) {
      this.register(data);
    } else {
      this.register(Object.keys(data).map((key) => ({
        key,
        selector: data[key],
        limit: data[key].limit,
      })));
    }
  }

  // Register a selector.
  registerSelector(key, selector, limit = undefined) {
    this.table[key] = selector;
    if (limit >= 0) {
      this.table[key] = {
        selector: selector.selector || selector,
        limit,
      };
    }
  }

  // Register a collection.
  register(array) {
    if (!Array.isArray(array) || array.length === 1) {
      this.registerSelector(array);
    } else {
      array.forEach((obj) => {
        this.registerSelector(obj.key, obj.selector, obj.limit);
      });
    }
  }

  // Map function.
  map(callback /* = (value = '', index = 0, array = []) => {} */) {
    return Object.keys(this.table).map(callback);
  }

  // Clear the selector table.
  clear() {
    this.table = {};
  }
}

// ////////////////////////
// EXPORT
// ////////////////////////

export default SelectorTable;
