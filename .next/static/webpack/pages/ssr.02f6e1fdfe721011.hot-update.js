"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ssr",{

/***/ "./src/pages/ssr/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/ssr/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AssetCard = function(param) {\n    var url = param.url, title = param.title, type = param.type;\n    var imgUrl = type === \"image\" ? url : \"video_block.png\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,\n        isExternal: true,\n        href: url,\n        p: 12,\n        bg: \"white\",\n        direction: \"column\",\n        h: \"300px\",\n        w: \"300px\",\n        rounded: \"24px\",\n        border: \"1px solid\",\n        borderColor: \"#D7DBEC\",\n        backgroundSize: \"cover\",\n        backgroundImage: \"url(\".concat(imgUrl, \")\"),\n        _focus: {\n            borderColor: \"brand.gray\",\n            boxShadow: \"0px 2px 15px #D7DBEC\"\n        },\n        _hover: {\n            borderColor: \"brand.gray\",\n            boxShadow: \"0px 2px 15px #D7DBEC\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/jujutan/projects/personal/web-diglett-portal/src/pages/ssr/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this));\n};\n_c = AssetCard;\nvar SpiderSSG = function(payload) {\n    var _this1 = _this;\n    _s();\n    var assets = payload.assets;\n    var gridTemplateColumns = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({\n        base: \"1fr\",\n        lg: \"repeat(2, minmax(10rem, 1fr))\",\n        xl: \"repeat(3, minmax(10rem, 1fr))\"\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        gap: 10,\n        templateColumns: gridTemplateColumns,\n        mb: \"5\",\n        children: assets.map(function(asset) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetCard, {\n                url: asset.url,\n                type: asset.type\n            }, asset.id, false, {\n                fileName: \"/Users/jujutan/projects/personal/web-diglett-portal/src/pages/ssr/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 16\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jujutan/projects/personal/web-diglett-portal/src/pages/ssr/index.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this));\n};\n_s(SpiderSSG, \"zpRUACcIBuFAxUW9IRh08hRTZOI=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue\n    ];\n});\n_c1 = SpiderSSG;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpiderSSG);\nvar _c, _c1;\n$RefreshReg$(_c, \"AssetCard\");\n$RefreshReg$(_c1, \"SpiderSSG\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3NyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBUXpCOzs7QUFxQnpCLEdBQUssQ0FBQ0ssU0FBUyxHQUE4QixRQUFRQyxRQUFrQixDQUFDO1FBQXhCQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUQsS0FBSyxTQUFMQSxLQUFLLEVBQUVFLElBQUksU0FBSkEsSUFBSTtJQUM5RCxHQUFLLENBQUNDLE1BQU0sR0FBR0QsSUFBSSxLQUFLLENBQU8sU0FBR0QsR0FBRyxHQUFHLENBQWlCO0lBQ3pELE1BQU0sNkVBQ0hKLGtEQUFJO1FBQ0hPLEVBQUUsRUFBRVQsa0RBQUk7UUFDUlUsVUFBVSxFQUFFLElBQUk7UUFDaEJDLElBQUksRUFBRUwsR0FBRztRQUNUTSxDQUFDLEVBQUUsRUFBRTtRQUNMQyxFQUFFLEVBQUMsQ0FBTztRQUNWQyxTQUFTLEVBQUMsQ0FBUTtRQUNsQkMsQ0FBQyxFQUFDLENBQU87UUFDVEMsQ0FBQyxFQUFDLENBQU87UUFDVEMsT0FBTyxFQUFDLENBQU07UUFDZEMsTUFBTSxFQUFDLENBQVc7UUFDbEJDLFdBQVcsRUFBQyxDQUFTO1FBQ3JCQyxjQUFjLEVBQUMsQ0FBTztRQUN0QkMsZUFBZSxFQUFHLENBQUksTUFBUyxNQUFDLENBQVJiLE1BQU0sRUFBQyxDQUFDO1FBQ2hDYyxNQUFNLEVBQUUsQ0FBQztZQUNQSCxXQUFXLEVBQUUsQ0FBWTtZQUN6QkksU0FBUyxFQUFFLENBQXNCO1FBQ25DLENBQUM7UUFDREMsTUFBTSxFQUFFLENBQUM7WUFDUEwsV0FBVyxFQUFFLENBQVk7WUFDekJJLFNBQVMsRUFBRSxDQUFzQjtRQUNuQyxDQUFDOzs7Ozs7QUFHUCxDQUFDO0tBM0JLbkIsU0FBUztBQTZCZixHQUFLLENBQUNxQixTQUFTLEdBQUcsUUFBUSxDQUFQQyxPQUFvQixFQUFLLENBQUM7OztJQUMzQyxHQUFLLENBQUdDLE1BQU0sR0FBS0QsT0FBTyxDQUFsQkMsTUFBTTtJQUNkLEdBQUssQ0FBQ0MsbUJBQW1CLEdBQUd6QixvRUFBa0IsQ0FBQyxDQUFDO1FBQzlDMEIsSUFBSSxFQUFFLENBQUs7UUFDWEMsRUFBRSxFQUFFLENBQStCO1FBQ25DQyxFQUFFLEVBQUUsQ0FBK0I7SUFDckMsQ0FBQztJQUNELE1BQU0sNkVBQ0g5QixrREFBSTtRQUFDK0IsR0FBRyxFQUFFLEVBQUU7UUFBRUMsZUFBZSxFQUFFTCxtQkFBbUI7UUFBRU0sRUFBRSxFQUFDLENBQUc7a0JBQ3hEUCxNQUFNLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO1lBQ3RCLE1BQU0sNkVBQUVoQyxTQUFTO2dCQUFnQkUsR0FBRyxFQUFFOEIsS0FBSyxDQUFDOUIsR0FBRztnQkFBRUMsSUFBSSxFQUFFNkIsS0FBSyxDQUFDN0IsSUFBSTtlQUExQzZCLEtBQUssQ0FBQ0MsRUFBRTs7Ozs7UUFDakMsQ0FBQzs7Ozs7O0FBR1AsQ0FBQztHQWRLWixTQUFTOztRQUVldEIsZ0VBQWtCOzs7TUFGMUNzQixTQUFTOztBQTRCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zc3IvaW5kZXgudHN4Pzc3MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExpbmssXG4gIEltYWdlLFxuICBHcmlkLFxuICBGbGV4LFxuICBUZXh0LFxuICB1c2VCcmVha3BvaW50VmFsdWUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmludGVyZmFjZSBBc3NldCB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IFwidmlkZW9cIiB8IFwiaW1hZ2VcIjtcbiAgdXJsOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3BpZGVyUHJvcHMge1xuICBhc3NldHM6IEFycmF5PEFzc2V0Pjtcbn1cblxudHlwZSBBc3NldENhcmRQcm9wcyA9IHtcbiAgdXJsOiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpbWdVcmw/OiBzdHJpbmc7XG4gIHR5cGU6IFwiaW1hZ2VcIiB8IFwidmlkZW9cIjtcbn07XG5cbmNvbnN0IEFzc2V0Q2FyZDogUmVhY3QuVkZDPEFzc2V0Q2FyZFByb3BzPiA9ICh7IHVybCwgdGl0bGUsIHR5cGUgfSkgPT4ge1xuICBjb25zdCBpbWdVcmwgPSB0eXBlID09PSBcImltYWdlXCIgPyB1cmwgOiBcInZpZGVvX2Jsb2NrLnBuZ1wiO1xuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBhcz17TGlua31cbiAgICAgIGlzRXh0ZXJuYWw9e3RydWV9XG4gICAgICBocmVmPXt1cmx9XG4gICAgICBwPXsxMn1cbiAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGg9XCIzMDBweFwiXG4gICAgICB3PVwiMzAwcHhcIlxuICAgICAgcm91bmRlZD1cIjI0cHhcIlxuICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkXCJcbiAgICAgIGJvcmRlckNvbG9yPVwiI0Q3REJFQ1wiXG4gICAgICBiYWNrZ3JvdW5kU2l6ZT1cImNvdmVyXCJcbiAgICAgIGJhY2tncm91bmRJbWFnZT17YHVybCgke2ltZ1VybH0pYH1cbiAgICAgIF9mb2N1cz17e1xuICAgICAgICBib3JkZXJDb2xvcjogXCJicmFuZC5ncmF5XCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIwcHggMnB4IDE1cHggI0Q3REJFQ1wiLFxuICAgICAgfX1cbiAgICAgIF9ob3Zlcj17e1xuICAgICAgICBib3JkZXJDb2xvcjogXCJicmFuZC5ncmF5XCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIwcHggMnB4IDE1cHggI0Q3REJFQ1wiLFxuICAgICAgfX1cbiAgICA+PC9GbGV4PlxuICApO1xufTtcblxuY29uc3QgU3BpZGVyU1NHID0gKHBheWxvYWQ6IFNwaWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXNzZXRzIH0gPSBwYXlsb2FkO1xuICBjb25zdCBncmlkVGVtcGxhdGVDb2x1bW5zID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcbiAgICBiYXNlOiBcIjFmclwiLFxuICAgIGxnOiBcInJlcGVhdCgyLCBtaW5tYXgoMTByZW0sIDFmcikpXCIsXG4gICAgeGw6IFwicmVwZWF0KDMsIG1pbm1heCgxMHJlbSwgMWZyKSlcIixcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgZ2FwPXsxMH0gdGVtcGxhdGVDb2x1bW5zPXtncmlkVGVtcGxhdGVDb2x1bW5zfSBtYj1cIjVcIj5cbiAgICAgIHthc3NldHMubWFwKChhc3NldCkgPT4ge1xuICAgICAgICByZXR1cm4gPEFzc2V0Q2FyZCBrZXk9e2Fzc2V0LmlkfSB1cmw9e2Fzc2V0LnVybH0gdHlwZT17YXNzZXQudHlwZX0gLz47XG4gICAgICB9KX1cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Z1bmN0aW9uL2xpc3QtYXNzZXRzXCJcbiAgKTtcbiAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXNzZXRzOiBkYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaWRlclNTRztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJHcmlkIiwiRmxleCIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsIkFzc2V0Q2FyZCIsInRpdGxlIiwidXJsIiwidHlwZSIsImltZ1VybCIsImFzIiwiaXNFeHRlcm5hbCIsImhyZWYiLCJwIiwiYmciLCJkaXJlY3Rpb24iLCJoIiwidyIsInJvdW5kZWQiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiX2ZvY3VzIiwiYm94U2hhZG93IiwiX2hvdmVyIiwiU3BpZGVyU1NHIiwicGF5bG9hZCIsImFzc2V0cyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJiYXNlIiwibGciLCJ4bCIsImdhcCIsInRlbXBsYXRlQ29sdW1ucyIsIm1iIiwibWFwIiwiYXNzZXQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/ssr/index.tsx\n");

/***/ })

});