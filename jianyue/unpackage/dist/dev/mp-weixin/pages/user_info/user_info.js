(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user_info/user_info"],{

/***/ "../../../../../VueStudy1/jianyue/jianyue/main.js?{\"page\":\"pages%2Fuser_info%2Fuser_info\"}":
/*!*************************************************************************************!*\
  !*** D:/VueStudy1/jianyue/jianyue/main.js?{"page":"pages%2Fuser_info%2Fuser_info"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../VueStudy1/jianyue/jianyue/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _user_info = _interopRequireDefault(__webpack_require__(/*! ./pages/user_info/user_info.vue */ "../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_user_info.default));

/***/ }),

/***/ "../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue":
/*!******************************************************************!*\
  !*** D:/VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_info_vue_vue_type_template_id_373ec9e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_info.vue?vue&type=template&id=373ec9e7& */ "../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=template&id=373ec9e7&");
/* harmony import */ var _user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_info.vue?vue&type=script&lang=js& */ "../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_info.vue?vue&type=style&index=0&lang=css& */ "../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_info_vue_vue_type_template_id_373ec9e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_info_vue_vue_type_template_id_373ec9e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** D:/VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./user_info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=script&lang=js&");
/* harmony import */ var _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** D:/VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./user_info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=template&id=373ec9e7&":
/*!*************************************************************************************************!*\
  !*** D:/VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=template&id=373ec9e7& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_template_id_373ec9e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../tools/HBuilderX.1.6.2.20190220.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./user_info.vue?vue&type=template&id=373ec9e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=template&id=373ec9e7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_template_id_373ec9e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_1_6_2_20190220_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_vue_vue_type_template_id_373ec9e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

































{
  data: function data() {
    return {
      nickname: uni.getStorageSync('login_key').nickname,
      avatar: uni.getStorageSync('login_key').avatar,
      userId: uni.getStorageSync('login_key').userId };

  },
  onShow: function onShow() {
    var _this = this;
    uni.request({
      url: 'http://localhost:8080/api/user/' + uni.getStorageSync('login_key').userId,
      method: 'GET',
      header: { 'content-type': 'application/json' },
      success: function success(res) {
        if (res.data.code === 0) {
          console.log(res.data.data.avatar + '————————————');
          _this.avatar = res.data.data.avatar;
          _this.nickname = res.data.data.nickname;
        }
      } });

  },
  methods: {
    showActionSheet: function showActionSheet() {
      console.log('show');
      var _this = this;
      uni.showActionSheet({
        itemList: ['拍照', '从相册选择'],
        success: function success(res) {
          console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
          //选择的是拍照功能
          if (res.tapIndex == 0) {
            uni.chooseImage({
              count: 1,
              sourceType: ['camera'],
              success: function success(res) {
                uni.saveImageToPhotosAlbum({
                  filePath: res.tempFilePaths[0],
                  success: function success() {
                    console.log('save success');
                    uni.uploadFile({
                      url: 'http://localhost:8080/api/user/avatar',
                      filePath: res.tempFilePaths[0],
                      name: 'file',
                      formData: {
                        userId: _this.userId },

                      success: function success(uploadFileRes) {
                        console.log(uploadFileRes.data);
                        _this.avatar = uploadFileRes.data;
                      } });

                  } });

              } });

          }
          //从相册选择
          if (res.tapIndex == 1) {
            uni.chooseImage({
              count: 1, //默认9
              sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都
              sourceType: ['album'], //从相册选择
              success: function success(res) {
                console.log(JSON.stringify(res.tempFilePaths));
                uni.uploadFile({
                  url: 'http://localhost:8080/api/user/avatar',
                  filePath: res.tempFilePaths[0],
                  name: 'file',
                  formData: {
                    userId: _this.userId },

                  success: function success(uploadFileRes) {
                    console.log(uploadFileRes.data);
                    _this.avatar = uploadFileRes.data;
                  } });

              } });

          }
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=template&id=373ec9e7&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/VueStudy1/jianyue/jianyue/pages/user_info/user_info.vue?vue&type=template&id=373ec9e7& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: "container" }, [
    _c("view", { staticClass: "info-box" }, [
      _c("view", { staticClass: "list-item list-item-heigher" }, [
        _c("view", { staticClass: "left" }, [_vm._v("昵称")]),
        _c(
          "view",
          { staticClass: "right" },
          [
            _c("navigator", { attrs: { url: "../change/change" } }, [
              _vm._v(_vm._s(_vm.nickname))
            ])
          ],
          1
        )
      ]),
      _c("view", { staticClass: "list-item list-item-heigher" }, [
        _c("view", { staticClass: "left" }, [_vm._v("头像")]),
        _c("view", { staticClass: "right" }, [
          _c("image", {
            staticClass: "avatar",
            attrs: { src: _vm.avatar, eventid: "45d900d2-0" },
            on: { tap: _vm.showActionSheet }
          })
        ])
      ]),
      _c(
        "view",
        { staticClass: "list-item list-item-heigher" },
        [
          _c("view", { staticClass: "left" }, [_vm._v("修改密码")]),
          _c("navigator", {
            attrs: { url: "../reset-password/reset-password" }
          })
        ],
        1
      ),
      _vm._m(0),
      _vm._m(1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "list-item list-item-heigher" }, [
      _c("view", { staticClass: "left" }, [_vm._v("认证")]),
      _c("view", { staticClass: "right" }, [_vm._v("已认证")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "list-item list-item-heigher" }, [
      _c("view", { staticClass: "left" }, [_vm._v("通知")]),
      _c("view", { staticClass: "right" }, [
        _c("switch", { attrs: { checked: "" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../../VueStudy1/jianyue/jianyue/main.js?{\"page\":\"pages%2Fuser_info%2Fuser_info\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user_info/user_info.js.map