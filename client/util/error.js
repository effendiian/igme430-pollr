
// error.js - A collection of errors.

// ////////////////////////
// FUNCS
// ////////////////////////

// Create an error.
const createError = (message) => new Error(message);

// Send an error to the console.
const sendError = (error) => {
  if (typeof error === 'string') {
    console.error(createError(error));
  } else if (error instanceof Error || error.message) {
    // Error object.
    console.dir(error);
    console.error(error.message);
  } else {
    console.error(`${error}`);
  }
};

// ////////////////////////
// EXPORT
// ////////////////////////

export default {
  send: sendError,
  create: createError,
  noRenderContent: createError('No render content was provided.'),
  noRenderTarget: createError('No render target was provided.'),
  windowNotLoaded: createError('The window has not loaded.'),
  documentNotReady: createError('DOM elements in the document are not ready.'),
  noCallbackProvided: createError('No callback provided to the promise.'),
  noTimeoutProvided: createError('No time was provided to the timed promise.'),
  promiseTimedOut: createError('Promise timed out after specified duration.'),
  noneFound: createError('Nothing found for this query.'),
  badParams: createError('Supplied parameter was not accepted.'),
  notImplemented: createError('This operation is currently unsupported by this version of the codebase.'),
};
