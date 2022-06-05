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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Web3Provider\": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./components/providers/web3/index.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NraGFpbmUvLi9jb21wb25lbnRzL3Byb3ZpZGVycy9pbmRleC50cz8yZjBkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnLi93ZWIzJztcclxuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJXZWIzUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/index.ts\n");

/***/ }),

/***/ "./components/providers/web3/index.tsx":
/*!*********************************************!*\
  !*** ./components/providers/web3/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useWeb3\": () => (/* binding */ useWeb3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ultils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ultils */ \"./components/providers/web3/ultils.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst Web3Provider = ({ children  })=>{\n    const { 0: web3Api , 1: setWeb3Api  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_ultils__WEBPACK_IMPORTED_MODULE_2__.createDefaultState)());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function initWeb3() {\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(window.ethereum);\n            setWeb3Api({\n                ethereum: window.ethereum,\n                provider,\n                contract: null,\n                isLoading: false\n            });\n        }\n        initWeb3();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: web3Api,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\u041F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044C\\\\Desktop\\\\\\u041D\\u043E\\u0432\\u0430\\u044F \\u043F\\u0430\\u043F\\u043A\\u0430 (2)\\\\blockhaine\\\\components\\\\providers\\\\web3\\\\index.tsx\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, undefined);\n};\nfunction useWeb3() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEyRTtBQUNsQjtBQUN6QjtBQUtoQyxNQUFNTSxXQUFXLGlCQUFHTixvREFBYSxDQUFNLElBQUksQ0FBQztBQUU1QyxNQUFNTyxZQUFZLEdBQWdCLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDbEQsTUFBTSxFQVZSLEdBVVNDLE9BQU8sR0FWaEIsR0FVa0JDLFVBQVUsTUFBSVAsK0NBQVEsQ0FBWUMsMkRBQWtCLEVBQUUsQ0FBQztJQUV2RUYsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsU0FBU1MsUUFBUSxHQUFHO1lBQ2xCLE1BQU1DLFFBQVEsR0FBRyxJQUFJUCxpRUFBNkIsQ0FBQ1MsTUFBTSxDQUFDQyxRQUFRLENBQVE7WUFFMUVMLFVBQVUsQ0FBQztnQkFDVEssUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Z0JBQ3pCSCxRQUFRO2dCQUNSSSxRQUFRLEVBQUUsSUFBSTtnQkFDZEMsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7UUFFRE4sUUFBUSxFQUFFLENBQUM7S0FDWixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQU8sOERBQUNMLFdBQVcsQ0FBQ1ksUUFBUTtRQUFDQyxLQUFLLEVBQUVWLE9BQU87a0JBQUdELFFBQVE7Ozs7O2lCQUF3QixDQUFDO0NBQ2hGO0FBRU0sU0FBU1ksT0FBTyxHQUFHO0lBQ3hCLE9BQU9uQixpREFBVSxDQUFDSyxXQUFXLENBQUMsQ0FBQztDQUNoQztBQUVELGlFQUFlQyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja2hhaW5lLy4vY29tcG9uZW50cy9wcm92aWRlcnMvd2ViMy9pbmRleC50c3g/NzcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBGQywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFN0YXRlLCBXZWIzU3RhdGUgfSBmcm9tICcuL3VsdGlscyc7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XHJcblxyXG5pbnRlcmZhY2UgTXlQcm9wcyB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuY29uc3QgV2ViM0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4obnVsbCk7XHJcblxyXG5jb25zdCBXZWIzUHJvdmlkZXI6IEZDPE15UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt3ZWIzQXBpLCBzZXRXZWIzQXBpXSA9IHVzZVN0YXRlPFdlYjNTdGF0ZT4oY3JlYXRlRGVmYXVsdFN0YXRlKCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaW5pdFdlYjMoKSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSBhcyBhbnkpO1xyXG5cclxuICAgICAgc2V0V2ViM0FwaSh7XHJcbiAgICAgICAgZXRoZXJldW06IHdpbmRvdy5ldGhlcmV1bSxcclxuICAgICAgICBwcm92aWRlcixcclxuICAgICAgICBjb250cmFjdDogbnVsbCxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0V2ViMygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIDxXZWIzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17d2ViM0FwaX0+e2NoaWxkcmVufTwvV2ViM0NvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVdlYjMoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoV2ViM0NvbnRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWIzUHJvdmlkZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlRGVmYXVsdFN0YXRlIiwiZXRoZXJzIiwiV2ViM0NvbnRleHQiLCJXZWIzUHJvdmlkZXIiLCJjaGlsZHJlbiIsIndlYjNBcGkiLCJzZXRXZWIzQXBpIiwiaW5pdFdlYjMiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29udHJhY3QiLCJpc0xvYWRpbmciLCJQcm92aWRlciIsInZhbHVlIiwidXNlV2ViMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/providers/web3/index.tsx\n");

/***/ }),

/***/ "./components/providers/web3/ultils.ts":
/*!*********************************************!*\
  !*** ./components/providers/web3/ultils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultState\": () => (/* binding */ createDefaultState)\n/* harmony export */ });\nconst createDefaultState = ()=>{\n    return {\n        ethereum: null,\n        provider: null,\n        contract: null,\n        isLoading: true\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3VsdGlscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBa0JPLE1BQU1BLGtCQUFrQixHQUFHLElBQU07SUFDdEMsT0FBTztRQUNMQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxTQUFTLEVBQUUsSUFBSTtLQUNoQixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NraGFpbmUvLi9jb21wb25lbnRzL3Byb3ZpZGVycy93ZWIzL3VsdGlscy50cz80NTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgfSBmcm9tICdAbWV0YW1hc2svcHJvdmlkZXJzJztcclxuaW1wb3J0IHsgQ29udHJhY3QsIHByb3ZpZGVycyB9IGZyb20gJ2V0aGVycyc7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICBldGhlcmV1bTogTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFdlYjNQYXJhbXMgPSB7XHJcbiAgZXRoZXJldW06IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgfCBudWxsO1xyXG4gIHByb3ZpZGVyOiBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyIHwgbnVsbDtcclxuICBjb250cmFjdDogQ29udHJhY3QgfCBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgV2ViM1N0YXRlID0ge1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjsgLy8gdHJ1ZSB3aGlsZSBsb2FkaW5nIHdlYjNTdGF0ZVxyXG59ICYgV2ViM1BhcmFtcztcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlZmF1bHRTdGF0ZSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZXRoZXJldW06IG51bGwsXHJcbiAgICBwcm92aWRlcjogbnVsbCxcclxuICAgIGNvbnRyYWN0OiBudWxsLFxyXG4gICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVEZWZhdWx0U3RhdGUiLCJldGhlcmV1bSIsInByb3ZpZGVyIiwiY29udHJhY3QiLCJpc0xvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/providers/web3/ultils.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers */ \"./components/providers/index.ts\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_providers__WEBPACK_IMPORTED_MODULE_2__.Web3Provider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\\\u041F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044C\\\\Desktop\\\\\\u041D\\u043E\\u0432\\u0430\\u044F \\u043F\\u0430\\u043F\\u043A\\u0430 (2)\\\\blockhaine\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\\\u041F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044C\\\\Desktop\\\\\\u041D\\u043E\\u0432\\u0430\\u044F \\u043F\\u0430\\u043F\\u043A\\u0430 (2)\\\\blockhaine\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVXO0FBRTFDLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFO2tCQUNFLDRFQUFDSCxvREFBWTtzQkFDWCw0RUFBQ0UsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ2Y7cUJBQ2QsQ0FDSDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NraGFpbmUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQHByb3ZpZGVycyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxXZWIzUHJvdmlkZXI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1dlYjNQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiV2ViM1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

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