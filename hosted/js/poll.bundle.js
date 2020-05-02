/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/views/poll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/util/index.js":
/*!******************************!*\
  !*** ./client/util/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// ////////////////////////\n// MODULE/LIBRARY IMPORT\n// ////////////////////////\n// ////////////////////////\n// MEMBER INIT\n// ////////////////////////\n// Debug statement.\nvar isLoaded = function isLoaded(scriptName) {\n  console.log(\"Utilities loaded from the '\".concat(scriptName, \"' script.\"));\n}; // Prepare an XMLHttpRequest.\n\n\nvar prepareXHR = function prepareXHR(method, action, headers) {\n  var isAsync = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n  var xhr = new XMLHttpRequest();\n  return new Promise(function (resolve, reject) {\n    // Create the XHR connection details.\n    xhr.open(method, action, isAsync); // Set request headers, if applicable.\n\n    try {\n      if (headers) {\n        Object.keys(headers).forEach(function (key) {\n          xhr.setRequestHeader(key, headers[key]);\n        });\n      }\n    } catch (err) {\n      return reject(err);\n    } // Resolve with the prepared request object.\n\n\n    return resolve(xhr);\n  });\n}; // Send an XMLHttpRequest.\n\n\nvar sendXHR = function sendXHR(xhr, body) {\n  return new Promise(function (resolve, reject) {\n    if (!xhr) {\n      return reject(new Error('No XHR object available.'));\n    } // eslint-disable-next-line no-param-reassign\n\n\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState == 4) {\n        return resolve(xhr);\n      }\n\n      return reject(xhr.status);\n    }; // If a body is provided, send it. Otherwise, safely ignore it.\n\n\n    if (body) {\n      return xhr.send(body);\n    }\n\n    return xhr.send();\n  });\n}; // Get AJAX .\n\n\nvar sendAjax = function sendAjax() {\n  var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n  var method = arguments.length > 1 ? arguments[1] : undefined;\n  var action = arguments.length > 2 ? arguments[2] : undefined;\n  var headers = arguments.length > 3 ? arguments[3] : undefined;\n  var isAsync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;\n  return new Promise(function (resolve, reject) {\n    prepareXHR(method, action, headers, isAsync).then(function (xhr) {\n      return sendXHR(xhr, body)[\"catch\"](function (e) {\n        return reject(e);\n      });\n    }).then(function (xhr) {\n      if (!xhr) {\n        return reject(new Error('Missing response.'));\n      }\n\n      return resolve({\n        status: xhr.status,\n        response: xhr.response,\n        responseJSON: xhr.responseJSON,\n        responseXML: xhr.responseXML,\n        responseText: xhr.responseText\n      });\n    })[\"catch\"](function (e) {\n      return reject(e);\n    });\n  });\n}; // Shortform GET.\n\n\nvar getAjax = function getAjax(action, headers) {\n  return new Promise(function (resolve, reject) {\n    sendAjax(null, 'GET', action, headers, true).then(function (result) {\n      return resolve(result);\n    })[\"catch\"](function (e) {\n      return reject(e);\n    });\n  });\n}; // Shortform POST.\n\n\nvar postAjax = function postAjax(body, action, headers) {\n  return new Promise(function (resolve, reject) {\n    sendAjax(body, 'POST', action, headers, true).then(function (result) {\n      return resolve(result);\n    })[\"catch\"](function (e) {\n      return reject(e);\n    });\n  });\n}; // Get the CSRF Token.\n\n\nvar getToken = function getToken() {\n  return new Promise(function (resolve, reject) {\n    getAjax('/getToken').then(function (result) {\n      return resolve({\n        status: result.status,\n        csrfToken: result.responseJSON.csrfToken\n      });\n    })[\"catch\"](function (e) {\n      return reject(e);\n    });\n  });\n}; // Clear notifications.\n\n\nvar clearNotification = function clearNotification() {\n  // Remove notification message.\n  document.getElementById('notifications').innerText = '';\n}; // Set a message.\n\n\nvar setNotification = function setNotification(message) {\n  document.getElementById('notifications').innerText = message;\n}; // Set an error message.\n\n\nvar setErrorMessage = function setErrorMessage(message) {\n  console.error(message);\n  setNotification(message);\n}; // ////////////////////////\n// EXPORT\n// ////////////////////////\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  isLoaded: isLoaded,\n  getToken: getToken,\n  sendAjax: sendAjax,\n  getAjax: getAjax,\n  postAjax: postAjax,\n  clearNotification: clearNotification,\n  setNotification: setNotification,\n  setErrorMessage: setErrorMessage\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9pbmRleC5qcz81NjEwIl0sIm5hbWVzIjpbImlzTG9hZGVkIiwic2NyaXB0TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJwcmVwYXJlWEhSIiwibWV0aG9kIiwiYWN0aW9uIiwiaGVhZGVycyIsImlzQXN5bmMiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib3BlbiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic2V0UmVxdWVzdEhlYWRlciIsImVyciIsInNlbmRYSFIiLCJib2R5IiwiRXJyb3IiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwic2VuZCIsInNlbmRBamF4IiwidW5kZWZpbmVkIiwidGhlbiIsImUiLCJyZXNwb25zZSIsInJlc3BvbnNlSlNPTiIsInJlc3BvbnNlWE1MIiwicmVzcG9uc2VUZXh0IiwiZ2V0QWpheCIsInJlc3VsdCIsInBvc3RBamF4IiwiZ2V0VG9rZW4iLCJjc3JmVG9rZW4iLCJjbGVhck5vdGlmaWNhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJzZXROb3RpZmljYXRpb24iLCJtZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxVQUFELEVBQWdCO0FBQy9CQyxTQUFPLENBQUNDLEdBQVIsc0NBQTBDRixVQUExQztBQUNELENBRkQsQyxDQUlBOzs7QUFDQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBaUJDLE9BQWpCLEVBQTZDO0FBQUEsTUFBbkJDLE9BQW1CLHVFQUFULElBQVM7QUFDOUQsTUFBTUMsR0FBRyxHQUFHLElBQUlD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InNvdXJjZXNDb250ZW50IjpbIi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gTU9EVUxFL0xJQlJBUlkgSU1QT1JUXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNRU1CRVIgSU5JVFxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIERlYnVnIHN0YXRlbWVudC5cbmNvbnN0IGlzTG9hZGVkID0gKHNjcmlwdE5hbWUpID0+IHtcbiAgY29uc29sZS5sb2coYFV0aWxpdGllcyBsb2FkZWQgZnJvbSB0aGUgJyR7c2NyaXB0TmFtZX0nIHNjcmlwdC5gKTtcbn07XG5cbi8vIFByZXBhcmUgYW4gWE1MSHR0cFJlcXVlc3QuXG5jb25zdCBwcmVwYXJlWEhSID0gKG1ldGhvZCwgYWN0aW9uLCBoZWFkZXJzLCBpc0FzeW5jID0gdHJ1ZSkgPT4ge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBDcmVhdGUgdGhlIFhIUiBjb25uZWN0aW9uIGRldGFpbHMuXG4gICAgeGhyLm9wZW4obWV0aG9kLCBhY3Rpb24sIGlzQXN5bmMpO1xuICAgIC8vIFNldCByZXF1ZXN0IGhlYWRlcnMsIGlmIGFwcGxpY2FibGUuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgfVxuICAgIC8vIFJlc29sdmUgd2l0aCB0aGUgcHJlcGFyZWQgcmVxdWVzdCBvYmplY3QuXG4gICAgcmV0dXJuIHJlc29sdmUoeGhyKTtcbiAgfSk7XG59O1xuXG4vLyBTZW5kIGFuIFhNTEh0dHBSZXF1ZXN0LlxuY29uc3Qgc2VuZFhIUiA9ICh4aHIsIGJvZHkpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgaWYgKCF4aHIpIHsgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoJ05vIFhIUiBvYmplY3QgYXZhaWxhYmxlLicpKTsgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZSh4aHIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVqZWN0KHhoci5zdGF0dXMpO1xuICB9O1xuXG4gIC8vIElmIGEgYm9keSBpcyBwcm92aWRlZCwgc2VuZCBpdC4gT3RoZXJ3aXNlLCBzYWZlbHkgaWdub3JlIGl0LlxuICBpZiAoYm9keSkge1xuICAgIHJldHVybiB4aHIuc2VuZChib2R5KTtcbiAgfVxuICByZXR1cm4geGhyLnNlbmQoKTtcbn0pO1xuXG4vLyBHZXQgQUpBWCAuXG5jb25zdCBzZW5kQWpheCA9IChib2R5ID0gdW5kZWZpbmVkLCBtZXRob2QsIGFjdGlvbiwgaGVhZGVycywgaXNBc3luYyA9IHRydWUpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgcHJlcGFyZVhIUihtZXRob2QsIGFjdGlvbiwgaGVhZGVycywgaXNBc3luYykudGhlbigoeGhyKSA9PiBzZW5kWEhSKHhociwgYm9keSkuY2F0Y2goKGUpID0+IHJlamVjdChlKSkpLnRoZW4oKHhocikgPT4ge1xuICAgIGlmICgheGhyKSB7IHJldHVybiByZWplY3QobmV3IEVycm9yKCdNaXNzaW5nIHJlc3BvbnNlLicpKTsgfVxuICAgIHJldHVybiByZXNvbHZlKHtcbiAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlOiB4aHIucmVzcG9uc2UsXG4gICAgICByZXNwb25zZUpTT046IHhoci5yZXNwb25zZUpTT04sXG4gICAgICByZXNwb25zZVhNTDogeGhyLnJlc3BvbnNlWE1MLFxuICAgICAgcmVzcG9uc2VUZXh0OiB4aHIucmVzcG9uc2VUZXh0LFxuICAgIH0pO1xuICB9KS5jYXRjaCgoZSkgPT4gcmVqZWN0KGUpKTtcbn0pO1xuXG4vLyBTaG9ydGZvcm0gR0VULlxuY29uc3QgZ2V0QWpheCA9IChhY3Rpb24sIGhlYWRlcnMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgc2VuZEFqYXgobnVsbCwgJ0dFVCcsIGFjdGlvbiwgaGVhZGVycywgdHJ1ZSkudGhlbigocmVzdWx0KSA9PiByZXNvbHZlKHJlc3VsdCkpLmNhdGNoKChlKSA9PiByZWplY3QoZSkpO1xufSk7XG5cbi8vIFNob3J0Zm9ybSBQT1NULlxuY29uc3QgcG9zdEFqYXggPSAoYm9keSwgYWN0aW9uLCBoZWFkZXJzKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHNlbmRBamF4KGJvZHksICdQT1NUJywgYWN0aW9uLCBoZWFkZXJzLCB0cnVlKS50aGVuKChyZXN1bHQpID0+IHJlc29sdmUocmVzdWx0KSkuY2F0Y2goKGUpID0+IHJlamVjdChlKSk7XG59KTtcblxuLy8gR2V0IHRoZSBDU1JGIFRva2VuLlxuY29uc3QgZ2V0VG9rZW4gPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGdldEFqYXgoJy9nZXRUb2tlbicpLnRoZW4oKHJlc3VsdCkgPT4gcmVzb2x2ZSh7XG4gICAgc3RhdHVzOiByZXN1bHQuc3RhdHVzLFxuICAgIGNzcmZUb2tlbjogcmVzdWx0LnJlc3BvbnNlSlNPTi5jc3JmVG9rZW4sXG4gIH0pKS5jYXRjaCgoZSkgPT4gcmVqZWN0KGUpKTtcbn0pO1xuXG4vLyBDbGVhciBub3RpZmljYXRpb25zLlxuY29uc3QgY2xlYXJOb3RpZmljYXRpb24gPSAoKSA9PiB7XG4gIC8vIFJlbW92ZSBub3RpZmljYXRpb24gbWVzc2FnZS5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmaWNhdGlvbnMnKS5pbm5lclRleHQgPSAnJztcbn07XG5cbi8vIFNldCBhIG1lc3NhZ2UuXG5jb25zdCBzZXROb3RpZmljYXRpb24gPSAobWVzc2FnZSkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9ucycpLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG59O1xuXG4vLyBTZXQgYW4gZXJyb3IgbWVzc2FnZS5cbmNvbnN0IHNldEVycm9yTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIHNldE5vdGlmaWNhdGlvbihtZXNzYWdlKTtcbn07XG5cbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRVhQT1JUXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNMb2FkZWQsXG4gIGdldFRva2VuLFxuICBzZW5kQWpheCxcbiAgZ2V0QWpheCxcbiAgcG9zdEFqYXgsXG4gIGNsZWFyTm90aWZpY2F0aW9uLFxuICBzZXROb3RpZmljYXRpb24sXG4gIHNldEVycm9yTWVzc2FnZSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/util/index.js\n");

/***/ }),

/***/ "./client/views/poll.js":
/*!******************************!*\
  !*** ./client/views/poll.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./client/util/index.js\");\n// ////////////////////////\n// MODULE/LIBRARY IMPORT\n// ////////////////////////\n // ////////////////////////\n// MEMBER INIT\n// ////////////////////////\n\n_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isLoaded('poll.js');\nconsole.log('Poll: Displays information for a poll.');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvcG9sbC5qcz81MzBlIl0sIm5hbWVzIjpbInV0aWwiLCJpc0xvYWRlZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBQ0FBLDZDQUFJLENBQUNDLFFBQUwsQ0FBYyxTQUFkO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUFaIiwiZmlsZSI6Ii4vY2xpZW50L3ZpZXdzL3BvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE1PRFVMRS9MSUJSQVJZIElNUE9SVFxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgdXRpbCBmcm9tICcuLi91dGlsJztcblxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNRU1CRVIgSU5JVFxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG51dGlsLmlzTG9hZGVkKCdwb2xsLmpzJyk7XG5jb25zb2xlLmxvZygnUG9sbDogRGlzcGxheXMgaW5mb3JtYXRpb24gZm9yIGEgcG9sbC4nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/views/poll.js\n");

/***/ })

/******/ });