/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/font-awesome/css/font-awesome.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/font-awesome/css/font-awesome.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../fonts/fontawesome-webfont.eot?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../fonts/fontawesome-webfont.eot */ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot") + "?#iefix&v=4.7.0");
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../fonts/fontawesome-webfont.woff2?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../fonts/fontawesome-webfont.woff?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../fonts/fontawesome-webfont.ttf?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../fonts/fontawesome-webfont.svg?v=4.7.0 */ "./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0") + "#fontawesomeregular");
// Module
exports.push([module.i, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center; }\n\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none; }\n\n.fa-ul > li {\n  position: relative; }\n\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center; }\n\n.fa-li.fa-lg {\n  left: -1.85714286em; }\n\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right {\n  margin-left: .3em; }\n\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right; }\n\n.pull-left {\n  float: left; }\n\n.fa.pull-left {\n  margin-right: .3em; }\n\n.fa.pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none; }\n\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #ffffff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\"; }\n\n.fa-music:before {\n  content: \"\\f001\"; }\n\n.fa-search:before {\n  content: \"\\f002\"; }\n\n.fa-envelope-o:before {\n  content: \"\\f003\"; }\n\n.fa-heart:before {\n  content: \"\\f004\"; }\n\n.fa-star:before {\n  content: \"\\f005\"; }\n\n.fa-star-o:before {\n  content: \"\\f006\"; }\n\n.fa-user:before {\n  content: \"\\f007\"; }\n\n.fa-film:before {\n  content: \"\\f008\"; }\n\n.fa-th-large:before {\n  content: \"\\f009\"; }\n\n.fa-th:before {\n  content: \"\\f00a\"; }\n\n.fa-th-list:before {\n  content: \"\\f00b\"; }\n\n.fa-check:before {\n  content: \"\\f00c\"; }\n\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\"; }\n\n.fa-search-plus:before {\n  content: \"\\f00e\"; }\n\n.fa-search-minus:before {\n  content: \"\\f010\"; }\n\n.fa-power-off:before {\n  content: \"\\f011\"; }\n\n.fa-signal:before {\n  content: \"\\f012\"; }\n\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\"; }\n\n.fa-trash-o:before {\n  content: \"\\f014\"; }\n\n.fa-home:before {\n  content: \"\\f015\"; }\n\n.fa-file-o:before {\n  content: \"\\f016\"; }\n\n.fa-clock-o:before {\n  content: \"\\f017\"; }\n\n.fa-road:before {\n  content: \"\\f018\"; }\n\n.fa-download:before {\n  content: \"\\f019\"; }\n\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\"; }\n\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\"; }\n\n.fa-inbox:before {\n  content: \"\\f01c\"; }\n\n.fa-play-circle-o:before {\n  content: \"\\f01d\"; }\n\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\"; }\n\n.fa-refresh:before {\n  content: \"\\f021\"; }\n\n.fa-list-alt:before {\n  content: \"\\f022\"; }\n\n.fa-lock:before {\n  content: \"\\f023\"; }\n\n.fa-flag:before {\n  content: \"\\f024\"; }\n\n.fa-headphones:before {\n  content: \"\\f025\"; }\n\n.fa-volume-off:before {\n  content: \"\\f026\"; }\n\n.fa-volume-down:before {\n  content: \"\\f027\"; }\n\n.fa-volume-up:before {\n  content: \"\\f028\"; }\n\n.fa-qrcode:before {\n  content: \"\\f029\"; }\n\n.fa-barcode:before {\n  content: \"\\f02a\"; }\n\n.fa-tag:before {\n  content: \"\\f02b\"; }\n\n.fa-tags:before {\n  content: \"\\f02c\"; }\n\n.fa-book:before {\n  content: \"\\f02d\"; }\n\n.fa-bookmark:before {\n  content: \"\\f02e\"; }\n\n.fa-print:before {\n  content: \"\\f02f\"; }\n\n.fa-camera:before {\n  content: \"\\f030\"; }\n\n.fa-font:before {\n  content: \"\\f031\"; }\n\n.fa-bold:before {\n  content: \"\\f032\"; }\n\n.fa-italic:before {\n  content: \"\\f033\"; }\n\n.fa-text-height:before {\n  content: \"\\f034\"; }\n\n.fa-text-width:before {\n  content: \"\\f035\"; }\n\n.fa-align-left:before {\n  content: \"\\f036\"; }\n\n.fa-align-center:before {\n  content: \"\\f037\"; }\n\n.fa-align-right:before {\n  content: \"\\f038\"; }\n\n.fa-align-justify:before {\n  content: \"\\f039\"; }\n\n.fa-list:before {\n  content: \"\\f03a\"; }\n\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\"; }\n\n.fa-indent:before {\n  content: \"\\f03c\"; }\n\n.fa-video-camera:before {\n  content: \"\\f03d\"; }\n\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\"; }\n\n.fa-pencil:before {\n  content: \"\\f040\"; }\n\n.fa-map-marker:before {\n  content: \"\\f041\"; }\n\n.fa-adjust:before {\n  content: \"\\f042\"; }\n\n.fa-tint:before {\n  content: \"\\f043\"; }\n\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\"; }\n\n.fa-share-square-o:before {\n  content: \"\\f045\"; }\n\n.fa-check-square-o:before {\n  content: \"\\f046\"; }\n\n.fa-arrows:before {\n  content: \"\\f047\"; }\n\n.fa-step-backward:before {\n  content: \"\\f048\"; }\n\n.fa-fast-backward:before {\n  content: \"\\f049\"; }\n\n.fa-backward:before {\n  content: \"\\f04a\"; }\n\n.fa-play:before {\n  content: \"\\f04b\"; }\n\n.fa-pause:before {\n  content: \"\\f04c\"; }\n\n.fa-stop:before {\n  content: \"\\f04d\"; }\n\n.fa-forward:before {\n  content: \"\\f04e\"; }\n\n.fa-fast-forward:before {\n  content: \"\\f050\"; }\n\n.fa-step-forward:before {\n  content: \"\\f051\"; }\n\n.fa-eject:before {\n  content: \"\\f052\"; }\n\n.fa-chevron-left:before {\n  content: \"\\f053\"; }\n\n.fa-chevron-right:before {\n  content: \"\\f054\"; }\n\n.fa-plus-circle:before {\n  content: \"\\f055\"; }\n\n.fa-minus-circle:before {\n  content: \"\\f056\"; }\n\n.fa-times-circle:before {\n  content: \"\\f057\"; }\n\n.fa-check-circle:before {\n  content: \"\\f058\"; }\n\n.fa-question-circle:before {\n  content: \"\\f059\"; }\n\n.fa-info-circle:before {\n  content: \"\\f05a\"; }\n\n.fa-crosshairs:before {\n  content: \"\\f05b\"; }\n\n.fa-times-circle-o:before {\n  content: \"\\f05c\"; }\n\n.fa-check-circle-o:before {\n  content: \"\\f05d\"; }\n\n.fa-ban:before {\n  content: \"\\f05e\"; }\n\n.fa-arrow-left:before {\n  content: \"\\f060\"; }\n\n.fa-arrow-right:before {\n  content: \"\\f061\"; }\n\n.fa-arrow-up:before {\n  content: \"\\f062\"; }\n\n.fa-arrow-down:before {\n  content: \"\\f063\"; }\n\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\"; }\n\n.fa-expand:before {\n  content: \"\\f065\"; }\n\n.fa-compress:before {\n  content: \"\\f066\"; }\n\n.fa-plus:before {\n  content: \"\\f067\"; }\n\n.fa-minus:before {\n  content: \"\\f068\"; }\n\n.fa-asterisk:before {\n  content: \"\\f069\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\\f06a\"; }\n\n.fa-gift:before {\n  content: \"\\f06b\"; }\n\n.fa-leaf:before {\n  content: \"\\f06c\"; }\n\n.fa-fire:before {\n  content: \"\\f06d\"; }\n\n.fa-eye:before {\n  content: \"\\f06e\"; }\n\n.fa-eye-slash:before {\n  content: \"\\f070\"; }\n\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\"; }\n\n.fa-plane:before {\n  content: \"\\f072\"; }\n\n.fa-calendar:before {\n  content: \"\\f073\"; }\n\n.fa-random:before {\n  content: \"\\f074\"; }\n\n.fa-comment:before {\n  content: \"\\f075\"; }\n\n.fa-magnet:before {\n  content: \"\\f076\"; }\n\n.fa-chevron-up:before {\n  content: \"\\f077\"; }\n\n.fa-chevron-down:before {\n  content: \"\\f078\"; }\n\n.fa-retweet:before {\n  content: \"\\f079\"; }\n\n.fa-shopping-cart:before {\n  content: \"\\f07a\"; }\n\n.fa-folder:before {\n  content: \"\\f07b\"; }\n\n.fa-folder-open:before {\n  content: \"\\f07c\"; }\n\n.fa-arrows-v:before {\n  content: \"\\f07d\"; }\n\n.fa-arrows-h:before {\n  content: \"\\f07e\"; }\n\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\"; }\n\n.fa-twitter-square:before {\n  content: \"\\f081\"; }\n\n.fa-facebook-square:before {\n  content: \"\\f082\"; }\n\n.fa-camera-retro:before {\n  content: \"\\f083\"; }\n\n.fa-key:before {\n  content: \"\\f084\"; }\n\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\"; }\n\n.fa-comments:before {\n  content: \"\\f086\"; }\n\n.fa-thumbs-o-up:before {\n  content: \"\\f087\"; }\n\n.fa-thumbs-o-down:before {\n  content: \"\\f088\"; }\n\n.fa-star-half:before {\n  content: \"\\f089\"; }\n\n.fa-heart-o:before {\n  content: \"\\f08a\"; }\n\n.fa-sign-out:before {\n  content: \"\\f08b\"; }\n\n.fa-linkedin-square:before {\n  content: \"\\f08c\"; }\n\n.fa-thumb-tack:before {\n  content: \"\\f08d\"; }\n\n.fa-external-link:before {\n  content: \"\\f08e\"; }\n\n.fa-sign-in:before {\n  content: \"\\f090\"; }\n\n.fa-trophy:before {\n  content: \"\\f091\"; }\n\n.fa-github-square:before {\n  content: \"\\f092\"; }\n\n.fa-upload:before {\n  content: \"\\f093\"; }\n\n.fa-lemon-o:before {\n  content: \"\\f094\"; }\n\n.fa-phone:before {\n  content: \"\\f095\"; }\n\n.fa-square-o:before {\n  content: \"\\f096\"; }\n\n.fa-bookmark-o:before {\n  content: \"\\f097\"; }\n\n.fa-phone-square:before {\n  content: \"\\f098\"; }\n\n.fa-twitter:before {\n  content: \"\\f099\"; }\n\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\"; }\n\n.fa-github:before {\n  content: \"\\f09b\"; }\n\n.fa-unlock:before {\n  content: \"\\f09c\"; }\n\n.fa-credit-card:before {\n  content: \"\\f09d\"; }\n\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\"; }\n\n.fa-hdd-o:before {\n  content: \"\\f0a0\"; }\n\n.fa-bullhorn:before {\n  content: \"\\f0a1\"; }\n\n.fa-bell:before {\n  content: \"\\f0f3\"; }\n\n.fa-certificate:before {\n  content: \"\\f0a3\"; }\n\n.fa-hand-o-right:before {\n  content: \"\\f0a4\"; }\n\n.fa-hand-o-left:before {\n  content: \"\\f0a5\"; }\n\n.fa-hand-o-up:before {\n  content: \"\\f0a6\"; }\n\n.fa-hand-o-down:before {\n  content: \"\\f0a7\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\"; }\n\n.fa-globe:before {\n  content: \"\\f0ac\"; }\n\n.fa-wrench:before {\n  content: \"\\f0ad\"; }\n\n.fa-tasks:before {\n  content: \"\\f0ae\"; }\n\n.fa-filter:before {\n  content: \"\\f0b0\"; }\n\n.fa-briefcase:before {\n  content: \"\\f0b1\"; }\n\n.fa-arrows-alt:before {\n  content: \"\\f0b2\"; }\n\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\"; }\n\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\"; }\n\n.fa-cloud:before {\n  content: \"\\f0c2\"; }\n\n.fa-flask:before {\n  content: \"\\f0c3\"; }\n\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\"; }\n\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\"; }\n\n.fa-paperclip:before {\n  content: \"\\f0c6\"; }\n\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\"; }\n\n.fa-square:before {\n  content: \"\\f0c8\"; }\n\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\"; }\n\n.fa-list-ul:before {\n  content: \"\\f0ca\"; }\n\n.fa-list-ol:before {\n  content: \"\\f0cb\"; }\n\n.fa-strikethrough:before {\n  content: \"\\f0cc\"; }\n\n.fa-underline:before {\n  content: \"\\f0cd\"; }\n\n.fa-table:before {\n  content: \"\\f0ce\"; }\n\n.fa-magic:before {\n  content: \"\\f0d0\"; }\n\n.fa-truck:before {\n  content: \"\\f0d1\"; }\n\n.fa-pinterest:before {\n  content: \"\\f0d2\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\f0d3\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\f0d4\"; }\n\n.fa-google-plus:before {\n  content: \"\\f0d5\"; }\n\n.fa-money:before {\n  content: \"\\f0d6\"; }\n\n.fa-caret-down:before {\n  content: \"\\f0d7\"; }\n\n.fa-caret-up:before {\n  content: \"\\f0d8\"; }\n\n.fa-caret-left:before {\n  content: \"\\f0d9\"; }\n\n.fa-caret-right:before {\n  content: \"\\f0da\"; }\n\n.fa-columns:before {\n  content: \"\\f0db\"; }\n\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\"; }\n\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\"; }\n\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\"; }\n\n.fa-envelope:before {\n  content: \"\\f0e0\"; }\n\n.fa-linkedin:before {\n  content: \"\\f0e1\"; }\n\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\"; }\n\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\"; }\n\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\"; }\n\n.fa-comment-o:before {\n  content: \"\\f0e5\"; }\n\n.fa-comments-o:before {\n  content: \"\\f0e6\"; }\n\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\"; }\n\n.fa-sitemap:before {\n  content: \"\\f0e8\"; }\n\n.fa-umbrella:before {\n  content: \"\\f0e9\"; }\n\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\"; }\n\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\"; }\n\n.fa-exchange:before {\n  content: \"\\f0ec\"; }\n\n.fa-cloud-download:before {\n  content: \"\\f0ed\"; }\n\n.fa-cloud-upload:before {\n  content: \"\\f0ee\"; }\n\n.fa-user-md:before {\n  content: \"\\f0f0\"; }\n\n.fa-stethoscope:before {\n  content: \"\\f0f1\"; }\n\n.fa-suitcase:before {\n  content: \"\\f0f2\"; }\n\n.fa-bell-o:before {\n  content: \"\\f0a2\"; }\n\n.fa-coffee:before {\n  content: \"\\f0f4\"; }\n\n.fa-cutlery:before {\n  content: \"\\f0f5\"; }\n\n.fa-file-text-o:before {\n  content: \"\\f0f6\"; }\n\n.fa-building-o:before {\n  content: \"\\f0f7\"; }\n\n.fa-hospital-o:before {\n  content: \"\\f0f8\"; }\n\n.fa-ambulance:before {\n  content: \"\\f0f9\"; }\n\n.fa-medkit:before {\n  content: \"\\f0fa\"; }\n\n.fa-fighter-jet:before {\n  content: \"\\f0fb\"; }\n\n.fa-beer:before {\n  content: \"\\f0fc\"; }\n\n.fa-h-square:before {\n  content: \"\\f0fd\"; }\n\n.fa-plus-square:before {\n  content: \"\\f0fe\"; }\n\n.fa-angle-double-left:before {\n  content: \"\\f100\"; }\n\n.fa-angle-double-right:before {\n  content: \"\\f101\"; }\n\n.fa-angle-double-up:before {\n  content: \"\\f102\"; }\n\n.fa-angle-double-down:before {\n  content: \"\\f103\"; }\n\n.fa-angle-left:before {\n  content: \"\\f104\"; }\n\n.fa-angle-right:before {\n  content: \"\\f105\"; }\n\n.fa-angle-up:before {\n  content: \"\\f106\"; }\n\n.fa-angle-down:before {\n  content: \"\\f107\"; }\n\n.fa-desktop:before {\n  content: \"\\f108\"; }\n\n.fa-laptop:before {\n  content: \"\\f109\"; }\n\n.fa-tablet:before {\n  content: \"\\f10a\"; }\n\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\"; }\n\n.fa-circle-o:before {\n  content: \"\\f10c\"; }\n\n.fa-quote-left:before {\n  content: \"\\f10d\"; }\n\n.fa-quote-right:before {\n  content: \"\\f10e\"; }\n\n.fa-spinner:before {\n  content: \"\\f110\"; }\n\n.fa-circle:before {\n  content: \"\\f111\"; }\n\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\"; }\n\n.fa-github-alt:before {\n  content: \"\\f113\"; }\n\n.fa-folder-o:before {\n  content: \"\\f114\"; }\n\n.fa-folder-open-o:before {\n  content: \"\\f115\"; }\n\n.fa-smile-o:before {\n  content: \"\\f118\"; }\n\n.fa-frown-o:before {\n  content: \"\\f119\"; }\n\n.fa-meh-o:before {\n  content: \"\\f11a\"; }\n\n.fa-gamepad:before {\n  content: \"\\f11b\"; }\n\n.fa-keyboard-o:before {\n  content: \"\\f11c\"; }\n\n.fa-flag-o:before {\n  content: \"\\f11d\"; }\n\n.fa-flag-checkered:before {\n  content: \"\\f11e\"; }\n\n.fa-terminal:before {\n  content: \"\\f120\"; }\n\n.fa-code:before {\n  content: \"\\f121\"; }\n\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\"; }\n\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\"; }\n\n.fa-location-arrow:before {\n  content: \"\\f124\"; }\n\n.fa-crop:before {\n  content: \"\\f125\"; }\n\n.fa-code-fork:before {\n  content: \"\\f126\"; }\n\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\"; }\n\n.fa-question:before {\n  content: \"\\f128\"; }\n\n.fa-info:before {\n  content: \"\\f129\"; }\n\n.fa-exclamation:before {\n  content: \"\\f12a\"; }\n\n.fa-superscript:before {\n  content: \"\\f12b\"; }\n\n.fa-subscript:before {\n  content: \"\\f12c\"; }\n\n.fa-eraser:before {\n  content: \"\\f12d\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\\f12e\"; }\n\n.fa-microphone:before {\n  content: \"\\f130\"; }\n\n.fa-microphone-slash:before {\n  content: \"\\f131\"; }\n\n.fa-shield:before {\n  content: \"\\f132\"; }\n\n.fa-calendar-o:before {\n  content: \"\\f133\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\\f134\"; }\n\n.fa-rocket:before {\n  content: \"\\f135\"; }\n\n.fa-maxcdn:before {\n  content: \"\\f136\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\\f137\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\\f138\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\\f139\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\"; }\n\n.fa-html5:before {\n  content: \"\\f13b\"; }\n\n.fa-css3:before {\n  content: \"\\f13c\"; }\n\n.fa-anchor:before {\n  content: \"\\f13d\"; }\n\n.fa-unlock-alt:before {\n  content: \"\\f13e\"; }\n\n.fa-bullseye:before {\n  content: \"\\f140\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\\f141\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\\f142\"; }\n\n.fa-rss-square:before {\n  content: \"\\f143\"; }\n\n.fa-play-circle:before {\n  content: \"\\f144\"; }\n\n.fa-ticket:before {\n  content: \"\\f145\"; }\n\n.fa-minus-square:before {\n  content: \"\\f146\"; }\n\n.fa-minus-square-o:before {\n  content: \"\\f147\"; }\n\n.fa-level-up:before {\n  content: \"\\f148\"; }\n\n.fa-level-down:before {\n  content: \"\\f149\"; }\n\n.fa-check-square:before {\n  content: \"\\f14a\"; }\n\n.fa-pencil-square:before {\n  content: \"\\f14b\"; }\n\n.fa-external-link-square:before {\n  content: \"\\f14c\"; }\n\n.fa-share-square:before {\n  content: \"\\f14d\"; }\n\n.fa-compass:before {\n  content: \"\\f14e\"; }\n\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\"; }\n\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\"; }\n\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\"; }\n\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\"; }\n\n.fa-gbp:before {\n  content: \"\\f154\"; }\n\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\"; }\n\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\"; }\n\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\"; }\n\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\"; }\n\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\"; }\n\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\"; }\n\n.fa-file:before {\n  content: \"\\f15b\"; }\n\n.fa-file-text:before {\n  content: \"\\f15c\"; }\n\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\"; }\n\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\"; }\n\n.fa-sort-amount-asc:before {\n  content: \"\\f160\"; }\n\n.fa-sort-amount-desc:before {\n  content: \"\\f161\"; }\n\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\"; }\n\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\"; }\n\n.fa-thumbs-up:before {\n  content: \"\\f164\"; }\n\n.fa-thumbs-down:before {\n  content: \"\\f165\"; }\n\n.fa-youtube-square:before {\n  content: \"\\f166\"; }\n\n.fa-youtube:before {\n  content: \"\\f167\"; }\n\n.fa-xing:before {\n  content: \"\\f168\"; }\n\n.fa-xing-square:before {\n  content: \"\\f169\"; }\n\n.fa-youtube-play:before {\n  content: \"\\f16a\"; }\n\n.fa-dropbox:before {\n  content: \"\\f16b\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\f16c\"; }\n\n.fa-instagram:before {\n  content: \"\\f16d\"; }\n\n.fa-flickr:before {\n  content: \"\\f16e\"; }\n\n.fa-adn:before {\n  content: \"\\f170\"; }\n\n.fa-bitbucket:before {\n  content: \"\\f171\"; }\n\n.fa-bitbucket-square:before {\n  content: \"\\f172\"; }\n\n.fa-tumblr:before {\n  content: \"\\f173\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\f174\"; }\n\n.fa-long-arrow-down:before {\n  content: \"\\f175\"; }\n\n.fa-long-arrow-up:before {\n  content: \"\\f176\"; }\n\n.fa-long-arrow-left:before {\n  content: \"\\f177\"; }\n\n.fa-long-arrow-right:before {\n  content: \"\\f178\"; }\n\n.fa-apple:before {\n  content: \"\\f179\"; }\n\n.fa-windows:before {\n  content: \"\\f17a\"; }\n\n.fa-android:before {\n  content: \"\\f17b\"; }\n\n.fa-linux:before {\n  content: \"\\f17c\"; }\n\n.fa-dribbble:before {\n  content: \"\\f17d\"; }\n\n.fa-skype:before {\n  content: \"\\f17e\"; }\n\n.fa-foursquare:before {\n  content: \"\\f180\"; }\n\n.fa-trello:before {\n  content: \"\\f181\"; }\n\n.fa-female:before {\n  content: \"\\f182\"; }\n\n.fa-male:before {\n  content: \"\\f183\"; }\n\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\"; }\n\n.fa-sun-o:before {\n  content: \"\\f185\"; }\n\n.fa-moon-o:before {\n  content: \"\\f186\"; }\n\n.fa-archive:before {\n  content: \"\\f187\"; }\n\n.fa-bug:before {\n  content: \"\\f188\"; }\n\n.fa-vk:before {\n  content: \"\\f189\"; }\n\n.fa-weibo:before {\n  content: \"\\f18a\"; }\n\n.fa-renren:before {\n  content: \"\\f18b\"; }\n\n.fa-pagelines:before {\n  content: \"\\f18c\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\f18d\"; }\n\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\"; }\n\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\"; }\n\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\"; }\n\n.fa-dot-circle-o:before {\n  content: \"\\f192\"; }\n\n.fa-wheelchair:before {\n  content: \"\\f193\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\f194\"; }\n\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\"; }\n\n.fa-plus-square-o:before {\n  content: \"\\f196\"; }\n\n.fa-space-shuttle:before {\n  content: \"\\f197\"; }\n\n.fa-slack:before {\n  content: \"\\f198\"; }\n\n.fa-envelope-square:before {\n  content: \"\\f199\"; }\n\n.fa-wordpress:before {\n  content: \"\\f19a\"; }\n\n.fa-openid:before {\n  content: \"\\f19b\"; }\n\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\"; }\n\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\"; }\n\n.fa-yahoo:before {\n  content: \"\\f19e\"; }\n\n.fa-google:before {\n  content: \"\\f1a0\"; }\n\n.fa-reddit:before {\n  content: \"\\f1a1\"; }\n\n.fa-reddit-square:before {\n  content: \"\\f1a2\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\f1a4\"; }\n\n.fa-delicious:before {\n  content: \"\\f1a5\"; }\n\n.fa-digg:before {\n  content: \"\\f1a6\"; }\n\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\"; }\n\n.fa-drupal:before {\n  content: \"\\f1a9\"; }\n\n.fa-joomla:before {\n  content: \"\\f1aa\"; }\n\n.fa-language:before {\n  content: \"\\f1ab\"; }\n\n.fa-fax:before {\n  content: \"\\f1ac\"; }\n\n.fa-building:before {\n  content: \"\\f1ad\"; }\n\n.fa-child:before {\n  content: \"\\f1ae\"; }\n\n.fa-paw:before {\n  content: \"\\f1b0\"; }\n\n.fa-spoon:before {\n  content: \"\\f1b1\"; }\n\n.fa-cube:before {\n  content: \"\\f1b2\"; }\n\n.fa-cubes:before {\n  content: \"\\f1b3\"; }\n\n.fa-behance:before {\n  content: \"\\f1b4\"; }\n\n.fa-behance-square:before {\n  content: \"\\f1b5\"; }\n\n.fa-steam:before {\n  content: \"\\f1b6\"; }\n\n.fa-steam-square:before {\n  content: \"\\f1b7\"; }\n\n.fa-recycle:before {\n  content: \"\\f1b8\"; }\n\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\"; }\n\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\"; }\n\n.fa-tree:before {\n  content: \"\\f1bb\"; }\n\n.fa-spotify:before {\n  content: \"\\f1bc\"; }\n\n.fa-deviantart:before {\n  content: \"\\f1bd\"; }\n\n.fa-soundcloud:before {\n  content: \"\\f1be\"; }\n\n.fa-database:before {\n  content: \"\\f1c0\"; }\n\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\"; }\n\n.fa-file-word-o:before {\n  content: \"\\f1c2\"; }\n\n.fa-file-excel-o:before {\n  content: \"\\f1c3\"; }\n\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\"; }\n\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\"; }\n\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\"; }\n\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\"; }\n\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\"; }\n\n.fa-file-code-o:before {\n  content: \"\\f1c9\"; }\n\n.fa-vine:before {\n  content: \"\\f1ca\"; }\n\n.fa-codepen:before {\n  content: \"\\f1cb\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\f1cc\"; }\n\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\"; }\n\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\"; }\n\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\"; }\n\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\"; }\n\n.fa-git-square:before {\n  content: \"\\f1d2\"; }\n\n.fa-git:before {\n  content: \"\\f1d3\"; }\n\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\"; }\n\n.fa-qq:before {\n  content: \"\\f1d6\"; }\n\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\"; }\n\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\"; }\n\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\"; }\n\n.fa-history:before {\n  content: \"\\f1da\"; }\n\n.fa-circle-thin:before {\n  content: \"\\f1db\"; }\n\n.fa-header:before {\n  content: \"\\f1dc\"; }\n\n.fa-paragraph:before {\n  content: \"\\f1dd\"; }\n\n.fa-sliders:before {\n  content: \"\\f1de\"; }\n\n.fa-share-alt:before {\n  content: \"\\f1e0\"; }\n\n.fa-share-alt-square:before {\n  content: \"\\f1e1\"; }\n\n.fa-bomb:before {\n  content: \"\\f1e2\"; }\n\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\"; }\n\n.fa-tty:before {\n  content: \"\\f1e4\"; }\n\n.fa-binoculars:before {\n  content: \"\\f1e5\"; }\n\n.fa-plug:before {\n  content: \"\\f1e6\"; }\n\n.fa-slideshare:before {\n  content: \"\\f1e7\"; }\n\n.fa-twitch:before {\n  content: \"\\f1e8\"; }\n\n.fa-yelp:before {\n  content: \"\\f1e9\"; }\n\n.fa-newspaper-o:before {\n  content: \"\\f1ea\"; }\n\n.fa-wifi:before {\n  content: \"\\f1eb\"; }\n\n.fa-calculator:before {\n  content: \"\\f1ec\"; }\n\n.fa-paypal:before {\n  content: \"\\f1ed\"; }\n\n.fa-google-wallet:before {\n  content: \"\\f1ee\"; }\n\n.fa-cc-visa:before {\n  content: \"\\f1f0\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\"; }\n\n.fa-cc-discover:before {\n  content: \"\\f1f2\"; }\n\n.fa-cc-amex:before {\n  content: \"\\f1f3\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\f1f4\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\f1f5\"; }\n\n.fa-bell-slash:before {\n  content: \"\\f1f6\"; }\n\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\"; }\n\n.fa-trash:before {\n  content: \"\\f1f8\"; }\n\n.fa-copyright:before {\n  content: \"\\f1f9\"; }\n\n.fa-at:before {\n  content: \"\\f1fa\"; }\n\n.fa-eyedropper:before {\n  content: \"\\f1fb\"; }\n\n.fa-paint-brush:before {\n  content: \"\\f1fc\"; }\n\n.fa-birthday-cake:before {\n  content: \"\\f1fd\"; }\n\n.fa-area-chart:before {\n  content: \"\\f1fe\"; }\n\n.fa-pie-chart:before {\n  content: \"\\f200\"; }\n\n.fa-line-chart:before {\n  content: \"\\f201\"; }\n\n.fa-lastfm:before {\n  content: \"\\f202\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\f203\"; }\n\n.fa-toggle-off:before {\n  content: \"\\f204\"; }\n\n.fa-toggle-on:before {\n  content: \"\\f205\"; }\n\n.fa-bicycle:before {\n  content: \"\\f206\"; }\n\n.fa-bus:before {\n  content: \"\\f207\"; }\n\n.fa-ioxhost:before {\n  content: \"\\f208\"; }\n\n.fa-angellist:before {\n  content: \"\\f209\"; }\n\n.fa-cc:before {\n  content: \"\\f20a\"; }\n\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\"; }\n\n.fa-meanpath:before {\n  content: \"\\f20c\"; }\n\n.fa-buysellads:before {\n  content: \"\\f20d\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\f20e\"; }\n\n.fa-dashcube:before {\n  content: \"\\f210\"; }\n\n.fa-forumbee:before {\n  content: \"\\f211\"; }\n\n.fa-leanpub:before {\n  content: \"\\f212\"; }\n\n.fa-sellsy:before {\n  content: \"\\f213\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\f214\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\f215\"; }\n\n.fa-skyatlas:before {\n  content: \"\\f216\"; }\n\n.fa-cart-plus:before {\n  content: \"\\f217\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\\f218\"; }\n\n.fa-diamond:before {\n  content: \"\\f219\"; }\n\n.fa-ship:before {\n  content: \"\\f21a\"; }\n\n.fa-user-secret:before {\n  content: \"\\f21b\"; }\n\n.fa-motorcycle:before {\n  content: \"\\f21c\"; }\n\n.fa-street-view:before {\n  content: \"\\f21d\"; }\n\n.fa-heartbeat:before {\n  content: \"\\f21e\"; }\n\n.fa-venus:before {\n  content: \"\\f221\"; }\n\n.fa-mars:before {\n  content: \"\\f222\"; }\n\n.fa-mercury:before {\n  content: \"\\f223\"; }\n\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\"; }\n\n.fa-transgender-alt:before {\n  content: \"\\f225\"; }\n\n.fa-venus-double:before {\n  content: \"\\f226\"; }\n\n.fa-mars-double:before {\n  content: \"\\f227\"; }\n\n.fa-venus-mars:before {\n  content: \"\\f228\"; }\n\n.fa-mars-stroke:before {\n  content: \"\\f229\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\"; }\n\n.fa-neuter:before {\n  content: \"\\f22c\"; }\n\n.fa-genderless:before {\n  content: \"\\f22d\"; }\n\n.fa-facebook-official:before {\n  content: \"\\f230\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\f231\"; }\n\n.fa-whatsapp:before {\n  content: \"\\f232\"; }\n\n.fa-server:before {\n  content: \"\\f233\"; }\n\n.fa-user-plus:before {\n  content: \"\\f234\"; }\n\n.fa-user-times:before {\n  content: \"\\f235\"; }\n\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\"; }\n\n.fa-viacoin:before {\n  content: \"\\f237\"; }\n\n.fa-train:before {\n  content: \"\\f238\"; }\n\n.fa-subway:before {\n  content: \"\\f239\"; }\n\n.fa-medium:before {\n  content: \"\\f23a\"; }\n\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\"; }\n\n.fa-optin-monster:before {\n  content: \"\\f23c\"; }\n\n.fa-opencart:before {\n  content: \"\\f23d\"; }\n\n.fa-expeditedssl:before {\n  content: \"\\f23e\"; }\n\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\f240\"; }\n\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\"; }\n\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\"; }\n\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\"; }\n\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\"; }\n\n.fa-mouse-pointer:before {\n  content: \"\\f245\"; }\n\n.fa-i-cursor:before {\n  content: \"\\f246\"; }\n\n.fa-object-group:before {\n  content: \"\\f247\"; }\n\n.fa-object-ungroup:before {\n  content: \"\\f248\"; }\n\n.fa-sticky-note:before {\n  content: \"\\f249\"; }\n\n.fa-sticky-note-o:before {\n  content: \"\\f24a\"; }\n\n.fa-cc-jcb:before {\n  content: \"\\f24b\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\\f24c\"; }\n\n.fa-clone:before {\n  content: \"\\f24d\"; }\n\n.fa-balance-scale:before {\n  content: \"\\f24e\"; }\n\n.fa-hourglass-o:before {\n  content: \"\\f250\"; }\n\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\"; }\n\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\"; }\n\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\"; }\n\n.fa-hourglass:before {\n  content: \"\\f254\"; }\n\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\"; }\n\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\"; }\n\n.fa-hand-scissors-o:before {\n  content: \"\\f257\"; }\n\n.fa-hand-lizard-o:before {\n  content: \"\\f258\"; }\n\n.fa-hand-spock-o:before {\n  content: \"\\f259\"; }\n\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\"; }\n\n.fa-hand-peace-o:before {\n  content: \"\\f25b\"; }\n\n.fa-trademark:before {\n  content: \"\\f25c\"; }\n\n.fa-registered:before {\n  content: \"\\f25d\"; }\n\n.fa-creative-commons:before {\n  content: \"\\f25e\"; }\n\n.fa-gg:before {\n  content: \"\\f260\"; }\n\n.fa-gg-circle:before {\n  content: \"\\f261\"; }\n\n.fa-tripadvisor:before {\n  content: \"\\f262\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\\f263\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\"; }\n\n.fa-get-pocket:before {\n  content: \"\\f265\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\\f266\"; }\n\n.fa-safari:before {\n  content: \"\\f267\"; }\n\n.fa-chrome:before {\n  content: \"\\f268\"; }\n\n.fa-firefox:before {\n  content: \"\\f269\"; }\n\n.fa-opera:before {\n  content: \"\\f26a\"; }\n\n.fa-internet-explorer:before {\n  content: \"\\f26b\"; }\n\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\"; }\n\n.fa-contao:before {\n  content: \"\\f26d\"; }\n\n.fa-500px:before {\n  content: \"\\f26e\"; }\n\n.fa-amazon:before {\n  content: \"\\f270\"; }\n\n.fa-calendar-plus-o:before {\n  content: \"\\f271\"; }\n\n.fa-calendar-minus-o:before {\n  content: \"\\f272\"; }\n\n.fa-calendar-times-o:before {\n  content: \"\\f273\"; }\n\n.fa-calendar-check-o:before {\n  content: \"\\f274\"; }\n\n.fa-industry:before {\n  content: \"\\f275\"; }\n\n.fa-map-pin:before {\n  content: \"\\f276\"; }\n\n.fa-map-signs:before {\n  content: \"\\f277\"; }\n\n.fa-map-o:before {\n  content: \"\\f278\"; }\n\n.fa-map:before {\n  content: \"\\f279\"; }\n\n.fa-commenting:before {\n  content: \"\\f27a\"; }\n\n.fa-commenting-o:before {\n  content: \"\\f27b\"; }\n\n.fa-houzz:before {\n  content: \"\\f27c\"; }\n\n.fa-vimeo:before {\n  content: \"\\f27d\"; }\n\n.fa-black-tie:before {\n  content: \"\\f27e\"; }\n\n.fa-fonticons:before {\n  content: \"\\f280\"; }\n\n.fa-reddit-alien:before {\n  content: \"\\f281\"; }\n\n.fa-edge:before {\n  content: \"\\f282\"; }\n\n.fa-credit-card-alt:before {\n  content: \"\\f283\"; }\n\n.fa-codiepie:before {\n  content: \"\\f284\"; }\n\n.fa-modx:before {\n  content: \"\\f285\"; }\n\n.fa-fort-awesome:before {\n  content: \"\\f286\"; }\n\n.fa-usb:before {\n  content: \"\\f287\"; }\n\n.fa-product-hunt:before {\n  content: \"\\f288\"; }\n\n.fa-mixcloud:before {\n  content: \"\\f289\"; }\n\n.fa-scribd:before {\n  content: \"\\f28a\"; }\n\n.fa-pause-circle:before {\n  content: \"\\f28b\"; }\n\n.fa-pause-circle-o:before {\n  content: \"\\f28c\"; }\n\n.fa-stop-circle:before {\n  content: \"\\f28d\"; }\n\n.fa-stop-circle-o:before {\n  content: \"\\f28e\"; }\n\n.fa-shopping-bag:before {\n  content: \"\\f290\"; }\n\n.fa-shopping-basket:before {\n  content: \"\\f291\"; }\n\n.fa-hashtag:before {\n  content: \"\\f292\"; }\n\n.fa-bluetooth:before {\n  content: \"\\f293\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\\f294\"; }\n\n.fa-percent:before {\n  content: \"\\f295\"; }\n\n.fa-gitlab:before {\n  content: \"\\f296\"; }\n\n.fa-wpbeginner:before {\n  content: \"\\f297\"; }\n\n.fa-wpforms:before {\n  content: \"\\f298\"; }\n\n.fa-envira:before {\n  content: \"\\f299\"; }\n\n.fa-universal-access:before {\n  content: \"\\f29a\"; }\n\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\"; }\n\n.fa-question-circle-o:before {\n  content: \"\\f29c\"; }\n\n.fa-blind:before {\n  content: \"\\f29d\"; }\n\n.fa-audio-description:before {\n  content: \"\\f29e\"; }\n\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\"; }\n\n.fa-braille:before {\n  content: \"\\f2a1\"; }\n\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\"; }\n\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\"; }\n\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\"; }\n\n.fa-glide:before {\n  content: \"\\f2a5\"; }\n\n.fa-glide-g:before {\n  content: \"\\f2a6\"; }\n\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\"; }\n\n.fa-low-vision:before {\n  content: \"\\f2a8\"; }\n\n.fa-viadeo:before {\n  content: \"\\f2a9\"; }\n\n.fa-viadeo-square:before {\n  content: \"\\f2aa\"; }\n\n.fa-snapchat:before {\n  content: \"\\f2ab\"; }\n\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\"; }\n\n.fa-snapchat-square:before {\n  content: \"\\f2ad\"; }\n\n.fa-pied-piper:before {\n  content: \"\\f2ae\"; }\n\n.fa-first-order:before {\n  content: \"\\f2b0\"; }\n\n.fa-yoast:before {\n  content: \"\\f2b1\"; }\n\n.fa-themeisle:before {\n  content: \"\\f2b2\"; }\n\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\"; }\n\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\"; }\n\n.fa-handshake-o:before {\n  content: \"\\f2b5\"; }\n\n.fa-envelope-open:before {\n  content: \"\\f2b6\"; }\n\n.fa-envelope-open-o:before {\n  content: \"\\f2b7\"; }\n\n.fa-linode:before {\n  content: \"\\f2b8\"; }\n\n.fa-address-book:before {\n  content: \"\\f2b9\"; }\n\n.fa-address-book-o:before {\n  content: \"\\f2ba\"; }\n\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\f2bb\"; }\n\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\f2bc\"; }\n\n.fa-user-circle:before {\n  content: \"\\f2bd\"; }\n\n.fa-user-circle-o:before {\n  content: \"\\f2be\"; }\n\n.fa-user-o:before {\n  content: \"\\f2c0\"; }\n\n.fa-id-badge:before {\n  content: \"\\f2c1\"; }\n\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\f2c2\"; }\n\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\f2c3\"; }\n\n.fa-quora:before {\n  content: \"\\f2c4\"; }\n\n.fa-free-code-camp:before {\n  content: \"\\f2c5\"; }\n\n.fa-telegram:before {\n  content: \"\\f2c6\"; }\n\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\f2c7\"; }\n\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\"; }\n\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\f2c9\"; }\n\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\"; }\n\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\"; }\n\n.fa-shower:before {\n  content: \"\\f2cc\"; }\n\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\f2cd\"; }\n\n.fa-podcast:before {\n  content: \"\\f2ce\"; }\n\n.fa-window-maximize:before {\n  content: \"\\f2d0\"; }\n\n.fa-window-minimize:before {\n  content: \"\\f2d1\"; }\n\n.fa-window-restore:before {\n  content: \"\\f2d2\"; }\n\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\f2d3\"; }\n\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\f2d4\"; }\n\n.fa-bandcamp:before {\n  content: \"\\f2d5\"; }\n\n.fa-grav:before {\n  content: \"\\f2d6\"; }\n\n.fa-etsy:before {\n  content: \"\\f2d7\"; }\n\n.fa-imdb:before {\n  content: \"\\f2d8\"; }\n\n.fa-ravelry:before {\n  content: \"\\f2d9\"; }\n\n.fa-eercast:before {\n  content: \"\\f2da\"; }\n\n.fa-microchip:before {\n  content: \"\\f2db\"; }\n\n.fa-snowflake-o:before {\n  content: \"\\f2dc\"; }\n\n.fa-superpowers:before {\n  content: \"\\f2dd\"; }\n\n.fa-wpexplorer:before {\n  content: \"\\f2de\"; }\n\n.fa-meetup:before {\n  content: \"\\f2e0\"; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./scss/style.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./scss/style.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);
// Module
exports.push([module.i, "#app {\n  box-sizing: border-box;\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column; }\n\nbody {\n  margin: 0;\n  background: #FFF; }\n\n#header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100px;\n  border-bottom: 1px solid #f0f0f0;\n  flex-grow: 0;\n  flex-shrink: 0; }\n\n.header__container {\n  box-sizing: border-box;\n  display: flex;\n  max-width: 820px;\n  margin: 0 auto;\n  padding: 30px 20px 0 20px;\n  height: 100px;\n  background-color: #FFF; }\n\n.header__box-left {\n  display: flex;\n  flex-grow: 2; }\n\n.header__box-right {\n  display: flex;\n  flex-direction: row-reverse;\n  flex-grow: 2; }\n\n#body {\n  box-sizing: border-box;\n  display: flex;\n  flex-grow: 2;\n  flex-shrink: 2;\n  padding-top: 160px; }\n\n.body__container {\n  box-sizing: border-box;\n  align-self: stretch;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n  align-items: stretch;\n  width: 100%;\n  max-width: 820px;\n  margin: 0 auto;\n  padding: 0 20px; }\n\n#footer {\n  background-color: #fff;\n  height: 70px; }\n\n.footer__container {\n  box-sizing: border-box;\n  display: flex;\n  max-width: 820px;\n  margin: 0 auto;\n  padding: 0 20px;\n  height: 70px;\n  background-color: #fff; }\n\n.footer__box-left {\n  display: flex;\n  flex-grow: 2; }\n\n.footer__box-right {\n  display: flex;\n  flex-direction: row-reverse;\n  flex-grow: 2; }\n\n.footer__brand {\n  display: flex; }\n\n.footer__brand__logo {\n  margin: 15px 15px 15px 0; }\n\n.footer__brand__text {\n  margin: 15px 15px 15px 0; }\n\n.footer__brand__text__title {\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  color: #2b2b2b;\n  margin-top: 7px;\n  margin-bottom: 3px; }\n\n.footer__brand__text__desciption {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #6e6e6e;\n  font-size: 12px; }\n\n.logo {\n  width: 40px;\n  height: 40px;\n  padding: 2px;\n  color: #fff;\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden; }\n\n.logo__text {\n  color: #FFF;\n  position: absolute;\n  top: 14px;\n  left: 11px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold; }\n\n.logo__hexagon {\n  position: relative;\n  width: 40px;\n  height: 23.09px;\n  background-color: #e3472f;\n  margin: 8.25px 0;\n  margin-left: -0.12px; }\n\n.logo__hexagon:before,\n.logo__hexagon:after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-radius: 0px; }\n\n.logo__hexagon:before {\n  bottom: 100%;\n  border-bottom: 11.55px solid #e3472f; }\n\n.logo__hexagon:after {\n  top: 100%;\n  width: 0;\n  border-top: 11.55px solid #e3472f; }\n\n.hamburguer-button {\n  box-sizing: border-box;\n  width: 40px;\n  height: 40px;\n  border: solid #dbdbdb 1px;\n  border-radius: 3px;\n  margin-left: 20px;\n  padding: 10px;\n  cursor: pointer; }\n\n.hamburguer-button__bar {\n  width: 18px;\n  height: 4px;\n  background-color: #545454;\n  margin-bottom: 3px; }\n\n.search {\n  width: 100%;\n  position: relative;\n  display: flex;\n  box-sizing: border-box; }\n\n.searchTerm {\n  box-sizing: border-box;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  background-color: #f0f0f0;\n  border-right: none;\n  padding: 5px;\n  height: 40px;\n  border-radius: 0 3px 3px 0;\n  outline: none;\n  color: #9DBFAF; }\n\n.searchTerm:focus {\n  color: #00B4CC; }\n\n.searchButton {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #f0f0f0;\n  background-color: #f0f0f0;\n  text-align: center;\n  color: #cacaca;\n  border-radius: 5px 0 0 5px;\n  cursor: pointer;\n  font-size: 20px; }\n\n/*Resize the wrap to see the search bar change!*/\n.wrap {\n  width: 300px;\n  height: 40px;\n  margin-left: 20px;\n  position: relative; }\n\n.user {\n  box-sizing: border-box;\n  width: 40px;\n  height: 40px;\n  border: solid #aaa 0px;\n  border-radius: 3px;\n  margin-left: 20px;\n  position: relative; }\n\n.user__count {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  left: -10px;\n  top: 10px;\n  background-color: #e3472f;\n  border-radius: 3px; }\n\n.user__image {\n  border-radius: 3px; }\n\n.add-post-button {\n  height: 40px;\n  display: flex; }\n\n.add-post-button__icon {\n  box-sizing: border-box;\n  color: #fff;\n  background-color: #e3472f;\n  border-radius: 3px 0 0 3px;\n  border-right: 1px solid #d63820;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  font-weight: bold;\n  font-size: 18px; }\n\n.add-post-button__text {\n  color: #fff;\n  background-color: #e3472f;\n  border-radius: 0 3px 3px 0;\n  width: 94px;\n  height: 40px;\n  line-height: 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  font-weight: bold;\n  font-size: 14px; }\n\n.link {\n  display: flex;\n  margin-bottom: 20px; }\n\n.link__count-up {\n  width: 45px;\n  flex-shrink: 0;\n  flex-grow: 0;\n  height: 77px;\n  border: 1px solid #e6e6e6;\n  border-radius: 3px;\n  font-weight: bold; }\n\n.link__count-up__icon {\n  font-size: 24px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  color: #e3472f;\n  text-align: center;\n  height: 33px;\n  line-height: 33px;\n  border-bottom: 1px solid #e6e6e6;\n  cursor: pointer; }\n\n.link__count-up__number {\n  font-size: 24px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  color: #111;\n  text-align: center;\n  height: 44px;\n  line-height: 44px; }\n\n.link__content {\n  padding-left: 20px; }\n\n.link__content__url {\n  font-family: Arial, Helvetica, sans-serif;\n  text-transform: uppercase;\n  color: #d2d2d2;\n  font-size: 10px;\n  margin-bottom: 5px; }\n\n.link__content__title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  line-height: 22px;\n  color: #3d3d3d;\n  margin-bottom: 5px; }\n\n.link__content__meta {\n  display: flex;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 11px; }\n\n.link__content__meta__category {\n  box-sizing: border-box;\n  background-color: #e3472f;\n  color: #fff;\n  height: 24px;\n  padding: 5px 10px;\n  border-radius: 12px; }\n\n.link__content__meta__author {\n  box-sizing: border-box;\n  color: #e3472f;\n  height: 24px;\n  padding: 5px 10px; }\n\n.link__content__meta__time {\n  box-sizing: border-box;\n  color: #3d3d3d;\n  height: 24px;\n  padding: 5px 10px; }\n\n.link__content__meta__comments {\n  box-sizing: border-box;\n  color: #e3472f;\n  height: 24px;\n  padding: 5px 10px; }\n\n.credits {\n  margin: 15px 0; }\n\n.credits__links {\n  text-align: right;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  color: #2b2b2b;\n  margin-top: 7px;\n  margin-bottom: 3px; }\n  .credits__links a {\n    color: #e3472f;\n    text-decoration: none; }\n\n.credits__copyright {\n  text-align: right;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #6e6e6e;\n  font-size: 12px; }\n\n.reload-button {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 60px;\n  width: 100%;\n  color: #e3472f;\n  background-color: #f4f4f1;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 60px;\n  text-align: center;\n  border-radius: 3px;\n  cursor: pointer;\n  margin: 60px 0 20px; }\n\n.loading {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin-bottom: 30px; }\n\n.lds-grid {\n  display: flex;\n  width: 100%;\n  flex-direction: column; }\n\n.lds-grid div {\n  height: 70px;\n  border-radius: 3px;\n  background: #f1f1f1;\n  margin-bottom: 20px; }\n\n.lds-grid div:nth-child(1) {\n  width: 100%;\n  animation: lds-grid 1.2s 0s linear infinite, lds-box1 2.0s ease infinite; }\n\n.lds-grid div:nth-child(2) {\n  width: 80%;\n  animation: lds-grid 1.2s 0.3s linear infinite, lds-box2 2.0s ease infinite; }\n\n.lds-grid div:nth-child(3) {\n  width: 40%;\n  animation: lds-grid 1.2s 0.5s linear infinite, lds-box3 2.0s ease infinite; }\n\n@keyframes lds-grid {\n  0%, 100% {\n    opacity: 1; }\n  50% {\n    opacity: 0.5; } }\n\n@keyframes lds-box1 {\n  0% {\n    max-height: 0;\n    max-width: 0; }\n  40% {\n    max-height: 70px;\n    max-width: 100%; } }\n\n@keyframes lds-box2 {\n  0% {\n    max-height: 0;\n    max-width: 0; }\n  40% {\n    max-height: 70px;\n    max-width: 80%; } }\n\n@keyframes lds-box3 {\n  0% {\n    max-height: 0;\n    max-width: 0; }\n  40% {\n    max-height: 70px;\n    max-width: 40%; } }\n\n.list-of-links {\n  flex-grow: 2;\n  flex-shrink: 2;\n  position: relative; }\n\n.list-of-links__empty {\n  width: 100%;\n  min-height: 300px; }\n\n.list-of-links__empty {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  color: #6e6e6e;\n  width: 100%;\n  height: 100px;\n  min-height: 300px;\n  line-height: 100px;\n  text-align: center; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.css":
/*!********************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../sass-loader/lib/loader.js!./font-awesome.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/font-awesome/css/font-awesome.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot":
/*!*****************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.eot ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.eot";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0 ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.eot";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0 ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.svg";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0":
/*!*************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0 ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.ttf";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0":
/*!***************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0 ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.woff2";

/***/ }),

/***/ "./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0":
/*!**************************************************************************!*\
  !*** ./node_modules/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0 ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fontawesome-webfont.woff";

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./scss/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var api = function api() {
  return fetch('https://www.mocky.io/v2/5a6bc16631000078341b8b77').then(function (response) {
    return response.json();
  });
};

exports.default = api;

/***/ }),

/***/ "./src/components/add-post-button/add-post-button.js":
/*!***********************************************************!*\
  !*** ./src/components/add-post-button/add-post-button.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AddPostButton = function AddPostButton() {
  return "\n  <div class=\"add-post-button\">\n    <div class=\"add-post-button__icon\"><i class=\"fa fa-plus\"></i></div>\n    <div class=\"add-post-button__text\">Add Post</div>\n  </div>";
};

exports.default = AddPostButton;

/***/ }),

/***/ "./src/components/credits/credits.js":
/*!*******************************************!*\
  !*** ./src/components/credits/credits.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Credits = function Credits() {
  return "\n  <div class=\"credits\">\n    <div class=\"credits__links\">\n      <a href=\"#\">About</a>\n      <a href=\"#\">Contact</a>\n      <a href=\"#\">Sign in</a>\n    </div>\n    <div class=\"credits__copyright\">C 2014 - The UX Library</div>\n  </div>";
};

exports.default = Credits;

/***/ }),

/***/ "./src/components/footer-brand/footer-brand.js":
/*!*****************************************************!*\
  !*** ./src/components/footer-brand/footer-brand.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FooterBrand = function FooterBrand() {
  return "\n  <div class=\"footer__brand\">\n    <div class=\"footer__brand__logo\">\n      <div class=\"logo\">\n        <div class=\"logo__hexagon\"></div>\n        <div class=\"logo__text\">UX</div>\n      </div>\n    </div>\n    <div class=\"footer__brand__text\">\n      <div class=\"footer__brand__text__title\">The UX Library</div>\n      <div class=\"footer__brand__text__desciption\">Community curated design content & discussion</div>\n    </div>\n  </div>";
};

exports.default = FooterBrand;

/***/ }),

/***/ "./src/components/hamburguer-button/hamburguer-button.js":
/*!***************************************************************!*\
  !*** ./src/components/hamburguer-button/hamburguer-button.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HamburguerButton = function HamburguerButton() {
  return "\n  <div class=\"hamburguer-button\">\n    <div class=\"hamburguer-button__bar\"></div>\n    <div class=\"hamburguer-button__bar\"></div>\n    <div class=\"hamburguer-button__bar\"></div>\n  </div>";
};

exports.default = HamburguerButton;

/***/ }),

/***/ "./src/components/layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/layout.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Layout = function Layout(_ref) {
  var state = _ref.state,
      Logo = _ref.Logo,
      Credits = _ref.Credits,
      FooterBrand = _ref.FooterBrand,
      ListOfLinks = _ref.ListOfLinks,
      User = _ref.User,
      AddPostButton = _ref.AddPostButton,
      HamburguerButton = _ref.HamburguerButton,
      Search = _ref.Search,
      Loading = _ref.Loading;

  var bodyContent = state.UI.isFetching ? Loading() : ListOfLinks(state);
  return "\n    <div id=\"app\">\n      <div id=\"header\">       \n        <div class=\"header__container\">\n          <div class=\"header__box-left\">\n            " + Logo() + "\n            " + HamburguerButton() + "\n            " + Search() + "\n          </div>\n          <div class=\"header__box-right\">\n            " + User() + "\n            " + AddPostButton() + "\n          </div>\n        </div>\n      </div>\n      <div id=\"body\">       \n        <div class=\"body__container\">\n          " + bodyContent + "\n        </div>\n      </div>\n      <div id=\"footer\"> \n        <div class=\"footer__container\">\n          <div class=\"footer__box-left\">\n            " + FooterBrand() + "\n          </div>\n          <div class=\"footer__box-right\">\n            " + Credits() + "\n          </div>\n        </div>\n      </div>\n    </div>";
};

exports.default = Layout;

/***/ }),

/***/ "./src/components/link/link.js":
/*!*************************************!*\
  !*** ./src/components/link/link.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Link = function Link(props) {
  var count = props.count,
      title = props.title,
      category = props.category,
      comments = props.comments,
      time = props.time,
      url = props.url,
      author = props.author;

  return "\n  <div class=\"link\">\n    <div class=\"link__count-up\">\n      <div class=\"link__count-up__icon\"><i class=\"fa fa-angle-up\"></i></div>\n      <div class=\"link__count-up__number\">" + count + "</div>\n    </div>\n    <div class=\"link__content\">\n      <div class=\"link__content__url\">" + url + "</div>\n      <div class=\"link__content__title\">" + title + "</div>\n      <div class=\"link__content__meta\">\n        <div class=\"link__content__meta__category\">" + category + "</div>\n        <div class=\"link__content__meta__author\">" + author + "Jesse Johnes</div>\n        <div class=\"link__content__meta__time\">" + time + "3 hours ago</div>\n        <div class=\"link__content__meta__comments\">\n          " + (comments && comments === 1 ? comments + " comment" : comments + " comments") + "\n        </div>\n      </div>\n    </div>\n  </div>";
};

exports.default = Link;

/***/ }),

/***/ "./src/components/list-of-links/list-of-links.js":
/*!*******************************************************!*\
  !*** ./src/components/list-of-links/list-of-links.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _link = __webpack_require__(/*! ../link/link */ "./src/components/link/link.js");

var _link2 = _interopRequireDefault(_link);

var _reloadButton = __webpack_require__(/*! ../reload-button/reload-button */ "./src/components/reload-button/reload-button.js");

var _reloadButton2 = _interopRequireDefault(_reloadButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListOfLinks = function ListOfLinks(state) {
  var _state$UI = state.UI,
      page = _state$UI.page,
      numberOfLinksPerPage = _state$UI.numberOfLinksPerPage;

  var linkWithPagination = state.data.links ? state.data.links.slice((page - 1) * numberOfLinksPerPage, page * numberOfLinksPerPage) : [];
  var links = linkWithPagination.length > 0 ? linkWithPagination.map(function (item) {
    return (0, _link2.default)({
      count: item.upvotes,
      title: item.meta.title,
      url: item.meta.url,
      category: item.category,
      comments: item.comments,
      author: item.meta.author,
      time: item.created_at
    });
  }).join("") : '<div class="list-of-links__empty">n\xE3o h\xE1 resultados</div>';
  return '\n  <div class="list-of-links">\n    ' + links + '\n    ' + (0, _reloadButton2.default)() + '</div>';
};

exports.default = ListOfLinks;

/***/ }),

/***/ "./src/components/loading/loading.js":
/*!*******************************************!*\
  !*** ./src/components/loading/loading.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Loading = function Loading() {
  return "\n<div class=\"loading\">\n  <div class=\"lds-grid\">\n    <div></div>\n    <div></div>\n    <div></div>\n</div>\n</div>";
};

exports.default = Loading;

/***/ }),

/***/ "./src/components/logo/logo.js":
/*!*************************************!*\
  !*** ./src/components/logo/logo.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Logo = function Logo() {
  return "\n  <div class=\"logo\">\n    <div class=\"logo__hexagon\"></div>\n    <div class=\"logo__text\">UX</div>\n  </div>";
};

exports.default = Logo;

/***/ }),

/***/ "./src/components/reload-button/reload-button.js":
/*!*******************************************************!*\
  !*** ./src/components/reload-button/reload-button.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ReloadButton = function ReloadButton() {
  return "\n  <div class=\"reload-button\" id=\"reload-button\">\n    Load more\n  </div>";
};

exports.default = ReloadButton;

/***/ }),

/***/ "./src/components/search/search.js":
/*!*****************************************!*\
  !*** ./src/components/search/search.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Search = function Search() {
  return "\n  <div class=\"wrap\">\n    <div class=\"search\">\n      <button type=\"submit\" class=\"searchButton\">\n      <i class=\"fa fa-search\"></i>\n      </button> \n      <input type=\"text\" class=\"searchTerm\" placeholder=\"\">\n    </div>\n  </div>";
};

exports.default = Search;

/***/ }),

/***/ "./src/components/testing.js":
/*!***********************************!*\
  !*** ./src/components/testing.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return console.log;
};

/***/ }),

/***/ "./src/components/user/user.js":
/*!*************************************!*\
  !*** ./src/components/user/user.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var User = function User() {
  return "\n  <div class=\"user\">\n    <img class=\"user__image\" src=\"https://picsum.photos/id/237/40/40\" alt=\"\" />\n    <div class=\"user__count\"></div>\n  </div>";
};

exports.default = User;

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _testing = __webpack_require__(/*! ./components/testing */ "./src/components/testing.js");

var _testing2 = _interopRequireDefault(_testing);

var _render = __webpack_require__(/*! ./render */ "./src/render.js");

var _render2 = _interopRequireDefault(_render);

var _api = __webpack_require__(/*! ./api */ "./src/api.js");

var _api2 = _interopRequireDefault(_api);

__webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");

__webpack_require__(/*! font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.querySelector('#root');
var state = {
  data: {},
  UI: {}
};
state.UI.page = 1;
state.UI.numberOfLinksPerPage = 3;
state.UI.isFetching = true;
(0, _render2.default)(state);

(0, _api2.default)().then(function (data) {
  setTimeout(function () {
    root.dispatchEvent(new CustomEvent('refresh', { detail: data }));
  }, 2000);
});

root.addEventListener('refresh', function (e) {
  state.data = e.detail;
  state.UI.isFetching = false;
  (0, _render2.default)(state);

  document.querySelector('#reload-button').addEventListener('click', function () {
    state.UI.isFetching = true;
    state.UI.page = state.UI.page + 1;
    (0, _render2.default)(state);
    (0, _api2.default)().then(function (data) {
      setTimeout(function () {
        root.dispatchEvent(new CustomEvent('refresh', { detail: data }));
      }, 2000);
    });
  });
});

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _footerBrand = __webpack_require__(/*! ./components/footer-brand/footer-brand */ "./src/components/footer-brand/footer-brand.js");

var _footerBrand2 = _interopRequireDefault(_footerBrand);

var _credits = __webpack_require__(/*! ./components/credits/credits */ "./src/components/credits/credits.js");

var _credits2 = _interopRequireDefault(_credits);

var _layout = __webpack_require__(/*! ./components/layout/layout */ "./src/components/layout/layout.js");

var _layout2 = _interopRequireDefault(_layout);

var _user = __webpack_require__(/*! ./components/user/user */ "./src/components/user/user.js");

var _user2 = _interopRequireDefault(_user);

var _addPostButton = __webpack_require__(/*! ./components/add-post-button/add-post-button */ "./src/components/add-post-button/add-post-button.js");

var _addPostButton2 = _interopRequireDefault(_addPostButton);

var _logo = __webpack_require__(/*! ./components/logo/logo */ "./src/components/logo/logo.js");

var _logo2 = _interopRequireDefault(_logo);

var _hamburguerButton = __webpack_require__(/*! ./components/hamburguer-button/hamburguer-button */ "./src/components/hamburguer-button/hamburguer-button.js");

var _hamburguerButton2 = _interopRequireDefault(_hamburguerButton);

var _search = __webpack_require__(/*! ./components/search/search */ "./src/components/search/search.js");

var _search2 = _interopRequireDefault(_search);

var _listOfLinks = __webpack_require__(/*! ./components/list-of-links/list-of-links */ "./src/components/list-of-links/list-of-links.js");

var _listOfLinks2 = _interopRequireDefault(_listOfLinks);

var _loading = __webpack_require__(/*! ./components/loading/loading */ "./src/components/loading/loading.js");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(state) {
  var layout = (0, _layout2.default)({
    FooterBrand: _footerBrand2.default,
    Credits: _credits2.default,
    User: _user2.default,
    AddPostButton: _addPostButton2.default,
    Logo: _logo2.default,
    HamburguerButton: _hamburguerButton2.default,
    Search: _search2.default,
    ListOfLinks: _listOfLinks2.default,
    Loading: _loading2.default,
    state: state
  });
  var conatiner = document.querySelector('#root');
  var component = document.createRange().createContextualFragment(layout);
  while (conatiner.firstChild) {
    conatiner.removeChild(conatiner.firstChild);
  }
  conatiner.appendChild(component);
};

exports.default = render;

/***/ })

/******/ });
//# sourceMappingURL=scripts.js.map