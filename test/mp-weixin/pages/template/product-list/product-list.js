(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/template/product-list/product-list"],{

/***/ 725:
/*!*******************************************************************************!*\
  !*** ./src/main.js?{"page":"pages%2Ftemplate%2Fproduct-list%2Fproduct-list"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {

__webpack_require__(/*! uni-pages */ 4);

__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));

var _productList = _interopRequireDefault(__webpack_require__(/*! ./pages/template/product-list/product-list.vue */ 726));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

createPage(_productList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/_@dcloudio_uni-mp-weixin@2.0.0-24220191115006@@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 726:
/*!**********************************************************!*\
  !*** ./src/pages/template/product-list/product-list.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_list_vue_vue_type_template_id_5dca865e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list.vue?vue&type=template&id=5dca865e& */ 727);
/* harmony import */ var _product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list.vue?vue&type=script&lang=js& */ 729);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_15_7_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.7.2@vue-loader/lib/runtime/componentNormalizer.js */ 14);





/* normalize component */

var component = Object(_node_modules_vue_loader_15_7_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_list_vue_vue_type_template_id_5dca865e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_list_vue_vue_type_template_id_5dca865e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/template/product-list/product-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 727:
/*!*****************************************************************************************!*\
  !*** ./src/pages/template/product-list/product-list.vue?vue&type=template&id=5dca865e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_product_list_vue_vue_type_template_id_5dca865e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../../node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!../../../../node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/style.js!./product-list.vue?vue&type=template&id=5dca865e& */ 728);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_product_list_vue_vue_type_template_id_5dca865e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_product_list_vue_vue_type_template_id_5dca865e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 728:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/template/product-list/product-list.vue?vue&type=template&id=5dca865e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 729:
/*!***********************************************************************************!*\
  !*** ./src/pages/template/product-list/product-list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!../../../../node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!../../../../node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/style.js!./product-list.vue?vue&type=script&lang=js& */ 730);
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_product_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 730:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/template/product-list/product-list.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      title: 'product-list',
      productList: [],
      renderImage: false
    };
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'add';
      var data = [{
        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
        title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
        originalPrice: 9999,
        favourPrice: 8888,
        tip: '自营'
      }, {
        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
        title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
        originalPrice: 3499,
        favourPrice: 3399,
        tip: '优惠'
      }, {
        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
        title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
        originalPrice: 12999,
        favourPrice: 10688,
        tip: '秒杀'
      }, {
        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
        title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
        originalPrice: 999,
        favourPrice: 958,
        tip: '秒杀'
      }, {
        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
        title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
        originalPrice: 8888,
        favourPrice: 8288,
        tip: '优惠'
      }, {
        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
        title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
        originalPrice: 2899,
        favourPrice: 2799,
        tip: '自营'
      }];

      if (action === 'refresh') {
        this.productList = [];
      }

      data.forEach(function (item) {
        _this.productList.push(item);
      });
    }
  },
  onLoad: function onLoad() {
    var _this2 = this;

    this.loadData();
    setTimeout(function () {
      _this2.renderImage = true;
    }, 300);
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.loadData('refresh'); // 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。

    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 2000);
  },
  onReachBottom: function onReachBottom() {
    this.loadData();
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/_@dcloudio_uni-mp-weixin@2.0.0-24220191115006@@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[725,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/template/product-list/product-list.js.map