"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_ExamScreen_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ClearButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ClearButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    name: {
      type: String,
      "default": 'Clear Response'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/FinishButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/FinishButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    name: {
      type: String,
      "default": 'Finish'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/NextButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/NextButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    name: {
      type: String,
      "default": 'Next'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PrevButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PrevButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    name: {
      type: String,
      "default": 'Previous'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  name: "QuestionChip",
  props: {
    sno: Number | String,
    status: {
      type: String,
      "default": ''
    },
    isActive: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    statusClasses: function statusClasses() {
      switch (this.status) {
        case 'success':
          return 'bg-green-400';
        case 'warning':
          return 'bg-purple-400';
        case 'caution':
          return 'bg-yellow-400';
        case 'danger':
          return 'bg-red-400';
        default:
          return 'bg-gray-400';
      }
    },
    chipClasses: function chipClasses() {
      return this.isActive ? 'bg-gray-100' : '';
    },
    textClasses: function textClasses() {
      return this.isActive ? 'text-gray-800' : 'text-gray-400';
    },
    borderClasses: function borderClasses() {
      switch (this.status) {
        case 'success':
          return 'border-green-400';
        case 'warning':
          return 'border-purple-400';
        case 'caution':
          return 'border-yellow-400';
        case 'danger':
          return 'border-red-400';
        default:
          return 'border-gray-400';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ReviewButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ReviewButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    name: {
      type: String,
      "default": 'Mark for Review'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Buttons_QuestionChip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Buttons/QuestionChip */ "./resources/js/Components/Buttons/QuestionChip.vue");
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/index.js");
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ExamQuestionChip',
  components: {
    QuestionChip: _Components_Buttons_QuestionChip__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  directives: {
    'tooltip': primevue_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    sno: Number,
    active: Boolean,
    is_correct: Boolean,
    status: String
  },
  computed: {
    questionStatus: function questionStatus() {
      if (this.status === 'answered') {
        return 'Answered';
      } else if (this.status === 'not_answered') {
        return 'Not Answered';
      } else if (this.status === 'mark_for_review') {
        return 'Marked for Review';
      } else if (this.status === 'answered_mark_for_review') {
        return 'Answered & Marked for Review';
      } else if (this.status === 'touched') {
        return 'Answered & Not Saved';
      } else {
        return 'Not Visited';
      }
    },
    chipStatus: function chipStatus() {
      if (this.status === 'answered') {
        return 'success';
      } else if (this.status === 'not_answered') {
        return 'danger';
      } else if (this.status === 'mark_for_review') {
        return 'warning';
      } else if (this.status === 'answered_mark_for_review') {
        return 'caution';
      } else {
        return 'default';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Buttons_QuestionChip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Buttons/QuestionChip */ "./resources/js/Components/Buttons/QuestionChip.vue");
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/index.js");
//
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
  name: 'LightQuestionCard',
  components: {
    QuestionChip: _Components_Buttons_QuestionChip__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  directives: {
    'tooltip': primevue_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    question: Object,
    sno: Number,
    active: Boolean,
    is_correct: Boolean,
    status: String
  },
  computed: {
    questionStatus: function questionStatus() {
      if (this.status === 'answered') {
        return 'Answered';
      } else if (this.status === 'not_answered') {
        return 'Not Answered';
      } else {
        return 'Not Visited';
      }
    },
    chipStatus: function chipStatus() {
      if (this.status === 'answered') {
        return 'success';
      } else if (this.status === 'not_answered') {
        return 'danger';
      } else {
        return 'default';
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'QuizQuestionCard',
  props: {
    question: Object,
    sno: Number,
    totalQuestions: Number
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-plyr */ "./node_modules/vue-plyr/dist/vue-plyr.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AudioAttachment',
  components: {
    VuePlyr: vue_plyr__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    reference: String,
    options: Object
  },
  data: function data() {
    return {
      plyrOptions: {
        speed: {
          selected: 1,
          options: [1]
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
//
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
  name: 'ComprehensionAttachment',
  components: {
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__.PerfectScrollbar
  },
  props: {
    passage: String
  },
  data: function data() {
    return {
      scrollbarOptions: {
        suppressScrollX: true
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-plyr */ "./node_modules/vue-plyr/dist/vue-plyr.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'VideoAttachment',
  components: {
    VuePlyr: vue_plyr__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    reference: String,
    options: Object,
    showMessage: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      plyrOptions: {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'airplay', 'fullscreen'],
        speed: {
          selected: 1,
          options: [0.5, 1, 1.25]
        }
      }
    };
  },
  computed: {
    getVideoLink: function getVideoLink() {
      if (this.options.video_type === 'youtube') {
        return "https://www.youtube.com/embed/" + this.options.link + "?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1";
      }
      if (this.options.video_type === 'vimeo') {
        return "https://player.vimeo.com/video/" + this.options.link + "?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media";
      }
      return "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FIBInteractiveOptions',
  props: {
    parentQid: [Number, String],
    parentOptions: [String, Array, Number],
    parentAnswer: [String, Array, Number],
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions,
      answer: this.parentAnswer
    };
  },
  watch: {
    parentAnswer: function parentAnswer(newAnswer, oldAnswer) {
      this.answer = newAnswer;
    }
  },
  methods: {
    selectAnswer: function selectAnswer(event) {
      this.touched = true;
      this.$emit('modifyAnswer', this.answer);
    },
    labelClass: function labelClass(index) {
      if (this.answer[index] && (this.answer[index] !== "" || this.answer[index] !== null)) {
        return 'q-input answered';
      }
      return 'q-input';
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    parentQid: [Number, String],
    parentOptions: Array,
    parentAnswer: [String, Array, Number],
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions,
      answer: this.parentAnswer
    };
  },
  watch: {
    parentAnswer: function parentAnswer(newAnswer, oldAnswer) {
      this.answer = newAnswer;
    }
  },
  methods: {
    selectAnswer: function selectAnswer(event) {
      this.$emit('modifyAnswer', this.answer);
    },
    labelClass: function labelClass(index) {
      return '';
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MSAInteractiveOptions',
  props: {
    parentQid: [Number, String],
    parentOptions: Array,
    parentAnswer: [String, Array, Number],
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions,
      answer: this.parentAnswer
    };
  },
  watch: {
    parentAnswer: function parentAnswer(newAnswer, oldAnswer) {
      this.answer = newAnswer;
    }
  },
  methods: {
    selectAnswer: function selectAnswer(event) {
      this.$emit('modifyAnswer', this.answer);
    },
    labelClass: function labelClass(index) {
      return '';
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'MTFInteractiveOptions',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    parentQid: [Number, String],
    parentOptions: [Array, Object],
    parentAnswer: [Array, Object],
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions['matches'],
      answer: typeof this.parentAnswer !== 'undefined' && this.status === 'answered' ? this.parentAnswer : this.parentOptions['pairs'],
      touched: false
    };
  },
  watch: {
    parentAnswer: function parentAnswer(newAnswer, oldAnswer) {
      this.answer = newAnswer;
    }
  },
  methods: {
    selectAnswer: function selectAnswer(event) {
      this.touched = true;
      this.$emit('modifyAnswer', this.answer);
    },
    labelClass: function labelClass(index) {
      if (this.touched || this.status === 'answered') {
        return 'answered cursor-move';
      }
      return 'cursor-move';
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ORDInteractiveOptions',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    parentQid: [Number, String],
    parentOptions: Array,
    parentAnswer: [String, Array, Number],
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions,
      answer: typeof this.parentAnswer !== 'undefined' && this.status === 'answered' ? this.parentAnswer : this.parentOptions,
      touched: false
    };
  },
  watch: {
    parentAnswer: function parentAnswer(newAnswer, oldAnswer) {
      this.answer = newAnswer;
    }
  },
  methods: {
    selectAnswer: function selectAnswer(event) {
      this.touched = true;
      this.$emit('modifyAnswer', this.answer);
    },
    labelClass: function labelClass(index) {
      if (this.touched || this.status === 'answered') {
        return 'answered cursor-move';
      }
      return 'cursor-move';
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SAQInteractiveOptions',
  props: {
    parentQid: [Number, String],
    parentOptions: [String, Array, Number],
    parentAnswer: [String, Array, Number],
    status: String
  },
  data: function data() {
    return {
      question_id: this.parentQid,
      options: this.parentOptions,
      answer: this.parentAnswer
    };
  },
  watch: {
    parentAnswer: function parentAnswer(newAnswer, oldAnswer) {
      this.answer = newAnswer;
    }
  },
  methods: {
    selectAnswer: function selectAnswer(event) {
      this.touched = true;
      this.$emit('modifyAnswer', this.answer);
    },
    labelClass: function labelClass() {
      if (this.answer !== "" && this.answer !== null) {
        return 'q-input answered';
      }
      return 'q-input';
    }
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NavigationQuestionCardShimmer',
  components: {
    Skeleton: primevue_skeleton__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  name: "PracticeQuestionShimmer",
  components: {
    Skeleton: primevue_skeleton__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/ExamLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/ExamLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ExamLayout",
  components: {
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__.PerfectScrollbar
  },
  data: function data() {
    return {
      moved: true,
      fullScreen: false,
      scrollbarOptions: {
        maxScrollbarLength: 1,
        suppressScrollX: true
      },
      online: true
    };
  },
  methods: {
    detectOffline: function detectOffline(e) {
      this.online = e;
    },
    sidebarHandler: function sidebarHandler() {
      var sideBar = this.$refs.mobileNav;
      if (this.moved) {
        sideBar.style.transform = "translateX(0px)";
        this.moved = false;
      } else {
        sideBar.style.transform = this.$page.props.rtl ? "translateX(320px)" : "translateX(-320px)";
        this.moved = true;
      }
    },
    toggleFullScreen: function toggleFullScreen() {
      !this.fullScreen ? this.openFullScreen() : this.closeFullScreen();
      this.fullScreen = !this.fullScreen;
    },
    openFullScreen: function openFullScreen() {
      var elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    },
    closeFullScreen: function closeFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
    }
  },
  mounted: function mounted() {
    var sideBar = this.$refs.mobileNav;
    sideBar.style.transform = this.$page.props.rtl ? "translateX(320px)" : "translateX(-320px)";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_ExamLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/ExamLayout */ "./resources/js/Layouts/ExamLayout.vue");
/* harmony import */ var _Components_Buttons_PrevButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Buttons/PrevButton */ "./resources/js/Components/Buttons/PrevButton.vue");
/* harmony import */ var _Components_Buttons_NextButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Buttons/NextButton */ "./resources/js/Components/Buttons/NextButton.vue");
/* harmony import */ var _Components_Buttons_ClearButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Buttons/ClearButton */ "./resources/js/Components/Buttons/ClearButton.vue");
/* harmony import */ var _Components_Buttons_ReviewButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Buttons/ReviewButton */ "./resources/js/Components/Buttons/ReviewButton.vue");
/* harmony import */ var _Components_Buttons_FinishButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Buttons/FinishButton */ "./resources/js/Components/Buttons/FinishButton.vue");
/* harmony import */ var _Components_Questions_ExamInteract_MSAInteractiveOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Questions/ExamInteract/MSAInteractiveOptions */ "./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue");
/* harmony import */ var _Components_Questions_ExamInteract_MMAInteractiveOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Questions/ExamInteract/MMAInteractiveOptions */ "./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue");
/* harmony import */ var _Components_Questions_ExamInteract_MTFInteractiveOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Questions/ExamInteract/MTFInteractiveOptions */ "./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue");
/* harmony import */ var _Components_Questions_ExamInteract_ORDInteractiveOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Questions/ExamInteract/ORDInteractiveOptions */ "./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue");
/* harmony import */ var _Components_Questions_ExamInteract_FIBInteractiveOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Components/Questions/ExamInteract/FIBInteractiveOptions */ "./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue");
/* harmony import */ var _Components_Questions_ExamInteract_SAQInteractiveOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Components/Questions/ExamInteract/SAQInteractiveOptions */ "./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue");
/* harmony import */ var _Components_Cards_LightQuestionCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Components/Cards/LightQuestionCard */ "./resources/js/Components/Cards/LightQuestionCard.vue");
/* harmony import */ var _Components_Cards_ExamQuestionChip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/Components/Cards/ExamQuestionChip */ "./resources/js/Components/Cards/ExamQuestionChip.vue");
/* harmony import */ var _Components_Cards_QuizQuestionCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/Components/Cards/QuizQuestionCard */ "./resources/js/Components/Cards/QuizQuestionCard.vue");
/* harmony import */ var _Components_Shimmers_NavigationQuestionCardShimmer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/Components/Shimmers/NavigationQuestionCardShimmer */ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue");
/* harmony import */ var _Components_Shimmers_PracticeQuestionShimmer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/Components/Shimmers/PracticeQuestionShimmer */ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue");
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chenfengyuan/vue-countdown */ "./node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js");
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Components_Questions_Attachments_AudioAttachment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/Components/Questions/Attachments/AudioAttachment */ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue");
/* harmony import */ var _Components_Questions_Attachments_VideoAttachment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/Components/Questions/Attachments/VideoAttachment */ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue");
/* harmony import */ var _Components_Questions_Attachments_ComprehensionAttachment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/Components/Questions/Attachments/ComprehensionAttachment */ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue");
/* harmony import */ var primevue_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primevue/dialog */ "./node_modules/primevue/dialog/index.js");
/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primevue/button */ "./node_modules/primevue/button/index.js");
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/index.js");
/* harmony import */ var _Components_Buttons_QuestionChip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/Components/Buttons/QuestionChip */ "./resources/js/Components/Buttons/QuestionChip.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_27__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SAQInteractiveOptions: _Components_Questions_ExamInteract_SAQInteractiveOptions__WEBPACK_IMPORTED_MODULE_11__["default"],
    FIBInteractiveOptions: _Components_Questions_ExamInteract_FIBInteractiveOptions__WEBPACK_IMPORTED_MODULE_10__["default"],
    ORDInteractiveOptions: _Components_Questions_ExamInteract_ORDInteractiveOptions__WEBPACK_IMPORTED_MODULE_9__["default"],
    MTFInteractiveOptions: _Components_Questions_ExamInteract_MTFInteractiveOptions__WEBPACK_IMPORTED_MODULE_8__["default"],
    MSAInteractiveOptions: _Components_Questions_ExamInteract_MSAInteractiveOptions__WEBPACK_IMPORTED_MODULE_6__["default"],
    MMAInteractiveOptions: _Components_Questions_ExamInteract_MMAInteractiveOptions__WEBPACK_IMPORTED_MODULE_7__["default"],
    ExamLayout: _Layouts_ExamLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    PrevButton: _Components_Buttons_PrevButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    NextButton: _Components_Buttons_NextButton__WEBPACK_IMPORTED_MODULE_2__["default"],
    ReviewButton: _Components_Buttons_ReviewButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    FinishButton: _Components_Buttons_FinishButton__WEBPACK_IMPORTED_MODULE_5__["default"],
    ClearButton: _Components_Buttons_ClearButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbar,
    LightQuestionCard: _Components_Cards_LightQuestionCard__WEBPACK_IMPORTED_MODULE_12__["default"],
    ExamQuestionChip: _Components_Cards_ExamQuestionChip__WEBPACK_IMPORTED_MODULE_13__["default"],
    NavigationQuestionCardShimmer: _Components_Shimmers_NavigationQuestionCardShimmer__WEBPACK_IMPORTED_MODULE_15__["default"],
    QuizQuestionCard: _Components_Cards_QuizQuestionCard__WEBPACK_IMPORTED_MODULE_14__["default"],
    VueCountdown: (_chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_17___default()),
    PracticeQuestionShimmer: _Components_Shimmers_PracticeQuestionShimmer__WEBPACK_IMPORTED_MODULE_16__["default"],
    AudioAttachment: _Components_Questions_Attachments_AudioAttachment__WEBPACK_IMPORTED_MODULE_19__["default"],
    VideoAttachment: _Components_Questions_Attachments_VideoAttachment__WEBPACK_IMPORTED_MODULE_20__["default"],
    ComprehensionAttachment: _Components_Questions_Attachments_ComprehensionAttachment__WEBPACK_IMPORTED_MODULE_21__["default"],
    Dialog: primevue_dialog__WEBPACK_IMPORTED_MODULE_22__["default"],
    Button: primevue_button__WEBPACK_IMPORTED_MODULE_23__["default"],
    QuestionChip: _Components_Buttons_QuestionChip__WEBPACK_IMPORTED_MODULE_25__["default"],
    Swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_27__.Swiper,
    SwiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_27__.SwiperSlide
  },
  directives: {
    'tooltip': primevue_tooltip__WEBPACK_IMPORTED_MODULE_24__["default"]
  },
  props: {
    exam: Object,
    examSections: Array,
    session: Object,
    remainingTime: Number,
    answeredQuestions: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      questions: [],
      sections: this.examSections,
      answered: this.answeredQuestions,
      total_time_taken: this.session.total_time_taken,
      current_section: this.session.current_section,
      current_question: this.session.current_question,
      chipView: true,
      loading: true,
      submitting: false,
      scrollbarOptions: {
        maxScrollbarLength: 1,
        suppressScrollX: true
      },
      displayConfirmation: false,
      answered_count: 0,
      swiperOptions: {
        direction: "horizontal",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        mousewheel: true
      }
    };
  },
  methods: {
    changeSection: function changeSection(index) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.updateStatus();
            case 2:
              _context.t0 = _this2;
              _context.next = 5;
              return _this2.getPayload();
            case 5:
              _context.t1 = _context.sent;
              _context.t0.submitAnswer.call(_context.t0, _context.t1);
              if (!_this2.exam.settings.disable_section_navigation) {
                _context.next = 12;
                break;
              }
              _context.next = 10;
              return sweetalert2__WEBPACK_IMPORTED_MODULE_26___default().fire({
                text: _this2.__('Section navigation is disabled.'),
                icon: 'info',
                confirmButtonText: _this2.__('Okay')
              });
            case 10:
              _context.next = 23;
              break;
            case 12:
              _this2.current_section = index;
              _this2.current_question = _this2.sections[_this2.current_section].current_question;
              _context.next = 16;
              return _this2.fetchQuestions();
            case 16:
              _context.next = 18;
              return _this2.updateStatus();
            case 18:
              _context.t2 = _this2;
              _context.next = 21;
              return _this2.getPayload();
            case 21:
              _context.t3 = _context.sent;
              _context.t2.submitAnswer.call(_context.t2, _context.t3);
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    goToNextSection: function goToNextSection(index) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(index < _this3.sections.length)) {
                _context2.next = 19;
                break;
              }
              _context2.next = 3;
              return _this3.updateStatus();
            case 3:
              _context2.t0 = _this3;
              _context2.next = 6;
              return _this3.getPayload();
            case 6:
              _context2.t1 = _context2.sent;
              _context2.t0.submitAnswer.call(_context2.t0, _context2.t1);
              _this3.current_section = index;
              _this3.current_question = 0;
              _context2.next = 12;
              return _this3.fetchQuestions();
            case 12:
              _context2.next = 14;
              return _this3.updateStatus();
            case 14:
              _context2.t2 = _this3;
              _context2.next = 17;
              return _this3.getPayload();
            case 17:
              _context2.t3 = _context2.sent;
              _context2.t2.submitAnswer.call(_context2.t2, _context2.t3);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    updateStatus: function updateStatus() {
      if (this.questions[this.current_question].status === 'answered_mark_for_review' || this.questions[this.current_question].status === 'touched' && this.questions[this.current_question].status === 'mark_for_review') {
        this.questions[this.current_question].status = 'answered_mark_for_review';
      } else if (this.questions[this.current_question].status === 'touched' || this.questions[this.current_question].status === 'answered') {
        this.questions[this.current_question].status = 'answered';
      } else if (this.questions[this.current_question].status === 'mark_for_review') {
        this.questions[this.current_question].status = 'mark_for_review';
      } else {
        this.questions[this.current_question].status = 'not_answered';
      }
    },
    getPayload: function getPayload() {
      return {
        'question_id': this.questions[this.current_question].code,
        'user_answer': this.questions[this.current_question].user_answer,
        'time_taken': this.questions[this.current_question].time_taken,
        'total_time_taken': this.total_time_taken,
        'current_question': this.current_question,
        'current_section': this.current_section,
        'current_section_total_time_taken': this.sections[this.current_section].total_time_taken,
        'status': this.questions[this.current_question].status
      };
    },
    submitAnswer: function submitAnswer(payload) {
      var _this = this;
      _this.submitting = true;
      axios.post(route('update_exam_answer', {
        exam: this.exam.slug,
        session: this.session.code,
        section: this.sections[this.current_section].id
      }), payload).then(function (response) {
        var data = response.data;
        _this.answered = data.answered;
        _this.submitting = false;
      })["catch"](function (error) {
        _this.submitting = false;
      }).then(function () {
        _this.submitting = false;
      });
    },
    finishAlert: function finishAlert() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this4.updateStatus();
            case 2:
              _context3.t0 = _this4;
              _context3.next = 5;
              return _this4.getPayload();
            case 5:
              _context3.t1 = _context3.sent;
              _context3.t0.submitAnswer.call(_context3.t0, _context3.t1);
              _this4.displayConfirmation = true;
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    closeConfirmation: function closeConfirmation() {
      this.displayConfirmation = false;
    },
    timeUp: function timeUp() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this5.updateStatus();
            case 2:
              _context4.t0 = _this5;
              _context4.next = 5;
              return _this5.getPayload();
            case 5:
              _context4.t1 = _context4.sent;
              _context4.t0.submitAnswer.call(_context4.t0, _context4.t1);
              _this5.finishTest();
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    finishTest: function finishTest() {
      this.$inertia.post(route('finish_exam_session', {
        exam: this.exam.slug,
        session: this.session.code
      }), {
        'total_time_taken': this.total_time_taken,
        'questions': this.questions
      }, {
        replace: true
      });
    },
    updateAnswer: function updateAnswer(value) {
      this.questions[this.current_question].user_answer = value;
      this.questions[this.current_question].status = 'touched';
    },
    prevQuestion: function prevQuestion() {
      if (this.current_question !== 0) {
        this.current_question--;
      }
    },
    nextQuestion: function nextQuestion() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this6.updateStatus();
            case 2:
              _context5.t0 = _this6;
              _context5.next = 5;
              return _this6.getPayload();
            case 5:
              _context5.t1 = _context5.sent;
              _context5.t0.submitAnswer.call(_context5.t0, _context5.t1);
              if (_this6.current_question < _this6.questions.length - 1) {
                _this6.current_question++;
              }
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    jumpToQuestion: function jumpToQuestion(questionID) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this7.updateStatus();
            case 2:
              _context6.t0 = _this7;
              _context6.next = 5;
              return _this7.getPayload();
            case 5:
              _context6.t1 = _context6.sent;
              _context6.t0.submitAnswer.call(_context6.t0, _context6.t1);
              if (_this7.current_question > questionID) {
                _this7.currentTransition = 'prev';
              } else {
                _this7.currentTransition = 'next';
              }
              _this7.current_question = questionID;
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    markForReview: function markForReview() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (_this8.questions[_this8.current_question].status === 'touched' || _this8.questions[_this8.current_question].status === 'answered') {
                _this8.questions[_this8.current_question].status = 'answered_mark_for_review';
              } else if (_this8.questions[_this8.current_question].status === 'answered_mark_for_review') {
                _this8.questions[_this8.current_question].status = 'answered_mark_for_review';
              } else {
                _this8.questions[_this8.current_question].status = 'mark_for_review';
              }
              _context7.next = 3;
              return _this8.updateStatus();
            case 3:
              _context7.t0 = _this8;
              _context7.next = 6;
              return _this8.getPayload();
            case 6:
              _context7.t1 = _context7.sent;
              _context7.t0.submitAnswer.call(_context7.t0, _context7.t1);
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    clearAnswer: function clearAnswer() {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var qType;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              qType = _this9.questions[_this9.current_question].questionType;
              _this9.questions[_this9.current_question].user_answer = _this9.getClearedAnswer(qType);
              _this9.questions[_this9.current_question].status = 'not_answered';
              _context8.next = 5;
              return _this9.updateStatus();
            case 5:
              _context8.t0 = _this9;
              _context8.next = 8;
              return _this9.getPayload();
            case 8:
              _context8.t1 = _context8.sent;
              _context8.t0.submitAnswer.call(_context8.t0, _context8.t1);
            case 10:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    getClearedAnswer: function getClearedAnswer(qType) {
      switch (qType) {
        case "MTF":
          return this.questions[this.current_question].options['pairs'];
        case "ORD":
          return this.questions[this.current_question].options;
        case "MMA":
        case "FIB":
          return [];
        case "SAQ":
        case "LAQ":
        default:
          return '';
      }
    },
    fetchQuestions: function fetchQuestions() {
      var _this = this;
      _this.loading = true;
      axios.get(route('fetch_exam_section_questions', {
        exam: this.exam.slug,
        session: this.session.code,
        section: this.sections[this.current_section].id
      })).then(function (response) {
        var data = response.data;
        _this.questions = data.questions;
        _this.answered = data.answered;
        _this.sections[_this.current_section].remainingTime = data.remainingTime;
      })["catch"](function (error) {
        _this.loading = false;
      }).then(function () {
        _this.loading = false;
      });
    },
    transformSlotProps: function transformSlotProps(props) {
      var formattedProps = {};
      Object.entries(props).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        formattedProps[key] = value < 10 ? "0".concat(value) : String(value);
      });
      return formattedProps;
    },
    startTimer: function startTimer() {
      setInterval(this.incrementTime, 1000);
    },
    incrementTime: function incrementTime() {
      this.total_time_taken = parseInt(this.total_time_taken) + 1;
      this.sections[this.current_section].total_time_taken = parseInt(this.sections[this.current_section].total_time_taken) + 1;
      this.questions[this.current_question].time_taken = parseInt(this.questions[this.current_question].time_taken) + 1;
    },
    swipeSectionNext: function swipeSectionNext() {
      this.swiper.slideNext();
    },
    swipeSectionPrev: function swipeSectionPrev() {
      this.swiper.slidePrev();
    }
  },
  metaInfo: function metaInfo() {
    return {
      title: this.title
    };
  },
  computed: {
    title: function title() {
      return this.exam.title + ' - ' + this.$page.props.general.app_name;
    },
    appUrl: function appUrl() {
      return this.$page.props.appUrl;
    },
    nextBtnText: function nextBtnText() {
      return this.current_question < this.questions.length - 1 ? this.__('Save & Next') : this.__('Save');
    },
    notAnsweredQuestions: function notAnsweredQuestions() {
      return _.sumBy(this.questions, function (_ref3) {
        var status = _ref3.status;
        return Number(status === 'not_answered');
      });
    },
    notVisitedQuestions: function notVisitedQuestions() {
      return _.sumBy(this.questions, function (_ref4) {
        var status = _ref4.status;
        return Number(status === 'not_visited');
      });
    },
    markForReviewQuestions: function markForReviewQuestions() {
      return _.sumBy(this.questions, function (_ref5) {
        var status = _ref5.status;
        return Number(status === 'mark_for_review');
      });
    },
    answeredMarkForReviewQuestions: function answeredMarkForReviewQuestions() {
      return _.sumBy(this.questions, function (_ref6) {
        var status = _ref6.status;
        return Number(status === 'answered_mark_for_review');
      });
    },
    touchedQuestions: function touchedQuestions() {
      return _.sumBy(this.questions, function (_ref7) {
        var status = _ref7.status;
        return Number(status === 'touched');
      });
    },
    sectionTotalQuestions: function sectionTotalQuestions() {
      return this.sections[this.current_section].total_questions;
    },
    swiper: function swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted: function mounted() {
    var _this10 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _this10.fetchQuestions();
          case 2:
            if (_this10.session.status !== 'completed') {
              _this10.startTimer();
            }
          case 3:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.q-chip[data-v-47b50bea] {\n    width: 40px;\n    height: 40px;\n}\n.q-chip-sno[data-v-47b50bea] {\n    width: 40px;\n    height: 30px;\n}\n.q-chip-status[data-v-47b50bea] {\n    width: 40px;\n    height: 10px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.confirmation-content[data-v-ce501f94] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.swiper[data-v-ce501f94] {\n    width: 100%;\n}\n.swiper-slide[data-v-ce501f94] {\n    width: auto;\n    box-sizing: border-box;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamScreen_vue_vue_type_style_index_0_id_ce501f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamScreen_vue_vue_type_style_index_0_id_ce501f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamScreen_vue_vue_type_style_index_0_id_ce501f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Components/Buttons/ClearButton.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Components/Buttons/ClearButton.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClearButton_vue_vue_type_template_id_34dcffb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClearButton.vue?vue&type=template&id=34dcffb6& */ "./resources/js/Components/Buttons/ClearButton.vue?vue&type=template&id=34dcffb6&");
/* harmony import */ var _ClearButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClearButton.vue?vue&type=script&lang=js& */ "./resources/js/Components/Buttons/ClearButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClearButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClearButton_vue_vue_type_template_id_34dcffb6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClearButton_vue_vue_type_template_id_34dcffb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Buttons/ClearButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Buttons/FinishButton.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Components/Buttons/FinishButton.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FinishButton_vue_vue_type_template_id_7baadcde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FinishButton.vue?vue&type=template&id=7baadcde& */ "./resources/js/Components/Buttons/FinishButton.vue?vue&type=template&id=7baadcde&");
/* harmony import */ var _FinishButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FinishButton.vue?vue&type=script&lang=js& */ "./resources/js/Components/Buttons/FinishButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FinishButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FinishButton_vue_vue_type_template_id_7baadcde___WEBPACK_IMPORTED_MODULE_0__.render,
  _FinishButton_vue_vue_type_template_id_7baadcde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Buttons/FinishButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Buttons/NextButton.vue":
/*!********************************************************!*\
  !*** ./resources/js/Components/Buttons/NextButton.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NextButton_vue_vue_type_template_id_7e31b77e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NextButton.vue?vue&type=template&id=7e31b77e& */ "./resources/js/Components/Buttons/NextButton.vue?vue&type=template&id=7e31b77e&");
/* harmony import */ var _NextButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NextButton.vue?vue&type=script&lang=js& */ "./resources/js/Components/Buttons/NextButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NextButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NextButton_vue_vue_type_template_id_7e31b77e___WEBPACK_IMPORTED_MODULE_0__.render,
  _NextButton_vue_vue_type_template_id_7e31b77e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Buttons/NextButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Buttons/PrevButton.vue":
/*!********************************************************!*\
  !*** ./resources/js/Components/Buttons/PrevButton.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrevButton_vue_vue_type_template_id_13a28284___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrevButton.vue?vue&type=template&id=13a28284& */ "./resources/js/Components/Buttons/PrevButton.vue?vue&type=template&id=13a28284&");
/* harmony import */ var _PrevButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrevButton.vue?vue&type=script&lang=js& */ "./resources/js/Components/Buttons/PrevButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrevButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrevButton_vue_vue_type_template_id_13a28284___WEBPACK_IMPORTED_MODULE_0__.render,
  _PrevButton_vue_vue_type_template_id_13a28284___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Buttons/PrevButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Buttons/QuestionChip.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Components/Buttons/QuestionChip.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true& */ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true&");
/* harmony import */ var _QuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionChip.vue?vue&type=script&lang=js& */ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js&");
/* harmony import */ var _QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& */ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47b50bea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Buttons/QuestionChip.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Buttons/ReviewButton.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Components/Buttons/ReviewButton.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReviewButton_vue_vue_type_template_id_03b15563___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReviewButton.vue?vue&type=template&id=03b15563& */ "./resources/js/Components/Buttons/ReviewButton.vue?vue&type=template&id=03b15563&");
/* harmony import */ var _ReviewButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewButton.vue?vue&type=script&lang=js& */ "./resources/js/Components/Buttons/ReviewButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReviewButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReviewButton_vue_vue_type_template_id_03b15563___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReviewButton_vue_vue_type_template_id_03b15563___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Buttons/ReviewButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/ExamQuestionChip.vue":
/*!************************************************************!*\
  !*** ./resources/js/Components/Cards/ExamQuestionChip.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExamQuestionChip_vue_vue_type_template_id_75af69e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamQuestionChip.vue?vue&type=template&id=75af69e8& */ "./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=template&id=75af69e8&");
/* harmony import */ var _ExamQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExamQuestionChip.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExamQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExamQuestionChip_vue_vue_type_template_id_75af69e8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExamQuestionChip_vue_vue_type_template_id_75af69e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/ExamQuestionChip.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/LightQuestionCard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Components/Cards/LightQuestionCard.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LightQuestionCard_vue_vue_type_template_id_991d97f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightQuestionCard.vue?vue&type=template&id=991d97f6& */ "./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=template&id=991d97f6&");
/* harmony import */ var _LightQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightQuestionCard.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LightQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LightQuestionCard_vue_vue_type_template_id_991d97f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _LightQuestionCard_vue_vue_type_template_id_991d97f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/LightQuestionCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/QuizQuestionCard.vue":
/*!************************************************************!*\
  !*** ./resources/js/Components/Cards/QuizQuestionCard.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuizQuestionCard_vue_vue_type_template_id_7c46e63c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizQuestionCard.vue?vue&type=template&id=7c46e63c& */ "./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=template&id=7c46e63c&");
/* harmony import */ var _QuizQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizQuestionCard.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuizQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizQuestionCard_vue_vue_type_template_id_7c46e63c___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuizQuestionCard_vue_vue_type_template_id_7c46e63c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/QuizQuestionCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/AudioAttachment.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioAttachment.vue?vue&type=template&id=080677fd& */ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd&");
/* harmony import */ var _AudioAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioAttachment.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AudioAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__.render,
  _AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Attachments/AudioAttachment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b& */ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b&");
/* harmony import */ var _ComprehensionAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComprehensionAttachment.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComprehensionAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__.render,
  _ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/VideoAttachment.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoAttachment.vue?vue&type=template&id=29e26be2& */ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2&");
/* harmony import */ var _VideoAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoAttachment.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VideoAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__.render,
  _VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/Attachments/VideoAttachment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FIBInteractiveOptions_vue_vue_type_template_id_4f841aee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FIBInteractiveOptions.vue?vue&type=template&id=4f841aee& */ "./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=template&id=4f841aee&");
/* harmony import */ var _FIBInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FIBInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FIBInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FIBInteractiveOptions_vue_vue_type_template_id_4f841aee___WEBPACK_IMPORTED_MODULE_0__.render,
  _FIBInteractiveOptions_vue_vue_type_template_id_4f841aee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MMAInteractiveOptions_vue_vue_type_template_id_daaa4fa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MMAInteractiveOptions.vue?vue&type=template&id=daaa4fa0& */ "./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=template&id=daaa4fa0&");
/* harmony import */ var _MMAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MMAInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MMAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MMAInteractiveOptions_vue_vue_type_template_id_daaa4fa0___WEBPACK_IMPORTED_MODULE_0__.render,
  _MMAInteractiveOptions_vue_vue_type_template_id_daaa4fa0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MSAInteractiveOptions_vue_vue_type_template_id_7ab4316a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MSAInteractiveOptions.vue?vue&type=template&id=7ab4316a& */ "./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=template&id=7ab4316a&");
/* harmony import */ var _MSAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MSAInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MSAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MSAInteractiveOptions_vue_vue_type_template_id_7ab4316a___WEBPACK_IMPORTED_MODULE_0__.render,
  _MSAInteractiveOptions_vue_vue_type_template_id_7ab4316a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MTFInteractiveOptions_vue_vue_type_template_id_2ca482e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MTFInteractiveOptions.vue?vue&type=template&id=2ca482e4& */ "./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=template&id=2ca482e4&");
/* harmony import */ var _MTFInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MTFInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MTFInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MTFInteractiveOptions_vue_vue_type_template_id_2ca482e4___WEBPACK_IMPORTED_MODULE_0__.render,
  _MTFInteractiveOptions_vue_vue_type_template_id_2ca482e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ORDInteractiveOptions_vue_vue_type_template_id_65a80850___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ORDInteractiveOptions.vue?vue&type=template&id=65a80850& */ "./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=template&id=65a80850&");
/* harmony import */ var _ORDInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ORDInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ORDInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ORDInteractiveOptions_vue_vue_type_template_id_65a80850___WEBPACK_IMPORTED_MODULE_0__.render,
  _ORDInteractiveOptions_vue_vue_type_template_id_65a80850___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SAQInteractiveOptions_vue_vue_type_template_id_7ed387d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SAQInteractiveOptions.vue?vue&type=template&id=7ed387d2& */ "./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=template&id=7ed387d2&");
/* harmony import */ var _SAQInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SAQInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SAQInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SAQInteractiveOptions_vue_vue_type_template_id_7ed387d2___WEBPACK_IMPORTED_MODULE_0__.render,
  _SAQInteractiveOptions_vue_vue_type_template_id_7ed387d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485& */ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485&");
/* harmony import */ var _NavigationQuestionCardShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationQuestionCardShimmer.vue?vue&type=script&lang=js& */ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationQuestionCardShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae& */ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae&");
/* harmony import */ var _PracticeQuestionShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PracticeQuestionShimmer.vue?vue&type=script&lang=js& */ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PracticeQuestionShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__.render,
  _PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Shimmers/PracticeQuestionShimmer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/ExamLayout.vue":
/*!*********************************************!*\
  !*** ./resources/js/Layouts/ExamLayout.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExamLayout_vue_vue_type_template_id_16182f2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamLayout.vue?vue&type=template&id=16182f2d& */ "./resources/js/Layouts/ExamLayout.vue?vue&type=template&id=16182f2d&");
/* harmony import */ var _ExamLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExamLayout.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/ExamLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExamLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExamLayout_vue_vue_type_template_id_16182f2d___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExamLayout_vue_vue_type_template_id_16182f2d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/ExamLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/ExamScreen.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/User/ExamScreen.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExamScreen_vue_vue_type_template_id_ce501f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamScreen.vue?vue&type=template&id=ce501f94&scoped=true& */ "./resources/js/Pages/User/ExamScreen.vue?vue&type=template&id=ce501f94&scoped=true&");
/* harmony import */ var _ExamScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExamScreen.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/ExamScreen.vue?vue&type=script&lang=js&");
/* harmony import */ var _ExamScreen_vue_vue_type_style_index_0_id_ce501f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css& */ "./resources/js/Pages/User/ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExamScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExamScreen_vue_vue_type_template_id_ce501f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExamScreen_vue_vue_type_template_id_ce501f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ce501f94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/ExamScreen.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Buttons/ClearButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Buttons/ClearButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClearButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ClearButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Buttons/FinishButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Buttons/FinishButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinishButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FinishButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/FinishButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinishButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Buttons/NextButton.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Buttons/NextButton.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NextButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NextButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/NextButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NextButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Buttons/PrevButton.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Buttons/PrevButton.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrevButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PrevButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionChip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Buttons/ReviewButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Buttons/ReviewButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReviewButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ReviewButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamQuestionChip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LightQuestionCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizQuestionCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudioAttachment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprehensionAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComprehensionAttachment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprehensionAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoAttachment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAttachment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FIBInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MMAInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MSAInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MTFInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ORDInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SAQInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuestionCardShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationQuestionCardShimmer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuestionCardShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeQuestionShimmer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionShimmer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/ExamLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Layouts/ExamLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/ExamLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/ExamScreen.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/User/ExamScreen.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamScreen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Pages/User/ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Pages/User/ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamScreen_vue_vue_type_style_index_0_id_ce501f94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=style&index=0&id=ce501f94&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/Components/Buttons/ClearButton.vue?vue&type=template&id=34dcffb6&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/ClearButton.vue?vue&type=template&id=34dcffb6& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearButton_vue_vue_type_template_id_34dcffb6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearButton_vue_vue_type_template_id_34dcffb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClearButton_vue_vue_type_template_id_34dcffb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClearButton.vue?vue&type=template&id=34dcffb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ClearButton.vue?vue&type=template&id=34dcffb6&");


/***/ }),

/***/ "./resources/js/Components/Buttons/FinishButton.vue?vue&type=template&id=7baadcde&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/FinishButton.vue?vue&type=template&id=7baadcde& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FinishButton_vue_vue_type_template_id_7baadcde___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FinishButton_vue_vue_type_template_id_7baadcde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FinishButton_vue_vue_type_template_id_7baadcde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FinishButton.vue?vue&type=template&id=7baadcde& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/FinishButton.vue?vue&type=template&id=7baadcde&");


/***/ }),

/***/ "./resources/js/Components/Buttons/NextButton.vue?vue&type=template&id=7e31b77e&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/NextButton.vue?vue&type=template&id=7e31b77e& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NextButton_vue_vue_type_template_id_7e31b77e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NextButton_vue_vue_type_template_id_7e31b77e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NextButton_vue_vue_type_template_id_7e31b77e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NextButton.vue?vue&type=template&id=7e31b77e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/NextButton.vue?vue&type=template&id=7e31b77e&");


/***/ }),

/***/ "./resources/js/Components/Buttons/PrevButton.vue?vue&type=template&id=13a28284&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/PrevButton.vue?vue&type=template&id=13a28284& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevButton_vue_vue_type_template_id_13a28284___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevButton_vue_vue_type_template_id_13a28284___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevButton_vue_vue_type_template_id_13a28284___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrevButton.vue?vue&type=template&id=13a28284& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PrevButton.vue?vue&type=template&id=13a28284&");


/***/ }),

/***/ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_template_id_47b50bea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/Buttons/ReviewButton.vue?vue&type=template&id=03b15563&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/ReviewButton.vue?vue&type=template&id=03b15563& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewButton_vue_vue_type_template_id_03b15563___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewButton_vue_vue_type_template_id_03b15563___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReviewButton_vue_vue_type_template_id_03b15563___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReviewButton.vue?vue&type=template&id=03b15563& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ReviewButton.vue?vue&type=template&id=03b15563&");


/***/ }),

/***/ "./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=template&id=75af69e8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=template&id=75af69e8& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionChip_vue_vue_type_template_id_75af69e8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionChip_vue_vue_type_template_id_75af69e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamQuestionChip_vue_vue_type_template_id_75af69e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamQuestionChip.vue?vue&type=template&id=75af69e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=template&id=75af69e8&");


/***/ }),

/***/ "./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=template&id=991d97f6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=template&id=991d97f6& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightQuestionCard_vue_vue_type_template_id_991d97f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightQuestionCard_vue_vue_type_template_id_991d97f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightQuestionCard_vue_vue_type_template_id_991d97f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LightQuestionCard.vue?vue&type=template&id=991d97f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=template&id=991d97f6&");


/***/ }),

/***/ "./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=template&id=7c46e63c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=template&id=7c46e63c& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizQuestionCard_vue_vue_type_template_id_7c46e63c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizQuestionCard_vue_vue_type_template_id_7c46e63c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizQuestionCard_vue_vue_type_template_id_7c46e63c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuizQuestionCard.vue?vue&type=template&id=7c46e63c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=template&id=7c46e63c&");


/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAttachment_vue_vue_type_template_id_080677fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudioAttachment.vue?vue&type=template&id=080677fd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd&");


/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComprehensionAttachment_vue_vue_type_template_id_1ce9bd2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b&");


/***/ }),

/***/ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoAttachment_vue_vue_type_template_id_29e26be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VideoAttachment.vue?vue&type=template&id=29e26be2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2&");


/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=template&id=4f841aee&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=template&id=4f841aee& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBInteractiveOptions_vue_vue_type_template_id_4f841aee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBInteractiveOptions_vue_vue_type_template_id_4f841aee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBInteractiveOptions_vue_vue_type_template_id_4f841aee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FIBInteractiveOptions.vue?vue&type=template&id=4f841aee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=template&id=4f841aee&");


/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=template&id=daaa4fa0&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=template&id=daaa4fa0& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAInteractiveOptions_vue_vue_type_template_id_daaa4fa0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAInteractiveOptions_vue_vue_type_template_id_daaa4fa0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAInteractiveOptions_vue_vue_type_template_id_daaa4fa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MMAInteractiveOptions.vue?vue&type=template&id=daaa4fa0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=template&id=daaa4fa0&");


/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=template&id=7ab4316a&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=template&id=7ab4316a& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAInteractiveOptions_vue_vue_type_template_id_7ab4316a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAInteractiveOptions_vue_vue_type_template_id_7ab4316a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAInteractiveOptions_vue_vue_type_template_id_7ab4316a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MSAInteractiveOptions.vue?vue&type=template&id=7ab4316a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=template&id=7ab4316a&");


/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=template&id=2ca482e4&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=template&id=2ca482e4& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFInteractiveOptions_vue_vue_type_template_id_2ca482e4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFInteractiveOptions_vue_vue_type_template_id_2ca482e4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFInteractiveOptions_vue_vue_type_template_id_2ca482e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MTFInteractiveOptions.vue?vue&type=template&id=2ca482e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=template&id=2ca482e4&");


/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=template&id=65a80850&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=template&id=65a80850& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDInteractiveOptions_vue_vue_type_template_id_65a80850___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDInteractiveOptions_vue_vue_type_template_id_65a80850___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDInteractiveOptions_vue_vue_type_template_id_65a80850___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ORDInteractiveOptions.vue?vue&type=template&id=65a80850& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=template&id=65a80850&");


/***/ }),

/***/ "./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=template&id=7ed387d2&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=template&id=7ed387d2& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQInteractiveOptions_vue_vue_type_template_id_7ed387d2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQInteractiveOptions_vue_vue_type_template_id_7ed387d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQInteractiveOptions_vue_vue_type_template_id_7ed387d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SAQInteractiveOptions.vue?vue&type=template&id=7ed387d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=template&id=7ed387d2&");


/***/ }),

/***/ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationQuestionCardShimmer_vue_vue_type_template_id_5b769485___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485&");


/***/ }),

/***/ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionShimmer_vue_vue_type_template_id_53d23eae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae&");


/***/ }),

/***/ "./resources/js/Layouts/ExamLayout.vue?vue&type=template&id=16182f2d&":
/*!****************************************************************************!*\
  !*** ./resources/js/Layouts/ExamLayout.vue?vue&type=template&id=16182f2d& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamLayout_vue_vue_type_template_id_16182f2d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamLayout_vue_vue_type_template_id_16182f2d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamLayout_vue_vue_type_template_id_16182f2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamLayout.vue?vue&type=template&id=16182f2d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/ExamLayout.vue?vue&type=template&id=16182f2d&");


/***/ }),

/***/ "./resources/js/Pages/User/ExamScreen.vue?vue&type=template&id=ce501f94&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/User/ExamScreen.vue?vue&type=template&id=ce501f94&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamScreen_vue_vue_type_template_id_ce501f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamScreen_vue_vue_type_template_id_ce501f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExamScreen_vue_vue_type_template_id_ce501f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExamScreen.vue?vue&type=template&id=ce501f94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=template&id=ce501f94&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ClearButton.vue?vue&type=template&id=34dcffb6&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ClearButton.vue?vue&type=template&id=34dcffb6& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "h-10 flex items-center justify-center gap-2 px-4 py-2 bg-white text-red-600 hover:bg-red-600 hover:text-white text-xs sm:text-sm rounded border border-red-600 cursor-pointer",
    },
    [
      _c(
        "svg",
        {
          staticClass: "w-4 h-4 hidden sm:visible",
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
              d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.name))]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/FinishButton.vue?vue&type=template&id=7baadcde&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/FinishButton.vue?vue&type=template&id=7baadcde& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "h-10 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded border border-red-500 cursor-pointer",
    },
    [
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
              d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
          }),
          _c("path", {
            attrs: {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.name))]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/NextButton.vue?vue&type=template&id=7e31b77e&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/NextButton.vue?vue&type=template&id=7e31b77e& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "h-10 focus:outline-none flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-800 text-xs sm:text-sm rounded cursor-pointer hover:bg-gray-700",
    },
    [
      _c("span", [_vm._v(_vm._s(_vm.name))]),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass: "w-4 h-4 rtl:flip",
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
              d: "M14 5l7 7m0 0l-7 7m7-7H3",
            },
          }),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PrevButton.vue?vue&type=template&id=13a28284&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PrevButton.vue?vue&type=template&id=13a28284& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "h-10 focus:outline-none flex items-center justify-center gap-2 px-4 py-2 text-white bg-gray-800 text-xs sm:text-sm rounded cursor-pointer hover:bg-gray-700",
    },
    [
      _c(
        "svg",
        {
          staticClass: "w-4 h-4 rtl:flip",
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
              d: "M10 19l-7-7m0 0l7-7m-7 7h18",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.name))]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=template&id=47b50bea&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "q-chip relative text-sm flex flex-col items-center justify-between border border-b-0 rounded-sm",
      class: [_vm.chipClasses, _vm.borderClasses],
    },
    [
      _c(
        "span",
        {
          staticClass: "q-chip-sno flex justify-center items-center",
          class: [_vm.textClasses],
        },
        [_vm._v(_vm._s(_vm.sno))]
      ),
      _vm._v(" "),
      _c("span", {
        staticClass:
          "q-chip-status overflow-hidden text-white absolute bottom-0 h-3 rounded-bl-sm rounded-br-sm",
        class: [_vm.statusClasses, _vm.borderClasses],
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ReviewButton.vue?vue&type=template&id=03b15563&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/ReviewButton.vue?vue&type=template&id=03b15563& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "h-10 flex items-center justify-center gap-2 px-4 py-2 bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white text-xs sm:text-sm rounded border border-yellow-600 cursor-pointer",
    },
    [
      _c(
        "svg",
        {
          staticClass: "w-4 h-4 hidden sm:visible",
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
              d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
            },
          }),
        ]
      ),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.name))]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=template&id=75af69e8&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/ExamQuestionChip.vue?vue&type=template&id=75af69e8& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
          name: "tooltip",
          rawName: "v-tooltip.top",
          value: _vm.questionStatus,
          expression: "questionStatus",
          modifiers: { top: true },
        },
      ],
      staticClass: "w-full overflow-hidden rounded-sm cursor-pointer",
    },
    [
      _c("question-chip", {
        attrs: {
          sno: _vm.sno,
          status: _vm.chipStatus,
          "is-active": _vm.active,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=template&id=991d97f6&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/LightQuestionCard.vue?vue&type=template&id=991d97f6& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "w-full overflow-hidden dark_question_card rounded cursor-pointer mb-1",
    },
    [
      _c(
        "div",
        {
          staticClass: "hover:bg-gray-200 rounded p-4",
          class: [_vm.active ? "bg-gray-200" : "text-gray-600"],
        },
        [
          _c(
            "div",
            { staticClass: "flex items-start gap-4" },
            [
              _c("question-chip", {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip.right",
                    value: _vm.questionStatus,
                    expression: "questionStatus",
                    modifiers: { right: true },
                  },
                ],
                attrs: {
                  sno: _vm.sno,
                  status: _vm.chipStatus,
                  "is-active": _vm.active,
                },
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "leading-relaxed text-sm",
                domProps: { innerHTML: _vm._s(_vm.question.question) },
              }),
            ],
            1
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=template&id=7c46e63c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/QuizQuestionCard.vue?vue&type=template&id=7c46e63c& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "q-data" }, [
    _c("div", { staticClass: "flex gap-2 mb-4" }, [
      _c("span", { staticClass: "text-sm font-semibold" }, [
        _vm._v("Q" + _vm._s(_vm.sno) + " of " + _vm._s(_vm.totalQuestions)),
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "text-sm" }, [_vm._v("|")]),
      _vm._v(" "),
      _c("span", { staticClass: "text-sm text-gray-600 uppercase" }, [
        _vm._v(_vm._s(_vm.question.skill)),
      ]),
    ]),
    _vm._v(" "),
    _c("div", {
      staticClass: "question",
      domProps: { innerHTML: _vm._s(_vm.question.question) },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/AudioAttachment.vue?vue&type=template&id=080677fd& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "audio-options z-40" }, [
    _c(
      "div",
      {
        staticClass:
          "font-mono px-2 py-1 inline-block text-gray-600 rounded text-sm mb-2",
      },
      [_vm._v("\n        Listen to the audio and answer the question\n    ")]
    ),
    _vm._v(" "),
    _vm.options.audio_type === "mp3"
      ? _c(
          "div",
          [
            _c(
              "vue-plyr",
              { ref: _vm.reference, attrs: { options: _vm.plyrOptions } },
              [
                _c("audio", { attrs: { controls: "", crossorigin: "" } }, [
                  _c("source", {
                    attrs: { src: _vm.options.link, type: "audio/mp3" },
                  }),
                ]),
              ]
            ),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.options.audio_type === "ogg"
      ? _c(
          "div",
          [
            _c(
              "vue-plyr",
              { ref: _vm.reference, attrs: { options: _vm.plyrOptions } },
              [
                _c("audio", { attrs: { controls: "", crossorigin: "" } }, [
                  _c("source", {
                    attrs: { src: _vm.options.link, type: "audio/ogg" },
                  }),
                ]),
              ]
            ),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue?vue&type=template&id=1ce9bd2b& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "audio-options" },
    [
      _c(
        "div",
        {
          staticClass:
            "font-mono px-2 py-1 inline-block text-gray-600 rounded text-sm mb-2",
        },
        [_vm._v("\n        Read the passage and answer the question\n    ")]
      ),
      _vm._v(" "),
      _c(
        "perfect-scrollbar",
        {
          ref: "comScroll",
          staticStyle: { "max-height": "24rem" },
          attrs: { options: _vm.scrollbarOptions },
        },
        [_c("div", { domProps: { innerHTML: _vm._s(_vm.passage) } })]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/Attachments/VideoAttachment.vue?vue&type=template&id=29e26be2& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "audio-options" }, [
    _vm.showMessage
      ? _c(
          "div",
          {
            staticClass:
              "font-mono px-2 py-1 inline-block text-gray-600 rounded text-sm mb-2",
          },
          [_vm._v("\n        Watch the video and answer the question\n    ")]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.options.video_type === "mp4"
      ? _c(
          "div",
          [
            _c(
              "vue-plyr",
              { ref: _vm.reference, attrs: { options: _vm.plyrOptions } },
              [
                _c("video", { attrs: { src: _vm.options.link } }, [
                  _c("source", {
                    attrs: { src: _vm.options.link, type: "video/mp4" },
                  }),
                ]),
              ]
            ),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.options.video_type === "youtube"
      ? _c(
          "div",
          [
            _c(
              "vue-plyr",
              { ref: _vm.reference, attrs: { options: _vm.plyrOptions } },
              [
                _c("div", { staticClass: "plyr__video-embed" }, [
                  _c("iframe", {
                    attrs: {
                      src: _vm.getVideoLink,
                      allowfullscreen: "",
                      allowtransparency: "",
                      allow: "autoplay",
                    },
                  }),
                ]),
              ]
            ),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.options.video_type === "vimeo"
      ? _c(
          "div",
          [
            _c("vue-plyr", { ref: _vm.reference }, [
              _c("div", { staticClass: "plyr__video-embed" }, [
                _c("iframe", { attrs: { src: _vm.getVideoLink } }),
              ]),
            ]),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=template&id=4f841aee&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/FIBInteractiveOptions.vue?vue&type=template&id=4f841aee& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "q-inputs" },
    [
      _c(
        "div",
        {
          staticClass:
            "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
        },
        [_vm._v("\n        " + _vm._s(_vm.__("fib_hint")) + "\n    ")]
      ),
      _vm._v(" "),
      _vm._l(_vm.options, function (blank, index) {
        return _c("div", { key: "blank_" + index }, [
          _c("div", { class: _vm.labelClass(index) }, [
            _c("div", { staticClass: "i-id" }, [
              _c(
                "label",
                { attrs: { for: _vm.question_id + "ans_" + (blank - 1) } },
                [_vm._v(_vm._s(blank))]
              ),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.answer[blank - 1],
                  expression: "answer[blank-1]",
                },
              ],
              attrs: {
                id: _vm.question_id + "ans_" + (blank - 1),
                placeholder: "Type your answer for blank " + blank,
              },
              domProps: { value: _vm.answer[blank - 1] },
              on: {
                change: _vm.selectAnswer,
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.answer, blank - 1, $event.target.value)
                },
              },
            }),
          ]),
        ])
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=template&id=daaa4fa0&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MMAInteractiveOptions.vue?vue&type=template&id=daaa4fa0& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "q-radio" }, [
    _c(
      "div",
      {
        staticClass:
          "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
      },
      [_vm._v("\n        " + _vm._s(_vm.__("mma_hint")) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "q-options" },
      _vm._l(_vm.options, function (option, index) {
        return _c("div", { key: option, staticClass: "q-option" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.answer,
                expression: "answer",
              },
            ],
            attrs: {
              type: "checkbox",
              id: "q_" + _vm.question_id + "_option_" + index,
              disabled:
                _vm.answer.length >= 3 && _vm.answer.indexOf(index + 1) === -1,
            },
            domProps: {
              value: index + 1,
              checked: Array.isArray(_vm.answer)
                ? _vm._i(_vm.answer, index + 1) > -1
                : _vm.answer,
            },
            on: {
              change: [
                function ($event) {
                  var $$a = _vm.answer,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = index + 1,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.answer = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.answer = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.answer = $$c
                  }
                },
                _vm.selectAnswer,
              ],
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "cursor-pointer",
              class: _vm.labelClass(index),
              attrs: { for: "q_" + _vm.question_id + "_option_" + index },
            },
            [
              _c("span", { staticClass: "o-id squared" }, [
                _c("strong", [_vm._v(_vm._s(index + 1))]),
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "o-text",
                domProps: { innerHTML: _vm._s(option) },
              }),
            ]
          ),
        ])
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=template&id=7ab4316a&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MSAInteractiveOptions.vue?vue&type=template&id=7ab4316a& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "q-radio" }, [
    _c(
      "div",
      {
        staticClass:
          "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
      },
      [_vm._v("\n            " + _vm._s(_vm.__("msa_hint")) + "\n        ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "q-options" },
      _vm._l(_vm.options, function (option, index) {
        return _c("div", { key: option, staticClass: "q-option" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.answer,
                expression: "answer",
              },
            ],
            attrs: { type: "radio", id: _vm.question_id + "_option_" + index },
            domProps: {
              value: index + 1,
              checked: _vm._q(_vm.answer, index + 1),
            },
            on: {
              change: [
                function ($event) {
                  _vm.answer = index + 1
                },
                _vm.selectAnswer,
              ],
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "cursor-pointer",
              class: _vm.labelClass(index),
              attrs: { for: _vm.question_id + "_option_" + index },
            },
            [
              _c("span", { staticClass: "o-id" }, [
                _c("strong", [_vm._v(_vm._s(index + 1))]),
              ]),
              _vm._v(" "),
              _c("span", {
                staticClass: "o-text",
                domProps: { innerHTML: _vm._s(option) },
              }),
            ]
          ),
        ])
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=template&id=2ca482e4&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/MTFInteractiveOptions.vue?vue&type=template&id=2ca482e4& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "q-radio" }, [
    _c(
      "div",
      {
        staticClass:
          "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
      },
      [_vm._v("\n        " + _vm._s(_vm.__("mtf_hint")) + "\n    ")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "flex flex-col sm:flex-row gap-2 q-options" }, [
      _c(
        "div",
        { staticClass: "w-full flex flex-col justify-between" },
        _vm._l(_vm.options, function (item, index) {
          return _c("div", { key: item.id, staticClass: "q-option h-full" }, [
            _c(
              "label",
              {
                staticClass: "h-full",
                attrs: { for: _vm.question_id + "_option_" + index },
              },
              [
                _c("span", { staticClass: "o-id" }, [
                  _c("strong", [_vm._v(_vm._s(index + 1))]),
                ]),
                _vm._v(" "),
                _c("span", {
                  staticClass: "o-text",
                  domProps: { innerHTML: _vm._s(item.value) },
                }),
              ]
            ),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-full" },
        [
          _c(
            "draggable",
            {
              attrs: { group: "options" },
              on: { end: _vm.selectAnswer },
              model: {
                value: _vm.answer,
                callback: function ($$v) {
                  _vm.answer = $$v
                },
                expression: "answer",
              },
            },
            [
              _c(
                "transition-group",
                {
                  staticClass: "w-full flex flex-col justify-between",
                  attrs: { name: "flip-list", tag: "div" },
                },
                _vm._l(_vm.answer, function (item, index) {
                  return _c(
                    "div",
                    { key: item.id, staticClass: "q-option h-full" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "h-full",
                          class: _vm.labelClass(index),
                          attrs: { for: _vm.question_id + "_pair_" + index },
                        },
                        [
                          _c("span", { staticClass: "o-id match" }, [
                            _c("strong", [_vm._v(_vm._s(index + 1))]),
                            _vm._v(" - "),
                            _c("strong", [_vm._v(_vm._s(item.code))]),
                          ]),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "o-text",
                            domProps: { innerHTML: _vm._s(item.value) },
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "o-bars text-gray-400" }, [
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
                                    d: "M4 6h16M4 12h16M4 18h16",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ]
                  )
                }),
                0
              ),
            ],
            1
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=template&id=65a80850&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/ORDInteractiveOptions.vue?vue&type=template&id=65a80850& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "q-radio" }, [
    _c(
      "div",
      {
        staticClass:
          "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
      },
      [_vm._v("\n        " + _vm._s(_vm.__("ord_hint")) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "q-options" },
      [
        _c(
          "draggable",
          {
            attrs: { group: "options" },
            on: { end: _vm.selectAnswer },
            model: {
              value: _vm.answer,
              callback: function ($$v) {
                _vm.answer = $$v
              },
              expression: "answer",
            },
          },
          [
            _c(
              "transition-group",
              { attrs: { name: "flip-list", tag: "div" } },
              _vm._l(_vm.answer, function (option, index) {
                return _c("div", { key: option.id, staticClass: "q-option" }, [
                  _c(
                    "label",
                    {
                      class: _vm.labelClass(index),
                      attrs: { for: _vm.question_id + "_option_" + index },
                    },
                    [
                      _c("span", { staticClass: "o-id match" }, [
                        _c("strong", [_vm._v(_vm._s(index + 1))]),
                        _vm._v(" - "),
                        _c("strong", [_vm._v(_vm._s(option.code))]),
                      ]),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "o-text",
                        domProps: { innerHTML: _vm._s(option.value) },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "o-bars text-gray-400" }, [
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
                                d: "M4 6h16M4 12h16M4 18h16",
                              },
                            }),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ])
              }),
              0
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=template&id=7ed387d2&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/ExamInteract/SAQInteractiveOptions.vue?vue&type=template&id=7ed387d2& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "q-inputs" }, [
    _c(
      "div",
      {
        staticClass:
          "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
      },
      [_vm._v("\n        " + _vm._s(_vm.__("saq_hint")) + "\n    ")]
    ),
    _vm._v(" "),
    _c("div", { class: _vm.labelClass() }, [
      _c("div", { staticClass: "i-id" }, [
        _c("label", { attrs: { for: _vm.question_id } }, [_vm._v("A")]),
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.answer,
            expression: "answer",
          },
        ],
        attrs: { id: _vm.question_id, placeholder: "Type your answer" },
        domProps: { value: _vm.answer },
        on: {
          change: _vm.selectAnswer,
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.answer = $event.target.value
          },
        },
      }),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue?vue&type=template&id=5b769485& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "w-full overflow-hidden dark_question_card rounded cursor-pointer",
    },
    [
      _c(
        "div",
        {
          staticClass:
            "hover:bg-gray-600 text-gray-400 hover:text-gray-200 rounded p-4",
        },
        [
          _c(
            "div",
            { staticClass: "flex items-start gap-4 opacity-25" },
            [
              _c("Skeleton", {
                staticClass: "bg-gray-700",
                attrs: { width: "1rem", height: "10px" },
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-full" },
                [
                  _c("Skeleton", {
                    staticClass: "w-full mb-2",
                    attrs: { height: "10px" },
                  }),
                  _vm._v(" "),
                  _c("Skeleton", {
                    staticClass: "w-full mb-2",
                    attrs: { height: "10px" },
                  }),
                  _vm._v(" "),
                  _c("Skeleton", {
                    staticClass: "w-full",
                    attrs: { height: "10px" },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue?vue&type=template&id=53d23eae& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/ExamLayout.vue?vue&type=template&id=16182f2d&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/ExamLayout.vue?vue&type=template&id=16182f2d& ***!
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
    "div",
    { staticClass: "h-screen max-h-screen overflow-hidden select-none" },
    [
      _c(
        "div",
        {
          staticClass:
            "w-full h-16 absolute z-30 top-0 ltr:right-0 rtl:left-0 mx-auto bg-gray-800 shadow-lg",
        },
        [
          _c(
            "div",
            { staticClass: "w-full h-full mx-auto px-4 sm:px-6 lg:px-8" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "h-full flex flex-col justify-center items-center",
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "w-full flex items-center justify-end gap-4 sm:gap-0 sm:justify-between",
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "hidden sm:block" },
                        [_vm._t("title")],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex items-center gap-4" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "hidden sm:block focus:outline-none text-white text-sm bg-gray-700 hover:bg-gray-600 rounded-sm p-2",
                            on: { click: _vm.toggleFullScreen },
                          },
                          [
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
                                    d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "h4",
                          {
                            staticClass:
                              "flex items-center text-white text-sm bg-gray-700 rounded-sm px-4 py-2",
                          },
                          [
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
                                    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                  },
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _vm._t("timer"),
                          ],
                          2
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "z-20 h-16 mx-auto w-full absolute top-16 left-0 bg-white flex justify-left gap-4 items-center border-b border-gray-200 px-4 sm:px-6 lg:px-8",
        },
        [
          _c(
            "div",
            { staticClass: "w-full flex justify-left gap-4 items-center" },
            [_vm._t("sections")],
            2
          ),
          _vm._v(" "),
          _c("div", {
            staticClass: "hidden md:block md:w-96 h-4 ltr:ml-8 rtl:mr-8",
          }),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-no-wrap bg-white" }, [
        _c(
          "div",
          { staticClass: "relative h-full container mx-auto md:w-4/5 w-full" },
          [
            _c(
              "v-offline",
              { on: { "detected-condition": _vm.detectOffline } },
              [
                !_vm.online
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "flex items-center z-50 p-2 bg-red-700 text-sm rounded shadow-md absolute top-5 right-5 text-white",
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "w-6 h-6 mr-2",
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
                                d: "M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414",
                              },
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.__(
                                "You are offline. Responses will not save."
                              )
                            )
                          ),
                        ]),
                      ]
                    )
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _vm._t("default"),
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "w-96 overflow-hidden absolute sm:relative md:h-full flex-col justify-between hidden border-l border-gray-100 sm:flex sm:flex-col transition duration-150 ease-in-out",
          },
          [
            _c("div", {
              staticClass:
                "z-20 h-16 w-full mx-auto absolute top-0 right-0 flex items-center px-4 shadow",
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "z-20 h-16 w-full mx-auto absolute top-16 ltr:left-0 rtl:right-0 bg-white border-b border-l border-gray-200 flex ltr:flex-row rtl:flex-row-reverse justify-between items-center px-4 sm:px-6 lg:px-8",
              },
              [_vm._t("actions")],
              2
            ),
            _vm._v(" "),
            _c(
              "perfect-scrollbar",
              {
                ref: "scroll",
                staticClass:
                  "h-screen max-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-72 bg-gray-50 border-l border-gray-200",
                attrs: { options: _vm.scrollbarOptions },
              },
              [_vm._t("questions")],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-96 w-full absolute left-0 bottom-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-l border-gray-200",
              },
              [_vm._t("stats")],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-96 w-full absolute left-0 bottom-0 px-4 sm:px-6 lg:px-8 bg-white border-t border-l border-gray-200",
              },
              [_vm._t("footer")],
              2
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "mobileNav",
            staticClass:
              "w-80 h-full z-40 absolute bg-gray-50 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out",
          },
          [
            _vm.moved
              ? _c(
                  "div",
                  {
                    staticClass:
                      "h-10 w-10 text-white bg-gray-800 absolute ltr:right-0 rtl:left-0 mt-3 ltr:-mr-10 rtl:-ml-10 flex items-center shadow ltr:rounded-tr ltr:rounded-br rtl:rounded-tl rtl:rounded-bl justify-center cursor-pointer",
                    attrs: { id: "openSideBar" },
                    on: {
                      click: function ($event) {
                        return _vm.sidebarHandler(true)
                      },
                    },
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
                            d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                          },
                        }),
                      ]
                    ),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            !_vm.moved
              ? _c(
                  "div",
                  {
                    staticClass:
                      "h-10 w-10 text-white bg-gray-800 absolute ltr:right-0 rtl:left-0 mt-3 z-50 ltr:mr-4 rtl:ml-4 flex items-center shadow rounded justify-center cursor-pointer",
                    attrs: { id: "closeSideBar" },
                    on: {
                      click: function ($event) {
                        return _vm.sidebarHandler(true)
                      },
                    },
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
                            d: "M6 18L18 6M6 6l12 12",
                          },
                        }),
                      ]
                    ),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "z-30 h-16 w-full mx-auto absolute top-0 left-0 bg-gray-800 shadow flex items-center px-4",
              },
              [_vm._t("title")],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "z-20 h-16 w-full mx-auto absolute top-16 left-0 bg-gray-50 border-b border-gray-200 flex ltr:flex-row rtl:flex-row-reverse justify-between items-center px-4",
              },
              [_vm._t("actions")],
              2
            ),
            _vm._v(" "),
            _c(
              "perfect-scrollbar",
              {
                ref: "scroll",
                staticClass:
                  "h-screen max-h-screen overflow-hidden px-4 pt-32 pb-72",
                attrs: { options: _vm.scrollbarOptions },
              },
              [_vm._t("questions")],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-full absolute bottom-16 border-t border-gray-200 bg-white px-4",
              },
              [_vm._t("stats")],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-full absolute bottom-0 border-t border-gray-200 bg-white px-4",
              },
              [_vm._t("footer")],
              2
            ),
          ],
          1
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=template&id=ce501f94&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/ExamScreen.vue?vue&type=template&id=ce501f94&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "exam-layout",
    {
      scopedSlots: _vm._u([
        {
          key: "title",
          fn: function () {
            return [
              _c("h4", { staticClass: "font-semibold text-white" }, [
                _vm._v(_vm._s(_vm.exam.title)),
              ]),
            ]
          },
          proxy: true,
        },
        {
          key: "timer",
          fn: function () {
            return [
              _c(
                "span",
                { staticClass: "ltr:ml-2 rtl:mr-2" },
                [
                  _c("vue-countdown", {
                    attrs: {
                      time: _vm.remainingTime * 1000,
                      transform: _vm.transformSlotProps,
                    },
                    on: { end: _vm.timeUp },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var days = ref.days
                          var hours = ref.hours
                          var minutes = ref.minutes
                          var seconds = ref.seconds
                          return [
                            _vm._v(
                              "\n                " +
                                _vm._s(hours !== "00" ? hours + ":" : "") +
                                _vm._s(minutes) +
                                ":" +
                                _vm._s(seconds) +
                                "\n            "
                            ),
                          ]
                        },
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
        {
          key: "actions",
          fn: function () {
            return [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip.bottom",
                      value:
                        _vm.touchedQuestions === 0
                          ? "Progress Saved"
                          : "Some Responses Need to Save",
                      expression:
                        "touchedQuestions === 0 ? 'Progress Saved': 'Some Responses Need to Save'",
                      modifiers: { bottom: true },
                    },
                  ],
                  staticClass:
                    "flex ltr:flex-row rtl:flex-row-reverse items-center",
                },
                [
                  _c("div", {
                    staticClass: "w-2 h-2 rounded-full ltr:mr-2 rtl:mr-2",
                    class: [
                      _vm.touchedQuestions === 0
                        ? "bg-green-600"
                        : "bg-yellow-600",
                    ],
                  }),
                  _vm._v(" "),
                  _vm.submitting
                    ? _c("h5", { staticClass: "text-sm text-gray-800" }, [
                        _vm._v(_vm._s(_vm.__("Saving Progress..."))),
                      ])
                    : _c("h5", { staticClass: "text-sm text-gray-800" }, [
                        _vm._v(
                          _vm._s(_vm.answered) +
                            "/" +
                            _vm._s(_vm.sectionTotalQuestions) +
                            " " +
                            _vm._s(_vm.__("Answered"))
                        ),
                      ]),
                ]
              ),
              _vm._v(" "),
              _vm.exam.settings.list_questions
                ? _c(
                    "button",
                    {
                      staticClass:
                        "text-gray-400 hover:text-gray-800 focus:outline-none",
                      on: {
                        click: function ($event) {
                          _vm.chipView = !_vm.chipView
                        },
                      },
                    },
                    [
                      !_vm.chipView
                        ? _c(
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
                                  d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
                                },
                              }),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.chipView
                        ? _c(
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
                                  d: "M4 6h16M4 10h16M4 14h16M4 18h16",
                                },
                              }),
                            ]
                          )
                        : _vm._e(),
                    ]
                  )
                : _vm._e(),
            ]
          },
          proxy: true,
        },
        {
          key: "sections",
          fn: function () {
            return [
              _c(
                "div",
                {
                  staticClass:
                    "hw-prev rtl:flip text-green-600 hover:text-green-800 cursor-pointer",
                  on: { click: _vm.swipeSectionPrev },
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
                          d: "M15 19l-7-7 7-7",
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "swiper",
                {
                  ref: "mySwiper",
                  staticClass: "swiper",
                  attrs: { options: _vm.swiperOptions },
                },
                _vm._l(_vm.sections, function (section, index) {
                  return _c(
                    "swiper-slide",
                    {
                      key: "exam_section_" + section.id,
                      staticClass: "ltr:pr-4 rtl:pl-4",
                    },
                    [
                      section.id === _vm.sections[_vm.current_section].id
                        ? _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip.bottom",
                                  value: "Current Section",
                                  expression: "'Current Section'",
                                  modifiers: { bottom: true },
                                },
                              ],
                              staticClass:
                                "ease-linear transition-all duration-150 text-sm focus:outline-none flex items-center gap-2 border border-green-800 hover:border-green-600 text-white bg-green-800 hover:bg-green-600 rounded-sm py-2 px-4",
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "w-5 h-5 ease-linear transition-all duration-150 rounded-full bg-green-100 text-green-600",
                                },
                                [_vm._v(_vm._s(section.sno))]
                              ),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(section.name))]),
                              _vm._v(" "),
                              _vm.exam.settings.disable_section_navigation
                                ? _c(
                                    "span",
                                    [
                                      _c("vue-countdown", {
                                        attrs: {
                                          time: section.remainingTime * 1000,
                                          transform: _vm.transformSlotProps,
                                        },
                                        on: {
                                          end: function ($event) {
                                            return _vm.goToNextSection(
                                              index + 1
                                            )
                                          },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var days = ref.days
                                                var hours = ref.hours
                                                var minutes = ref.minutes
                                                var seconds = ref.seconds
                                                return [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        hours !== "00"
                                                          ? hours + ":"
                                                          : ""
                                                      ) +
                                                      _vm._s(minutes) +
                                                      ":" +
                                                      _vm._s(seconds) +
                                                      "\n                    "
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ]
                          )
                        : _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip.bottom",
                                  value: _vm.exam.settings
                                    .disable_section_navigation
                                    ? "Locked"
                                    : "Unlocked",
                                  expression:
                                    "exam.settings.disable_section_navigation ? 'Locked' : 'Unlocked'",
                                  modifiers: { bottom: true },
                                },
                              ],
                              staticClass:
                                "group ease-linear transition-all duration-150 text-sm focus:outline-none flex items-center gap-2 bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white rounded-sm py-2 px-4",
                              class: {
                                "bg-gray-100":
                                  _vm.exam.settings.disable_section_navigation,
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.changeSection(index)
                                },
                              },
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "w-5 h-5 ease-linear transition-all duration-150 rounded-full bg-green-600 text-green-100 group-hover:bg-green-100 group-hover:text-green-600",
                                },
                                [_vm._v(_vm._s(section.sno))]
                              ),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(section.name))]),
                            ]
                          ),
                    ]
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "hw-next rtl:flip text-green-600 hover:text-green-800 cursor-pointer",
                  on: { click: _vm.swipeSectionNext },
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
                          d: "M9 5l7 7-7 7",
                        },
                      }),
                    ]
                  ),
                ]
              ),
            ]
          },
          proxy: true,
        },
        {
          key: "questions",
          fn: function () {
            return [
              _c("div", [
                _vm.loading
                  ? _c("ul", [
                      _c("li", [_c("NavigationQuestionCardShimmer")], 1),
                      _vm._v(" "),
                      _c("li", [_c("NavigationQuestionCardShimmer")], 1),
                      _vm._v(" "),
                      _c("li", [_c("NavigationQuestionCardShimmer")], 1),
                      _vm._v(" "),
                      _c("li", [_c("NavigationQuestionCardShimmer")], 1),
                    ])
                  : _c(
                      "ul",
                      {
                        staticClass: "my-6",
                        class: {
                          "flex flex-wrap justify-center items-center gap-2":
                            _vm.chipView,
                        },
                      },
                      _vm._l(_vm.questions, function (question, index) {
                        return _c(
                          "li",
                          {
                            key: question.code,
                            on: {
                              click: function ($event) {
                                return _vm.jumpToQuestion(index)
                              },
                            },
                          },
                          [
                            !_vm.chipView
                              ? _c("light-question-card", {
                                  attrs: {
                                    question: question,
                                    sno: index + 1,
                                    is_correct: question.is_correct,
                                    status: question.status,
                                    active: _vm.current_question === index,
                                  },
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.chipView
                              ? _c("exam-question-chip", {
                                  attrs: {
                                    sno: index + 1,
                                    is_correct: question.is_correct,
                                    status: question.status,
                                    active: _vm.current_question === index,
                                  },
                                })
                              : _vm._e(),
                          ],
                          1
                        )
                      }),
                      0
                    ),
              ]),
            ]
          },
          proxy: true,
        },
        {
          key: "stats",
          fn: function () {
            return [
              _c(
                "div",
                {
                  staticClass:
                    "w-full h-56 bg-white grid grid-cols-2 bg-white py-4",
                },
                [
                  _c(
                    "div",
                    { staticClass: "flex items-center gap-2" },
                    [
                      _c("question-chip", {
                        attrs: { sno: _vm.answered, status: "success" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-xs" }, [
                        _vm._v(_vm._s(_vm.__("Answered"))),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex items-center gap-2" },
                    [
                      _c("question-chip", {
                        attrs: {
                          sno: _vm.notAnsweredQuestions,
                          status: "danger",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-xs" }, [
                        _vm._v(_vm._s(_vm.__("Not Answered"))),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex items-center gap-2" },
                    [
                      _c("question-chip", {
                        attrs: {
                          sno: _vm.markForReviewQuestions,
                          status: "warning",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-xs" }, [
                        _vm._v(_vm._s(_vm.__("Marked for Review"))),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex items-center gap-2" },
                    [
                      _c("question-chip", {
                        attrs: {
                          sno: _vm.answeredMarkForReviewQuestions,
                          status: "caution",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-xs" }, [
                        _vm._v(_vm._s(_vm.__("Answered & Marked for Review"))),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex items-center gap-2" },
                    [
                      _c("question-chip", {
                        attrs: {
                          sno: _vm.notVisitedQuestions,
                          status: "default",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-xs" }, [
                        _vm._v(_vm._s(_vm.__("Not Visited"))),
                      ]),
                    ],
                    1
                  ),
                ]
              ),
            ]
          },
          proxy: true,
        },
        {
          key: "footer",
          fn: function () {
            return [
              _c(
                "div",
                {
                  staticClass:
                    "w-full h-16 flex items-center justify-center bg-white",
                },
                [
                  !_vm.exam.settings.disable_finish_button
                    ? _c(
                        "button",
                        {
                          staticClass: "w-full focus:outline-none",
                          on: { click: _vm.finishAlert },
                        },
                        [
                          _c("finish-button", {
                            attrs: { name: _vm.__("Finish Test") },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                ]
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
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
      _c(
        "perfect-scrollbar",
        {
          ref: "scroll2",
          staticClass: "h-screen max-h-screen pt-32 pb-16",
          attrs: { options: _vm.scrollbarOptions },
        },
        [
          _c("div", { staticClass: "mx-auto px-4 sm:px-6 lg:px-8" }, [
            _c("div", { staticClass: "flex flex-col justify-center" }, [
              _vm.loading
                ? _c(
                    "div",
                    { staticClass: "w-full mt-4 py-4 sm:w-2/3" },
                    [_c("PracticeQuestionShimmer", { staticClass: "w-full" })],
                    1
                  )
                : _c(
                    "div",
                    { staticClass: "w-full mt-4 py-4" },
                    _vm._l(_vm.questions, function (question, index) {
                      return _c(
                        "div",
                        { key: question.id, staticClass: "w-full" },
                        [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.current_question === index,
                                  expression: "current_question === index",
                                },
                              ],
                              staticClass: "flex flex-col sm:flex-row gap-4",
                              attrs: { id: question.code },
                            },
                            [
                              question.attachment_type != null
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "w-full sm:w-1/3 sm:ltr:border-r sm:rtl:border-l sm:border-gray-300 ltr:pr-4 rtl:pl-4",
                                    },
                                    [
                                      question.attachment_type === "audio"
                                        ? _c(
                                            "div",
                                            [
                                              _c("audio-attachment", {
                                                attrs: {
                                                  reference:
                                                    "player_" + question.code,
                                                  options: question.attachment,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      question.attachment_type === "video"
                                        ? _c(
                                            "div",
                                            [
                                              _c("video-attachment", {
                                                attrs: {
                                                  reference:
                                                    "player_" + question.code,
                                                  options: question.attachment,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      question.attachment_type ===
                                      "comprehension"
                                        ? _c(
                                            "div",
                                            [
                                              _c("comprehension-attachment", {
                                                attrs: {
                                                  passage: question.attachment,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "w-full sm:w-2/3" }, [
                                _c(
                                  "div",
                                  [
                                    _c("quiz-question-card", {
                                      key: question.card,
                                      attrs: {
                                        question: question,
                                        sno: index + 1,
                                        "total-questions":
                                          _vm.sectionTotalQuestions,
                                      },
                                    }),
                                    _vm._v(" "),
                                    question.questionType === "MSA" ||
                                    question.questionType === "TOF"
                                      ? _c(
                                          "div",
                                          { staticClass: "mt-4" },
                                          [
                                            _c("MSAInteractiveOptions", {
                                              key: question.code,
                                              attrs: {
                                                "parent-qid": question.code,
                                                status: question.status,
                                                "parent-options":
                                                  question.options,
                                                "parent-answer":
                                                  question.user_answer,
                                              },
                                              on: {
                                                modifyAnswer: _vm.updateAnswer,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.questionType === "MMA"
                                      ? _c(
                                          "div",
                                          { staticClass: "mt-4" },
                                          [
                                            _c("MMAInteractiveOptions", {
                                              key: question.code,
                                              attrs: {
                                                "parent-qid": question.code,
                                                status: question.status,
                                                "parent-options":
                                                  question.options,
                                                "parent-answer":
                                                  question.user_answer,
                                              },
                                              on: {
                                                modifyAnswer: _vm.updateAnswer,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.questionType === "MTF"
                                      ? _c(
                                          "div",
                                          { staticClass: "mt-4" },
                                          [
                                            _c("MTFInteractiveOptions", {
                                              key: question.code,
                                              attrs: {
                                                parentQid: question.code,
                                                status: question.status,
                                                "parent-options":
                                                  question.options,
                                                "parent-answer":
                                                  question.user_answer,
                                              },
                                              on: {
                                                modifyAnswer: _vm.updateAnswer,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.questionType === "ORD"
                                      ? _c(
                                          "div",
                                          { staticClass: "mt-4" },
                                          [
                                            _c("ORDInteractiveOptions", {
                                              key: question.code,
                                              attrs: {
                                                parentQid: question.code,
                                                status: question.status,
                                                "parent-options":
                                                  question.options,
                                                "parent-answer":
                                                  question.user_answer,
                                              },
                                              on: {
                                                modifyAnswer: _vm.updateAnswer,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.questionType === "FIB"
                                      ? _c(
                                          "div",
                                          { staticClass: "mt-4" },
                                          [
                                            _c("FIBInteractiveOptions", {
                                              key: question.code,
                                              attrs: {
                                                parentQid: question.code,
                                                status: question.status,
                                                "parent-options":
                                                  question.options,
                                                "parent-answer":
                                                  question.user_answer,
                                              },
                                              on: {
                                                modifyAnswer: _vm.updateAnswer,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    question.questionType === "SAQ"
                                      ? _c(
                                          "div",
                                          { staticClass: "mt-4" },
                                          [
                                            _c("SAQInteractiveOptions", {
                                              key: question.code,
                                              attrs: {
                                                parentQid: question.code,
                                                status: question.status,
                                                "parent-options":
                                                  question.options,
                                                "parent-answer":
                                                  question.user_answer,
                                              },
                                              on: {
                                                modifyAnswer: _vm.updateAnswer,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                  ],
                                  1
                                ),
                              ]),
                            ]
                          ),
                        ]
                      )
                    }),
                    0
                  ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "w-full h-16 absolute z-30 bottom-0 right-0 border-t border-gray-200 mx-auto bg-white",
        },
        [
          _c(
            "div",
            { staticClass: "w-full h-full mx-auto px-4 sm:px-6 lg:px-8" },
            [
              !_vm.loading
                ? _c(
                    "div",
                    {
                      staticClass:
                        "h-full flex flex-col justify-center items-center",
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "w-full flex items-center gap-2 justify-between",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "flex items-center gap-2" },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "focus:outline-none",
                                  on: { click: _vm.clearAnswer },
                                },
                                [
                                  _c("clear-button", {
                                    attrs: { name: _vm.__("Clear Answer") },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "focus:outline-none",
                                  on: { click: _vm.markForReview },
                                },
                                [
                                  _c("review-button", {
                                    attrs: { name: _vm.__("Mark for Review") },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex items-center gap-2" },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "focus:outline-none",
                                  on: { click: _vm.nextQuestion },
                                },
                                [
                                  _c("next-button", {
                                    attrs: { name: _vm.nextBtnText },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "Dialog",
        {
          style: { width: "350px" },
          attrs: {
            header: "Confirmation",
            visible: _vm.displayConfirmation,
            modal: true,
          },
          on: {
            "update:visible": function ($event) {
              _vm.displayConfirmation = $event
            },
          },
          scopedSlots: _vm._u([
            {
              key: "footer",
              fn: function () {
                return [
                  _c("Button", {
                    staticClass: "p-button-text",
                    attrs: { label: "No", icon: "pi pi-times" },
                    on: { click: _vm.closeConfirmation },
                  }),
                  _vm._v(" "),
                  _c("Button", {
                    staticClass: "p-button-text",
                    attrs: { label: "Yes", icon: "pi pi-check", autofocus: "" },
                    on: { click: _vm.finishTest },
                  }),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _c("div", { staticClass: "w-full flex gap-2 items-center mb-2" }, [
            _c("i", {
              staticClass:
                "pi pi-exclamation-triangle p-mr-3 text-xl text-red-500",
            }),
            _vm._v(" "),
            _c("span", { staticClass: "text-base" }, [
              _vm._v(_vm._s(_vm.__("Are you sure you want to finish?"))),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full flex gap-4 sm:justify-center items-center" },
            [
              _c("table", { staticClass: "w-full table-auto" }, [
                _c("tbody", [
                  _c("tr", [
                    _c(
                      "td",
                      {
                        staticClass:
                          "border border-emerald-500 px-4 py-2 text-emerald-600 text-sm",
                      },
                      [_vm._v(_vm._s(_vm.__("Answered")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass:
                          "border border-emerald-500 px-4 py-2 text-emerald-600 font-medium text-sm text-right",
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.answered) +
                            "\n                    "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "bg-emerald-200" }, [
                    _c(
                      "td",
                      {
                        staticClass:
                          "border border-emerald-500 px-4 py-2 text-emerald-600 text-sm",
                      },
                      [_vm._v(_vm._s(_vm.__("Not Answered")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass:
                          "border border-emerald-500 px-4 py-2 text-emerald-600 font-medium text-sm text-right",
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.notAnsweredQuestions) +
                            "\n                    "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      {
                        staticClass:
                          "border border-emerald-500 px-4 py-2 text-emerald-600 text-sm",
                      },
                      [_vm._v(_vm._s(_vm.__("Not Visited")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass:
                          "border border-emerald-500 px-4 py-2 text-emerald-600 font-medium text-sm text-right",
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.notVisitedQuestions) +
                            "\n                    "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      {
                        staticClass:
                          "border border-emerald-500 px-4 py-2 text-emerald-600 text-sm",
                      },
                      [_vm._v(_vm._s(_vm.__("Marked for Review")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass:
                          "border border-emerald-500 px-4 py-2 text-emerald-600 font-medium text-sm text-right",
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.markForReviewQuestions) +
                            "\n                    "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      {
                        staticClass:
                          "border border-emerald-500 px-4 py-2 text-emerald-600 text-sm",
                      },
                      [_vm._v(_vm._s(_vm.__("Answered & Marked for Review")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass:
                          "border border-emerald-500 px-4 py-2 text-emerald-600 font-medium text-sm text-right",
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.answeredMarkForReviewQuestions) +
                            "\n                    "
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]),
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



/***/ })

}]);