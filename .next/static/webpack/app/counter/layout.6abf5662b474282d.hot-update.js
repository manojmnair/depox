"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/counter/layout",{

/***/ "(app-pages-browser)/./app/counter/layout.tsx":
/*!********************************!*\
  !*** ./app/counter/layout.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashBoardLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_lsidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/lsidebar */ \"(app-pages-browser)/./components/lsidebar.tsx\");\n/* harmony import */ var _components_rsidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/rsidebar */ \"(app-pages-browser)/./components/rsidebar.tsx\");\n/* harmony import */ var _data_playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/playlist */ \"(app-pages-browser)/./data/playlist.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction DashBoardLayout(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid lg:grid-cols-6  \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_lsidebar__WEBPACK_IMPORTED_MODULE_1__.LeftSidebar, {\n                    playlists: _data_playlist__WEBPACK_IMPORTED_MODULE_3__.playlists,\n                    className: \"hidden lg:block\"\n                }, void 0, false, {\n                    fileName: \"/home/manoj/hackathon/15.HackOnBlocks/depox/app/counter/layout.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-4 space-y-4 py-4 bg-[#e2e8f0] dark:bg-[#1e293b] rounded-md mt-1\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/home/manoj/hackathon/15.HackOnBlocks/depox/app/counter/layout.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_rsidebar__WEBPACK_IMPORTED_MODULE_2__.RightSidebar, {\n                    playlists: _data_playlist__WEBPACK_IMPORTED_MODULE_3__.playlists,\n                    className: \"hidden lg:block\"\n                }, void 0, false, {\n                    fileName: \"/home/manoj/hackathon/15.HackOnBlocks/depox/app/counter/layout.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/manoj/hackathon/15.HackOnBlocks/depox/app/counter/layout.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = DashBoardLayout;\nvar _c;\n$RefreshReg$(_c, \"DashBoardLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb3VudGVyL2xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdEO0FBQ0M7QUFDVjtBQUNoQyxTQUFTRyxnQkFBZ0IsS0FJdEM7UUFKc0MsRUFDdENDLFFBQVEsRUFHUixHQUpzQztJQUt0QyxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNOLDZEQUFXQTtvQkFBQ0UsV0FBV0EscURBQVNBO29CQUFFSSxXQUFVOzs7Ozs7OEJBQzdDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDRkY7Ozs7Ozs4QkFFYiw4REFBQ0gsOERBQVlBO29CQUFDQyxXQUFXQSxxREFBU0E7b0JBQUVJLFdBQVU7Ozs7Ozs7Ozs7Ozs7QUFJdEQ7S0FoQndCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY291bnRlci9sYXlvdXQudHN4Pzg3NGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBMZWZ0U2lkZWJhciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xzaWRlYmFyXCI7XG5pbXBvcnQgeyBSaWdodFNpZGViYXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yc2lkZWJhclwiO1xuaW1wb3J0IHsgcGxheWxpc3RzIH0gZnJvbSBcIi4uLy4uL2RhdGEvcGxheWxpc3RcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaEJvYXJkTGF5b3V0KHtcbiAgY2hpbGRyZW5cbn06IFJlYWRvbmx5PHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0+KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtNiAgXCI+XG4gICAgICAgIDxMZWZ0U2lkZWJhciBwbGF5bGlzdHM9e3BsYXlsaXN0c30gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi00IHNwYWNlLXktNCBweS00IGJnLVsjZTJlOGYwXSBkYXJrOmJnLVsjMWUyOTNiXSByb3VuZGVkLW1kIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8UmlnaHRTaWRlYmFyIHBsYXlsaXN0cz17cGxheWxpc3RzfSBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2tcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG48Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMZWZ0U2lkZWJhciIsIlJpZ2h0U2lkZWJhciIsInBsYXlsaXN0cyIsIkRhc2hCb2FyZExheW91dCIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/counter/layout.tsx\n"));

/***/ })

});