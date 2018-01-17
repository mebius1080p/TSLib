(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function fireEventById(targetid, eventname, data) {
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(eventname, false, false, data);
    document.getElementById(targetid).dispatchEvent(evt);
}
exports.fireEventById = fireEventById;
function fetchUtilJson(request) {
    return fetch(request).then(function (response) {
        return new Promise(function (resolve, reject) {
            if (response.ok) {
                resolve(response.json());
            }
            else {
                reject(response.statusText);
            }
        });
    }).then(function (json) {
        return new Promise(function (resolve, reject) {
            if (json.status === "ok") {
                resolve(json);
            }
            else {
                reject(json);
            }
        });
    });
}
exports.fetchUtilJson = fetchUtilJson;
function fetchUtilJsonAsync(request) {
    return __awaiter(this, void 0, void 0, function () {
        var response, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch(request)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw response;
                    }
                    return [4, response.json()];
                case 2:
                    json = _a.sent();
                    if (json.status !== "ok") {
                        throw json;
                    }
                    return [2, json];
            }
        });
    });
}
exports.fetchUtilJsonAsync = fetchUtilJsonAsync;
function disableButtonByClassName(className) {
    var buttons = document.querySelectorAll("." + className);
    Array.prototype.forEach.call(buttons, function (btn) {
        btn.disabled = true;
    });
}
exports.disableButtonByClassName = disableButtonByClassName;
function enableButtonByClassName(className) {
    var buttons = document.querySelectorAll("." + className);
    Array.prototype.forEach.call(buttons, function (btn) {
        btn.disabled = false;
    });
}
exports.enableButtonByClassName = enableButtonByClassName;

},{}],2:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("suc_btn").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var req, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    req = new Request("./success.json");
                    return [4, common_1.fetchUtilJsonAsync(req)];
                case 1:
                    result = _a.sent();
                    console.log("success!");
                    console.dir(result);
                    return [3, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log("error");
                    console.dir(error_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); }, false);
    document.getElementById("fail_btn_404").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var req, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    req = new Request("./404.json");
                    return [4, common_1.fetchUtilJsonAsync(req)];
                case 1:
                    result = _a.sent();
                    console.log("success!");
                    console.dir(result);
                    return [3, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log("error");
                    console.dir(error_2);
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); }, false);
    document.getElementById("fail_btn_bad").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var req, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    req = new Request("./bad.json");
                    return [4, common_1.fetchUtilJsonAsync(req)];
                case 1:
                    result = _a.sent();
                    console.log("success!");
                    console.dir(result);
                    return [3, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log("error");
                    console.dir(error_3);
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); }, false);
}, false);

},{"../common":1}]},{},[2]);
