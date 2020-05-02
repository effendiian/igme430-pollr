// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

// ////////////////////////
// MEMBER INIT
// ////////////////////////

// Debug statement.
const isLoaded = (scriptName) => {
  console.log(`Utilities loaded from the '${scriptName}' script.`);
};

// Prepare an XMLHttpRequest.
const prepareXHR = (method, action, headers, isAsync = true) => {
  const xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    // Create the XHR connection details.
    xhr.open(method, action, isAsync);
    // Set request headers, if applicable.
    try {
      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }
    } catch (err) {
      return reject(err);
    }
    // Resolve with the prepared request object.
    return resolve(xhr);
  });
};

// Send an XMLHttpRequest.
const sendXHR = (xhr, body) => new Promise((resolve, reject) => {
  if (!xhr) { return reject(new Error('No XHR object available.')); }

  // eslint-disable-next-line no-param-reassign
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      return resolve(xhr);
    }
    return reject(xhr.status);
  };

  // If a body is provided, send it. Otherwise, safely ignore it.
  if (body) {
    return xhr.send(body);
  }
  return xhr.send();
});

// Get AJAX .
const sendAjax = (body = undefined, method, action, headers, isAsync = true) => new Promise((resolve, reject) => {
  prepareXHR(method, action, headers, isAsync).then((xhr) => sendXHR(xhr, body).catch((e) => reject(e))).then((xhr) => {
    if (!xhr) { return reject(new Error('Missing response.')); }
    return resolve({
      status: xhr.status,
      response: xhr.response,
      responseJSON: xhr.responseJSON,
      responseXML: xhr.responseXML,
      responseText: xhr.responseText,
    });
  }).catch((e) => reject(e));
});

// Shortform GET.
const getAjax = (action, headers) => new Promise((resolve, reject) => {
  sendAjax(null, 'GET', action, headers, true).then((result) => resolve(result)).catch((e) => reject(e));
});

// Shortform POST.
const postAjax = (body, action, headers) => new Promise((resolve, reject) => {
  sendAjax(body, 'POST', action, headers, true).then((result) => resolve(result)).catch((e) => reject(e));
});

// Get the CSRF Token.
const getToken = () => new Promise((resolve, reject) => {
  getAjax('/getToken').then((result) => resolve({
    status: result.status,
    csrfToken: result.responseJSON.csrfToken,
  })).catch((e) => reject(e));
});

// Clear notifications.
const clearNotification = () => {
  // Remove notification message.
  document.getElementById('notifications').innerText = '';
};

// Set a message.
const setNotification = (message) => {
  document.getElementById('notifications').innerText = message;
};

// Set an error message.
const setErrorMessage = (message) => {
  console.error(message);
  setNotification(message);
};

// ////////////////////////
// EXPORT
// ////////////////////////
export default {
  isLoaded,
  getToken,
  sendAjax,
  getAjax,
  postAjax,
  clearNotification,
  setNotification,
  setErrorMessage,
};
