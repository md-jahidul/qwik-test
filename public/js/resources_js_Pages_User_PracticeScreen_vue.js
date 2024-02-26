"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_PracticeScreen_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PauseButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PauseButton.vue?vue&type=script&lang=js& ***!
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
      "default": 'Pause'
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/SubmitButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/SubmitButton.vue?vue&type=script&lang=js& ***!
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
      "default": 'Submit'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DarkQuestionCard',
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
        return this.is_correct ? 'Correct Answer' : 'Wrong Answer';
      } else {
        return 'Not Answered';
      }
    },
    chipStatus: function chipStatus() {
      if (this.status === 'answered') {
        return this.is_correct ? 'success' : 'danger';
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Questions_Attachments_AudioAttachment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Questions/Attachments/AudioAttachment */ "./resources/js/Components/Questions/Attachments/AudioAttachment.vue");
/* harmony import */ var _Components_Questions_Attachments_VideoAttachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Questions/Attachments/VideoAttachment */ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue");
/* harmony import */ var _Components_Questions_Attachments_ComprehensionAttachment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Questions/Attachments/ComprehensionAttachment */ "./resources/js/Components/Questions/Attachments/ComprehensionAttachment.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PracticeQuestionCard',
  components: {
    AudioAttachment: _Components_Questions_Attachments_AudioAttachment__WEBPACK_IMPORTED_MODULE_0__["default"],
    VideoAttachment: _Components_Questions_Attachments_VideoAttachment__WEBPACK_IMPORTED_MODULE_1__["default"],
    ComprehensionAttachment: _Components_Questions_Attachments_ComprehensionAttachment__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    question: Object,
    sno: Number,
    totalQuestions: Number,
    attachmentType: String,
    attachment: [String, Object]
  },
  created: function created() {
    this.$nextTick(function () {
      window.renderMathInElement(this.$el);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  name: 'PracticeQuestionChip',
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
        return this.is_correct ? 'Correct Answer' : 'Wrong Answer';
      } else {
        return 'Not Answered';
      }
    },
    chipStatus: function chipStatus() {
      if (this.status === 'answered') {
        return this.is_correct ? 'success' : 'danger';
      } else {
        return 'default';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Questions_Attachments_VideoAttachment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Questions/Attachments/VideoAttachment */ "./resources/js/Components/Questions/Attachments/VideoAttachment.vue");
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
  name: 'PracticeSolutionCard',
  components: {
    VideoAttachment: _Components_Questions_Attachments_VideoAttachment__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    question: Object
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  name: 'FIBInteractiveOptions',
  props: {
    parentQid: [Number, String],
    parentOptions: [String, Array, Number],
    parentAnswer: [String, Array, Number],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String,
    solutionMode: false
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
      if (this.status === 'answered') {
        if (this.answer[index].toLowerCase() === this.correctAnswer[index].toLowerCase()) {
          return 'q-input correct';
        } else {
          return 'q-input wrong';
        }
      } else {
        if (this.answer[index] && this.answer[index] !== "") {
          return 'q-input answered';
        }
        return 'q-input';
      }
    }
  },
  computed: {
    disable: function disable() {
      return this.status === 'answered' || this.solutionMode;
    },
    answerText: function answerText() {
      if (this.disable) {
        var answers = this.correctAnswer.map(function (value, index) {
          return index + 1 + '. ' + value;
        }).join(', ');
        return 'Correct answers for the blanks are ' + answers;
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MMAInteractiveOptions",
  props: {
    parentQid: [Number, String],
    parentOptions: Array,
    parentAnswer: [String, Array, Number],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String,
    solutionMode: false
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
      if (this.status === 'answered') {
        if (this.answer.indexOf(index + 1) !== -1) {
          if (this.correctAnswer.indexOf(index + 1) !== -1) {
            return 'correct';
          } else {
            return 'wrong';
          }
        }
        return '';
      }
      return this.status === 'answered' ? '' : 'cursor-pointer';
    }
  },
  computed: {
    disable: function disable() {
      return this.status === 'answered' || this.solutionMode;
    },
    answerText: function answerText() {
      if (this.disable) {
        var answers = this.correctAnswer.sort();
        var str = answers.join(", ");
        return 'Correct answers are Option ' + str;
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  name: 'MSAInteractiveOptions',
  props: {
    parentQid: [Number, String],
    parentOptions: Array,
    parentAnswer: [String, Array, Number],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String,
    solutionMode: false
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
      if (this.status === 'answered') {
        if (this.isCorrect && this.answer === index + 1) {
          return 'correct';
        }
        if (!this.isCorrect && this.answer === index + 1) {
          return 'wrong';
        }
      }
      return this.status === 'answered' ? '' : 'cursor-pointer';
    }
  },
  computed: {
    disable: function disable() {
      return this.status === 'answered' || this.solutionMode;
    },
    answerText: function answerText() {
      if (this.disable) {
        return 'Correct answer is Option ' + this.correctAnswer;
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String,
    solutionMode: false
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
      if (this.status === 'answered') {
        if (this.answer[index].id === this.correctAnswer[index]) {
          return 'correct';
        } else {
          return 'wrong';
        }
      } else {
        if (this.touched) {
          return 'answered cursor-move';
        }
        return 'cursor-move';
      }
    }
  },
  computed: {
    disable: function disable() {
      return this.status === 'answered' || this.solutionMode;
    },
    answerText: function answerText() {
      if (this.disable) {
        var _this = this;
        var answers = [];
        this.correctAnswer.forEach(function (item, index) {
          var obj = _this.parentAnswer.find(function (o) {
            return o.id === item;
          });
          answers.push(index + 1 + " - " + obj.code);
        });
        var str = answers.join(", ");
        return 'Correct answers are ' + str;
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ORDInteractiveOptions',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    parentQid: [Number, String],
    parentOptions: Array,
    parentAnswer: [String, Array, Number],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String,
    solutionMode: false
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
      if (this.status === 'answered') {
        if (this.answer[index].id === this.correctAnswer[index]) {
          return 'correct';
        } else {
          return 'wrong';
        }
      } else {
        if (this.touched) {
          return 'answered cursor-move';
        }
        return 'cursor-move';
      }
    }
  },
  computed: {
    disable: function disable() {
      return this.status === 'answered' || this.solutionMode;
    },
    answerText: function answerText() {
      if (this.disable) {
        var _this = this;
        var answers = [];
        this.correctAnswer.forEach(function (item, index) {
          var obj = _this.parentAnswer.find(function (o) {
            return o.id === item;
          });
          answers.push(index + 1 + " - " + obj.code);
        });
        var str = answers.join(", ");
        return 'Correct answers are ' + str;
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  name: 'SAQInteractiveOptions',
  props: {
    parentQid: [Number, String],
    parentOptions: [String, Array, Number],
    parentAnswer: [String, Array, Number],
    correctAnswer: [String, Array, Number],
    isCorrect: Boolean,
    status: String,
    solutionMode: false
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
      if (this.status === 'answered') {
        if (this.isCorrect) {
          return 'q-input correct';
        } else {
          return 'q-input wrong';
        }
      } else {
        if (this.answer !== "") {
          return 'q-input answered';
        }
        return 'q-input';
      }
    }
  },
  computed: {
    disable: function disable() {
      return this.status === 'answered' || this.solutionMode;
    },
    answerText: function answerText() {
      if (this.disable) {
        var answers = this.correctAnswer.sort();
        var str = answers.join(", ");
        return 'Acceptable answers are ' + str;
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js& ***!
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
  name: 'RewardBadge',
  props: {
    points: {
      type: [Number, String],
      "default": 0
    },
    textColor: {
      type: String,
      "default": 'text-gray-400'
    },
    iconSize: {
      type: String,
      "default": 'w-7 h-7'
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/PracticeLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/PracticeLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PracticeLayout",
  components: {
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__.PerfectScrollbar
  },
  data: function data() {
    return {
      moved: true,
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
      // this.$refs.scroll.$el.scrollTop = 0;
      var sideBar = this.$refs.mobileNav;
      if (this.moved) {
        sideBar.style.transform = "translateX(0px)";
        this.moved = false;
      } else {
        sideBar.style.transform = this.$page.props.rtl ? "translateX(320px)" : "translateX(-320px)";
        this.moved = true;
      }
    }
  },
  mounted: function mounted() {
    var sideBar = this.$refs.mobileNav;
    sideBar.style.transform = this.$page.props.rtl ? "translateX(320px)" : "translateX(-320px)";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/PracticeScreen.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/PracticeScreen.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_PracticeLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/PracticeLayout */ "./resources/js/Layouts/PracticeLayout.vue");
/* harmony import */ var _Components_Cards_PracticeQuestionCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Cards/PracticeQuestionCard */ "./resources/js/Components/Cards/PracticeQuestionCard.vue");
/* harmony import */ var _Components_Cards_DarkQuestionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Cards/DarkQuestionCard */ "./resources/js/Components/Cards/DarkQuestionCard.vue");
/* harmony import */ var _Components_Cards_PracticeQuestionChip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Cards/PracticeQuestionChip */ "./resources/js/Components/Cards/PracticeQuestionChip.vue");
/* harmony import */ var _Components_Shimmers_NavigationQuestionCardShimmer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Shimmers/NavigationQuestionCardShimmer */ "./resources/js/Components/Shimmers/NavigationQuestionCardShimmer.vue");
/* harmony import */ var _Components_Shimmers_PracticeQuestionShimmer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Shimmers/PracticeQuestionShimmer */ "./resources/js/Components/Shimmers/PracticeQuestionShimmer.vue");
/* harmony import */ var _Components_Buttons_PrevButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Buttons/PrevButton */ "./resources/js/Components/Buttons/PrevButton.vue");
/* harmony import */ var _Components_Buttons_NextButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Buttons/NextButton */ "./resources/js/Components/Buttons/NextButton.vue");
/* harmony import */ var _Components_Buttons_FinishButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Buttons/FinishButton */ "./resources/js/Components/Buttons/FinishButton.vue");
/* harmony import */ var _Components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Buttons/SubmitButton */ "./resources/js/Components/Buttons/SubmitButton.vue");
/* harmony import */ var _Components_Buttons_PauseButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Components/Buttons/PauseButton */ "./resources/js/Components/Buttons/PauseButton.vue");
/* harmony import */ var _Components_Questions_PracticeInteract_MSAInteractiveOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Components/Questions/PracticeInteract/MSAInteractiveOptions */ "./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue");
/* harmony import */ var _Components_Questions_PracticeInteract_MMAInteractiveOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Components/Questions/PracticeInteract/MMAInteractiveOptions */ "./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue");
/* harmony import */ var _Components_Questions_PracticeInteract_MTFInteractiveOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/Components/Questions/PracticeInteract/MTFInteractiveOptions */ "./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue");
/* harmony import */ var _Components_Questions_PracticeInteract_ORDInteractiveOptions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/Components/Questions/PracticeInteract/ORDInteractiveOptions */ "./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue");
/* harmony import */ var _Components_Questions_PracticeInteract_FIBInteractiveOptions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/Components/Questions/PracticeInteract/FIBInteractiveOptions */ "./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue");
/* harmony import */ var _Components_Questions_PracticeInteract_SAQInteractiveOptions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/Components/Questions/PracticeInteract/SAQInteractiveOptions */ "./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue");
/* harmony import */ var _Components_Cards_PracticeSolutionCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/Components/Cards/PracticeSolutionCard */ "./resources/js/Components/Cards/PracticeSolutionCard.vue");
/* harmony import */ var _Components_RewardsBadge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/Components/RewardsBadge */ "./resources/js/Components/RewardsBadge.vue");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue2-perfect-scrollbar */ "./node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.umd.js");
/* harmony import */ var vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primevue_confirmdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primevue/confirmdialog */ "./node_modules/primevue/confirmdialog/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SAQInteractiveOptions: _Components_Questions_PracticeInteract_SAQInteractiveOptions__WEBPACK_IMPORTED_MODULE_16__["default"],
    FIBInteractiveOptions: _Components_Questions_PracticeInteract_FIBInteractiveOptions__WEBPACK_IMPORTED_MODULE_15__["default"],
    ORDInteractiveOptions: _Components_Questions_PracticeInteract_ORDInteractiveOptions__WEBPACK_IMPORTED_MODULE_14__["default"],
    MTFInteractiveOptions: _Components_Questions_PracticeInteract_MTFInteractiveOptions__WEBPACK_IMPORTED_MODULE_13__["default"],
    MSAInteractiveOptions: _Components_Questions_PracticeInteract_MSAInteractiveOptions__WEBPACK_IMPORTED_MODULE_11__["default"],
    MMAInteractiveOptions: _Components_Questions_PracticeInteract_MMAInteractiveOptions__WEBPACK_IMPORTED_MODULE_12__["default"],
    PracticeLayout: _Layouts_PracticeLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    PracticeQuestionCard: _Components_Cards_PracticeQuestionCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    DarkQuestionCard: _Components_Cards_DarkQuestionCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    PracticeQuestionChip: _Components_Cards_PracticeQuestionChip__WEBPACK_IMPORTED_MODULE_3__["default"],
    NavigationQuestionCardShimmer: _Components_Shimmers_NavigationQuestionCardShimmer__WEBPACK_IMPORTED_MODULE_4__["default"],
    PracticeQuestionShimmer: _Components_Shimmers_PracticeQuestionShimmer__WEBPACK_IMPORTED_MODULE_5__["default"],
    PrevButton: _Components_Buttons_PrevButton__WEBPACK_IMPORTED_MODULE_6__["default"],
    NextButton: _Components_Buttons_NextButton__WEBPACK_IMPORTED_MODULE_7__["default"],
    FinishButton: _Components_Buttons_FinishButton__WEBPACK_IMPORTED_MODULE_8__["default"],
    SubmitButton: _Components_Buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_9__["default"],
    PauseButton: _Components_Buttons_PauseButton__WEBPACK_IMPORTED_MODULE_10__["default"],
    PracticeSolutionCard: _Components_Cards_PracticeSolutionCard__WEBPACK_IMPORTED_MODULE_17__["default"],
    PerfectScrollbar: vue2_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_20__.PerfectScrollbar,
    RewardsBadge: _Components_RewardsBadge__WEBPACK_IMPORTED_MODULE_18__["default"],
    ConfirmDialog: primevue_confirmdialog__WEBPACK_IMPORTED_MODULE_21__["default"]
  },
  props: {
    practiceSet: Object,
    settings: Object,
    session: Object
  },
  data: function data() {
    return {
      current_question: 0,
      questions: [],
      pagination: null,
      answered: 0,
      total_points_earned: this.session.total_points_earned,
      total_time_taken: this.session.total_time_taken,
      chipView: false,
      loading: true,
      submitting: false,
      scrollbarOptions: {
        maxScrollbarLength: 1,
        suppressScrollX: true
      },
      rewardStrings: ['Hurray', 'Yippee', 'Congrats', 'Cheers', 'Yup', 'Precise', 'Delight', 'Glory']
    };
  },
  methods: {
    submitAnswer: function submitAnswer() {
      var _this = this;
      _this.submitting = true;
      axios.post(route('check_practice_answer', {
        practiceSet: this.practiceSet.slug,
        session: this.session.code
      }), {
        'question_id': this.questions[this.current_question].code,
        'user_answer': this.questions[this.current_question].user_answer,
        'time_taken': this.questions[this.current_question].time_taken,
        'total_time_taken': this.total_time_taken
      }).then(function (response) {
        var data = response.data;
        _this.questions[_this.current_question].is_correct = data.is_correct;
        _this.questions[_this.current_question].status = data.status;
        _this.questions[_this.current_question].solution = data.solution;
        _this.questions[_this.current_question].solution_video = data.solution_video;
        _this.questions[_this.current_question].ca = data.ca;
        _this.questions[_this.current_question].points_earned = data.points_earned;
        _this.answered = data.answered;
        _this.submitting = false;
        if (data.is_correct && data.points_earned !== 0) {
          if (_this.practiceSet.allow_rewards && _this.settings.show_reward_popup) {
            _this.showPoints(data.points_earned);
          }
          _this.total_points_earned = data.total_points_earned;
        }
      })["catch"](function (error) {
        _this.submitting = false;
      }).then(function () {
        _this.submitting = false;
      });
    },
    pauseTest: function pauseTest() {
      var _this2 = this;
      this.$confirm.require({
        message: this.__('practice_pause_text'),
        header: this.__('Confirmation'),
        icon: 'pi pi-exclamation-triangle',
        accept: function accept() {
          _this2.$inertia.post(route('practice_session_analysis', {
            practiceSet: _this2.practiceSet.slug,
            session: _this2.session.code
          }), {
            total_time_taken: _this2.total_time_taken
          }, {
            replace: true
          });
        },
        reject: function reject() {
          //callback to execute when user rejects the action
        }
      });
    },
    finishTest: function finishTest() {
      this.$inertia.post(route('finish_practice_session', {
        practiceSet: this.practiceSet.slug,
        session: this.session.code
      }), {
        replace: true
      });
    },
    updateAnswer: function updateAnswer(value) {
      this.questions[this.current_question].user_answer = value;
    },
    prevQuestion: function prevQuestion() {
      if (this.current_question !== 0) {
        this.current_question--;
      } else {
        this.prevPage();
      }
    },
    nextQuestion: function nextQuestion() {
      if (this.current_question < this.questions.length - 1) {
        this.current_question++;
      } else {
        if (this.current_question < this.practiceSet.total_questions - 1) {
          this.nextPage();
        }
      }
    },
    jumpToQuestion: function jumpToQuestion(questionID) {
      if (this.current_question > questionID) {
        this.currentTransition = 'prev';
      } else {
        this.currentTransition = 'next';
      }
      this.current_question = questionID;
    },
    prevPage: function prevPage() {
      if (this.pagination.current_page !== 1) {
        this.current_question = 0;
        this.fetchQuestions(this.pagination.current_page - 1);
      }
    },
    nextPage: function nextPage() {
      if (this.pagination.current_page < this.pagination.total_pages) {
        this.current_question = 0;
        this.fetchQuestions(this.pagination.current_page + 1);
      }
    },
    fetchQuestions: function fetchQuestions(page) {
      var _this = this;
      _this.loading = true;
      axios.get(route('fetch_practice_questions', {
        practiceSet: this.practiceSet.slug,
        session: this.session.code,
        page: page
      })).then(function (response) {
        var data = response.data;
        _this.questions = data.questions;
        _this.pagination = data.pagination;
        _this.answered = data.answered;
        if (_this.session.status !== 'completed') {
          _this.startTimer();
        }
      })["catch"](function (error) {
        _this.loading = false;
      }).then(function () {
        _this.loading = false;
      });
    },
    getQuestionNo: function getQuestionNo(index) {
      return index + 1 + this.pagination.per_page * (this.pagination.current_page - 1);
    },
    typeCheck: function typeCheck(value) {
      var return_value = Object.prototype.toString.call(value);
      // we can also use regex to do this...
      var type = return_value.substring(return_value.indexOf(" ") + 1, return_value.indexOf("]"));
      return type.toLowerCase();
    },
    startTimer: function startTimer() {
      setInterval(this.incrementTime, 1000);
    },
    incrementTime: function incrementTime() {
      this.total_time_taken = parseInt(this.total_time_taken) + 1;
      if (this.questions[this.current_question].status !== 'answered') {
        this.questions[this.current_question].time_taken = parseInt(this.questions[this.current_question].time_taken) + 1;
      }
    },
    showPoints: function showPoints(points) {
      var _this = this;
      var bonus = new Audio(_this.appUrl + '/images/insight.mp3');
      var rewardString = this.rewardStrings[Math.floor(Math.random() * this.rewardStrings.length)];
      setTimeout(function () {
        bonus.play();
        sweetalert2__WEBPACK_IMPORTED_MODULE_19___default().fire({
          title: '<strong>' + points + ' XP</strong>',
          html: '<div class="w-full flex flex-col justify-center items-center">' + '<img src="' + _this.appUrl + '/images/reward.gif" />' + '<span class="">' + rewardString + '! You\'ve earned ' + points + ' points</span>' + '</div>',
          showCloseButton: false,
          focusConfirm: true,
          confirmButtonText: '<div class="flex gap-2 justify-center items-center">' + '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg> Great!' + '</div>',
          confirmButtonAriaLabel: 'Thumbs up, great!'
        });
      }, 1000);
    }
  },
  metaInfo: function metaInfo() {
    return {
      title: this.title
    };
  },
  computed: {
    title: function title() {
      return this.practiceSet.title + ' - ' + this.$page.props.general.app_name;
    },
    headerButton: function headerButton() {
      if (this.session.status === 'completed') {
        return 'close';
      } else if (this.session.status !== 'completed' && this.answered === this.practiceSet.total_questions) {
        return 'finish';
      } else {
        return 'pause';
      }
    },
    footerButton: function footerButton() {
      if (this.typeCheck(this.questions[this.current_question].user_answer) === 'array' && this.questions[this.current_question].user_answer.length !== 0 && this.questions[this.current_question].status !== 'answered') {
        return 'submit';
      } else if (this.typeCheck(this.questions[this.current_question].user_answer) === 'string' && this.questions[this.current_question].user_answer !== "" && this.questions[this.current_question].status !== 'answered') {
        return 'submit';
      } else if (this.typeCheck(this.questions[this.current_question].user_answer) === 'number' && this.questions[this.current_question].user_answer !== "" && this.questions[this.current_question].status !== 'answered') {
        return 'submit';
      } else if (this.getQuestionNo(this.current_question) !== this.practiceSet.total_questions) {
        return 'next';
      }
      return '';
    },
    appUrl: function appUrl() {
      return this.$page.props.appUrl;
    }
  },
  mounted: function mounted() {
    document.addEventListener('contextmenu', function (event) {
      return event.preventDefault();
    });
    this.fetchQuestions(1);
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

/***/ "./resources/js/Components/Buttons/PauseButton.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Components/Buttons/PauseButton.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PauseButton_vue_vue_type_template_id_18ea9fc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PauseButton.vue?vue&type=template&id=18ea9fc2& */ "./resources/js/Components/Buttons/PauseButton.vue?vue&type=template&id=18ea9fc2&");
/* harmony import */ var _PauseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PauseButton.vue?vue&type=script&lang=js& */ "./resources/js/Components/Buttons/PauseButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PauseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PauseButton_vue_vue_type_template_id_18ea9fc2___WEBPACK_IMPORTED_MODULE_0__.render,
  _PauseButton_vue_vue_type_template_id_18ea9fc2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Buttons/PauseButton.vue"
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

/***/ "./resources/js/Components/Buttons/SubmitButton.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Components/Buttons/SubmitButton.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubmitButton_vue_vue_type_template_id_106aa3ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitButton.vue?vue&type=template&id=106aa3ba& */ "./resources/js/Components/Buttons/SubmitButton.vue?vue&type=template&id=106aa3ba&");
/* harmony import */ var _SubmitButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitButton.vue?vue&type=script&lang=js& */ "./resources/js/Components/Buttons/SubmitButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmitButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitButton_vue_vue_type_template_id_106aa3ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubmitButton_vue_vue_type_template_id_106aa3ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Buttons/SubmitButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/DarkQuestionCard.vue":
/*!************************************************************!*\
  !*** ./resources/js/Components/Cards/DarkQuestionCard.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DarkQuestionCard_vue_vue_type_template_id_1c81f803___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkQuestionCard.vue?vue&type=template&id=1c81f803& */ "./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=template&id=1c81f803&");
/* harmony import */ var _DarkQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DarkQuestionCard.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DarkQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DarkQuestionCard_vue_vue_type_template_id_1c81f803___WEBPACK_IMPORTED_MODULE_0__.render,
  _DarkQuestionCard_vue_vue_type_template_id_1c81f803___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/DarkQuestionCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/PracticeQuestionCard.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeQuestionCard.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PracticeQuestionCard.vue?vue&type=template&id=f3e42f70& */ "./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70&");
/* harmony import */ var _PracticeQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PracticeQuestionCard.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PracticeQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__.render,
  _PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/PracticeQuestionCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/PracticeQuestionChip.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeQuestionChip.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PracticeQuestionChip_vue_vue_type_template_id_2cb1f8f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PracticeQuestionChip.vue?vue&type=template&id=2cb1f8f8& */ "./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=template&id=2cb1f8f8&");
/* harmony import */ var _PracticeQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PracticeQuestionChip.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PracticeQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PracticeQuestionChip_vue_vue_type_template_id_2cb1f8f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _PracticeQuestionChip_vue_vue_type_template_id_2cb1f8f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/PracticeQuestionChip.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Cards/PracticeSolutionCard.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeSolutionCard.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PracticeSolutionCard.vue?vue&type=template&id=3823b6db& */ "./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db&");
/* harmony import */ var _PracticeSolutionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PracticeSolutionCard.vue?vue&type=script&lang=js& */ "./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PracticeSolutionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__.render,
  _PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Cards/PracticeSolutionCard.vue"
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

/***/ "./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FIBInteractiveOptions_vue_vue_type_template_id_17832aec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FIBInteractiveOptions.vue?vue&type=template&id=17832aec& */ "./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=template&id=17832aec&");
/* harmony import */ var _FIBInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FIBInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FIBInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FIBInteractiveOptions_vue_vue_type_template_id_17832aec___WEBPACK_IMPORTED_MODULE_0__.render,
  _FIBInteractiveOptions_vue_vue_type_template_id_17832aec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MMAInteractiveOptions_vue_vue_type_template_id_376527cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MMAInteractiveOptions.vue?vue&type=template&id=376527cc& */ "./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=template&id=376527cc&");
/* harmony import */ var _MMAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MMAInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MMAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MMAInteractiveOptions_vue_vue_type_template_id_376527cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _MMAInteractiveOptions_vue_vue_type_template_id_376527cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MSAInteractiveOptions_vue_vue_type_template_id_1f6e8106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MSAInteractiveOptions.vue?vue&type=template&id=1f6e8106& */ "./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=template&id=1f6e8106&");
/* harmony import */ var _MSAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MSAInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MSAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MSAInteractiveOptions_vue_vue_type_template_id_1f6e8106___WEBPACK_IMPORTED_MODULE_0__.render,
  _MSAInteractiveOptions_vue_vue_type_template_id_1f6e8106___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MTFInteractiveOptions_vue_vue_type_template_id_e32fe3ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MTFInteractiveOptions.vue?vue&type=template&id=e32fe3ac& */ "./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=template&id=e32fe3ac&");
/* harmony import */ var _MTFInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MTFInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MTFInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MTFInteractiveOptions_vue_vue_type_template_id_e32fe3ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _MTFInteractiveOptions_vue_vue_type_template_id_e32fe3ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ORDInteractiveOptions_vue_vue_type_template_id_0a6257ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ORDInteractiveOptions.vue?vue&type=template&id=0a6257ec& */ "./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=template&id=0a6257ec&");
/* harmony import */ var _ORDInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ORDInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ORDInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ORDInteractiveOptions_vue_vue_type_template_id_0a6257ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _ORDInteractiveOptions_vue_vue_type_template_id_0a6257ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SAQInteractiveOptions_vue_vue_type_template_id_238dd76e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SAQInteractiveOptions.vue?vue&type=template&id=238dd76e& */ "./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=template&id=238dd76e&");
/* harmony import */ var _SAQInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SAQInteractiveOptions.vue?vue&type=script&lang=js& */ "./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SAQInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SAQInteractiveOptions_vue_vue_type_template_id_238dd76e___WEBPACK_IMPORTED_MODULE_0__.render,
  _SAQInteractiveOptions_vue_vue_type_template_id_238dd76e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/RewardsBadge.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/RewardsBadge.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RewardsBadge.vue?vue&type=template&id=648681ac& */ "./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac&");
/* harmony import */ var _RewardsBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RewardsBadge.vue?vue&type=script&lang=js& */ "./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RewardsBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/RewardsBadge.vue"
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

/***/ "./resources/js/Layouts/PracticeLayout.vue":
/*!*************************************************!*\
  !*** ./resources/js/Layouts/PracticeLayout.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PracticeLayout_vue_vue_type_template_id_0fe5ef49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PracticeLayout.vue?vue&type=template&id=0fe5ef49& */ "./resources/js/Layouts/PracticeLayout.vue?vue&type=template&id=0fe5ef49&");
/* harmony import */ var _PracticeLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PracticeLayout.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/PracticeLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PracticeLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PracticeLayout_vue_vue_type_template_id_0fe5ef49___WEBPACK_IMPORTED_MODULE_0__.render,
  _PracticeLayout_vue_vue_type_template_id_0fe5ef49___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/PracticeLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/PracticeScreen.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/User/PracticeScreen.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PracticeScreen_vue_vue_type_template_id_4903f4d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PracticeScreen.vue?vue&type=template&id=4903f4d2& */ "./resources/js/Pages/User/PracticeScreen.vue?vue&type=template&id=4903f4d2&");
/* harmony import */ var _PracticeScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PracticeScreen.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/PracticeScreen.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PracticeScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PracticeScreen_vue_vue_type_template_id_4903f4d2___WEBPACK_IMPORTED_MODULE_0__.render,
  _PracticeScreen_vue_vue_type_template_id_4903f4d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/PracticeScreen.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/Components/Buttons/PauseButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Buttons/PauseButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PauseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PauseButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PauseButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PauseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Components/Buttons/SubmitButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Buttons/SubmitButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/SubmitButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DarkQuestionCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeQuestionCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeQuestionChip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionChip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeSolutionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeSolutionCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeSolutionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FIBInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MMAInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MSAInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MTFInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ORDInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SAQInteractiveOptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQInteractiveOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RewardsBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RewardsBadge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RewardsBadge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Layouts/PracticeLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Layouts/PracticeLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/PracticeLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/PracticeScreen.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/User/PracticeScreen.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeScreen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/PracticeScreen.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionChip_vue_vue_type_style_index_0_id_47b50bea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/QuestionChip.vue?vue&type=style&index=0&id=47b50bea&scoped=true&lang=css&");


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

/***/ "./resources/js/Components/Buttons/PauseButton.vue?vue&type=template&id=18ea9fc2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/PauseButton.vue?vue&type=template&id=18ea9fc2& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PauseButton_vue_vue_type_template_id_18ea9fc2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PauseButton_vue_vue_type_template_id_18ea9fc2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PauseButton_vue_vue_type_template_id_18ea9fc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PauseButton.vue?vue&type=template&id=18ea9fc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PauseButton.vue?vue&type=template&id=18ea9fc2&");


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

/***/ "./resources/js/Components/Buttons/SubmitButton.vue?vue&type=template&id=106aa3ba&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Buttons/SubmitButton.vue?vue&type=template&id=106aa3ba& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitButton_vue_vue_type_template_id_106aa3ba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitButton_vue_vue_type_template_id_106aa3ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitButton_vue_vue_type_template_id_106aa3ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitButton.vue?vue&type=template&id=106aa3ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/SubmitButton.vue?vue&type=template&id=106aa3ba&");


/***/ }),

/***/ "./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=template&id=1c81f803&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=template&id=1c81f803& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkQuestionCard_vue_vue_type_template_id_1c81f803___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkQuestionCard_vue_vue_type_template_id_1c81f803___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkQuestionCard_vue_vue_type_template_id_1c81f803___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DarkQuestionCard.vue?vue&type=template&id=1c81f803& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=template&id=1c81f803&");


/***/ }),

/***/ "./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionCard_vue_vue_type_template_id_f3e42f70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeQuestionCard.vue?vue&type=template&id=f3e42f70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70&");


/***/ }),

/***/ "./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=template&id=2cb1f8f8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=template&id=2cb1f8f8& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionChip_vue_vue_type_template_id_2cb1f8f8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionChip_vue_vue_type_template_id_2cb1f8f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeQuestionChip_vue_vue_type_template_id_2cb1f8f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeQuestionChip.vue?vue&type=template&id=2cb1f8f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=template&id=2cb1f8f8&");


/***/ }),

/***/ "./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeSolutionCard_vue_vue_type_template_id_3823b6db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeSolutionCard.vue?vue&type=template&id=3823b6db& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db&");


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

/***/ "./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=template&id=17832aec&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=template&id=17832aec& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBInteractiveOptions_vue_vue_type_template_id_17832aec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBInteractiveOptions_vue_vue_type_template_id_17832aec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FIBInteractiveOptions_vue_vue_type_template_id_17832aec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FIBInteractiveOptions.vue?vue&type=template&id=17832aec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=template&id=17832aec&");


/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=template&id=376527cc&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=template&id=376527cc& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAInteractiveOptions_vue_vue_type_template_id_376527cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAInteractiveOptions_vue_vue_type_template_id_376527cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MMAInteractiveOptions_vue_vue_type_template_id_376527cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MMAInteractiveOptions.vue?vue&type=template&id=376527cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=template&id=376527cc&");


/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=template&id=1f6e8106&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=template&id=1f6e8106& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAInteractiveOptions_vue_vue_type_template_id_1f6e8106___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAInteractiveOptions_vue_vue_type_template_id_1f6e8106___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MSAInteractiveOptions_vue_vue_type_template_id_1f6e8106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MSAInteractiveOptions.vue?vue&type=template&id=1f6e8106& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=template&id=1f6e8106&");


/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=template&id=e32fe3ac&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=template&id=e32fe3ac& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFInteractiveOptions_vue_vue_type_template_id_e32fe3ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFInteractiveOptions_vue_vue_type_template_id_e32fe3ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MTFInteractiveOptions_vue_vue_type_template_id_e32fe3ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MTFInteractiveOptions.vue?vue&type=template&id=e32fe3ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=template&id=e32fe3ac&");


/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=template&id=0a6257ec&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=template&id=0a6257ec& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDInteractiveOptions_vue_vue_type_template_id_0a6257ec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDInteractiveOptions_vue_vue_type_template_id_0a6257ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ORDInteractiveOptions_vue_vue_type_template_id_0a6257ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ORDInteractiveOptions.vue?vue&type=template&id=0a6257ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=template&id=0a6257ec&");


/***/ }),

/***/ "./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=template&id=238dd76e&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=template&id=238dd76e& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQInteractiveOptions_vue_vue_type_template_id_238dd76e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQInteractiveOptions_vue_vue_type_template_id_238dd76e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SAQInteractiveOptions_vue_vue_type_template_id_238dd76e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SAQInteractiveOptions.vue?vue&type=template&id=238dd76e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=template&id=238dd76e&");


/***/ }),

/***/ "./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RewardsBadge_vue_vue_type_template_id_648681ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RewardsBadge.vue?vue&type=template&id=648681ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac&");


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

/***/ "./resources/js/Layouts/PracticeLayout.vue?vue&type=template&id=0fe5ef49&":
/*!********************************************************************************!*\
  !*** ./resources/js/Layouts/PracticeLayout.vue?vue&type=template&id=0fe5ef49& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeLayout_vue_vue_type_template_id_0fe5ef49___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeLayout_vue_vue_type_template_id_0fe5ef49___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeLayout_vue_vue_type_template_id_0fe5ef49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeLayout.vue?vue&type=template&id=0fe5ef49& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/PracticeLayout.vue?vue&type=template&id=0fe5ef49&");


/***/ }),

/***/ "./resources/js/Pages/User/PracticeScreen.vue?vue&type=template&id=4903f4d2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/User/PracticeScreen.vue?vue&type=template&id=4903f4d2& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeScreen_vue_vue_type_template_id_4903f4d2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeScreen_vue_vue_type_template_id_4903f4d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PracticeScreen_vue_vue_type_template_id_4903f4d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PracticeScreen.vue?vue&type=template&id=4903f4d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/PracticeScreen.vue?vue&type=template&id=4903f4d2&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PauseButton.vue?vue&type=template&id=18ea9fc2&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/PauseButton.vue?vue&type=template&id=18ea9fc2& ***!
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
        "h-10 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded border border-yellow-300 cursor-pointer",
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
              d: "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/SubmitButton.vue?vue&type=template&id=106aa3ba&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Buttons/SubmitButton.vue?vue&type=template&id=106aa3ba& ***!
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
        "h-10 flex items-center justify-center gap-2 px-4 py-2 bg-green-400 hover:bg-green-600 shadow-inner text-sm text-white rounded border border-green-300 cursor-pointer",
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
              d: "M5 13l4 4L19 7",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=template&id=1c81f803&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/DarkQuestionCard.vue?vue&type=template&id=1c81f803& ***!
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
      staticClass:
        "w-full overflow-hidden dark_question_card rounded cursor-pointer mb-1",
    },
    [
      _c(
        "div",
        {
          staticClass: "hover:bg-gray-900 hover:text-gray-200 rounded p-4",
          class: [_vm.active ? "bg-gray-900 text-gray-200" : "text-gray-400"],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionCard.vue?vue&type=template&id=f3e42f70& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "border rounded border-gray-200 bg-gray-50 p-6 shadow-sm" },
    [
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
      _vm.attachmentType != null
        ? _c("div", { staticClass: "mb-4" }, [
            _vm.attachmentType === "audio"
              ? _c(
                  "div",
                  [
                    _c("audio-attachment", {
                      attrs: {
                        reference: "player_" + _vm.question.code,
                        options: _vm.attachment,
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.attachmentType === "video"
              ? _c(
                  "div",
                  [
                    _c("video-attachment", {
                      attrs: {
                        reference: "player_" + _vm.question.code,
                        options: _vm.attachment,
                      },
                    }),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.attachmentType === "comprehension"
              ? _c(
                  "div",
                  [
                    _c("comprehension-attachment", {
                      attrs: { passage: _vm.attachment },
                    }),
                  ],
                  1
                )
              : _vm._e(),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", {
        staticClass: "q-data question",
        domProps: { innerHTML: _vm._s(_vm.question.question) },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=template&id=2cb1f8f8&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeQuestionChip.vue?vue&type=template&id=2cb1f8f8& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Cards/PracticeSolutionCard.vue?vue&type=template&id=3823b6db& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "q-data rounded bg-yellow-50 border border-yellow-200 p-6" },
    [
      _c("h4", { staticClass: "font-semibold text-gray-600 mb-4 uppercase" }, [
        _vm._v(_vm._s(_vm.__("Solution"))),
      ]),
      _vm._v(" "),
      _vm.question.solution_video
        ? _c(
            "div",
            [
              _c("video-attachment", {
                attrs: {
                  reference: "player_" + _vm.question.code,
                  options: _vm.question.solution_video,
                  "show-message": false,
                },
              }),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { domProps: { innerHTML: _vm._s(_vm.question.solution) } }),
    ]
  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=template&id=17832aec&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/FIBInteractiveOptions.vue?vue&type=template&id=17832aec& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
      !_vm.disable
        ? _c(
            "div",
            {
              staticClass:
                "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
            },
            [_vm._v("\n        Fill the blanks in the below text boxes\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.options, function (blank, index) {
        return _c("div", { key: "blank_" + index }, [
          _c("div", { staticClass: "mb-2", class: _vm.labelClass(index) }, [
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
                disabled: _vm.disable,
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
      _vm._v(" "),
      _vm.disable
        ? _c(
            "div",
            {
              staticClass:
                "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
            },
            [
              _c(
                "svg",
                {
                  staticClass: "w-6 h-6 text-green-400",
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
              _vm._v(" "),
              _c("h4", {
                staticClass: "text-gray-600",
                domProps: { innerHTML: _vm._s(_vm.answerText) },
              }),
            ]
          )
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=template&id=376527cc&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MMAInteractiveOptions.vue?vue&type=template&id=376527cc& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    !_vm.disable
      ? _c(
          "div",
          {
            staticClass:
              "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
          },
          [_vm._v("\n        Choose multiple options\n    ")]
        )
      : _vm._e(),
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
                (_vm.answer.length >= 3 &&
                  _vm.answer.indexOf(index + 1) === -1) ||
                _vm.disable,
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
    _vm._v(" "),
    _vm.disable
      ? _c(
          "div",
          {
            staticClass:
              "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
          },
          [
            _c(
              "svg",
              {
                staticClass: "w-6 h-6 text-green-400",
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
            _vm._v(" "),
            _c("h4", {
              staticClass: "text-gray-600",
              domProps: { innerHTML: _vm._s(_vm.answerText) },
            }),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=template&id=1f6e8106&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MSAInteractiveOptions.vue?vue&type=template&id=1f6e8106& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    !_vm.disable
      ? _c(
          "div",
          {
            staticClass:
              "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
          },
          [_vm._v("\n            Choose one option\n        ")]
        )
      : _vm._e(),
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
              type: "radio",
              id: _vm.question_id + "_option_" + index,
              disabled: _vm.disable,
            },
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
    _vm._v(" "),
    _vm.disable
      ? _c(
          "div",
          {
            staticClass:
              "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
          },
          [
            _c(
              "svg",
              {
                staticClass: "w-6 h-6 text-green-400",
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
            _vm._v(" "),
            _c("h4", {
              staticClass: " text-gray-600",
              domProps: { innerHTML: _vm._s(_vm.answerText) },
            }),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=template&id=e32fe3ac&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/MTFInteractiveOptions.vue?vue&type=template&id=e32fe3ac& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    !_vm.disable
      ? _c(
          "div",
          {
            staticClass:
              "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
          },
          [
            _vm._v(
              "\n        Match the following by drag and drop right side items\n    "
            ),
          ]
        )
      : _vm._e(),
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
              attrs: { group: "options", sort: !_vm.disable },
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
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.disable,
                                  expression: "!disable",
                                },
                              ],
                              staticClass: "o-bars text-gray-400",
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
                                      d: "M4 6h16M4 12h16M4 18h16",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
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
    _vm._v(" "),
    _vm.disable
      ? _c(
          "div",
          {
            staticClass:
              "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
          },
          [
            _c(
              "svg",
              {
                staticClass: "w-6 h-6 text-green-400",
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
            _vm._v(" "),
            _c("h4", {
              staticClass: "text-sm text-gray-600",
              domProps: { innerHTML: _vm._s(_vm.answerText) },
            }),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=template&id=0a6257ec&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/ORDInteractiveOptions.vue?vue&type=template&id=0a6257ec& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    !_vm.disable
      ? _c(
          "div",
          {
            staticClass:
              "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
          },
          [
            _vm._v(
              "\n        Arrange the following in order by drag and drop the items\n    "
            ),
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "q-options" },
      [
        _c(
          "draggable",
          {
            attrs: { sort: !_vm.disable, group: "options" },
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
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.disable,
                              expression: "!disable",
                            },
                          ],
                          staticClass: "o-bars text-gray-400",
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
                                  d: "M4 6h16M4 12h16M4 18h16",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
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
    _vm._v(" "),
    _vm.disable
      ? _c(
          "div",
          {
            staticClass:
              "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
          },
          [
            _c(
              "svg",
              {
                staticClass: "w-6 h-6 text-green-400",
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
            _vm._v(" "),
            _c("h4", {
              staticClass: "text-sm text-gray-600",
              domProps: { innerHTML: _vm._s(_vm.answerText) },
            }),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=template&id=238dd76e&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Questions/PracticeInteract/SAQInteractiveOptions.vue?vue&type=template&id=238dd76e& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    !_vm.disable
      ? _c(
          "div",
          {
            staticClass:
              "font-mono px-2 py-1 inline-block bg-gray-100 text-gray-600 rounded text-sm mb-2",
          },
          [_vm._v("\n        " + _vm._s(_vm.__("saq_hint")) + "\n    ")]
        )
      : _vm._e(),
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
        attrs: {
          id: _vm.question_id,
          placeholder: "Type your answer",
          disabled: _vm.disable,
        },
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
    _vm._v(" "),
    _vm.disable
      ? _c(
          "div",
          {
            staticClass:
              "flex gap-2 border border-green-200 bg-green-50 items-center rounded p-4 mt-6",
          },
          [
            _c(
              "svg",
              {
                staticClass: "w-6 h-6 text-green-400",
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
            _vm._v(" "),
            _c("h4", {
              staticClass: " text-gray-600",
              domProps: { innerHTML: _vm._s(_vm.answerText) },
            }),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RewardsBadge.vue?vue&type=template&id=648681ac& ***!
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
  return _c("div", { staticClass: "flex group gap-2 items-center" }, [
    _c(
      "svg",
      {
        staticClass:
          "transition duration-300 ease-in-out transform group-hover:scale-110",
        class: _vm.iconSize,
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "300px",
          height: "300px",
          viewBox: "0 0 300 300",
          "enable-background": "new 0 0 300 300",
          "xml:space": "preserve",
        },
      },
      [
        _c("g", [
          _c("ellipse", {
            attrs: {
              fill: "#FFC843",
              cx: "149.833",
              cy: "149.501",
              rx: "147.833",
              ry: "146.166",
            },
          }),
          _c("ellipse", {
            attrs: {
              fill: "#D38700",
              cx: "150",
              cy: "150.168",
              rx: "113.667",
              ry: "113.833",
            },
          }),
          _vm._v(" "),
          _c("polygon", {
            attrs: {
              fill: "#FFC843",
              points:
                "192.716,211.945 151.021,190.203 109.476,212.222 117.27,165.852 83.489,133.142 129.999,126.226\n                                        150.667,83.991 171.618,126.086 218.172,132.693 184.611,165.626",
            },
          }),
        ]),
      ]
    ),
    _vm._v(" "),
    _c("span", { staticClass: "font-semibold ", class: _vm.textColor }, [
      _vm._v(_vm._s(_vm.points) + " XP"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/PracticeLayout.vue?vue&type=template&id=0fe5ef49&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/PracticeLayout.vue?vue&type=template&id=0fe5ef49& ***!
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
    "div",
    {
      staticClass:
        "h-screen max-h-screen overflow-hidden flex flex-no-wrap bg-white select-none",
    },
    [
      _c(
        "div",
        {
          staticClass:
            "w-96 overflow-hidden absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex sm:flex-col",
        },
        [
          _c(
            "div",
            {
              staticClass:
                "z-30 h-16 w-full mx-auto absolute top-0 left-0 bg-gray-700 flex items-center px-4",
            },
            [_vm._t("title")],
            2
          ),
          _vm._v(" "),
          _vm.$slots.actions
            ? _c(
                "div",
                {
                  staticClass:
                    "z-30 h-16 w-full mx-auto absolute top-16 left-0 bg-gray-800 flex justify-between items-center px-4",
                },
                [_vm._t("actions")],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "perfect-scrollbar",
            {
              ref: "scroll",
              staticClass: "h-screen max-h-screen px-4 pb-16",
              class: [_vm.$slots.actions ? "pt-32" : "pt-16"],
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
                "w-96 w-full absolute left-0 bottom-0 px-4 border-t border-gray-700",
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
            "w-80 h-full z-40 fixed bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out",
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
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                      },
                    },
                    [
                      _c("path", {
                        attrs: { d: "M0 0h24v24H0z", fill: "none" },
                      }),
                      _c("path", {
                        attrs: {
                          d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z",
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
                "z-30 h-16 w-full mx-auto absolute top-0 left-0 bg-gray-700 flex items-center px-4",
            },
            [_vm._t("title")],
            2
          ),
          _vm._v(" "),
          _vm.$slots.actions
            ? _c(
                "div",
                {
                  staticClass:
                    "z-30 h-16 w-full mx-auto absolute top-16 left-0 bg-gray-800 flex justify-between items-center px-4",
                },
                [_vm._t("actions")],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "perfect-scrollbar",
            {
              ref: "scroll",
              staticClass: "h-screen max-h-screen overflow-hidden px-4 pb-16",
              class: [_vm.$slots.actions ? "pt-32" : "pt-16"],
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
                "w-full absolute bottom-0 px-8 border-t border-gray-700",
            },
            [
              _c(
                "ul",
                {
                  staticClass:
                    "w-full flex items-center justify-between bg-gray-800",
                },
                [_vm._t("footer")],
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
        { staticClass: "relative h-full container mx-auto md:w-4/5 w-full" },
        [
          _c("v-offline", { on: { "detected-condition": _vm.detectOffline } }, [
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
                          _vm.__("You are offline. Responses will not save.")
                        )
                      ),
                    ]),
                  ]
                )
              : _vm._e(),
          ]),
          _vm._v(" "),
          _vm._t("default"),
        ],
        2
      ),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.moved,
            expression: "!moved",
          },
        ],
        staticClass:
          "fixed inset-0 z-30 w-screen h-screen bg-black bg-opacity-25 md:hidden",
        on: {
          click: function ($event) {
            return _vm.sidebarHandler(false)
          },
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/PracticeScreen.vue?vue&type=template&id=4903f4d2&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/User/PracticeScreen.vue?vue&type=template&id=4903f4d2& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "practice-layout",
    {
      scopedSlots: _vm._u([
        {
          key: "title",
          fn: function () {
            return [
              _c("h4", { staticClass: "font-semibold text-white" }, [
                _vm._v(_vm._s(_vm.practiceSet.title)),
              ]),
            ]
          },
          proxy: true,
        },
        {
          key: "actions",
          fn: function () {
            return [
              _c("h5", { staticClass: "text-white" }, [
                _vm._v(
                  _vm._s(_vm.answered) +
                    "/" +
                    _vm._s(_vm.practiceSet.total_questions) +
                    " " +
                    _vm._s(_vm.__("Attempted"))
                ),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "text-gray-400 hover:text-white focus:outline-none",
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
              ),
            ]
          },
          proxy: true,
        },
        {
          key: "questions",
          fn: function () {
            return [
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
                            ? _c("dark-question-card", {
                                attrs: {
                                  question: question,
                                  sno: _vm.getQuestionNo(index),
                                  is_correct: question.is_correct,
                                  status: question.status,
                                  active: _vm.current_question === index,
                                },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.chipView
                            ? _c("practice-question-chip", {
                                attrs: {
                                  sno: _vm.getQuestionNo(index),
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
            ]
          },
          proxy: true,
        },
        {
          key: "footer",
          fn: function () {
            return [
              !_vm.loading
                ? _c(
                    "ul",
                    {
                      staticClass:
                        "w-full h-16 flex items-center justify-between bg-gray-800",
                    },
                    [
                      _c(
                        "li",
                        {
                          staticClass:
                            "text-gray-400 hover:text-white cursor-pointer",
                          on: { click: _vm.prevPage },
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "w-8 h-8",
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
                                  d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", { staticClass: " text-white" }, [
                          _vm._v(
                            _vm._s(_vm.__("Page")) +
                              " " +
                              _vm._s(_vm.pagination.current_page) +
                              "/" +
                              _vm._s(_vm.pagination.total_pages)
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass:
                            "text-gray-400 hover:text-white cursor-pointer",
                          on: { click: _vm.nextPage },
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "w-8 h-8",
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
                                  d: "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
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
      _c(
        "div",
        {
          staticClass:
            "w-full h-16 fixed sm:absolute z-30 top-0 right-0 mx-auto bg-white",
        },
        [
          _c(
            "div",
            {
              staticClass:
                "w-full sm:max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8",
            },
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
                            "w-full sm:w-2/3 flex ltr:flex-row rtl:flex-row-reverse items-center ltr:justify-end rtl:justify-start gap-4 sm:gap-0 sm:ltr:justify-between sm:rtl:justify-between",
                        },
                        [
                          _vm.practiceSet.allow_rewards
                            ? _c("rewards-badge", {
                                attrs: { points: _vm.total_points_earned },
                              })
                            : _c("div", { staticClass: "h-0 w-0" }),
                          _vm._v(" "),
                          _vm.headerButton === "finish"
                            ? _c(
                                "button",
                                {
                                  staticClass: "focus:outline-none",
                                  on: { click: _vm.finishTest },
                                },
                                [
                                  _c("finish-button", {
                                    attrs: { name: _vm.__("Finish") },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.headerButton === "close"
                            ? _c(
                                "inertia-link",
                                {
                                  attrs: {
                                    href: _vm.route(
                                      "practice_session_analysis",
                                      {
                                        practiceSet: _vm.practiceSet.slug,
                                        session: _vm.session.code,
                                      }
                                    ),
                                  },
                                },
                                [
                                  _c("finish-button", {
                                    attrs: { name: _vm.__("Close") },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.headerButton === "pause"
                            ? _c(
                                "button",
                                {
                                  staticClass: "focus:outline-none",
                                  on: { click: _vm.pauseTest },
                                },
                                [
                                  _c("pause-button", {
                                    attrs: { name: _vm.__("Pause") },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ],
                        1
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
        "perfect-scrollbar",
        {
          ref: "scroll2",
          staticClass: "h-screen max-h-screen pt-16 pb-16",
          attrs: { options: _vm.scrollbarOptions },
        },
        [
          _c("div", { staticClass: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
            _c(
              "div",
              { staticClass: "flex flex-col justify-center items-center" },
              [
                _vm.loading
                  ? _c("div", { staticClass: "w-full sm:w-2/3" }, [
                      _c(
                        "div",
                        { staticClass: "card card-body" },
                        [
                          _c("PracticeQuestionShimmer", {
                            staticClass: "w-full",
                          }),
                        ],
                        1
                      ),
                    ])
                  : _c(
                      "div",
                      { staticClass: "w-full py-2 sm:w-2/3" },
                      _vm._l(_vm.questions, function (question, index) {
                        return _c("div", { key: question.id }, [
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
                              attrs: { id: question.code },
                            },
                            [
                              _c("practice-question-card", {
                                key: question.card,
                                attrs: {
                                  question: question,
                                  sno: _vm.getQuestionNo(index),
                                  "attachment-type": question.attachment_type,
                                  attachment: question.attachment,
                                  "total-questions":
                                    _vm.practiceSet.total_questions,
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
                                          "is-correct": question.is_correct,
                                          status: question.status,
                                          "parent-options": question.options,
                                          "parent-answer": question.user_answer,
                                          "correct-answer": question.ca,
                                        },
                                        on: { modifyAnswer: _vm.updateAnswer },
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
                                          "is-correct": question.is_correct,
                                          status: question.status,
                                          "parent-options": question.options,
                                          "parent-answer": question.user_answer,
                                          "correct-answer": question.ca,
                                        },
                                        on: { modifyAnswer: _vm.updateAnswer },
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
                                          "is-correct": question.is_correct,
                                          status: question.status,
                                          "parent-options": question.options,
                                          "parent-answer": question.user_answer,
                                          "correct-answer": question.ca,
                                        },
                                        on: { modifyAnswer: _vm.updateAnswer },
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
                                          "is-correct": question.is_correct,
                                          status: question.status,
                                          "parent-options": question.options,
                                          "parent-answer": question.user_answer,
                                          "correct-answer": question.ca,
                                        },
                                        on: { modifyAnswer: _vm.updateAnswer },
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
                                          "is-correct": question.is_correct,
                                          status: question.status,
                                          "parent-options": question.options,
                                          "parent-answer": question.user_answer,
                                          "correct-answer": question.ca,
                                        },
                                        on: { modifyAnswer: _vm.updateAnswer },
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
                                          "is-correct": question.is_correct,
                                          status: question.status,
                                          "parent-options": question.options,
                                          "parent-answer": question.user_answer,
                                          "correct-answer": question.ca,
                                        },
                                        on: { modifyAnswer: _vm.updateAnswer },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              question.status === "answered"
                                ? _c(
                                    "div",
                                    { staticClass: "mt-4" },
                                    [
                                      _c("practice-solution-card", {
                                        attrs: { question: question },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ])
                      }),
                      0
                    ),
              ]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "w-full h-16 fixed sm:absolute z-30 bottom-0 right-0 mx-auto bg-white",
        },
        [
          _c(
            "div",
            {
              staticClass:
                "w-full sm:max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8",
            },
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
                            "w-full sm:w-2/3 flex items-center justify-between",
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "focus:outline-none",
                              on: { click: _vm.prevQuestion },
                            },
                            [
                              _c("prev-button", {
                                attrs: { name: _vm.__("Previous") },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.footerButton === "submit"
                            ? _c(
                                "button",
                                {
                                  staticClass: "focus:outline-none",
                                  class: { "opacity-25": _vm.submitting },
                                  attrs: { disabled: _vm.submitting },
                                  on: { click: _vm.submitAnswer },
                                },
                                [
                                  _c("submit-button", {
                                    attrs: { name: _vm.__("Submit") },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.footerButton === "next"
                            ? _c(
                                "button",
                                {
                                  staticClass: "focus:outline-none",
                                  on: { click: _vm.nextQuestion },
                                },
                                [
                                  _c("next-button", {
                                    attrs: { name: _vm.__("Next") },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
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
      _c("ConfirmDialog"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);