"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Questions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ActionsDropdown.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ActionsDropdown.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ActionsDropdown",
  data: function data() {
    return {
      open: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      show: true
    };
  },
  computed: {
    style: function style() {
      var _this$$page$props$jet;
      return ((_this$$page$props$jet = this.$page.props.jetstream.flash) === null || _this$$page$props$jet === void 0 ? void 0 : _this$$page$props$jet.bannerStyle) || 'success';
    },
    message: function message() {
      var _this$$page$props$jet2;
      return ((_this$$page$props$jet2 = this.$page.props.jetstream.flash) === null || _this$$page$props$jet2 === void 0 ? void 0 : _this$$page$props$jet2.banner) || '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Button.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Button.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: {
      type: String,
      "default": 'submit'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    align: {
      "default": 'right'
    },
    width: {
      "default": '48'
    },
    contentClasses: {
      "default": function _default() {
        return ['py-1', 'bg-white'];
      }
    }
  },
  data: function data() {
    return {
      open: false
    };
  },
  created: function created() {
    var _this = this;
    var closeOnEscape = function closeOnEscape(e) {
      if (_this.open && e.keyCode === 27) {
        _this.open = false;
      }
    };
    this.$once('hook:destroyed', function () {
      document.removeEventListener('keydown', closeOnEscape);
    });
    document.addEventListener('keydown', closeOnEscape);
  },
  computed: {
    widthClass: function widthClass() {
      return {
        '48': 'w-48'
      }[this.width.toString()];
    },
    alignmentClasses: function alignmentClasses() {
      if (this.align === 'left') {
        return 'origin-top-left left-0';
      } else if (this.align === 'right') {
        return 'rtl:origin-top-left rtl:left-0 ltr:origin-top-right ltr:right-0';
      } else {
        return 'origin-top';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['href', 'as']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/InputError.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/InputError.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['message']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Label.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Label.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['value']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['href', 'active'],
  computed: {
    classes: function classes() {
      return this.active ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out' : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoDataTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoDataTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NoDataTable',
  props: {
    title: {
      type: String,
      "default": 'No Records Found'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FIBPreview",
  props: {
    question: Object
  },
  data: function data() {
    return {
      collapse: true
    };
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LAQPreview",
  props: {
    question: Object
  },
  data: function data() {
    return {
      collapse: true
    };
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MMAPreview",
  props: {
    question: Object
  },
  data: function data() {
    return {
      collapse: true
    };
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/checkbox */ "./node_modules/primevue/checkbox/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MSAPreview",
  components: {
    Checkbox: primevue_checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    question: Object,
    selected: Boolean,
    qEditFlag: Boolean
  },
  watch: {
    selected: {
      immediate: true,
      handler: function handler(value) {
        this.isSelected = value;
      }
    }
  },
  data: function data() {
    return {
      collapse: true,
      isSelected: false
    };
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  },
  methods: {
    checkOrUncheck: function checkOrUncheck() {
      this.$emit('change-single-item', this.question, this.isSelected);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MTFPreview",
  props: {
    question: Object
  },
  data: function data() {
    return {
      collapse: true
    };
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ORDPreview",
  props: {
    question: Object
  },
  data: function data() {
    return {
      collapse: true
    };
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SAQPreview",
  props: {
    question: Object
  },
  data: function data() {
    return {
      collapse: true
    };
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TOFPreview",
  props: {
    question: Object
  },
  data: function data() {
    return {
      collapse: true
    };
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['active', 'href', 'as'],
  computed: {
    classes: function classes() {
      return this.active ? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out' : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/skeleton */ "./node_modules/primevue/skeleton/index.js");
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FormInputShimmer",
  components: {
    Skeleton: primevue_skeleton__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarDropdown.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarDropdown.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SidebarDropdown',
  props: {
    title: String,
    items: Array
  },
  data: function data() {
    return {
      open: false
    };
  },
  methods: {
    isActive: function isActive(url) {
      return window.location.href === url;
    },
    isOpen: function isOpen() {
      return this.urls.includes(window.location.href);
    }
  },
  computed: {
    urls: function urls() {
      var arr = [];
      this.items.forEach(function (item) {
        return arr.push(item.url);
      });
      return arr;
    }
  },
  created: function created() {
    this.open = this.isOpen();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarLink.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarLink.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SidebarLink',
  props: {
    title: String,
    url: String
  },
  computed: {
    active: function active() {
      return window.location.href === this.url;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AdminLayout.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AdminLayout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_ApplicationMark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/ApplicationMark */ "./resources/js/Components/ApplicationMark.vue");
/* harmony import */ var _Components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Banner */ "./resources/js/Components/Banner.vue");
/* harmony import */ var _Components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Dropdown */ "./resources/js/Components/Dropdown.vue");
/* harmony import */ var _Components_DropdownLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/DropdownLink */ "./resources/js/Components/DropdownLink.vue");
/* harmony import */ var _Components_NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/NavLink */ "./resources/js/Components/NavLink.vue");
/* harmony import */ var _Components_ResponsiveNavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/ResponsiveNavLink */ "./resources/js/Components/ResponsiveNavLink.vue");
/* harmony import */ var primevue_confirmdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/confirmdialog */ "./node_modules/primevue/confirmdialog/index.js");
/* harmony import */ var primevue_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primevue/toast */ "./node_modules/primevue/toast/index.js");
/* harmony import */ var primevue_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primevue/message */ "./node_modules/primevue/message/index.js");
/* harmony import */ var _Components_SidebarDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/SidebarDropdown */ "./resources/js/Components/SidebarDropdown.vue");
/* harmony import */ var _Components_SidebarLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Components/SidebarLink */ "./resources/js/Components/SidebarLink.vue");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primevue_inputswitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primevue/inputswitch */ "./node_modules/primevue/inputswitch/index.js");
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
//
//
//
//
//
//
//
//
//














/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ArcApplicationMark: _Components_ApplicationMark__WEBPACK_IMPORTED_MODULE_0__["default"],
    ArcBanner: _Components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"],
    ArcDropdown: _Components_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"],
    ArcDropdownLink: _Components_DropdownLink__WEBPACK_IMPORTED_MODULE_3__["default"],
    ArcNavLink: _Components_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"],
    ArcResponsiveNavLink: _Components_ResponsiveNavLink__WEBPACK_IMPORTED_MODULE_5__["default"],
    ConfirmDialog: primevue_confirmdialog__WEBPACK_IMPORTED_MODULE_6__["default"],
    Message: primevue_message__WEBPACK_IMPORTED_MODULE_8__["default"],
    Toast: primevue_toast__WEBPACK_IMPORTED_MODULE_7__["default"],
    SidebarDropdown: _Components_SidebarDropdown__WEBPACK_IMPORTED_MODULE_9__["default"],
    SidebarLink: _Components_SidebarLink__WEBPACK_IMPORTED_MODULE_10__["default"],
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbar,
    InputSwitch: primevue_inputswitch__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      sideBar: false,
      darkMode: false,
      scrollbarOptions: {
        suppressScrollX: true
      },
      successMessage: String,
      errorMessage: String,
      items: [{
        label: 'Home Dashboard',
        item_type: 'link',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',
        url: route('admin_dashboard'),
        active: this.$page.props.user.role_id === 'admin'
      }, {
        label: 'Home Dashboard',
        item_type: 'link',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',
        url: route('instructor_dashboard'),
        active: this.$page.props.user.role_id === 'instructor'
      }, {
        label: 'File Manager',
        item_type: 'link',
        url: route('file-manager'),
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>',
        active: this.$page.props.user.role_id === 'admin'
      }, {
        item_type: 'divider',
        label: 'Engage'
      }, {
        label: 'Manage Tests',
        item_type: 'dropdown',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
        active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor',
        items: [{
          label: 'Quizzes',
          url: route('quizzes.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }, {
          label: 'Exams',
          url: route('exams.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }, {
          label: 'Quiz Types',
          url: route('quiz-types.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }, {
          label: 'Exam Types',
          url: route('exam-types.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }]
      }, {
        label: 'Manage Learning',
        item_type: 'dropdown',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>',
        active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor',
        items: [{
          label: 'Practice Sets',
          url: route('practice-sets.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }, {
          label: 'Lessons',
          url: route('practice.configure_lessons'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }, {
          label: 'Videos',
          url: route('practice.configure_videos'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }]
      }, {
        item_type: 'divider',
        label: 'Library'
      }, {
        label: 'Question Bank',
        item_type: 'dropdown',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
        active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor',
        items: [{
          label: 'Questions',
          url: route('questions.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }, {
          label: 'Import Questions',
          url: route('initiate_import_questions'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }, {
          label: 'Comprehensions',
          url: route('comprehensions.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }, {
          label: 'Question Types',
          url: route('question-types.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }]
      }, {
        label: 'Lesson Bank',
        item_type: 'link',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
        active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor',
        url: route('lessons.index')
      }, {
        label: 'Video Bank',
        item_type: 'link',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
        active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor',
        url: route('videos.index')
      }, {
        item_type: 'divider',
        label: 'Configuration'
      }, {
        label: 'Monetization',
        item_type: 'dropdown',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/></svg>',
        active: this.$page.props.user.role_id === 'admin',
        items: [{
          label: 'Plans',
          url: route('plans.index'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Subscriptions',
          url: route('subscriptions.index'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Payments',
          url: route('payments.index'),
          active: this.$page.props.user.role_id === 'admin'
        }]
      }, {
        label: 'Manage Users',
        item_type: 'dropdown',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
        active: this.$page.props.user.role_id === 'admin',
        items: [{
          label: 'Users',
          url: route('users.index'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'User Groups',
          url: route('user-groups.index'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Import Users',
          url: route('initiate_import_users'),
          active: this.$page.props.user.role_id === 'admin'
        }]
      }, {
        label: 'Manage Categories',
        item_type: 'dropdown',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>',
        active: this.$page.props.user.role_id === 'admin',
        items: [{
          label: 'Categories',
          url: route('categories.index'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Sub Categories',
          url: route('sub-categories.index'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Tags',
          url: route('tags.index'),
          active: this.$page.props.user.role_id === 'admin'
        }]
      }, {
        label: 'Manage Subjects',
        item_type: 'dropdown',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
        active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor',
        items: [{
          label: 'Sections',
          url: route('sections.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }, {
          label: 'Skills',
          url: route('skills.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }, {
          label: 'Topics',
          url: route('topics.index'),
          active: this.$page.props.user.role_id === 'admin' || this.$page.props.user.role_id === 'instructor'
        }]
      }, {
        label: 'Settings',
        item_type: 'dropdown',
        icon: '<svg class="flex-shrink-0 w-5 h-5 ltr:mr-2 rtl:ml-2 transition group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
        active: this.$page.props.user.role_id === 'admin',
        items: [{
          label: 'General Settings',
          url: route('general_settings'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Localization Settings',
          url: route('localization_settings'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Home Page Settings',
          url: route('home_page_settings'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Email Settings',
          url: route('email_settings'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Payment Settings',
          url: route('payment_settings'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Billing & Tax Settings',
          url: route('billing_tax_settings'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Theme Settings',
          url: route('theme_settings'),
          active: this.$page.props.user.role_id === 'admin'
        }, {
          label: 'Maintenance Settings',
          url: route('maintenance_settings'),
          active: this.$page.props.user.role_id === 'admin'
        }]
      }]
    };
  },
  methods: {
    switchToTeam: function switchToTeam(team) {
      this.$inertia.put(route('current-team.update'), {
        'team_id': team.id
      }, {
        preserveState: false
      });
    },
    changeMode: function changeMode() {
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    logout: function logout() {
      this.$inertia.post(route('logout'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Preview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Preview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Shimmers_FormInputShimmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Shimmers/FormInputShimmer */ "./resources/js/Components/Shimmers/FormInputShimmer.vue");
/* harmony import */ var _Components_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Label */ "./resources/js/Components/Label.vue");
/* harmony import */ var _Components_InputError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/InputError */ "./resources/js/Components/InputError.vue");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Button */ "./resources/js/Components/Button.vue");
/* harmony import */ var _Components_Questions_Previews_TOFPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Questions/Previews/TOFPreview */ "./resources/js/Components/Questions/Previews/TOFPreview.vue");
/* harmony import */ var _Components_Questions_Previews_LAQPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Questions/Previews/LAQPreview */ "./resources/js/Components/Questions/Previews/LAQPreview.vue");
/* harmony import */ var _Components_Questions_Previews_SAQPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Questions/Previews/SAQPreview */ "./resources/js/Components/Questions/Previews/SAQPreview.vue");
/* harmony import */ var _Components_Questions_Previews_ORDPreview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Questions/Previews/ORDPreview */ "./resources/js/Components/Questions/Previews/ORDPreview.vue");
/* harmony import */ var _Components_Questions_Previews_MTFPreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Questions/Previews/MTFPreview */ "./resources/js/Components/Questions/Previews/MTFPreview.vue");
/* harmony import */ var _Components_Questions_Previews_FIBPreview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Questions/Previews/FIBPreview */ "./resources/js/Components/Questions/Previews/FIBPreview.vue");
/* harmony import */ var _Components_Questions_Previews_MMAPreview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Components/Questions/Previews/MMAPreview */ "./resources/js/Components/Questions/Previews/MMAPreview.vue");
/* harmony import */ var _Components_Questions_Previews_MSAPreview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Components/Questions/Previews/MSAPreview */ "./resources/js/Components/Questions/Previews/MSAPreview.vue");
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
//
//
//
//
//













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'QuestionPreview',
  components: {
    FormInputShimmer: _Components_Shimmers_FormInputShimmer__WEBPACK_IMPORTED_MODULE_0__["default"],
    ArcLabel: _Components_Label__WEBPACK_IMPORTED_MODULE_1__["default"],
    ArcInputError: _Components_InputError__WEBPACK_IMPORTED_MODULE_2__["default"],
    ArcButton: _Components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    TOFPreview: _Components_Questions_Previews_TOFPreview__WEBPACK_IMPORTED_MODULE_4__["default"],
    LAQPreview: _Components_Questions_Previews_LAQPreview__WEBPACK_IMPORTED_MODULE_5__["default"],
    SAQPreview: _Components_Questions_Previews_SAQPreview__WEBPACK_IMPORTED_MODULE_6__["default"],
    ORDPreview: _Components_Questions_Previews_ORDPreview__WEBPACK_IMPORTED_MODULE_7__["default"],
    MTFPreview: _Components_Questions_Previews_MTFPreview__WEBPACK_IMPORTED_MODULE_8__["default"],
    FIBPreview: _Components_Questions_Previews_FIBPreview__WEBPACK_IMPORTED_MODULE_9__["default"],
    MMAPreview: _Components_Questions_Previews_MMAPreview__WEBPACK_IMPORTED_MODULE_10__["default"],
    MSAPreview: _Components_Questions_Previews_MSAPreview__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  props: {
    questionId: Number,
    errors: Object,
    title: ''
  },
  data: function data() {
    return {
      question: Object,
      loading: false
    };
  },
  methods: {
    fetch: function fetch() {
      var _this = this;
      _this.loading = true;
      axios.get(route('questions.show', {
        id: this.questionId
      })).then(function (response) {
        _this.question = response.data;
      })["catch"](function (error) {
        _this.loading = false;
      }).then(function () {
        _this.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.fetch();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Questions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Questions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/AdminLayout */ "./resources/js/Layouts/AdminLayout.vue");
/* harmony import */ var _Components_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Dropdown */ "./resources/js/Components/Dropdown.vue");
/* harmony import */ var _Components_DropdownLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/DropdownLink */ "./resources/js/Components/DropdownLink.vue");
/* harmony import */ var primevue_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/toast */ "./node_modules/primevue/toast/index.js");
/* harmony import */ var primevue_chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/chip */ "./node_modules/primevue/chip/index.js");
/* harmony import */ var primevue_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/tag */ "./node_modules/primevue/tag/index.js");
/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/button */ "./node_modules/primevue/button/index.js");
/* harmony import */ var _Components_NoDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/NoDataTable */ "./resources/js/Components/NoDataTable.vue");
/* harmony import */ var _Components_ActionsDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/ActionsDropdown */ "./resources/js/Components/ActionsDropdown.vue");
/* harmony import */ var _Pages_Admin_Question_Preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Pages/Admin/Question/Preview */ "./resources/js/Pages/Admin/Question/Preview.vue");
/* harmony import */ var primevue_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primevue/sidebar */ "./node_modules/primevue/sidebar/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
//
//
//
//
//
//
//












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AdminLayout: _Layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    ArcDropdown: _Components_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"],
    ArcDropdownLink: _Components_DropdownLink__WEBPACK_IMPORTED_MODULE_2__["default"],
    ActionsDropdown: _Components_ActionsDropdown__WEBPACK_IMPORTED_MODULE_8__["default"],
    Toast: primevue_toast__WEBPACK_IMPORTED_MODULE_3__["default"],
    Chip: primevue_chip__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tag: primevue_tag__WEBPACK_IMPORTED_MODULE_5__["default"],
    Button: primevue_button__WEBPACK_IMPORTED_MODULE_6__["default"],
    NoDataTable: _Components_NoDataTable__WEBPACK_IMPORTED_MODULE_7__["default"],
    QuestionPreview: _Pages_Admin_Question_Preview__WEBPACK_IMPORTED_MODULE_9__["default"],
    Sidebar: primevue_sidebar__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: {
    questionTypes: Array,
    questions: Object,
    sections: Array
  },
  data: function data() {
    return {
      createForm: false,
      editForm: false,
      showPreview: false,
      currentId: null,
      columns: [{
        label: this.__('Code'),
        field: 'code',
        filterOptions: {
          enabled: true,
          placeholder: this.__('Search') + ' ' + this.__('Code'),
          filterValue: null,
          trigger: 'enter'
        },
        sortable: false,
        width: '11rem'
      }, {
        label: this.__('Question'),
        field: 'question',
        filterOptions: {
          enabled: true,
          placeholder: this.__('Search') + ' ' + this.__('Question'),
          filterValue: null,
          trigger: 'enter'
        },
        sortable: false
      }, {
        label: this.__('Type'),
        field: 'questionType',
        sortable: false,
        filterOptions: {
          enabled: true,
          placeholder: this.__('Search') + ' ' + this.__('Type'),
          filterValue: null,
          filterDropdownItems: this.questionTypes
        }
      }, {
        label: this.__('Section'),
        field: 'section',
        sortable: false,
        filterOptions: {
          enabled: true,
          placeholder: this.__('Search') + ' ' + this.__('Section'),
          filterValue: null,
          trigger: 'enter'
        }
      }, {
        label: this.__('Skill'),
        field: 'skill',
        sortable: false,
        filterOptions: {
          enabled: true,
          placeholder: this.__('Search') + ' ' + this.__('Skill'),
          filterValue: null,
          trigger: 'enter'
        }
      }, {
        label: this.__('Topic'),
        field: 'topic',
        sortable: false,
        filterOptions: {
          enabled: true,
          placeholder: this.__('Search') + ' ' + this.__('Topic'),
          filterValue: null,
          trigger: 'enter'
        }
      }, {
        label: this.__('Status'),
        field: 'status',
        sortable: false,
        filterOptions: {
          enabled: true,
          placeholder: this.__('Search') + ' ' + this.__('Status'),
          filterValue: null,
          filterDropdownItems: [{
            value: 1,
            text: this.__('Active')
          }, {
            value: 0,
            text: this.__('In-active')
          }]
        }
      }, {
        label: this.__('Actions'),
        field: 'actions',
        sortable: false,
        width: '200px',
        tdClass: 'text-center'
      }],
      options: {
        enabled: true,
        mode: 'pages',
        perPage: this.questions.meta.pagination.per_page,
        setCurrentPage: this.questions.meta.pagination.current_page,
        perPageDropdown: [10, 20, 50, 100],
        dropdownAllowAll: false
      },
      serverParams: {
        columnFilters: {},
        sort: {
          field: '',
          type: ''
        },
        page: 1,
        perPage: 10
      },
      loading: false
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.title
    };
  },
  computed: {
    title: function title() {
      return this.__('Questions') + ' - ' + this.$page.props.general.app_name;
    }
  },
  methods: {
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(params) {
      this.updateParams({
        page: params.currentPage
      });
      this.loadItems();
      this.$nextTick(function () {
        window.renderMathInElement(this.$el);
      });
    },
    onPerPageChange: function onPerPageChange(params) {
      this.updateParams({
        perPage: params.currentPerPage
      });
      this.loadItems();
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: [{
          type: params.sortType,
          field: this.columns[params.columnIndex].field
        }]
      });
      this.loadItems();
    },
    onColumnFilter: function onColumnFilter(params) {
      this.updateParams(params);
      this.serverParams.page = 1;
      this.loadItems();
    },
    getQueryParams: function getQueryParams() {
      var data = {
        'page': this.serverParams.page,
        'perPage': this.serverParams.perPage
      };
      for (var _i = 0, _Object$entries = Object.entries(this.serverParams.columnFilters); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (value) {
          data[key] = value;
        }
      }
      return data;
    },
    loadItems: function loadItems() {
      this.$inertia.get(route(route().current()), this.getQueryParams(), {
        replace: false,
        preserveState: true,
        preserveScroll: true
      });
    },
    editQuestion: function editQuestion(id) {
      this.$inertia.get(route('questions.edit', {
        question: id
      }));
    },
    deleteQuestion: function deleteQuestion(id) {
      var _this = this;
      this.$confirm.require({
        header: this.__('Confirm Delete'),
        message: this.__('Do you want to delete this record?'),
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        rejectLabel: this.__('Cancel'),
        acceptLabel: this.__('Delete'),
        accept: function accept() {
          _this.$inertia["delete"](route('questions.destroy', {
            id: id
          }), {}, {
            onSuccess: function onSuccess() {
              _this.$toast.add({
                severity: 'info',
                summary: _this.__('Confirmed'),
                detail: _this.__('Record deleted'),
                life: 3000
              });
            }
          });
        },
        reject: function reject() {}
      });
    },
    handleCopyStatus: function handleCopyStatus(status) {
      if (status) {
        this.$toast.add({
          severity: 'success',
          summary: this.__('Copied'),
          detail: this.__('Copied Successfully!'),
          life: 2000
        });
      }
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./resources/js/Components/ActionsDropdown.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Components/ActionsDropdown.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionsDropdown_vue_vue_type_template_id_3dd075b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionsDropdown.vue?vue&type=template&id=3dd075b3&scoped=true& */ "./resources/js/Components/ActionsDropdown.vue?vue&type=template&id=3dd075b3&scoped=true&");
/* harmony import */ var _ActionsDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionsDropdown.vue?vue&type=script&lang=js& */ "./resources/js/Components/ActionsDropdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActionsDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActionsDropdown_vue_vue_type_template_id_3dd075b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ActionsDropdown_vue_vue_type_template_id_3dd075b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3dd075b3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/ActionsDropdown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/ApplicationMark.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Components/ApplicationMark.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationMark.vue?vue&type=template&id=5ec8eb7c& */ "./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/ApplicationMark.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Banner.vue":
/*!********************************************!*\
  !*** ./resources/js/Components/Banner.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner.vue?vue&type=template&id=ac39f192& */ "./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192&");
/* harmony import */ var _Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner.vue?vue&type=script&lang=js& */ "./resources/js/Components/Banner.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__.render,
  _Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Banner.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Button.vue":
/*!********************************************!*\
  !*** ./resources/js/Components/Button.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_067f8786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=067f8786& */ "./resources/js/Components/Button.vue?vue&type=template&id=067f8786&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./resources/js/Components/Button.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_067f8786___WEBPACK_IMPORTED_MODULE_0__.render,
  _Button_vue_vue_type_template_id_067f8786___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Button.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Dropdown.vue":
/*!**********************************************!*\
  !*** ./resources/js/Components/Dropdown.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=4210c0dc& */ "./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Dropdown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/DropdownLink.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/DropdownLink.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownLink.vue?vue&type=template&id=6e0ef414& */ "./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414&");
/* harmony import */ var _DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownLink.vue?vue&type=script&lang=js& */ "./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__.render,
  _DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/DropdownLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/InputError.vue":
/*!************************************************!*\
  !*** ./resources/js/Components/InputError.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputError_vue_vue_type_template_id_670ef42e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputError.vue?vue&type=template&id=670ef42e& */ "./resources/js/Components/InputError.vue?vue&type=template&id=670ef42e&");
/* harmony import */ var _InputError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputError.vue?vue&type=script&lang=js& */ "./resources/js/Components/InputError.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputError_vue_vue_type_template_id_670ef42e___WEBPACK_IMPORTED_MODULE_0__.render,
  _InputError_vue_vue_type_template_id_670ef42e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/InputError.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Label.vue":
/*!*******************************************!*\
  !*** ./resources/js/Components/Label.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Label_vue_vue_type_template_id_8c3adc8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label.vue?vue&type=template&id=8c3adc8e& */ "./resources/js/Components/Label.vue?vue&type=template&id=8c3adc8e&");
/* harmony import */ var _Label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label.vue?vue&type=script&lang=js& */ "./resources/js/Components/Label.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Label_vue_vue_type_template_id_8c3adc8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Label_vue_vue_type_template_id_8c3adc8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Label.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/NavLink.vue":
/*!*********************************************!*\
  !*** ./resources/js/Components/NavLink.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink.vue?vue&type=template&id=337232c2& */ "./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2&");
/* harmony import */ var _NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLink.vue?vue&type=script&lang=js& */ "./resources/js/Components/NavLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/NavLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/NoDataTable.vue":
/*!*************************************************!*\
  !*** ./resources/js/Components/NoDataTable.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NoDataTable_vue_vue_type_template_id_ef3ea1f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoDataTable.vue?vue&type=template&id=ef3ea1f0& */ "./resources/js/Components/NoDataTable.vue?vue&type=template&id=ef3ea1f0&");
/* harmony import */ var _NoDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoDataTable.vue?vue&type=script&lang=js& */ "./resources/js/Components/NoDataTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoDataTable_vue_vue_type_template_id_ef3ea1f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _NoDataTable_vue_vue_type_template_id_ef3ea1f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/NoDataTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/FIBPreview.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/FIBPreview.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FIBPreview_vue_vue_type_template_id_eb378ba0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FIBPreview.vue?vue&type=template&id=eb378ba0& */ "./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=template&id=eb378ba0&");
/* harmony import */ var _FIBPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FIBPreview.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FIBPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FIBPreview_vue_vue_type_template_id_eb378ba0___WEBPACK_IMPORTED_MODULE_0__.render,
  _FIBPreview_vue_vue_type_template_id_eb378ba0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Previews/FIBPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/LAQPreview.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/LAQPreview.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LAQPreview_vue_vue_type_template_id_56311f1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LAQPreview.vue?vue&type=template&id=56311f1a& */ "./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=template&id=56311f1a&");
/* harmony import */ var _LAQPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LAQPreview.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LAQPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LAQPreview_vue_vue_type_template_id_56311f1a___WEBPACK_IMPORTED_MODULE_0__.render,
  _LAQPreview_vue_vue_type_template_id_56311f1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Previews/LAQPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/MMAPreview.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/MMAPreview.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MMAPreview_vue_vue_type_template_id_69cf322e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MMAPreview.vue?vue&type=template&id=69cf322e& */ "./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=template&id=69cf322e&");
/* harmony import */ var _MMAPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MMAPreview.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MMAPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MMAPreview_vue_vue_type_template_id_69cf322e___WEBPACK_IMPORTED_MODULE_0__.render,
  _MMAPreview_vue_vue_type_template_id_69cf322e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Previews/MMAPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/MSAPreview.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/MSAPreview.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MSAPreview_vue_vue_type_template_id_00e15934___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MSAPreview.vue?vue&type=template&id=00e15934& */ "./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=template&id=00e15934&");
/* harmony import */ var _MSAPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MSAPreview.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MSAPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MSAPreview_vue_vue_type_template_id_00e15934___WEBPACK_IMPORTED_MODULE_0__.render,
  _MSAPreview_vue_vue_type_template_id_00e15934___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Previews/MSAPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/MTFPreview.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/MTFPreview.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MTFPreview_vue_vue_type_template_id_15dc9a90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MTFPreview.vue?vue&type=template&id=15dc9a90& */ "./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=template&id=15dc9a90&");
/* harmony import */ var _MTFPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MTFPreview.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MTFPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MTFPreview_vue_vue_type_template_id_15dc9a90___WEBPACK_IMPORTED_MODULE_0__.render,
  _MTFPreview_vue_vue_type_template_id_15dc9a90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Previews/MTFPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/ORDPreview.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/ORDPreview.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ORDPreview_vue_vue_type_template_id_25a253e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ORDPreview.vue?vue&type=template&id=25a253e4& */ "./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=template&id=25a253e4&");
/* harmony import */ var _ORDPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ORDPreview.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ORDPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ORDPreview_vue_vue_type_template_id_25a253e4___WEBPACK_IMPORTED_MODULE_0__.render,
  _ORDPreview_vue_vue_type_template_id_25a253e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Previews/ORDPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/SAQPreview.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/SAQPreview.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SAQPreview_vue_vue_type_template_id_01f7f3cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SAQPreview.vue?vue&type=template&id=01f7f3cc& */ "./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=template&id=01f7f3cc&");
/* harmony import */ var _SAQPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SAQPreview.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SAQPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SAQPreview_vue_vue_type_template_id_01f7f3cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _SAQPreview_vue_vue_type_template_id_01f7f3cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Previews/SAQPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/TOFPreview.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/TOFPreview.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TOFPreview_vue_vue_type_template_id_cb440538___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TOFPreview.vue?vue&type=template&id=cb440538& */ "./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=template&id=cb440538&");
/* harmony import */ var _TOFPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TOFPreview.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TOFPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TOFPreview_vue_vue_type_template_id_cb440538___WEBPACK_IMPORTED_MODULE_0__.render,
  _TOFPreview_vue_vue_type_template_id_cb440538___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Previews/TOFPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/ResponsiveNavLink.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Components/ResponsiveNavLink.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponsiveNavLink.vue?vue&type=template&id=9d824fa4& */ "./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4&");
/* harmony import */ var _ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveNavLink.vue?vue&type=script&lang=js& */ "./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/ResponsiveNavLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Shimmers/FormInputShimmer.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Components/Shimmers/FormInputShimmer.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormInputShimmer_vue_vue_type_template_id_3e3201fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormInputShimmer.vue?vue&type=template&id=3e3201fd& */ "./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=template&id=3e3201fd&");
/* harmony import */ var _FormInputShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormInputShimmer.vue?vue&type=script&lang=js& */ "./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormInputShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormInputShimmer_vue_vue_type_template_id_3e3201fd___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormInputShimmer_vue_vue_type_template_id_3e3201fd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Shimmers/FormInputShimmer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/SidebarDropdown.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Components/SidebarDropdown.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SidebarDropdown_vue_vue_type_template_id_7132bcdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarDropdown.vue?vue&type=template&id=7132bcdc& */ "./resources/js/Components/SidebarDropdown.vue?vue&type=template&id=7132bcdc&");
/* harmony import */ var _SidebarDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarDropdown.vue?vue&type=script&lang=js& */ "./resources/js/Components/SidebarDropdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarDropdown_vue_vue_type_template_id_7132bcdc___WEBPACK_IMPORTED_MODULE_0__.render,
  _SidebarDropdown_vue_vue_type_template_id_7132bcdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/SidebarDropdown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/SidebarLink.vue":
/*!*************************************************!*\
  !*** ./resources/js/Components/SidebarLink.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SidebarLink_vue_vue_type_template_id_73bfe50a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarLink.vue?vue&type=template&id=73bfe50a& */ "./resources/js/Components/SidebarLink.vue?vue&type=template&id=73bfe50a&");
/* harmony import */ var _SidebarLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarLink.vue?vue&type=script&lang=js& */ "./resources/js/Components/SidebarLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarLink_vue_vue_type_template_id_73bfe50a___WEBPACK_IMPORTED_MODULE_0__.render,
  _SidebarLink_vue_vue_type_template_id_73bfe50a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/SidebarLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/AdminLayout.vue":
/*!**********************************************!*\
  !*** ./resources/js/Layouts/AdminLayout.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminLayout_vue_vue_type_template_id_5c4e0205___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=template&id=5c4e0205& */ "./resources/js/Layouts/AdminLayout.vue?vue&type=template&id=5c4e0205&");
/* harmony import */ var _AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminLayout.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/AdminLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminLayout_vue_vue_type_template_id_5c4e0205___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminLayout_vue_vue_type_template_id_5c4e0205___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/AdminLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Question/Preview.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Admin/Question/Preview.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Preview_vue_vue_type_template_id_5849e6c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preview.vue?vue&type=template&id=5849e6c8& */ "./resources/js/Pages/Admin/Question/Preview.vue?vue&type=template&id=5849e6c8&");
/* harmony import */ var _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preview.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Question/Preview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Preview_vue_vue_type_template_id_5849e6c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Preview_vue_vue_type_template_id_5849e6c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Question/Preview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Questions.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Admin/Questions.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Questions_vue_vue_type_template_id_7362a558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Questions.vue?vue&type=template&id=7362a558& */ "./resources/js/Pages/Admin/Questions.vue?vue&type=template&id=7362a558&");
/* harmony import */ var _Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Questions.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Questions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Questions_vue_vue_type_template_id_7362a558___WEBPACK_IMPORTED_MODULE_0__.render,
  _Questions_vue_vue_type_template_id_7362a558___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Questions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/ActionsDropdown.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/ActionsDropdown.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionsDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ActionsDropdown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Banner.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Banner.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Button.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Button.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Button.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Components/Dropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/InputError.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/InputError.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputError.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/InputError.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Label.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Components/Label.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Label.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Label.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/NavLink.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/NavLink.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/NoDataTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/NoDataTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoDataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoDataTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FIBPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LAQPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LAQPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LAQPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MMAPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MSAPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MTFPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ORDPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SAQPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TOFPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TOFPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TOFPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResponsiveNavLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormInputShimmer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/SidebarDropdown.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/SidebarDropdown.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarDropdown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/SidebarLink.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/SidebarLink.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/AdminLayout.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Layouts/AdminLayout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AdminLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Question/Preview.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Question/Preview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Preview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Questions.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Questions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Questions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Questions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/ActionsDropdown.vue?vue&type=template&id=3dd075b3&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Components/ActionsDropdown.vue?vue&type=template&id=3dd075b3&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsDropdown_vue_vue_type_template_id_3dd075b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsDropdown_vue_vue_type_template_id_3dd075b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsDropdown_vue_vue_type_template_id_3dd075b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionsDropdown.vue?vue&type=template&id=3dd075b3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ActionsDropdown.vue?vue&type=template&id=3dd075b3&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c&":
/*!************************************************************************************!*\
  !*** ./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationMark_vue_vue_type_template_id_5ec8eb7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApplicationMark.vue?vue&type=template&id=5ec8eb7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c&");


/***/ }),

/***/ "./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_ac39f192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Banner.vue?vue&type=template&id=ac39f192& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192&");


/***/ }),

/***/ "./resources/js/Components/Button.vue?vue&type=template&id=067f8786&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Button.vue?vue&type=template&id=067f8786& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_067f8786___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_067f8786___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_067f8786___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=template&id=067f8786& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Button.vue?vue&type=template&id=067f8786&");


/***/ }),

/***/ "./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_4210c0dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown.vue?vue&type=template&id=4210c0dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&");


/***/ }),

/***/ "./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_template_id_6e0ef414___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownLink.vue?vue&type=template&id=6e0ef414& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414&");


/***/ }),

/***/ "./resources/js/Components/InputError.vue?vue&type=template&id=670ef42e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/InputError.vue?vue&type=template&id=670ef42e& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputError_vue_vue_type_template_id_670ef42e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputError_vue_vue_type_template_id_670ef42e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputError_vue_vue_type_template_id_670ef42e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputError.vue?vue&type=template&id=670ef42e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/InputError.vue?vue&type=template&id=670ef42e&");


/***/ }),

/***/ "./resources/js/Components/Label.vue?vue&type=template&id=8c3adc8e&":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/Label.vue?vue&type=template&id=8c3adc8e& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_template_id_8c3adc8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_template_id_8c3adc8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Label_vue_vue_type_template_id_8c3adc8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Label.vue?vue&type=template&id=8c3adc8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Label.vue?vue&type=template&id=8c3adc8e&");


/***/ }),

/***/ "./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2&":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_337232c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavLink.vue?vue&type=template&id=337232c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2&");


/***/ }),

/***/ "./resources/js/Components/NoDataTable.vue?vue&type=template&id=ef3ea1f0&":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/NoDataTable.vue?vue&type=template&id=ef3ea1f0& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoDataTable_vue_vue_type_template_id_ef3ea1f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoDataTable_vue_vue_type_template_id_ef3ea1f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoDataTable_vue_vue_type_template_id_ef3ea1f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NoDataTable.vue?vue&type=template&id=ef3ea1f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoDataTable.vue?vue&type=template&id=ef3ea1f0&");


/***/ }),

/***/ "./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=template&id=eb378ba0&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=template&id=eb378ba0& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBPreview_vue_vue_type_template_id_eb378ba0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBPreview_vue_vue_type_template_id_eb378ba0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBPreview_vue_vue_type_template_id_eb378ba0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FIBPreview.vue?vue&type=template&id=eb378ba0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=template&id=eb378ba0&");


/***/ }),

/***/ "./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=template&id=56311f1a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=template&id=56311f1a& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LAQPreview_vue_vue_type_template_id_56311f1a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LAQPreview_vue_vue_type_template_id_56311f1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LAQPreview_vue_vue_type_template_id_56311f1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LAQPreview.vue?vue&type=template&id=56311f1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=template&id=56311f1a&");


/***/ }),

/***/ "./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=template&id=69cf322e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=template&id=69cf322e& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAPreview_vue_vue_type_template_id_69cf322e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAPreview_vue_vue_type_template_id_69cf322e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAPreview_vue_vue_type_template_id_69cf322e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MMAPreview.vue?vue&type=template&id=69cf322e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=template&id=69cf322e&");


/***/ }),

/***/ "./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=template&id=00e15934&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=template&id=00e15934& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAPreview_vue_vue_type_template_id_00e15934___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAPreview_vue_vue_type_template_id_00e15934___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAPreview_vue_vue_type_template_id_00e15934___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MSAPreview.vue?vue&type=template&id=00e15934& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=template&id=00e15934&");


/***/ }),

/***/ "./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=template&id=15dc9a90&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=template&id=15dc9a90& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFPreview_vue_vue_type_template_id_15dc9a90___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFPreview_vue_vue_type_template_id_15dc9a90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFPreview_vue_vue_type_template_id_15dc9a90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MTFPreview.vue?vue&type=template&id=15dc9a90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=template&id=15dc9a90&");


/***/ }),

/***/ "./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=template&id=25a253e4&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=template&id=25a253e4& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDPreview_vue_vue_type_template_id_25a253e4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDPreview_vue_vue_type_template_id_25a253e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDPreview_vue_vue_type_template_id_25a253e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ORDPreview.vue?vue&type=template&id=25a253e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=template&id=25a253e4&");


/***/ }),

/***/ "./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=template&id=01f7f3cc&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=template&id=01f7f3cc& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQPreview_vue_vue_type_template_id_01f7f3cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQPreview_vue_vue_type_template_id_01f7f3cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQPreview_vue_vue_type_template_id_01f7f3cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SAQPreview.vue?vue&type=template&id=01f7f3cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=template&id=01f7f3cc&");


/***/ }),

/***/ "./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=template&id=cb440538&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=template&id=cb440538& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TOFPreview_vue_vue_type_template_id_cb440538___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TOFPreview_vue_vue_type_template_id_cb440538___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TOFPreview_vue_vue_type_template_id_cb440538___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TOFPreview.vue?vue&type=template&id=cb440538& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=template&id=cb440538&");


/***/ }),

/***/ "./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_template_id_9d824fa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResponsiveNavLink.vue?vue&type=template&id=9d824fa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4&");


/***/ }),

/***/ "./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=template&id=3e3201fd&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=template&id=3e3201fd& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputShimmer_vue_vue_type_template_id_3e3201fd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputShimmer_vue_vue_type_template_id_3e3201fd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputShimmer_vue_vue_type_template_id_3e3201fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormInputShimmer.vue?vue&type=template&id=3e3201fd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=template&id=3e3201fd&");


/***/ }),

/***/ "./resources/js/Components/SidebarDropdown.vue?vue&type=template&id=7132bcdc&":
/*!************************************************************************************!*\
  !*** ./resources/js/Components/SidebarDropdown.vue?vue&type=template&id=7132bcdc& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarDropdown_vue_vue_type_template_id_7132bcdc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarDropdown_vue_vue_type_template_id_7132bcdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarDropdown_vue_vue_type_template_id_7132bcdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarDropdown.vue?vue&type=template&id=7132bcdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarDropdown.vue?vue&type=template&id=7132bcdc&");


/***/ }),

/***/ "./resources/js/Components/SidebarLink.vue?vue&type=template&id=73bfe50a&":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/SidebarLink.vue?vue&type=template&id=73bfe50a& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_template_id_73bfe50a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_template_id_73bfe50a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_template_id_73bfe50a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarLink.vue?vue&type=template&id=73bfe50a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarLink.vue?vue&type=template&id=73bfe50a&");


/***/ }),

/***/ "./resources/js/Layouts/AdminLayout.vue?vue&type=template&id=5c4e0205&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Layouts/AdminLayout.vue?vue&type=template&id=5c4e0205& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_5c4e0205___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_5c4e0205___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminLayout_vue_vue_type_template_id_5c4e0205___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminLayout.vue?vue&type=template&id=5c4e0205& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AdminLayout.vue?vue&type=template&id=5c4e0205&");


/***/ }),

/***/ "./resources/js/Pages/Admin/Question/Preview.vue?vue&type=template&id=5849e6c8&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Question/Preview.vue?vue&type=template&id=5849e6c8& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_5849e6c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_5849e6c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_5849e6c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preview.vue?vue&type=template&id=5849e6c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Preview.vue?vue&type=template&id=5849e6c8&");


/***/ }),

/***/ "./resources/js/Pages/Admin/Questions.vue?vue&type=template&id=7362a558&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Questions.vue?vue&type=template&id=7362a558& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_template_id_7362a558___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_template_id_7362a558___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_template_id_7362a558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Questions.vue?vue&type=template&id=7362a558& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Questions.vue?vue&type=template&id=7362a558&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ActionsDropdown.vue?vue&type=template&id=3dd075b3&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ActionsDropdown.vue?vue&type=template&id=3dd075b3&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "relative inline-block ltr:text-left rtl:text-right" },
    [
      _c("div", [
        _c(
          "button",
          {
            staticClass:
              "inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none",
            attrs: {
              type: "button",
              id: "menu-button",
              "aria-expanded": "true",
              "aria-haspopup": "true",
            },
            on: {
              click: function ($event) {
                _vm.open = !_vm.open
              },
            },
          },
          [
            _vm._v(
              "\n            " + _vm._s(_vm.__("Actions")) + "\n            "
            ),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass: "ltr:-mr-1 ltr:ml-2 rtl:mr-2 rtl:-ml-1 h-5 w-5",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  "aria-hidden": "true",
                },
              },
              [
                _c("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                    "clip-rule": "evenodd",
                  },
                }),
              ]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.open,
            expression: "open",
          },
        ],
        staticClass: "fixed inset-0 z-40",
        on: {
          click: function ($event) {
            _vm.open = false
          },
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.open,
              expression: "open",
            },
          ],
          staticClass:
            "z-40 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
          attrs: {
            role: "menu",
            "aria-orientation": "vertical",
            "aria-labelledby": "menu-button",
            tabindex: "-1",
          },
          on: {
            click: function ($event) {
              _vm.open = !_vm.open
            },
          },
        },
        [
          _c(
            "div",
            { staticClass: "py-1", attrs: { role: "none" } },
            [_vm._t("actions")],
            2
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ApplicationMark.vue?vue&type=template&id=5ec8eb7c& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "50",
        height: "50",
        viewBox: "0 0 50 50",
      },
    },
    [
      _c("g", { attrs: { id: "Icon", transform: "translate(13 344)" } }, [
        _c(
          "g",
          { attrs: { id: "circle", transform: "translate(-29 -361.14)" } },
          [
            _c("circle", {
              attrs: {
                id: "bg_circle",
                cx: "25",
                cy: "25",
                r: "25",
                transform: "translate(16 17.14)",
                fill: "#25c16f",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                id: "white_ring",
                d: "M20,0A19.969,19.969,0,0,1,37.151,30.248c-.712,1.229-2.946,1.654-4.181,2.926-1.2,1.235-1.426,3.291-3.258,4.338A20.011,20.011,0,1,1,20,0Z",
                transform: "translate(21 22.14)",
                fill: "#fff",
              },
            }),
            _vm._v(" "),
            _c("circle", {
              attrs: {
                id: "green_ring",
                cx: "15",
                cy: "15",
                r: "15",
                transform: "translate(26 27.14)",
                fill: "#25c16f",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c(
          "g",
          {
            attrs: {
              id: "cursor",
              transform: "matrix(1, -0.017, 0.017, 1, 10.797, -319.593)",
            },
          },
          [
            _c("path", {
              attrs: {
                id: "right",
                d: "M10.286,23.465a.687.687,0,0,1-.63-.413L.057.962a.687.687,0,0,1,.9-.9l22.09,9.6a.687.687,0,0,1-.073,1.288L16.249,13A4.885,4.885,0,0,0,13,16.249l-2.058,6.73a.687.687,0,0,1-.619.485Z",
                transform: "translate(0 0)",
                fill: "#fff",
              },
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                id: "left",
                d: "M27.244,9.657,5.154.058A.688.688,0,0,0,4.394.2h0L18.412,14.221A4.887,4.887,0,0,1,20.441,13l6.73-2.058a.687.687,0,0,0,.073-1.288Z",
                transform: "translate(-4.192 -0.001)",
                fill: "#fff",
              },
            }),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Banner.vue?vue&type=template&id=ac39f192& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.show && _vm.message
      ? _c(
          "div",
          {
            class: {
              "bg-indigo-500": _vm.style == "success",
              "bg-red-700": _vm.style == "danger",
            },
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8",
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "flex items-center justify-between flex-wrap",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "w-0 flex-1 flex items-center min-w-0" },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "flex p-2 rounded-md",
                            class: {
                              "bg-indigo-600": _vm.style == "success",
                              "bg-red-600": _vm.style == "danger",
                            },
                          },
                          [
                            _vm.style == "success"
                              ? _c(
                                  "svg",
                                  {
                                    staticClass: "h-5 w-5 text-white",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                      },
                                    }),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.style == "danger"
                              ? _c(
                                  "svg",
                                  {
                                    staticClass: "h-5 w-5 text-white",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                                      },
                                    }),
                                  ]
                                )
                              : _vm._e(),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "ml-3 font-medium text-white truncate",
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.message) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-shrink-0 sm:ml-3" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150",
                          class: {
                            "hover:bg-indigo-600 focus:bg-indigo-600":
                              _vm.style == "success",
                            "hover:bg-red-600 focus:bg-red-600":
                              _vm.style == "danger",
                          },
                          attrs: { type: "button", "aria-label": "Dismiss" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              _vm.show = false
                            },
                          },
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "h-5 w-5 text-white",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                              },
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]
            ),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Button.vue?vue&type=template&id=067f8786&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Button.vue?vue&type=template&id=067f8786& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass:
        "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",
      attrs: { type: _vm.type },
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Dropdown.vue?vue&type=template&id=4210c0dc& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "relative" },
    [
      _c(
        "div",
        {
          on: {
            click: function ($event) {
              _vm.open = !_vm.open
            },
          },
        },
        [_vm._t("trigger")],
        2
      ),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.open,
            expression: "open",
          },
        ],
        staticClass: "fixed inset-0 z-40",
        on: {
          click: function ($event) {
            _vm.open = false
          },
        },
      }),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "transition ease-out duration-200",
            "enter-class": "transform opacity-0 scale-95",
            "enter-to-class": "transform opacity-100 scale-100",
            "leave-active-class": "transition ease-in duration-75",
            "leave-class": "transform opacity-100 scale-100",
            "leave-to-class": "transform opacity-0 scale-95",
          },
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.open,
                  expression: "open",
                },
              ],
              staticClass: "absolute z-50 mt-2 shadow rounded",
              class: [_vm.widthClass, _vm.alignmentClasses],
              staticStyle: { display: "none" },
              on: {
                click: function ($event) {
                  _vm.open = false
                },
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "rounded-sm ring-1 ring-black ring-opacity-5",
                  class: _vm.contentClasses,
                },
                [_vm._t("content")],
                2
              ),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/DropdownLink.vue?vue&type=template&id=6e0ef414& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.as === "button"
        ? _c(
            "button",
            {
              staticClass:
                "block text-sm w-full px-4 py-2 leading-5 text-gray-700 ltr:text-left rtl:text-right hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",
              attrs: { type: "submit" },
            },
            [_vm._t("default")],
            2
          )
        : _c(
            "inertia-link",
            {
              staticClass:
                "text-sm block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 ltr:text-left rtl:text-right focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",
              attrs: { href: _vm.href },
            },
            [_vm._t("default")],
            2
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/InputError.vue?vue&type=template&id=670ef42e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/InputError.vue?vue&type=template&id=670ef42e& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.message,
          expression: "message",
        },
      ],
    },
    [
      _c("p", { staticClass: "text-red-600 text-sm" }, [
        _vm._v("\n        " + _vm._s(_vm.message) + "\n    "),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Label.vue?vue&type=template&id=8c3adc8e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Label.vue?vue&type=template&id=8c3adc8e& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    { staticClass: "block font-medium text-gray-700 text-sm mb-1" },
    [
      _vm.value
        ? _c("span", [_vm._v(_vm._s(_vm.value))])
        : _c("span", [_vm._t("default")], 2),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NavLink.vue?vue&type=template&id=337232c2& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "inertia-link",
    { class: _vm.classes, attrs: { href: _vm.href } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoDataTable.vue?vue&type=template&id=ef3ea1f0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/NoDataTable.vue?vue&type=template&id=ef3ea1f0& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "max-w-lg px-4 py-12 mx-auto" }, [
    _c(
      "h2",
      { staticClass: "mt-2 text-sm font-medium text-center text-gray-800" },
      [_vm._v(_vm._s(_vm.title))]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "flex flex-col items-center justify-center mt-4 space-y-1 md:flex-row md:space-y-0 md:space-x-1",
      },
      [_vm._t("action")],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=template&id=eb378ba0&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/FIBPreview.vue?vue&type=template&id=eb378ba0& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white shadow px-4 py-5 border-b-4 border-gray-800 mb-6",
    },
    [
      _c(
        "h5",
        {
          staticClass:
            "inline-block bg-green-100 rounded-sm px-2 py-1 mb-4 text-xs leading-3 text-green-700",
        },
        [_vm._v(_vm._s(_vm.question.skill))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "q-data mb-4" }, [
        _c("div", {
          staticClass: "text-sm",
          domProps: { innerHTML: _vm._s(_vm.question.question) },
        }),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.collapse,
              expression: "!collapse",
            },
          ],
          attrs: { id: _vm.question.code + "_options" },
        },
        _vm._l(_vm.question.correct_answer, function (answer, index) {
          return _c("ul", { staticClass: "q-option" }, [
            _c(
              "li",
              {
                staticClass:
                  "flex items-center mb-3 cursor-pointer p-3 rounded-sm border border-gray-200",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "h-6 w-6 text-sm flex rounded-full items-center justify-center bg-gray-100 text-sm",
                  },
                  [_vm._v(_vm._s(index + 1))]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "text-sm font-normal ltr:ml-4 rtl:mr-4",
                  domProps: { innerHTML: _vm._s(answer) },
                }),
              ]
            ),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("a", {
        staticClass: "qt-link-success text-sm mb-4",
        domProps: {
          innerHTML: _vm._s(
            _vm.collapse ? _vm.__("View Answers") : _vm.__("Hide Answers")
          ),
        },
        on: {
          click: function ($event) {
            _vm.collapse = !_vm.collapse
          },
        },
      }),
      _vm._v(" "),
      _c("ul", { staticClass: "mt-5" }, [
        _c(
          "li",
          {
            staticClass: "text-gray-600 text-sm flex items-center text-sm mb-4",
          },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Question Type")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-sm ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.question_type_name)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "text-gray-600 text-sm flex items-center text-sm mb-4",
          },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Difficulty Level")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-sm ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.difficulty)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "text-gray-600 text-sm flex items-center text-sm mb-4",
          },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Marks/Points")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-sm ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.marks) + " XP"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "text-gray-600 text-sm flex items-center text-sm mb-4",
          },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Attachment")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-sm ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.__(_vm.question.attachment))),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4 flex justify-between items-center" },
        [
          _c(
            "h5",
            {
              staticClass:
                "inline-block bg-gray-100 rounded-sm px-2 py-1 text-xs leading-3 text-gray-700",
            },
            [_vm._v(_vm._s(_vm.question.code))]
          ),
          _vm._v(" "),
          _vm._t("action"),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=template&id=56311f1a&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/LAQPreview.vue?vue&type=template&id=56311f1a& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white shadow px-4 py-5 border-b-4 border-gray-800 mb-6",
    },
    [
      _c(
        "h5",
        {
          staticClass:
            "inline-block bg-green-100 rounded-sm px-2 py-1 mb-4 text-xs leading-3 text-green-700",
        },
        [_vm._v(_vm._s(_vm.question.skill))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "q-data mb-4" }, [
        _c("div", {
          staticClass: "text-sm",
          domProps: { innerHTML: _vm._s(_vm.question.question) },
        }),
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "mt-5" }, [
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v("Question Type:"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ml-2" }, [
              _vm._v(_vm._s(_vm.question.question_type_name)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v("Difficulty Level:"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ml-2" }, [
              _vm._v(_vm._s(_vm.question.difficulty)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v("Marks/Points:"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ml-2" }, [
              _vm._v(_vm._s(_vm.question.marks) + " XP"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v("Attachment:"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ml-2" }, [
              _vm._v(_vm._s(_vm.question.attachment)),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4 flex justify-between items-center" },
        [
          _c(
            "h5",
            {
              staticClass:
                "inline-block bg-gray-100 rounded-sm px-2 py-1 text-xs leading-3 text-gray-700",
            },
            [_vm._v(_vm._s(_vm.question.code))]
          ),
          _vm._v(" "),
          _vm._t("action"),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=template&id=69cf322e&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MMAPreview.vue?vue&type=template&id=69cf322e& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white shadow px-4 py-5 border-b-4 border-gray-800 mb-6",
    },
    [
      _c(
        "h5",
        {
          staticClass:
            "inline-block bg-green-100 rounded-sm px-2 py-1 mb-4 text-xs leading-3 text-green-700",
        },
        [_vm._v(_vm._s(_vm.question.skill))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "q-data mb-4" }, [
        _c("div", {
          staticClass: "text-sm",
          domProps: { innerHTML: _vm._s(_vm.question.question) },
        }),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.collapse,
              expression: "!collapse",
            },
          ],
          attrs: { id: _vm.question.code + "_options" },
        },
        _vm._l(_vm.question.options, function (option, index) {
          return _c("ul", { staticClass: "q-option" }, [
            _c(
              "li",
              {
                staticClass:
                  "relative flex items-center mb-3 cursor-pointer p-3 rounded-sm border border-gray-200",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "h-6 w-6 text-sm flex rounded-full items-center justify-center bg-gray-100 ",
                  },
                  [_vm._v(_vm._s(index + 1))]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "text-sm font-normal ltr:ml-4 rtl:mr-4",
                  domProps: { innerHTML: _vm._s(option.option) },
                }),
                _vm._v(" "),
                _vm.question.correct_answer.includes(index + 1)
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "absolute ltr:right-2 rtl:left-2 text-green-500",
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "w-6 h-6",
                            attrs: {
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            _c("path", {
                              attrs: {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                              },
                            }),
                          ]
                        ),
                      ]
                    )
                  : _vm._e(),
              ]
            ),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("a", {
        staticClass: "qt-link-success text-sm mb-4",
        domProps: {
          innerHTML: _vm._s(
            _vm.collapse ? _vm.__("View Options") : _vm.__("Hide Options")
          ),
        },
        on: {
          click: function ($event) {
            _vm.collapse = !_vm.collapse
          },
        },
      }),
      _vm._v(" "),
      _c("ul", { staticClass: "mt-5" }, [
        _c(
          "li",
          { staticClass: "text-gray-600 flex text-sm items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold " }, [
              _vm._v(_vm._s(_vm.__("Question Type")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.question_type_name)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 flex text-sm items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Difficulty Level")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.difficulty)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 flex text-sm items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Marks/Points")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.marks) + " XP"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 flex text-sm items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Attachment")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.__(_vm.question.attachment))),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4 flex justify-between items-center" },
        [
          _c(
            "h5",
            {
              staticClass:
                "inline-block bg-gray-100 rounded-sm px-2 py-1 text-xs leading-3 text-gray-700",
            },
            [_vm._v(_vm._s(_vm.question.code))]
          ),
          _vm._v(" "),
          _vm._t("action"),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=template&id=00e15934&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MSAPreview.vue?vue&type=template&id=00e15934& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white shadow px-4 py-5 border-b-4 border-gray-800 mb-6",
    },
    [
      !_vm.qEditFlag
        ? _c("div", { staticClass: "p-field-radiobutton items-center mb-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.isSelected,
                  expression: "isSelected",
                },
              ],
              staticClass:
                "rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50",
              attrs: { type: "checkbox", id: "q_id" + 1, name: "q_id" },
              domProps: {
                value: _vm.question.isSelected,
                checked: Array.isArray(_vm.isSelected)
                  ? _vm._i(_vm.isSelected, _vm.question.isSelected) > -1
                  : _vm.isSelected,
              },
              on: {
                change: [
                  function ($event) {
                    var $$a = _vm.isSelected,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = _vm.question.isSelected,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.isSelected = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.isSelected = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.isSelected = $$c
                    }
                  },
                  _vm.checkOrUncheck,
                ],
              },
            }),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "h5",
        {
          staticClass:
            "inline-block bg-green-100 rounded-sm px-2 py-1 mb-4 text-xs leading-3 text-green-700",
        },
        [_vm._v(_vm._s(_vm.question.skill))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "q-data mb-4" }, [
        _c("div", {
          staticClass: "text-sm",
          domProps: { innerHTML: _vm._s(_vm.question.question) },
        }),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.collapse,
              expression: "!collapse",
            },
          ],
          attrs: { id: _vm.question.code + "_options" },
        },
        _vm._l(_vm.question.options, function (option, index) {
          return _c("ul", { staticClass: "q-option" }, [
            _c(
              "li",
              {
                staticClass:
                  "relative flex items-center mb-3 cursor-pointer p-3 rounded-sm border border-gray-200",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "h-6 w-6 flex rounded-full items-center justify-center bg-gray-100 text-sm",
                  },
                  [_vm._v(_vm._s(index + 1))]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "text-sm font-normal ltr:ml-4 rtl:mr-4",
                  domProps: { innerHTML: _vm._s(option.option) },
                }),
                _vm._v(" "),
                _vm.question.correct_answer === index + 1
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "absolute ltr:right-2 rtl:left-2 text-green-500",
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "w-6 h-6",
                            attrs: {
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            _c("path", {
                              attrs: {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                              },
                            }),
                          ]
                        ),
                      ]
                    )
                  : _vm._e(),
              ]
            ),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("a", {
        staticClass: "qt-link-success text-sm mb-4",
        domProps: {
          innerHTML: _vm._s(
            _vm.collapse ? _vm.__("View Options") : _vm.__("Hide Options")
          ),
        },
        on: {
          click: function ($event) {
            _vm.collapse = !_vm.collapse
          },
        },
      }),
      _vm._v(" "),
      _c("ul", { staticClass: "mt-5" }, [
        _c(
          "li",
          { staticClass: "text-gray-600 flex items-center text-sm mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Question Type")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.question_type_name)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 flex items-center text-sm mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Difficulty Level")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.difficulty)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 flex items-center text-sm mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Marks/Points")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.marks) + " XP"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 flex items-center text-sm mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Attachment")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.__(_vm.question.attachment))),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4 flex justify-between items-center" },
        [
          _c(
            "h5",
            {
              staticClass:
                "inline-block bg-gray-100 rounded-sm px-2 py-1 text-xs leading-3 text-gray-700",
            },
            [_vm._v(_vm._s(_vm.question.code))]
          ),
          _vm._v(" "),
          _vm._t("action"),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=template&id=15dc9a90&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/MTFPreview.vue?vue&type=template&id=15dc9a90& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white shadow px-4 py-5 border-b-4 border-gray-800 mb-6",
    },
    [
      _c(
        "h5",
        {
          staticClass:
            "inline-block bg-green-100 rounded-sm px-2 py-1 mb-4 text-xs leading-3 text-green-700",
        },
        [_vm._v(_vm._s(_vm.question.skill))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "q-data mb-4" }, [
        _c("div", {
          staticClass: "text-sm",
          domProps: { innerHTML: _vm._s(_vm.question.question) },
        }),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.collapse,
              expression: "!collapse",
            },
          ],
          attrs: { id: _vm.question.code + "_options" },
        },
        _vm._l(_vm.question.options, function (option, index) {
          return _c("ul", { staticClass: "q-option" }, [
            _c(
              "li",
              {
                staticClass:
                  "flex items-center mb-3 cursor-pointer p-3 rounded-sm border border-gray-200",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "h-6 w-6 text-sm flex rounded-full items-center justify-center bg-gray-100 ",
                  },
                  [_vm._v(_vm._s(index + 1))]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "text-sm font-normal mx-4",
                  domProps: { innerHTML: _vm._s(option.option) },
                }),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "w-5 h-5",
                    attrs: {
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M17 8l4 4m0 0l-4 4m4-4H3",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "text-sm font-normal ltr:ml-4 rtl:mr-4",
                  domProps: { innerHTML: _vm._s(option.pair) },
                }),
              ]
            ),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("a", {
        staticClass: "qt-link-success text-sm mb-4",
        domProps: {
          innerHTML: _vm._s(
            _vm.collapse ? _vm.__("View Options") : _vm.__("Hide Options")
          ),
        },
        on: {
          click: function ($event) {
            _vm.collapse = !_vm.collapse
          },
        },
      }),
      _vm._v(" "),
      _c("ul", { staticClass: "mt-5" }, [
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center  mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Question Type")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.question_type_name)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center  mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Difficulty Level")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.difficulty)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center  mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Marks/Points")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.marks) + " XP"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "text-gray-600 text-sm flex items-center text-sm mb-4",
          },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Attachment")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-sm ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.__(_vm.question.attachment))),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4 flex justify-between items-center" },
        [
          _c(
            "h5",
            {
              staticClass:
                "inline-block bg-gray-100 rounded-sm px-2 py-1 text-xs leading-3 text-gray-700",
            },
            [_vm._v(_vm._s(_vm.question.code))]
          ),
          _vm._v(" "),
          _vm._t("action"),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=template&id=25a253e4&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/ORDPreview.vue?vue&type=template&id=25a253e4& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white shadow px-4 py-5 border-b-4 border-gray-800 mb-6",
    },
    [
      _c(
        "h5",
        {
          staticClass:
            "inline-block bg-green-100 rounded-sm px-2 py-1 mb-4 text-xs leading-3 text-green-700",
        },
        [_vm._v(_vm._s(_vm.question.skill))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "q-data mb-4" }, [
        _c("div", {
          staticClass: "text-sm",
          domProps: { innerHTML: _vm._s(_vm.question.question) },
        }),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.collapse,
              expression: "!collapse",
            },
          ],
          attrs: { id: _vm.question.code + "_options" },
        },
        _vm._l(_vm.question.options, function (option, index) {
          return _c("ul", { staticClass: "q-option" }, [
            _c(
              "li",
              {
                staticClass:
                  "flex items-center mb-3 cursor-pointer p-3 rounded-sm border border-gray-200",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "h-6 w-6 flex rounded-full items-center justify-center bg-gray-100 ",
                  },
                  [_vm._v(_vm._s(index + 1))]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "text-sm font-normal ltr:ml-4 rtl:mr-4",
                  domProps: { innerHTML: _vm._s(option.option) },
                }),
              ]
            ),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("a", {
        staticClass: "qt-link-success text-sm mb-4",
        domProps: {
          innerHTML: _vm._s(
            _vm.collapse ? _vm.__("View Options") : _vm.__("Hide Options")
          ),
        },
        on: {
          click: function ($event) {
            _vm.collapse = !_vm.collapse
          },
        },
      }),
      _vm._v(" "),
      _c("ul", { staticClass: "mt-5" }, [
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center  mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Question Type")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-sm ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.question_type_name)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center  mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Difficulty Level")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-sm ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.difficulty)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center  mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Marks/Points")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-sm ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.marks) + " XP"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center  mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Attachment")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "text-sm ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.__(_vm.question.attachment))),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4 flex justify-between items-center" },
        [
          _c(
            "h5",
            {
              staticClass:
                "inline-block bg-gray-100 rounded-sm px-2 py-1 text-xs leading-3 text-gray-700",
            },
            [_vm._v(_vm._s(_vm.question.code))]
          ),
          _vm._v(" "),
          _vm._t("action"),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=template&id=01f7f3cc&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/SAQPreview.vue?vue&type=template&id=01f7f3cc& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white shadow px-4 py-5 border-b-4 border-gray-800 mb-6",
    },
    [
      _c(
        "h5",
        {
          staticClass:
            "inline-block bg-green-100 rounded-sm px-2 py-1 mb-4 text-xs leading-3 text-green-700",
        },
        [_vm._v(_vm._s(_vm.question.skill))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "q-data mb-4" }, [
        _c("div", {
          staticClass: "text-sm",
          domProps: { innerHTML: _vm._s(_vm.question.question) },
        }),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.collapse,
              expression: "!collapse",
            },
          ],
          attrs: { id: _vm.question.code + "_options" },
        },
        _vm._l(_vm.question.options, function (option, index) {
          return _c("ul", { staticClass: "q-option" }, [
            _c(
              "li",
              {
                staticClass:
                  "flex items-center mb-3 cursor-pointer p-3 rounded-sm border border-gray-200",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "text-sm h-6 w-6 flex rounded-full items-center justify-center bg-gray-100 ",
                  },
                  [_vm._v(_vm._s(index + 1))]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "text-sm font-normal ltr:ml-4 rtl:mr-4",
                  domProps: { innerHTML: _vm._s(option.option) },
                }),
              ]
            ),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("a", {
        staticClass: "qt-link-success text-sm mb-4",
        domProps: {
          innerHTML: _vm._s(
            _vm.collapse ? _vm.__("View Answers") : _vm.__("Hide Answers")
          ),
        },
        on: {
          click: function ($event) {
            _vm.collapse = !_vm.collapse
          },
        },
      }),
      _vm._v(" "),
      _c("ul", { staticClass: "mt-5" }, [
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Question Type")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.question_type_name)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Difficulty Level")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.difficulty)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center  mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Marks/Points")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: " ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.marks) + " XP"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center  mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Attachment")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: " ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.__(_vm.question.attachment))),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4 flex justify-between items-center" },
        [
          _c(
            "h5",
            {
              staticClass:
                "inline-block bg-gray-100 rounded-sm px-2 py-1 text-xs leading-3 text-gray-700",
            },
            [_vm._v(_vm._s(_vm.question.code))]
          ),
          _vm._v(" "),
          _vm._t("action"),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=template&id=cb440538&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Previews/TOFPreview.vue?vue&type=template&id=cb440538& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white shadow px-4 py-5 border-b-4 border-gray-800 mb-6",
    },
    [
      _c(
        "h5",
        {
          staticClass:
            "inline-block bg-green-100 rounded-sm px-2 py-1 mb-4 text-xs leading-3 text-green-700",
        },
        [_vm._v(_vm._s(_vm.question.skill))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "q-data mb-4" }, [
        _c("div", {
          staticClass: "text-sm",
          domProps: { innerHTML: _vm._s(_vm.question.question) },
        }),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.collapse,
              expression: "!collapse",
            },
          ],
          attrs: { id: _vm.question.code + "_options" },
        },
        _vm._l(_vm.question.options, function (option, index) {
          return _c("ul", { staticClass: "q-option" }, [
            _c(
              "li",
              {
                staticClass:
                  "relative flex items-center mb-3 cursor-pointer p-3 rounded-sm border border-gray-200",
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "h-6 w-6 flex rounded-full items-center justify-center bg-gray-100 text-sm",
                  },
                  [_vm._v(_vm._s(index + 1))]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "font-normal text-sm ltr:ml-4 rtl:mr-4",
                  domProps: { innerHTML: _vm._s(option.option) },
                }),
                _vm._v(" "),
                _vm.question.correct_answer === index + 1
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "absolute ltr:right-2 rtl:left-2 text-green-500",
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "w-6 h-6",
                            attrs: {
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            _c("path", {
                              attrs: {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                              },
                            }),
                          ]
                        ),
                      ]
                    )
                  : _vm._e(),
              ]
            ),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("a", {
        staticClass: "qt-link-success text-sm mb-4",
        domProps: {
          innerHTML: _vm._s(
            _vm.collapse ? _vm.__("View Options") : _vm.__("Hide Options")
          ),
        },
        on: {
          click: function ($event) {
            _vm.collapse = !_vm.collapse
          },
        },
      }),
      _vm._v(" "),
      _c("ul", { staticClass: "mt-5" }, [
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Question Type")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.question_type_name)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Difficulty Level")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.difficulty)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Marks/Points")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.question.marks) + " XP"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "text-gray-600 text-sm flex items-center mb-4" },
          [
            _c("span", { staticClass: "font-semibold" }, [
              _vm._v(_vm._s(_vm.__("Attachment")) + ":"),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ltr:ml-2 rtl:mr-2" }, [
              _vm._v(_vm._s(_vm.__(_vm.question.attachment))),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4 flex justify-between items-center" },
        [
          _c(
            "h5",
            {
              staticClass:
                "inline-block bg-gray-100 rounded-sm px-2 py-1 text-xs leading-3 text-gray-700",
            },
            [_vm._v(_vm._s(_vm.question.code))]
          ),
          _vm._v(" "),
          _vm._t("action"),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ResponsiveNavLink.vue?vue&type=template&id=9d824fa4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.as == "button"
        ? _c(
            "button",
            { staticClass: "w-full text-left", class: _vm.classes },
            [_vm._t("default")],
            2
          )
        : _c(
            "inertia-link",
            { class: _vm.classes, attrs: { href: _vm.href } },
            [_vm._t("default")],
            2
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=template&id=3e3201fd&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/FormInputShimmer.vue?vue&type=template&id=3e3201fd& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mb-6" },
    [
      _c("Skeleton", { staticClass: "mb-2", attrs: { width: "10rem" } }),
      _vm._v(" "),
      _c("Skeleton", { attrs: { height: "2rem" } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarDropdown.vue?vue&type=template&id=7132bcdc&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarDropdown.vue?vue&type=template&id=7132bcdc& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200",
        class: { "text-green-400": _vm.open },
        attrs: { role: "button" },
        on: {
          click: function ($event) {
            _vm.open = !_vm.open
          },
        },
      },
      [
        _c(
          "div",
          { staticClass: "flex items-center" },
          [
            _vm._t("icon"),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.__(_vm.title)))]),
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "svg",
          {
            staticClass: "flex-shrink-0 w-4 h-4 ml-2 transition transform",
            class: { "rotate-90": _vm.open },
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
            },
          },
          [
            _c("path", {
              attrs: {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd",
              },
            }),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.open,
            expression: "open",
          },
        ],
        staticClass: "mb-4",
      },
      _vm._l(_vm.items, function (item) {
        return _c(
          "div",
          { key: item.url, staticClass: "block" },
          [
            item.active
              ? _c(
                  "inertia-link",
                  {
                    staticClass:
                      "flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200",
                    class: { "text-green-400": _vm.isActive(item.url) },
                    attrs: { href: item.url },
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.__(item.label)) +
                        "\n            "
                    ),
                  ]
                )
              : _vm._e(),
          ],
          1
        )
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarLink.vue?vue&type=template&id=73bfe50a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SidebarLink.vue?vue&type=template&id=73bfe50a& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "inertia-link",
    {
      staticClass:
        "flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200",
      class: { "text-green-400": _vm.active },
      attrs: { href: _vm.url },
    },
    [
      _vm._t("icon"),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.__(_vm.title)))]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AdminLayout.vue?vue&type=template&id=5c4e0205&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/AdminLayout.vue?vue&type=template&id=5c4e0205& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "ltr:ml-0 rtl:mr-0 transition md:ltr:ml-60 md:rtl:mr-60" },
      [_c("arc-banner")],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "min-h-screen" }, [
      _c(
        "nav",
        {
          staticClass:
            "fixed top-0 ltr:left-0 rtl:right-0 z-20 h-full pb-10 overflow-hidden transition origin-left transform bg-gray-900 w-60 md:ltr:translate-x-0 md:rtl:-translate-x-0",
          class: {
            "ltr:-translate-x-full rtl:translate-x-full": !_vm.sideBar,
            "translate-x-0": _vm.sideBar,
          },
          on: {
            click: function ($event) {
              _vm.sideBar = false
            },
          },
        },
        [
          _c(
            "inertia-link",
            {
              staticClass: "flex items-center px-4 py-5",
              attrs: { href: _vm.route("home") },
            },
            [
              _c("img", {
                staticClass: "h-8 w-auto",
                attrs: {
                  src:
                    _vm.$page.props.assetUrl +
                    _vm.$page.props.general.logo_path,
                  alt: _vm.$page.props.general.app_name,
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "perfect-scrollbar",
            {
              ref: "scroll",
              staticClass: "h-full overflow-hidden",
              attrs: { options: _vm.scrollbarOptions },
            },
            [
              _c(
                "nav",
                {
                  staticClass: "text-sm font-medium pb-16 text-gray-400",
                  attrs: { "aria-label": "Main Navigation" },
                },
                [
                  _vm._l(_vm.items, function (item) {
                    return [
                      item.active && item.item_type === "dropdown"
                        ? _c("sidebar-dropdown", {
                            attrs: { title: item.label, items: item.items },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "icon",
                                  fn: function () {
                                    return [
                                      _c("span", {
                                        domProps: {
                                          innerHTML: _vm._s(item.icon),
                                        },
                                      }),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              true
                            ),
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      item.active === true && item.item_type === "link"
                        ? _c("sidebar-link", {
                            attrs: { title: item.label, url: item.url },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "icon",
                                  fn: function () {
                                    return [
                                      _c("span", {
                                        domProps: {
                                          innerHTML: _vm._s(item.icon),
                                        },
                                      }),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              true
                            ),
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      item.item_type === "divider"
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "my-4 mx-4 uppercase font-semibold text-green-500 text-xs",
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.label) +
                                  "\n                        "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ]
                  }),
                ],
                2
              ),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "ltr:ml-0 rtl:mr-0 transition md:ltr:ml-60 md:rtl:mr-60",
        },
        [
          _c(
            "header",
            {
              staticClass:
                "bg-white shadow flex items-center justify-between w-full md:mx-auto md:sticky md:z-30 md:top-0 px-4 h-14",
            },
            [
              _c(
                "button",
                {
                  staticClass: "block btn btn-light-secondary md:hidden",
                  on: {
                    click: function ($event) {
                      _vm.sideBar = true
                    },
                  },
                },
                [
                  _c("span", { staticClass: "sr-only" }, [
                    _vm._v(_vm._s(_vm.__("Menu"))),
                  ]),
                  _vm._v(" "),
                  _c(
                    "svg",
                    {
                      staticClass: "w-4 h-4",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                      },
                    },
                    [
                      _c("path", {
                        attrs: {
                          "fill-rule": "evenodd",
                          d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                          "clip-rule": "evenodd",
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "hidden -ml-3 form-icon md:block w-96" },
                [
                  _c(
                    "inertia-link",
                    {
                      staticClass: "text-sm font-semibold px-4 py-5 capitalize",
                      attrs: { href: _vm.route("home") },
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.__(_vm.$page.props.user.role_id)) +
                          " " +
                          _vm._s(_vm.__("Dashboard")) +
                          "\n                    "
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex items-center" }, [
                _c(
                  "a",
                  { staticClass: "flex text-gray-500", attrs: { href: "#" } },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "flex-shrink-0 w-5 h-5",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ltr:ml-4 rtl:mr-4 relative" },
                  [
                    _c("arc-dropdown", {
                      attrs: { align: "right", width: "48" },
                      scopedSlots: _vm._u([
                        {
                          key: "trigger",
                          fn: function () {
                            return [
                              _vm.$page.props.jetstream.managesProfilePhotos
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "flex border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out",
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "h-8 w-8 rounded-full object-cover",
                                        attrs: {
                                          src: _vm.$page.props.user
                                            .profile_photo_url,
                                          alt: _vm.$page.props.user.name,
                                        },
                                      }),
                                    ]
                                  )
                                : _c(
                                    "span",
                                    { staticClass: "inline-flex rounded-md" },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
                                          attrs: { type: "button" },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(
                                                _vm.$page.props.user.name
                                              ) +
                                              "\n\n                                            "
                                          ),
                                          _c(
                                            "svg",
                                            {
                                              staticClass:
                                                "ml-2 -mr-0.5 h-4 w-4",
                                              attrs: {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                              },
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  "fill-rule": "evenodd",
                                                  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                  "clip-rule": "evenodd",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                            ]
                          },
                          proxy: true,
                        },
                        {
                          key: "content",
                          fn: function () {
                            return [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "block px-4 py-2 text-xs text-gray-400",
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.__("Manage Account")) +
                                      "\n                                "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "arc-dropdown-link",
                                { attrs: { href: _vm.route("profile.show") } },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.__("Profile")) +
                                      "\n                                "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _vm.$page.props.jetstream.hasApiFeatures
                                ? _c(
                                    "arc-dropdown-link",
                                    {
                                      attrs: {
                                        href: _vm.route("api-tokens.index"),
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(_vm.__("Api Tokens")) +
                                          "\n                                "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "border-t border-gray-100",
                              }),
                              _vm._v(" "),
                              _c(
                                "form",
                                {
                                  attrs: {
                                    method: "post",
                                    action: _vm.route("logout"),
                                  },
                                },
                                [
                                  _c("input", {
                                    attrs: { type: "hidden", name: "_token" },
                                    domProps: {
                                      value: _vm.$page.props.csrf_token,
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "arc-dropdown-link",
                                    { attrs: { as: "button" } },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.__("Logout")) +
                                          "\n                                    "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    }),
                  ],
                  1
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("section", [
            _c(
              "div",
              { staticClass: "container mx-auto pt-4 px-4 sm:px-6 lg:px-8" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex flex-col md:flex-row items-start md:items-center justify-between",
                  },
                  [
                    _c("div", [_vm._t("header")], 2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-6 sm:mb-0 sm:mt-0" },
                      [_vm._t("actions")],
                      2
                    ),
                  ]
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c(
            "main",
            [
              _c(
                "div",
                { staticClass: "container mx-auto px-4 sm:px-6 lg:px-8" },
                [
                  _vm.$page.props.successMessage
                    ? _c(
                        "Message",
                        { attrs: { severity: "success", closable: false } },
                        [_vm._v(_vm._s(_vm.$page.props.successMessage))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$page.props.errorMessage
                    ? _c(
                        "Message",
                        { attrs: { severity: "error", closable: false } },
                        [_vm._v(_vm._s(_vm.$page.props.errorMessage))]
                      )
                    : _vm._e(),
                ],
                1
              ),
              _vm._v(" "),
              _vm._t("default"),
            ],
            2
          ),
          _vm._v(" "),
          _c("portal-target", { attrs: { name: "modal", multiple: "" } }),
          _vm._v(" "),
          _c("ConfirmDialog"),
          _vm._v(" "),
          _c("Toast", {
            attrs: {
              position: _vm.$page.props.rtl ? "bottom-left" : "bottom-right",
            },
          }),
          _vm._v(" "),
          _c("Toast", {
            attrs: {
              position: _vm.$page.props.rtl ? "top-left" : "top-right",
              group: "lm",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.sideBar,
            expression: "sideBar",
          },
        ],
        staticClass:
          "fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 md:hidden",
        on: {
          click: function ($event) {
            _vm.sideBar = false
          },
        },
      }),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Preview.vue?vue&type=template&id=5849e6c8&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Preview.vue?vue&type=template&id=5849e6c8& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "overflow-y-auto h-screen px-2" }, [
    _c("div", { staticClass: "bg-gray-100 py-4 lg:py-4 rounded" }, [
      _c(
        "div",
        {
          staticClass:
            "container px-6 mx-auto flex ltr:flex-row rtl:flex-row-reverse",
        },
        [
          _c("div", [
            _c(
              "h4",
              {
                staticClass:
                  "text-base font-semibold leading-tight text-gray-800",
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.title) +
                    "\n                "
                ),
              ]
            ),
          ]),
        ]
      ),
    ]),
    _vm._v(" "),
    _vm.loading
      ? _c(
          "div",
          { staticClass: "my-6 w-11/12 mx-auto xl:w-full xl:mx-0" },
          [
            _c("form-input-shimmer"),
            _vm._v(" "),
            _c("form-input-shimmer"),
            _vm._v(" "),
            _c("form-input-shimmer"),
          ],
          1
        )
      : _c("div", { staticClass: "mt-6 w-11/12 mx-auto xl:w-full xl:mx-0" }, [
          _c(
            "div",
            { staticClass: "grid grid-cols-1 gap-4 flex-wrap" },
            [
              _vm.question.question_type === "MSA"
                ? [_c("MSAPreview", { attrs: { question: _vm.question } })]
                : _vm._e(),
              _vm._v(" "),
              _vm.question.question_type === "MMA"
                ? [_c("MMAPreview", { attrs: { question: _vm.question } })]
                : _vm._e(),
              _vm._v(" "),
              _vm.question.question_type === "TOF"
                ? [_c("TOFPreview", { attrs: { question: _vm.question } })]
                : _vm._e(),
              _vm._v(" "),
              _vm.question.question_type === "FIB"
                ? [_c("FIBPreview", { attrs: { question: _vm.question } })]
                : _vm._e(),
              _vm._v(" "),
              _vm.question.question_type === "MTF"
                ? [_c("MTFPreview", { attrs: { question: _vm.question } })]
                : _vm._e(),
              _vm._v(" "),
              _vm.question.question_type === "ORD"
                ? [_c("ORDPreview", { attrs: { question: _vm.question } })]
                : _vm._e(),
              _vm._v(" "),
              _vm.question.question_type === "SAQ"
                ? [_c("SAQPreview", { attrs: { question: _vm.question } })]
                : _vm._e(),
            ],
            2
          ),
        ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Questions.vue?vue&type=template&id=7362a558&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Questions.vue?vue&type=template&id=7362a558& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "admin-layout",
    {
      scopedSlots: _vm._u([
        {
          key: "header",
          fn: function () {
            return [
              _c("h4", { staticClass: "page-heading" }, [
                _vm._v(_vm._s(_vm.__("Questions"))),
              ]),
            ]
          },
          proxy: true,
        },
        {
          key: "actions",
          fn: function () {
            return [
              _c(
                "div",
                { staticClass: "flex gap-4 items-center" },
                [
                  _c(
                    "inertia-link",
                    {
                      staticClass: "qt-btn qt-btn-primary",
                      attrs: { href: _vm.route("initiate_import_questions") },
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.__("Import Questions")) +
                          "\n            "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("arc-dropdown", {
                    attrs: { align: "right", width: "48" },
                    scopedSlots: _vm._u([
                      {
                        key: "trigger",
                        fn: function () {
                          return [
                            _c(
                              "button",
                              { staticClass: "qt-btn qt-btn-success" },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.__("New")) +
                                    " " +
                                    _vm._s(_vm.__("Question")) +
                                    "\n                    "
                                ),
                              ]
                            ),
                          ]
                        },
                        proxy: true,
                      },
                      {
                        key: "content",
                        fn: function () {
                          return [
                            _vm._l(_vm.questionTypes, function (questionType) {
                              return [
                                _c(
                                  "arc-dropdown-link",
                                  {
                                    attrs: {
                                      href: _vm.route("questions.create", {
                                        question_type: questionType.code,
                                      }),
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(questionType.text) +
                                        "\n                        "
                                    ),
                                  ]
                                ),
                              ]
                            }),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  }),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
      ]),
    },
    [
      _vm._v(" "),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container mx-auto py-8 px-4 sm:px-6 lg:px-8" },
        [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "vue-good-table",
                  {
                    attrs: {
                      mode: "remote",
                      "pagination-options": _vm.options,
                      columns: _vm.columns,
                      totalRows: _vm.questions.meta.pagination.total,
                      rows: _vm.questions.data,
                      rtl: _vm.$page.props.rtl,
                    },
                    on: {
                      "on-page-change": _vm.onPageChange,
                      "on-column-filter": _vm.onColumnFilter,
                      "on-per-page-change": _vm.onPerPageChange,
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "table-row",
                        fn: function (props) {
                          return [
                            props.column.field === "code"
                              ? _c(
                                  "div",
                                  [
                                    _c("Tag", {
                                      directives: [
                                        {
                                          name: "clipboard",
                                          rawName: "v-clipboard:copy",
                                          value: props.row.code,
                                          expression: "props.row.code",
                                          arg: "copy",
                                        },
                                        {
                                          name: "clipboard",
                                          rawName: "v-clipboard:success",
                                          value: _vm.handleCopyStatus,
                                          expression: "handleCopyStatus",
                                          arg: "success",
                                        },
                                      ],
                                      staticClass:
                                        "w-full p-mr-2 text-sm cursor-pointer",
                                      attrs: {
                                        value: props.row.code,
                                        icon: "pi pi-copy",
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : props.column.field === "question"
                              ? _c("div", [
                                  _c("div", {
                                    staticClass: "py-4",
                                    domProps: {
                                      innerHTML: _vm._s(props.row.question),
                                    },
                                  }),
                                ])
                              : props.column.field === "status"
                              ? _c("div", [
                                  _c(
                                    "span",
                                    {
                                      class: [
                                        props.row.status === "Active"
                                          ? "badge-success"
                                          : "badge-danger",
                                        "badge",
                                      ],
                                    },
                                    [_vm._v(_vm._s(_vm.__(props.row.status)))]
                                  ),
                                ])
                              : props.column.field === "actions"
                              ? _c(
                                  "div",
                                  [
                                    _c("actions-dropdown", {
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "actions",
                                            fn: function () {
                                              return [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass: "action-item",
                                                    on: {
                                                      click: function ($event) {
                                                        _vm.showPreview = true
                                                        _vm.currentId =
                                                          props.row.id
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.__("Preview"))
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass: "action-item",
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.editQuestion(
                                                          props.row.id
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.__("Edit"))
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass: "action-item",
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.deleteQuestion(
                                                          props.row.id
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.__("Delete"))
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            },
                                            proxy: true,
                                          },
                                        ],
                                        null,
                                        true
                                      ),
                                    }),
                                  ],
                                  1
                                )
                              : _c("span", [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s(
                                        props.formattedRow[props.column.field]
                                      ) +
                                      "\n                        "
                                  ),
                                ]),
                          ]
                        },
                      },
                    ]),
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "div",
                      { attrs: { slot: "emptystate" }, slot: "emptystate" },
                      [_c("no-data-table")],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "Sidebar",
                  {
                    staticClass: "p-sidebar-md",
                    attrs: { position: "right", visible: _vm.showPreview },
                    on: {
                      "update:visible": function ($event) {
                        _vm.showPreview = $event
                      },
                    },
                  },
                  [
                    _c("QuestionPreview", {
                      attrs: {
                        "question-id": _vm.currentId,
                        title: _vm.__("Question") + " " + _vm.__("Preview"),
                      },
                      on: {
                        close: function ($event) {
                          _vm.showPreview = false
                        },
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);