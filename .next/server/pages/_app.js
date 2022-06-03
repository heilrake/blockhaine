/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/providers/index.ts":
/*!***************************************!*\
  !*** ./components/providers/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Web3Provider\": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./components/providers/web3/index.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpRCIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1tYXJrZXRwbGFjZS8uL2NvbXBvbmVudHMvcHJvdmlkZXJzL2luZGV4LnRzPzJmMGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBXZWIzUHJvdmlkZXIgfSBmcm9tICcuL3dlYjMnO1xyXG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsIldlYjNQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/providers/index.ts\n");

/***/ }),

/***/ "./components/providers/web3/index.tsx":
/*!*********************************************!*\
  !*** ./components/providers/web3/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ultils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ultils */ \"./components/providers/web3/ultils.ts\");\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)((0,_ultils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\nconst Web3Provider = ({ children  })=>{\n    const { 0: web3Api , 1: setWeb3Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_ultils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: web3Api,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\blockchain\\\\nft-marketplace\\\\components\\\\providers\\\\web3\\\\index.tsx\",\n        lineNumber: 13,\n        columnNumber: 10\n    }, undefined);\n};\nfunction useWeb3() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZ0U7QUFDUDtBQU16RCxNQUFNSSxXQUFXLGlCQUFHSixvREFBYSxDQUFZRywyREFBa0IsRUFBRSxDQUFDO0FBRWxFLE1BQU1FLFlBQVksR0FBZ0IsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUNsRCxNQUFNLEVBVlIsR0FVU0MsT0FBTyxHQVZoQixHQVVrQkMsVUFBVSxNQUFJTiwrQ0FBUSxDQUFZQywyREFBa0IsRUFBRSxDQUFDO0lBRXZFLHFCQUFPLDhEQUFDQyxXQUFXLENBQUNLLFFBQVE7UUFBQ0MsS0FBSyxFQUFFSCxPQUFPO2tCQUFHRCxRQUFROzs7OztpQkFBd0IsQ0FBQztDQUNoRjtBQUVNLFNBQVNLLE9BQU8sR0FBRztJQUN4QixPQUFPVixpREFBVSxDQUFDRyxXQUFXLENBQUMsQ0FBQztDQUNoQztBQUVELGlFQUFlQyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0cGxhY2UvLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeD83NzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIEZDLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFN0YXRlLCBXZWIzU3RhdGUgfSBmcm9tICcuL3VsdGlscyc7XHJcblxyXG5pbnRlcmZhY2UgTXlQcm9wcyB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IFdlYjNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxXZWIzU3RhdGU+KGNyZWF0ZURlZmF1bHRTdGF0ZSgpKTtcclxuXHJcbmNvbnN0IFdlYjNQcm92aWRlcjogRkM8TXlQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3dlYjNBcGksIHNldFdlYjNBcGldID0gdXNlU3RhdGU8V2ViM1N0YXRlPihjcmVhdGVEZWZhdWx0U3RhdGUoKSk7XHJcblxyXG4gIHJldHVybiA8V2ViM0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dlYjNBcGl9PntjaGlsZHJlbn08L1dlYjNDb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VXZWIzKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFdlYjNDb250ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2ViM1Byb3ZpZGVyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImNyZWF0ZURlZmF1bHRTdGF0ZSIsIldlYjNDb250ZXh0IiwiV2ViM1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ3ZWIzQXBpIiwic2V0V2ViM0FwaSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXZWIzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/providers/web3/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/ultils.ts":
/*!*********************************************!*\
  !*** ./components/providers/web3/ultils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultState\": () => (/* binding */ createDefaultState)\n/* harmony export */ });\nconst createDefaultState = ()=>{\n    return {\n        ethereum: null,\n        provider: null,\n        contract: null,\n        isLoading: true\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3VsdGlscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBYU8sTUFBTUEsa0JBQWtCLEdBQUcsSUFBTTtJQUN0QyxPQUFPO1FBQ0xDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFNBQVMsRUFBRSxJQUFJO0tBQ2hCLENBQUM7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmZ0LW1hcmtldHBsYWNlLy4vY29tcG9uZW50cy9wcm92aWRlcnMvd2ViMy91bHRpbHMudHM/NDUyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSAnQG1ldGFtYXNrL3Byb3ZpZGVycyc7XHJcbmltcG9ydCB7IENvbnRyYWN0LCBwcm92aWRlcnMgfSBmcm9tICdldGhlcnMnO1xyXG5cclxuZXhwb3J0IHR5cGUgV2ViM1BhcmFtcyA9IHtcclxuICBldGhlcmV1bTogTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB8IG51bGw7XHJcbiAgcHJvdmlkZXI6IHByb3ZpZGVycy5XZWIzUHJvdmlkZXIgfCBudWxsO1xyXG4gIGNvbnRyYWN0OiBDb250cmFjdCB8IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBXZWIzU3RhdGUgPSB7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuOyAvLyB0cnVlIHdoaWxlIGxvYWRpbmcgd2ViM1N0YXRlXHJcbn0gJiBXZWIzUGFyYW1zO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlZmF1bHRTdGF0ZSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZXRoZXJldW06IG51bGwsXHJcbiAgICBwcm92aWRlcjogbnVsbCxcclxuICAgIGNvbnRyYWN0OiBudWxsLFxyXG4gICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVEZWZhdWx0U3RhdGUiLCJldGhlcmV1bSIsInByb3ZpZGVyIiwiY29udHJhY3QiLCJpc0xvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/ultils.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers */ \"./components/providers/index.ts\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers__WEBPACK_IMPORTED_MODULE_2__.Web3Provider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\blockchain\\\\nft-marketplace\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\blockchain\\\\nft-marketplace\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVXO0FBRTFDLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFO2tCQUNFLDRFQUFDSCxvREFBWTtzQkFDWCw0RUFBQ0UsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ2Y7cUJBQ2QsQ0FDSDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1tYXJrZXRwbGFjZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0Bwcm92aWRlcnMnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXZWIzUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvV2ViM1Byb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJXZWIzUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();