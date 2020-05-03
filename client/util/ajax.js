
// ajax.js - Collection of AJAX functions.

import promises from './promise.js';
import errors from './error.js';

// ////////////////////////
// FUNCS
// ////////////////////////

// Special errors.
const errs = {
  badRequest: errors.create('Bad AJAX Request.'),
  noResponse: errors.create('No response from the server.'),
  notFound: errors.create('Resource not found.'),
  badXHR: errors.create('Malformed XHR request.'),
  badAjax: errors.create('Error during AJAX request.'),
  badGet: errors.create('Error during GET request.'),
  badPost: errors.create('Error during POST request.'),
};

// Check if XHR is interactive.
const isInteractive = (xhr) => {
  if (!xhr || !xhr.readyState) {
    return false;
  }
  return xhr.readyState >= 2;
};

// Check if XHR is ready.
const isReady = (xhr) => {
  if (!xhr || !xhr.readyState) {
    return false;
  }
  return xhr.readyState === 4;
};

// Set a series of request headers.
const setRequestHeaders = (xhr, headers) => {
  Object.keys(headers).forEach((key) => {
    xhr.setRequestHeader(key, headers[key]);
  });
};

// Prepare an XMLHttpRequest. If error occurs, promise will throw it.
const prepareXHR = ({
  method = 'GET',
  action = '/',
  headers = {},
  isAsync = true,
}) => promises.createPromise((resolve, reject) => { // Creates a promise.
  const xhr = new XMLHttpRequest(); // Get the XHR object.
  xhr.open(method, action, isAsync); // Create the connection details.
  setRequestHeaders(xhr, headers);
  return resolve(xhr);
});

// Send a prepared XMLHttpRequest. If error occurs, promise will throw it.
const sendXHR = (xhr, body) => promises.createPromise((resolve, reject) => {
  if (!xhr) { return reject(errs.badXHR); }
  // eslint-disable-next-line no-param-reassign
  xhr.onreadystatechange = () => {
    // console.group('XHR Request');
    // console.log(`(Status: ${xhr.status}) XHRequest ready state change: ${xhr.readyState}`);
    // console.groupEnd('XHR Request');
    if (xhr.readyState === 4) {
      if (xhr.status >= 100 && xhr.status <= 399) {
        return resolve(xhr);
      }
      return reject(xhr);
    }
    return xhr.status;
  };

  // Send the XHR request.
  return xhr.send(body || undefined); // This way a 'null' body, will still be undefined.
});

// General send Ajax form.
const send = ({
  body = undefined,
  method = 'GET',
  action = '/',
  headers = {},
  isAsync = true,
}) => prepareXHR({
  method, action, headers, isAsync
})
  .then((request) => sendXHR(request, null));

// Make a AJAX GET request.
const get = (action, headers) => send({
  body: null,
  method: 'GET',
  action,
  headers,
  isAsync: true,
}).catch((e) => {
  throw e;
});

// Make a AJAX POST request.
const post = (action, body, headers) => send({
  body,
  method: 'POST',
  action,
  headers,
  isAsync: true,
}).then((response) => {
  console.log('POST: Is this being called?');
  return response;
}).catch((e) => {
  throw e;
});

// Get the CSRF Token from the server.
const getToken = () => get('/getToken')
  .then((response) => JSON.parse(response.responseText).csrfToken);

// ////////////////////////
// EXPORT
// ////////////////////////

export default {
  isInteractive,
  isReady,
  prepareXHR,
  sendXHR,
  send,
  get,
  post,
  getToken,
};
