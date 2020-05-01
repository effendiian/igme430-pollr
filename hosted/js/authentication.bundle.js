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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/views/authentication.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/form/SignupForm.jsx":
/*!***********************************************!*\
  !*** ./client/components/form/SignupForm.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar SignupForm = function SignupForm() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Signup form test.\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9mb3JtL1NpZ251cEZvcm0uanN4PzczYzYiXSwibmFtZXMiOlsiU2lnbnVwRm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxzQkFBTSwwRkFBTjtBQUFBLENBQW5COztBQUVlQSx5RUFBZiIsImZpbGUiOiIuL2NsaWVudC9jb21wb25lbnRzL2Zvcm0vU2lnbnVwRm9ybS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTaWdudXBGb3JtID0gKCkgPT4gPHA+U2lnbnVwIGZvcm0gdGVzdC48L3A+O1xuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/form/SignupForm.jsx\n");

/***/ }),

/***/ "./client/util/index.js":
/*!******************************!*\
  !*** ./client/util/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// ////////////////////////\n// MODULE/LIBRARY IMPORT\n// ////////////////////////\n// ////////////////////////\n// MEMBER INIT\n// ////////////////////////\n// Debug statement.\nvar isLoaded = function isLoaded(scriptName) {\n  console.log(\"Utilities loaded from the '\".concat(scriptName, \"' script.\"));\n}; // ////////////////////////\n// EXPORT\n// ////////////////////////\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  isLoaded: isLoaded\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9pbmRleC5qcz81NjEwIl0sIm5hbWVzIjpbImlzTG9hZGVkIiwic2NyaXB0TmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxVQUFELEVBQWdCO0FBQy9CQyxTQUFPLENBQUNDLEdBQVIsc0NBQTBDRixVQUExQztBQUNELENBRkQsQyxDQUlBO0FBQ0E7QUFDQTs7O0FBQ2U7QUFDYkQsVUFBUSxFQUFSQTtBQURhLENBQWYiLCJmaWxlIjoiLi9jbGllbnQvdXRpbC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gTU9EVUxFL0xJQlJBUlkgSU1QT1JUXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNRU1CRVIgSU5JVFxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIERlYnVnIHN0YXRlbWVudC5cbmNvbnN0IGlzTG9hZGVkID0gKHNjcmlwdE5hbWUpID0+IHtcbiAgY29uc29sZS5sb2coYFV0aWxpdGllcyBsb2FkZWQgZnJvbSB0aGUgJyR7c2NyaXB0TmFtZX0nIHNjcmlwdC5gKTtcbn07XG5cbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRVhQT1JUXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNMb2FkZWRcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/util/index.js\n");

/***/ }),

/***/ "./client/views/authentication.js":
/*!****************************************!*\
  !*** ./client/views/authentication.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_form_SignupForm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form/SignupForm.jsx */ \"./client/components/form/SignupForm.jsx\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ \"./client/util/index.js\");\n// ////////////////////////\n// MODULE/LIBRARY IMPORT\n// ////////////////////////\n\n\n\n // ////////////////////////\n// MEMBER INIT\n// ////////////////////////\n\n_util__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isLoaded('authentication.js');\nconsole.log('Authentication: Displays form for login / signup.'); // Render the signup form.\n\nwindow.addEventListener('load', function () {\n  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SignupForm_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('content'));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvYXV0aGVudGljYXRpb24uanM/MzIzYiJdLCJuYW1lcyI6WyJ1dGlsIiwiaXNMb2FkZWQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBOztBQUNBQSw2Q0FBSSxDQUFDQyxRQUFMLENBQWMsbUJBQWQ7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksbURBQVosRSxDQUVBOztBQUNBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU07QUFDcENDLDBEQUFNLGVBQ0osMkRBQUMsdUVBQUQsT0FESSxFQUNZQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FEWixDQUFOO0FBR0QsQ0FKRCIsImZpbGUiOiIuL2NsaWVudC92aWV3cy9hdXRoZW50aWNhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNT0RVTEUvTElCUkFSWSBJTVBPUlRcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgU2lnbnVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vU2lnbnVwRm9ybS5qc3gnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbCc7XG5cbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gTUVNQkVSIElOSVRcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xudXRpbC5pc0xvYWRlZCgnYXV0aGVudGljYXRpb24uanMnKTtcbmNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGlvbjogRGlzcGxheXMgZm9ybSBmb3IgbG9naW4gLyBzaWdudXAuJyk7XG5cbi8vIFJlbmRlciB0aGUgc2lnbnVwIGZvcm0uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgcmVuZGVyKFxuICAgIDxTaWdudXBGb3JtIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/views/authentication.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiP2M0ODEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiPzRiMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ })

/******/ });