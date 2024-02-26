/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if ({"resources_js_Pages_API_ApiTokenManager_vue":1,"resources_js_Pages_API_Index_vue":1,"resources_js_Pages_Admin_Categories_vue":1,"resources_js_Pages_Admin_Comprehensions_vue":1,"resources_js_Pages_Admin_Dashboard_vue":1,"resources_js_Pages_Admin_Exam_DetailedReport_vue":1,"resources_js_Pages_Admin_Exam_Details_vue":1,"resources_js_Pages_Admin_Exam_OverallReport_vue":1,"resources_js_Pages_Admin_Exam_Questions_vue":1,"resources_js_Pages_Admin_Exam_Sections_vue":1,"node_modules_moment_locale_sync_recursive_-resources_js_Pages_Admin_Exam_SessionResults_vue":1,"resources_js_Pages_Admin_Exam_Settings_vue":1,"resources_js_Pages_Admin_ExamSchedules_vue":1,"resources_js_Pages_Admin_ExamTypes_vue":1,"resources_js_Pages_Admin_Exams_vue":1,"resources_js_Pages_Admin_ImportQuestions_vue":1,"resources_js_Pages_Admin_ImportUsers_vue":1,"resources_js_Pages_Admin_Lesson_Configure_vue":1,"resources_js_Pages_Admin_Lesson_Form_vue":1,"resources_js_Pages_Admin_Lesson_PracticeLessons_vue":1,"resources_js_Pages_Admin_Lessons_vue":1,"resources_js_Pages_Admin_PaymentDetails_vue":1,"resources_js_Pages_Admin_Payments_vue":1,"resources_js_Pages_Admin_Plans_vue":1,"resources_js_Pages_Admin_PracticeSet_DetailedReport_vue":1,"resources_js_Pages_Admin_PracticeSet_Details_vue":1,"resources_js_Pages_Admin_PracticeSet_OverallReport_vue":1,"node_modules_moment_locale_sync_recursive_-resources_js_Pages_Admin_PracticeSet_PracticeAnaly-39b3e2":1,"resources_js_Pages_Admin_PracticeSet_Questions_vue":1,"resources_js_Pages_Admin_PracticeSet_Settings_vue":1,"resources_js_Pages_Admin_PracticeSets_vue":1,"resources_js_Pages_Admin_Question_Attachment_vue":1,"resources_js_Pages_Admin_Question_Details_vue":1,"resources_js_Pages_Admin_Question_Preview_vue":1,"resources_js_Pages_Admin_Question_Settings_vue":1,"resources_js_Pages_Admin_Question_Solution_vue":1,"resources_js_Pages_Admin_QuestionTypes_vue":1,"resources_js_Pages_Admin_Questions_vue":1,"resources_js_Pages_Admin_Quiz_DetailedReport_vue":1,"resources_js_Pages_Admin_Quiz_Details_vue":1,"resources_js_Pages_Admin_Quiz_OverallReport_vue":1,"resources_js_Pages_Admin_Quiz_Questions_vue":1,"node_modules_moment_locale_sync_recursive_-resources_js_Pages_Admin_Quiz_SessionResults_vue":1,"resources_js_Pages_Admin_Quiz_Settings_vue":1,"resources_js_Pages_Admin_QuizSchedules_vue":1,"resources_js_Pages_Admin_QuizTypes_vue":1,"resources_js_Pages_Admin_Quizzes_vue":1,"resources_js_Pages_Admin_Sections_vue":1,"resources_js_Pages_Admin_Settings_BankSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_BillingSettings_vue":1,"resources_js_Pages_Admin_Settings_BillingSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_CategorySettingsForm_vue":1,"resources_js_Pages_Admin_Settings_ClearCacheForm_vue":1,"resources_js_Pages_Admin_Settings_CtaSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_DebugModeForm_vue":1,"resources_js_Pages_Admin_Settings_EmailSettings_vue":1,"resources_js_Pages_Admin_Settings_EmailSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_ExpireSchedulesForm_vue":1,"resources_js_Pages_Admin_Settings_FeatureSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_FontSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_FooterSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_GeneralSettings_vue":1,"resources_js_Pages_Admin_Settings_HeroSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_HomePageSettings_vue":1,"resources_js_Pages_Admin_Settings_HomePageSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_LicenseSettings_vue":1,"resources_js_Pages_Admin_Settings_LicenseSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_LocalizationSettings_vue":1,"resources_js_Pages_Admin_Settings_LocalizationSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_MaintenanceSettings_vue":1,"resources_js_Pages_Admin_Settings_PaymentSettings_vue":1,"resources_js_Pages_Admin_Settings_PaymentSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_PaypalSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_RazorpaySettingsForm_vue":1,"resources_js_Pages_Admin_Settings_SiteFaviconForm_vue":1,"resources_js_Pages_Admin_Settings_SiteLogoForm_vue":1,"resources_js_Pages_Admin_Settings_SiteSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_SiteWhiteLogoForm_vue":1,"resources_js_Pages_Admin_Settings_StatSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_StorageLinksForm_vue":1,"resources_js_Pages_Admin_Settings_StripeSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_TaxSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_TestimonialSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_ThemeSettings_vue":1,"resources_js_Pages_Admin_Settings_ThemeSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_TopBarSettingsForm_vue":1,"resources_js_Pages_Admin_Settings_UpdateAppForm_vue":1,"resources_js_Pages_Admin_Skills_vue":1,"resources_js_Pages_Admin_SubCategories_vue":1,"resources_js_Pages_Admin_SubscriptionDetails_vue":1,"resources_js_Pages_Admin_Subscriptions_vue":1,"resources_js_Pages_Admin_Tags_vue":1,"resources_js_Pages_Admin_Topics_vue":1,"resources_js_Pages_Admin_UserGroups_vue":1,"resources_js_Pages_Admin_Users_vue":1,"resources_js_Pages_Admin_Video_Configure_vue":1,"resources_js_Pages_Admin_Video_Form_vue":1,"resources_js_Pages_Admin_Video_PracticeVideos_vue":1,"resources_js_Pages_Admin_Videos_vue":1,"resources_js_Pages_Auth_ConfirmPassword_vue":1,"resources_js_Pages_Auth_ForgotPassword_vue":1,"resources_js_Pages_Auth_Login_vue":1,"resources_js_Pages_Auth_Register_vue":1,"resources_js_Pages_Auth_ResetPassword_vue":1,"resources_js_Pages_Auth_TwoFactorChallenge_vue":1,"resources_js_Pages_Auth_VerifyEmail_vue":1,"resources_js_Pages_Instructor_Dashboard_vue":1,"resources_js_Pages_PrivacyPolicy_vue":1,"resources_js_Pages_Profile_DeleteUserForm_vue":1,"resources_js_Pages_Profile_LogoutOtherBrowserSessionsForm_vue":1,"resources_js_Pages_Profile_Show_vue":1,"resources_js_Pages_Profile_TwoFactorAuthenticationForm_vue":1,"resources_js_Pages_Profile_UpdatePasswordForm_vue":1,"resources_js_Pages_Profile_UpdateProfileInformationForm_vue":1,"resources_js_Pages_TermsOfService_vue":1,"resources_js_Pages_User_ChangeSyllabus_vue":1,"resources_js_Pages_User_Dashboard_vue":1,"resources_js_Pages_User_ExamDashboard_vue":1,"resources_js_Pages_User_ExamInstructions_vue":1,"resources_js_Pages_User_ExamLeaderBoard_vue":1,"node_modules_moment_locale_sync_recursive_-resources_js_Pages_User_ExamResults_vue":1,"resources_js_Pages_User_ExamScheduleInstructions_vue":1,"resources_js_Pages_User_ExamScreen_vue":1,"resources_js_Pages_User_ExamSolutions_vue":1,"resources_js_Pages_User_ExamThanksScreen_vue":1,"resources_js_Pages_User_ExamsByType_vue":1,"resources_js_Pages_User_LearnPractice_vue":1,"resources_js_Pages_User_LearnPracticeSection_vue":1,"resources_js_Pages_User_LessonScreen_vue":1,"resources_js_Pages_User_LiveExams_vue":1,"resources_js_Pages_User_LiveQuizzes_vue":1,"resources_js_Pages_User_MyExams_vue":1,"resources_js_Pages_User_MyPayments_vue":1,"resources_js_Pages_User_MyPractice_vue":1,"resources_js_Pages_User_MyProgress_vue":1,"resources_js_Pages_User_MyQuizzes_vue":1,"resources_js_Pages_User_MySubscriptions_vue":1,"node_modules_moment_locale_sync_recursive_-resources_js_Pages_User_PracticeAnalysis_vue":1,"resources_js_Pages_User_PracticeLessons_vue":1,"resources_js_Pages_User_PracticeScreen_vue":1,"resources_js_Pages_User_PracticeSets_vue":1,"resources_js_Pages_User_PracticeVideos_vue":1,"resources_js_Pages_User_QBankDashboard_vue":1,"resources_js_Pages_User_QuizDashboard_vue":1,"resources_js_Pages_User_QuizInstructions_vue":1,"resources_js_Pages_User_QuizLeaderBoard_vue":1,"node_modules_moment_locale_sync_recursive_-resources_js_Pages_User_QuizResults_vue":1,"resources_js_Pages_User_QuizScheduleInstructions_vue":1,"resources_js_Pages_User_QuizScreen_vue":1,"resources_js_Pages_User_QuizSolutions_vue":1,"resources_js_Pages_User_QuizThanksScreen_vue":1,"resources_js_Pages_User_QuizzesByType_vue":1,"resources_js_Pages_User_VideoScreen_vue":1,"resources_js_Pages_Welcome_vue":1}[chunkId]) return "js/" + chunkId + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/manifest": 0,
/******/ 			"css/store": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(!/^(css\/(app|store)|\/js\/manifest)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
/******/ })()
;