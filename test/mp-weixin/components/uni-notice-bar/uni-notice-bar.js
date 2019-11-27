(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-notice-bar/uni-notice-bar"],{

/***/ 1086:
/*!**********************************************************!*\
  !*** ./src/components/uni-notice-bar/uni-notice-bar.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_notice_bar_vue_vue_type_template_id_298d2d2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-notice-bar.vue?vue&type=template&id=298d2d2f& */ 1087);
/* harmony import */ var _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-notice-bar.vue?vue&type=script&lang=js& */ 1089);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-notice-bar.vue?vue&type=style&index=0&lang=css& */ 1091);
/* harmony import */ var _node_modules_vue_loader_15_7_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.7.2@vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_node_modules_vue_loader_15_7_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_notice_bar_vue_vue_type_template_id_298d2d2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_notice_bar_vue_vue_type_template_id_298d2d2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/uni-notice-bar/uni-notice-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1087:
/*!*****************************************************************************************!*\
  !*** ./src/components/uni-notice-bar/uni-notice-bar.vue?vue&type=template&id=298d2d2f& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_template_id_298d2d2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!../../../node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-notice-bar.vue?vue&type=template&id=298d2d2f& */ 1088);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_template_id_298d2d2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_15_0_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_template_id_298d2d2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1088:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/components/uni-notice-bar/uni-notice-bar.vue?vue&type=template&id=298d2d2f& ***!
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

/***/ 1089:
/*!***********************************************************************************!*\
  !*** ./src/components/uni-notice-bar/uni-notice-bar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!../../../node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!../../../node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-notice-bar.vue?vue&type=script&lang=js& */ 1090);
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1090:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/components/uni-notice-bar/uni-notice-bar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var uniIcon = function uniIcon() {
  return __webpack_require__.e(/*! import() | components/uni-icon/uni-icon */ "components/uni-icon/uni-icon").then(__webpack_require__.bind(null, /*! ../uni-icon/uni-icon.vue */ 946));
};

var _default = {
  name: 'UniNoticeBar',
  components: {
    uniIcon: uniIcon
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    moreText: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#fffbe8'
    },
    speed: {
      // 默认1s滚动100px
      type: [String, Number],
      default: 100
    },
    color: {
      type: String,
      default: '#de8c17'
    },
    single: {
      // 是否单行
      type: Boolean,
      default: false
    },
    scrollable: {
      // 是否滚动，添加后控制单行效果取消
      type: Boolean,
      default: false
    },
    showIcon: {
      // 是否显示左侧icon
      type: Boolean,
      default: false
    },
    showGetMore: {
      // 是否显示右侧查看更多
      type: Boolean,
      default: false
    },
    showClose: {
      // 是否显示左侧关闭按钮
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    /**
     * TODO 兼容新旧编译器
     * 新编译器（自定义组件模式）下必须使用固定数值，否则部分平台下会获取不到节点。
     * 随机数值是在旧编译器下使用的，旧编译器模式已经不推荐使用，后续直接废掉随机数值的写法。
     */
    var elId = this.__call_hook ? 'uni_notice_bar' : "Uni_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    return {
      elId: elId,
      show: true,
      animation: ''
    };
  },
  watch: {
    text: function text(newValue, oldValue) {
      var _this = this;

      this.$nextTick(function () {
        setTimeout(_this.setAnimation, 200);
      });
    }
  },
  onReady: function onReady() {
    this.setAnimation();
  },
  methods: {
    clickMore: function clickMore() {
      this.$emit('getmore');
    },
    onClick: function onClick(e) {
      var clientX = e.touches ? e.touches[0] ? e.touches[0].clientX : e.changedTouches[0].clientX : e.detail.clientX;

      if (uni.upx2px(48) + 12 > clientX && this.showClose) {
        this.show = false;
        this.$emit('close');
      }

      this.$emit('click');
    },
    setAnimation: function setAnimation() {
      var _this2 = this;

      if (!this.scrollable) {
        return;
      }

      uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (ret) {
        _this2.animation = "notice ".concat(ret[0].width / _this2.speed, "s linear infinite both");
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/_@dcloudio_uni-mp-weixin@2.0.0-24220191115006@@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1091:
/*!*******************************************************************************************!*\
  !*** ./src/components/uni-notice-bar/uni-notice-bar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../node_modules/_css-loader@1.0.1@css-loader??ref--6-oneOf-1-2!../../../node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-oneOf-1-3!../../../node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!../../../node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-notice-bar.vue?vue&type=style&index=0&lang=css& */ 1092);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_2_node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_2_0_0_24220191115006_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_node_modules_dcloudio_webpack_uni_mp_loader_2_0_0_24220191115006_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1092:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/_css-loader@1.0.1@css-loader??ref--6-oneOf-1-2!./node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-oneOf-1-3!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./node_modules/_@dcloudio_vue-cli-plugin-uni@2.0.0-24220191115006@@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/_@dcloudio_webpack-uni-mp-loader@2.0.0-24220191115006@@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/components/uni-notice-bar/uni-notice-bar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-notice-bar/uni-notice-bar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1086))
        })
    },
    [['components/uni-notice-bar/uni-notice-bar-create-component']]
]);                
