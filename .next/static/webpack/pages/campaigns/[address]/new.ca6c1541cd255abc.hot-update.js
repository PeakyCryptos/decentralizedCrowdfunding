"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]/new",{

/***/ "./pages/campaigns/[address]/new.js":
/*!******************************************!*\
  !*** ./pages/campaigns/[address]/new.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var C_Users_SS_Udemy_Solidity_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_SS_Udemy_Solidity_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_SS_Udemy_Solidity_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar RequestNew = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(RequestNew, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(RequestNew);\n    function RequestNew() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, RequestNew);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_this), \"state\", {\n            value: \"\",\n            description: \"\",\n            recipient: \"\"\n        });\n        var _this1 = (0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_this);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(_this), \"onSubmit\", function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(C_Users_SS_Udemy_Solidity_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                var campaign, _state, description, value, recipient, accounts;\n                return C_Users_SS_Udemy_Solidity_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            event.preventDefault();\n                            campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this1.props.address);\n                            _state = _this1.state, description = _state.description, value = _state.value, recipient = _state.recipient;\n                            _ctx.prev = 3;\n                            _ctx.next = 6;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                        case 6:\n                            accounts = _ctx.sent;\n                            _ctx.next = 9;\n                            return campaign.methods.createRequests(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.toWei(value, \"ether\"), recipient).send({\n                                from: accounts[0]\n                            });\n                        case 9:\n                            _ctx.next = 13;\n                            break;\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](3);\n                        case 13:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        3,\n                        11\n                    ]\n                ]);\n            }));\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(RequestNew, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Form, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: \"Create a Request\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Form.Field, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Input, {\n                                        value: this.state.description,\n                                        onChange: function(event) {\n                                            return _this.setState({\n                                                description: event.target.value\n                                            });\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Form.Field, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        children: \"Value in Ether\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Input, {\n                                        value: this.state.value,\n                                        onChange: function(event) {\n                                            return _this.setState({\n                                                value: event.target.value\n                                            });\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Form.Field, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        children: \"Recipient\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Input, {\n                                        value: this.state.recipient,\n                                        onChange: function(event) {\n                                            return _this.setState({\n                                                recipient: event.target.value\n                                            });\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {\n                                primary: true,\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\SS\\\\Udemy Solidity\\\\kickstart\\\\pages\\\\campaigns\\\\[address]\\\\new.js\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(C_Users_SS_Udemy_Solidity_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var address;\n                    return C_Users_SS_Udemy_Solidity_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                address = props.query.address;\n                                return _ctx.abrupt(\"return\", {\n                                    address: address\n                                });\n                            case 2:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return RequestNew;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs2Q0FBRSxDQUFDO3lDQUFBOzs7Ozs0Q0FDdEQ7Ozs7OztvQ0FDTzswQ0FFYiw4REFBQ1Asc0RBQU07Z0NBQUNnQyxPQUFPOzBDQUFDLFFBQU07Ozs7O29DQUFTOzs7Ozs7NEJBQzVCOzs7Ozt3QkFDRixDQUNaO2FBQ0o7Ozs7WUE5RFlDLEdBQWUsRUFBZkEsaUJBQWU7bUJBQTVCLFNBQWFBLGVBQWUsQ0FBQ2xCLEtBQUs7dUJBQWxDLHVQQUFvQzt3QkFDeEJDLE9BQU87Ozs7Z0NBQVQsT0FBUyxHQUFLRCxLQUFLLENBQUNtQixLQUFLLENBQXZCbEIsT0FBTyxDQUFpQjs2REFFekI7b0NBQUVBLE9BQU8sRUFBUEEsT0FBTztpQ0FBRTs7Ozs7O2lCQUNyQjthQUFBOzs7O0NBMkRKLENBdEV3Qm5CLDRDQUFTLENBc0VqQztBQUVELCtEQUFlUSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL1thZGRyZXNzXS9uZXcuanM/OGVmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuY2xhc3MgUmVxdWVzdE5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHJlY2lwaWVudDogJydcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgYWRkcmVzcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCB2YWx1ZSwgcmVjaXBpZW50IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHNcclxuICAgICAgICAgICAgLmNyZWF0ZVJlcXVlc3RzKFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sIFxyXG4gICAgICAgICAgICAgICAgd2ViMy51dGlscy50b1dlaSh2YWx1ZSwgJ2V0aGVyJyksIFxyXG4gICAgICAgICAgICAgICAgcmVjaXBpZW50XHJcbiAgICAgICAgICAgICkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5DcmVhdGUgYSBSZXF1ZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlZhbHVlIGluIEV0aGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZWNpcGllbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZWNpcGllbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY2lwaWVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3ROZXc7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJJbnB1dCIsIkNhbXBhaWduIiwid2ViMyIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJvblN1Ym1pdCIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdHMiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJyZW5kZXIiLCJoMyIsIkZpZWxkIiwibGFiZWwiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwidGFyZ2V0IiwicHJpbWFyeSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/new.js\n"));

/***/ })

});