"use strict";
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
exports.id = "pages/ssr";
exports.ids = ["pages/ssr"];
exports.modules = {

/***/ "./src/pages/ssr/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/ssr/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst AssetCard = ({ url , title , type  })=>{\n    const imgUrl = type === \"image\" ? url : \"video_block.png\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,\n        isExternal: true,\n        href: url,\n        p: 12,\n        bg: \"white\",\n        direction: \"column\",\n        h: \"300px\",\n        w: \"300px\",\n        rounded: \"24px\",\n        border: \"1px solid\",\n        borderColor: \"#D7DBEC\",\n        backgroundSize: \"cover\",\n        backgroundImage: `url(${imgUrl})`,\n        _focus: {\n            borderColor: \"brand.gray\",\n            boxShadow: \"0px 2px 15px #D7DBEC\"\n        },\n        _hover: {\n            borderColor: \"brand.gray\",\n            boxShadow: \"0px 2px 15px #D7DBEC\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/jujutan/projects/personal/web-diglett-portal/src/pages/ssr/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined));\n};\nconst SpiderSSG = (payload)=>{\n    const { assets  } = payload;\n    const gridTemplateColumns = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({\n        base: \"1fr\",\n        lg: \"repeat(2, minmax(10rem, 1fr))\",\n        xl: \"repeat(3, minmax(10rem, 1fr))\"\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        gap: 10,\n        templateColumns: gridTemplateColumns,\n        mb: \"5\",\n        children: assets.map((asset)=>{\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AssetCard, {\n                url: asset.url,\n                type: asset.type\n            }, asset.id, false, {\n                fileName: \"/Users/jujutan/projects/personal/web-diglett-portal/src/pages/ssr/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 16\n            }, undefined));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/jujutan/projects/personal/web-diglett-portal/src/pages/ssr/index.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined));\n};\nasync function getStaticProps() {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://localhost:8080/function/list-assets\");\n    const { data  } = response;\n    return {\n        props: {\n            assets: data\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpiderSSG);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3NyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDtBQVF6QjtBQUNBO0FBb0J6QixLQUFLLENBQUNNLFNBQVMsSUFBK0IsQ0FBQyxDQUFDQyxHQUFHLEdBQUVDLEtBQUssR0FBRUMsSUFBSSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3RFLEtBQUssQ0FBQ0MsTUFBTSxHQUFHRCxJQUFJLEtBQUssQ0FBTyxTQUFHRixHQUFHLEdBQUcsQ0FBaUI7SUFDekQsTUFBTSw2RUFDSEosa0RBQUk7UUFDSFEsRUFBRSxFQUFFVixrREFBSTtRQUNSVyxVQUFVLEVBQUUsSUFBSTtRQUNoQkMsSUFBSSxFQUFFTixHQUFHO1FBQ1RPLENBQUMsRUFBRSxFQUFFO1FBQ0xDLEVBQUUsRUFBQyxDQUFPO1FBQ1ZDLFNBQVMsRUFBQyxDQUFRO1FBQ2xCQyxDQUFDLEVBQUMsQ0FBTztRQUNUQyxDQUFDLEVBQUMsQ0FBTztRQUNUQyxPQUFPLEVBQUMsQ0FBTTtRQUNkQyxNQUFNLEVBQUMsQ0FBVztRQUNsQkMsV0FBVyxFQUFDLENBQVM7UUFDckJDLGNBQWMsRUFBQyxDQUFPO1FBQ3RCQyxlQUFlLEdBQUcsSUFBSSxFQUFFYixNQUFNLENBQUMsQ0FBQztRQUNoQ2MsTUFBTSxFQUFFLENBQUM7WUFDUEgsV0FBVyxFQUFFLENBQVk7WUFDekJJLFNBQVMsRUFBRSxDQUFzQjtRQUNuQyxDQUFDO1FBQ0RDLE1BQU0sRUFBRSxDQUFDO1lBQ1BMLFdBQVcsRUFBRSxDQUFZO1lBQ3pCSSxTQUFTLEVBQUUsQ0FBc0I7UUFDbkMsQ0FBQzs7Ozs7O0FBR1AsQ0FBQztBQUVELEtBQUssQ0FBQ0UsU0FBUyxJQUFJQyxPQUFvQixHQUFLLENBQUM7SUFDM0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxFQUFDLENBQUMsR0FBR0QsT0FBTztJQUMxQixLQUFLLENBQUNFLG1CQUFtQixHQUFHMUIsb0VBQWtCLENBQUMsQ0FBQztRQUM5QzJCLElBQUksRUFBRSxDQUFLO1FBQ1hDLEVBQUUsRUFBRSxDQUErQjtRQUNuQ0MsRUFBRSxFQUFFLENBQStCO0lBQ3JDLENBQUM7SUFDRCxNQUFNLDZFQUNIL0Isa0RBQUk7UUFBQ2dDLEdBQUcsRUFBRSxFQUFFO1FBQUVDLGVBQWUsRUFBRUwsbUJBQW1CO1FBQUVNLEVBQUUsRUFBQyxDQUFHO2tCQUN4RFAsTUFBTSxDQUFDUSxHQUFHLEVBQUVDLEtBQUssR0FBSyxDQUFDO1lBQ3RCLE1BQU0sNkVBQUVoQyxTQUFTO2dCQUFnQkMsR0FBRyxFQUFFK0IsS0FBSyxDQUFDL0IsR0FBRztnQkFBRUUsSUFBSSxFQUFFNkIsS0FBSyxDQUFDN0IsSUFBSTtlQUExQzZCLEtBQUssQ0FBQ0MsRUFBRTs7Ozs7UUFDakMsQ0FBQzs7Ozs7O0FBR1AsQ0FBQztBQUVNLGVBQWVDLGNBQWMsR0FBRyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ3BDLGdEQUFTLENBQzlCLENBQTRDO0lBRTlDLEtBQUssQ0FBQyxDQUFDLENBQUNzQyxJQUFJLEVBQUMsQ0FBQyxHQUFHRixRQUFRO0lBQ3pCLE1BQU0sQ0FBQyxDQUFDO1FBQ05HLEtBQUssRUFBRSxDQUFDO1lBQ05mLE1BQU0sRUFBRWMsSUFBSTtRQUNkLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlaEIsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGFydGVyLWNoYWtyYS8uL3NyYy9wYWdlcy9zc3IvaW5kZXgudHN4Pzc3MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExpbmssXG4gIEltYWdlLFxuICBHcmlkLFxuICBGbGV4LFxuICBUZXh0LFxuICB1c2VCcmVha3BvaW50VmFsdWUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmludGVyZmFjZSBBc3NldCB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IFwidmlkZW9cIiB8IFwiaW1hZ2VcIjtcbiAgdXJsOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3BpZGVyUHJvcHMge1xuICBhc3NldHM6IEFycmF5PEFzc2V0Pjtcbn1cblxudHlwZSBBc3NldENhcmRQcm9wcyA9IHtcbiAgdXJsOiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpbWdVcmw/OiBzdHJpbmc7XG4gIHR5cGU6IFwiaW1hZ2VcIiB8IFwidmlkZW9cIjtcbn07XG5cbmNvbnN0IEFzc2V0Q2FyZDogUmVhY3QuVkZDPEFzc2V0Q2FyZFByb3BzPiA9ICh7IHVybCwgdGl0bGUsIHR5cGUgfSkgPT4ge1xuICBjb25zdCBpbWdVcmwgPSB0eXBlID09PSBcImltYWdlXCIgPyB1cmwgOiBcInZpZGVvX2Jsb2NrLnBuZ1wiO1xuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBhcz17TGlua31cbiAgICAgIGlzRXh0ZXJuYWw9e3RydWV9XG4gICAgICBocmVmPXt1cmx9XG4gICAgICBwPXsxMn1cbiAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGg9XCIzMDBweFwiXG4gICAgICB3PVwiMzAwcHhcIlxuICAgICAgcm91bmRlZD1cIjI0cHhcIlxuICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkXCJcbiAgICAgIGJvcmRlckNvbG9yPVwiI0Q3REJFQ1wiXG4gICAgICBiYWNrZ3JvdW5kU2l6ZT1cImNvdmVyXCJcbiAgICAgIGJhY2tncm91bmRJbWFnZT17YHVybCgke2ltZ1VybH0pYH1cbiAgICAgIF9mb2N1cz17e1xuICAgICAgICBib3JkZXJDb2xvcjogXCJicmFuZC5ncmF5XCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIwcHggMnB4IDE1cHggI0Q3REJFQ1wiLFxuICAgICAgfX1cbiAgICAgIF9ob3Zlcj17e1xuICAgICAgICBib3JkZXJDb2xvcjogXCJicmFuZC5ncmF5XCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIwcHggMnB4IDE1cHggI0Q3REJFQ1wiLFxuICAgICAgfX1cbiAgICA+PC9GbGV4PlxuICApO1xufTtcblxuY29uc3QgU3BpZGVyU1NHID0gKHBheWxvYWQ6IFNwaWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXNzZXRzIH0gPSBwYXlsb2FkO1xuICBjb25zdCBncmlkVGVtcGxhdGVDb2x1bW5zID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcbiAgICBiYXNlOiBcIjFmclwiLFxuICAgIGxnOiBcInJlcGVhdCgyLCBtaW5tYXgoMTByZW0sIDFmcikpXCIsXG4gICAgeGw6IFwicmVwZWF0KDMsIG1pbm1heCgxMHJlbSwgMWZyKSlcIixcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgZ2FwPXsxMH0gdGVtcGxhdGVDb2x1bW5zPXtncmlkVGVtcGxhdGVDb2x1bW5zfSBtYj1cIjVcIj5cbiAgICAgIHthc3NldHMubWFwKChhc3NldCkgPT4ge1xuICAgICAgICByZXR1cm4gPEFzc2V0Q2FyZCBrZXk9e2Fzc2V0LmlkfSB1cmw9e2Fzc2V0LnVybH0gdHlwZT17YXNzZXQudHlwZX0gLz47XG4gICAgICB9KX1cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Z1bmN0aW9uL2xpc3QtYXNzZXRzXCJcbiAgKTtcbiAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXNzZXRzOiBkYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaWRlclNTRztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJHcmlkIiwiRmxleCIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsImF4aW9zIiwiQXNzZXRDYXJkIiwidXJsIiwidGl0bGUiLCJ0eXBlIiwiaW1nVXJsIiwiYXMiLCJpc0V4dGVybmFsIiwiaHJlZiIsInAiLCJiZyIsImRpcmVjdGlvbiIsImgiLCJ3Iiwicm91bmRlZCIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJfZm9jdXMiLCJib3hTaGFkb3ciLCJfaG92ZXIiLCJTcGlkZXJTU0ciLCJwYXlsb2FkIiwiYXNzZXRzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImJhc2UiLCJsZyIsInhsIiwiZ2FwIiwidGVtcGxhdGVDb2x1bW5zIiwibWIiLCJtYXAiLCJhc3NldCIsImlkIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/ssr/index.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/ssr/index.tsx"));
module.exports = __webpack_exports__;

})();