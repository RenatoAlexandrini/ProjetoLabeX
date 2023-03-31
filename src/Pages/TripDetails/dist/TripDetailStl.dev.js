"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoCandidatesImg = exports.Form = exports.BtnDetailTrips = exports.CandidatesDiv = exports.PageDiv = exports.Main = void 0;

var _TripsBG = _interopRequireDefault(require("../../Images/assets/TripsBG.png"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n border:solid 6px;\n overflow-y: scroll;\n width:600px;\n height:58vh;\n margin-top:1.5vh;\n border-color:white;\n border-bottom-left-radius:25px;\n border-top-left-radius:25px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nmargin:1%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nbackground-image: url(", ");\nbackground-size:103%;\nbackground-size:auto;\nheight:100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Main = _styledComponents["default"].div(_templateObject(), _TripsBG["default"]);

exports.Main = Main;

var PageDiv = _styledComponents["default"].div(_templateObject2());

exports.PageDiv = PageDiv;

var CandidatesDiv = _styledComponents["default"].div(_templateObject3());

exports.CandidatesDiv = CandidatesDiv;

var BtnDetailTrips = _styledComponents["default"].button(_templateObject4());

exports.BtnDetailTrips = BtnDetailTrips;

var Form = _styledComponents["default"].form(_templateObject5());

exports.Form = Form;

var NoCandidatesImg = _styledComponents["default"].img(_templateObject6());

exports.NoCandidatesImg = NoCandidatesImg;