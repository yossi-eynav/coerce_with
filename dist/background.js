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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 49:
/***/ (function(module, exports) {

eval("setInterval(function () {\r\n    var rules = fetchRules();\r\n    var types = rules.map(function (rule) { return rule.resourceType; });\r\n    var urls = rules.map(function (rule) { return \"*://\" + rule.domain + \"/*\"; });\r\n    if (rules.length) {\r\n        chrome.webRequest.onBeforeRequest.addListener(handlerRequest, { types: types, urls: urls }, ['blocking']);\r\n    }\r\n    function handlerRequest(request) {\r\n        if (!window['isActive']) {\r\n            return;\r\n        }\r\n        var rule = rules.filter(function (rule) { return rule.resourceType === request.type && request.url.match(rule.domain); })[0];\r\n        try {\r\n            var coerceWith = eval(rule.coerceWith);\r\n            var url = coerceWith(request.url);\r\n            console.info('Redirecting request: ', url);\r\n            return {\r\n                redirectUrl: url\r\n            };\r\n        }\r\n        catch (e) {\r\n            console.warn('Coerce with fail.');\r\n        }\r\n    }\r\n    function fetchRules() {\r\n        var rawRules = localStorage.getItem('rules');\r\n        if (!rawRules) {\r\n            return [];\r\n        }\r\n        var rules = JSON.parse(rawRules);\r\n        return rules.filter(function (rule) { return rule.active; });\r\n    }\r\n}, 5000);\r\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC50cz83ZWI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLFdBQVcsQ0FBQztJQUVSLElBQUksS0FBSyxHQUFHLFVBQVUsRUFBRSxDQUFDO0lBQ3pCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLFlBQVksRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3JELElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssZ0JBQU8sSUFBSSxDQUFDLE1BQU0sT0FBSSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFFekQsRUFBRSxFQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUFDLEtBQUssU0FBRSxJQUFJLFFBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELHdCQUF3QixPQUFPO1FBQzNCLEVBQUUsRUFBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUM7UUFBQyxDQUFDO1FBRW5DLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQU0sV0FBSSxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBcEUsQ0FBb0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlHLElBQUksQ0FBQztZQUNELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekMsSUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTNDLE1BQU0sQ0FBQztnQkFDSCxXQUFXLEVBQUUsR0FBRzthQUNuQjtRQUNMLENBQUM7UUFDRCxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7SUFFRDtRQUNJLElBQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsRUFBRSxFQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUFBLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFBQSxDQUFDO1FBRTFCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLE1BQU0sRUFBWCxDQUFXLENBQUM7SUFDOUMsQ0FBQztBQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiI0OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgY2hyb21lO1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cbiAgICBsZXQgcnVsZXMgPSBmZXRjaFJ1bGVzKCk7XG4gICAgY29uc3QgdHlwZXMgPSBydWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGUucmVzb3VyY2VUeXBlKTtcbiAgICBjb25zdCB1cmxzID0gcnVsZXMubWFwKChydWxlKSA9PiBgKjovLyR7cnVsZS5kb21haW59LypgKTtcblxuICAgIGlmKHJ1bGVzLmxlbmd0aCkge1xuICAgICAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoaGFuZGxlclJlcXVlc3QsIHt0eXBlcywgdXJsc30sIFsnYmxvY2tpbmcnXSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlclJlcXVlc3QocmVxdWVzdCkge1xuICAgICAgICBpZighd2luZG93Wydpc0FjdGl2ZSddKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlcy5maWx0ZXIoKHJ1bGUpID0+ICBydWxlLnJlc291cmNlVHlwZSA9PT0gcmVxdWVzdC50eXBlICYmIHJlcXVlc3QudXJsLm1hdGNoKHJ1bGUuZG9tYWluKSlbMF07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZXJjZVdpdGggPSBldmFsKHJ1bGUuY29lcmNlV2l0aCk7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBjb2VyY2VXaXRoKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnUmVkaXJlY3RpbmcgcmVxdWVzdDogJywgdXJsKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVybDogdXJsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgY29uc29sZS53YXJuKCdDb2VyY2Ugd2l0aCBmYWlsLicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmZXRjaFJ1bGVzKCl7XG4gICAgICAgIGNvbnN0IHJhd1J1bGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3J1bGVzJyk7XG4gICAgICAgIGlmKCFyYXdSdWxlcykge3JldHVybiBbXTt9XG5cbiAgICAgICAgY29uc3QgcnVsZXMgPSBKU09OLnBhcnNlKHJhd1J1bGVzKTtcbiAgICAgICAgcmV0dXJuIHJ1bGVzLmZpbHRlcigocnVsZSkgPT4gcnVsZS5hY3RpdmUpXG4gICAgfVxufSwgNTAwMCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhY2tncm91bmQudHMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });