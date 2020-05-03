
// promise.js - A collection of promise helpers.

import errors from './error.js';

// Create a promise. Will reject automatically if callback is not supplied.
const createPromise = (
  executor = (onSuccess, onFail) => onFail(errors.noCallbackProvided)
) => new Promise(executor);

// Creates a timed promise, by using Promise.race.
// Modified from: https://italonascimento.github.io/applying-a-timeout-to-your-promises/
const createTimedPromise = (
  time = 1000,
  executor = (onSuccess, onFail) => onFail(errors.noCallbackProvided),
  rejectOnTimeout = true, // if false, will call resolve instead.
  onTimeout = (onFail) => { onFail(errors.promiseTimedOut); },
) => {
  // Timeout promise that will "race" the other.
  const timeout = createPromise((resolve, reject) => {
    const wait = setTimeout(() => {
      clearTimeout(wait);
      onTimeout((!rejectOnTimeout) ? resolve : reject);
    }, time);
  });

  // Returns race between original promise and the timeout.
  return Promise.race([
    createPromise(executor),
    timeout
  ]);
};
// ////////////////////////
// EXPORT
// ////////////////////////

export default {
  createPromise,
  createTimedPromise,
};
