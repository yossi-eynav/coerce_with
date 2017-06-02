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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 50:
/***/ (function(module, exports) {

eval("(function () {\r\n    toggle();\r\n    setEventListener();\r\n    function toggle() {\r\n        window['isActive'] = !window['isActive'];\r\n        if (window['isActive']) {\r\n            chrome.browserAction.setIcon({ path: \"./on.png\" });\r\n        }\r\n        else {\r\n            chrome.browserAction.setIcon({ path: \"./off.png\" });\r\n        }\r\n    }\r\n    function setEventListener() {\r\n        chrome.browserAction.onClicked.addListener(toggle);\r\n    }\r\n})();\r\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3dpdGNoZXIudHM/MDQxNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFDO0lBQ0csTUFBTSxFQUFFLENBQUM7SUFDVCxnQkFBZ0IsRUFBRSxDQUFDO0lBRW5CO1FBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpDLEVBQUUsRUFBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ0wsQ0FBQztJQUVEO1FBQ0ksTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7QUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6IjUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcbiAgICB0b2dnbGUoKTtcbiAgICBzZXRFdmVudExpc3RlbmVyKCk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgIHdpbmRvd1snaXNBY3RpdmUnXSA9ICF3aW5kb3dbJ2lzQWN0aXZlJ107XG5cbiAgICAgICAgaWYod2luZG93Wydpc0FjdGl2ZSddKSB7XG4gICAgICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRJY29uKHtwYXRoOiBcIi4vb24ucG5nXCJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEljb24oe3BhdGg6IFwiLi9vZmYucG5nXCJ9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEV2ZW50TGlzdGVuZXIoKSA6IHZvaWQge1xuICAgICAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIodG9nZ2xlKTtcbiAgICB9XG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zd2l0Y2hlci50cyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

/******/ });