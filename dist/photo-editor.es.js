import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useState, useContext, useMemo, useRef, useLayoutEffect, useEffect, forwardRef, useImperativeHandle, createElement } from 'react';
import { Group, Rect, Stage, Layer, Image, Text, Line, Transformer } from 'react-konva';
import Konva from 'konva';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ReactDOM from 'react-dom';
import { Html } from 'react-konva-utils';
import { History } from 'stateshot';
import useImage from 'use-image';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var EditorContext$1 = React__default.createContext({
    width: 0,
    height: 0,
    pencilConfig: {
        stroke: '#df4b26',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round',
    },
    blurConfig: {
        stroke: '#fff',
        strokeWidth: 40,
        lineCap: 'round',
        lineJoin: 'round',
    },
    textConfig: {
        fill: '#df4b26',
        fontSize: 30,
        width: 300,
    },
    editorColors: [
        '#FF2A1A',
        '#000000',
        '#999999',
        '#FF9416',
        '#F7673D',
        '#F9CA5A',
        '#19A049',
        '#24A8D0',
    ],
    activeTool: null,
    changeColor: function () { },
    handleSelectTool: function () { },
});

var EditorProvider = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 0 : _b, _c = _a.height, height = _c === void 0 ? 0 : _c, _d = _a.editorColors, editorColors = _d === void 0 ? [
        '#FF2A1A',
        '#000000',
        '#999999',
        '#FF9416',
        '#F7673D',
        '#F9CA5A',
        '#19A049',
        '#24A8D0',
    ] : _d, _e = _a.blurConfig, blurConfig = _e === void 0 ? {
        stroke: '#eaeaeaeb',
        strokeWidth: 30,
        lineCap: 'round',
        lineJoin: 'round',
    } : _e, children = _a.children;
    var _f = __read(useState({
        stroke: editorColors[0],
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round',
    }), 2), pencilConfig = _f[0], setPencilConfig = _f[1];
    var _g = __read(useState({
        fontSize: 30,
        fill: editorColors[0],
        wrap: 'word',
        width: width * 0.9,
    }), 2), textConfig = _g[0], setTextConfig = _g[1];
    var _h = __read(useState(null), 2), activeTool = _h[0], setActiveTool = _h[1];
    var handleSelectTool = function (currentTool) {
        setActiveTool(function (preTool) {
            return preTool === currentTool ? null : currentTool;
        });
    };
    var handleColorChanged = function (color) {
        setPencilConfig(function (preConfig) { return (__assign({}, Object.assign(preConfig, {
            stroke: color,
        }))); });
        setTextConfig(function (preConfig) { return (__assign({}, Object.assign(preConfig, {
            fill: color,
        }))); });
    };
    return (jsx(EditorContext$1.Provider, __assign({ value: {
            width: width,
            height: height,
            pencilConfig: pencilConfig,
            blurConfig: blurConfig,
            textConfig: textConfig,
            editorColors: editorColors,
            activeTool: activeTool,
            changeColor: handleColorChanged,
            handleSelectTool: handleSelectTool,
        } }, { children: children })));
};

var useEditor = function () {
    var context = useContext(EditorContext$1);
    return context;
};

var EditorContext = React__default.createContext({
    image: null,
    group: {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        rotation: 0,
    },
    clipRect: {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    },
    texts: [],
    lines: [],
    blurs: [],
    setLines: function () { },
    setTexts: function () { },
    setImage: function () { },
    setGroup: function () { },
    setBlurs: function () { },
    redo: function () { },
    undo: function () { },
});

var useHistory = function () {
    var context = useContext(EditorContext);
    return context;
};

var _path$6;
function _extends$6() { _extends$6 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var SvgIconPencil = function SvgIconPencil(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    d: "M2.63 37.154a1.37 1.37 0 0 0 1.4.328l13.383-3.583s.091-.036.119-.045c.236-.1.418-.282.418-.282l16.802-16.967c.01-.018-1.6 1.792.364-.418.701-.828 2.185-2.857 2.221-5.659.009-1.81-.728-3.866-2.585-5.713-1.848-1.865-3.905-2.602-5.716-2.593-3.622.046-5.961 2.511-6.08 2.593L6.146 21.782s-.2.218-.283.418a7.503 7.503 0 0 0-.045.118L2.292 35.762a1.342 1.342 0 0 0 .337 1.392Zm3.502-4.898s.58-.136.977.263c.372.372.372.962.372.962l-1.937.707.588-1.932Zm2.685-6.097 3.292 1.447 1.448 3.297-3.905 1.303c-.138-.397-.372-.89-.769-1.291-.432-.439-.955-.655-1.393-.769l1.327-3.987ZM31.826 8.124a3.75 3.75 0 0 1-.053 5.38L16.97 27.6l-1.61-3.267-3.611-2.02 14.569-14.21a3.928 3.928 0 0 1 5.507.021Z"
  })));
};

var _path$5;
function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
var SvgIconWords = function SvgIconWords(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    width: "1em",
    height: "1em",
    viewBox: "0 0 41 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    d: "m14.014 25.462-2.54 5.823c-.847 1.812-1.935 2.976-3.265 3.494-.968.518-2.963.777-5.987.777.363-.518.968-1.683 1.814-3.494a101.8 101.8 0 0 1 1.452-2.718L16.19 3.334l7.438.193 11.066 26.011c.484 1.553 1.27 3.17 2.358 4.853.242.647.484 1.035.726 1.165-3.87 0-6.228-.195-7.075-.583-1.088-.517-2.116-2.07-3.084-4.658l-1.814-4.853H14.014Zm11.065-1.941L20 9.933l-5.442 13.588h10.521Z"
  })));
};

var _path$4, _path2$2;
function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var SvgIconCut = function SvgIconCut(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    d: "M12.49 12.45V3.333H7.93v4.559H3.373v4.558H7.93v19.145h19.145v-4.558H12.49z"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    d: "M38.017 27.037h-4.559V7.892H14.313v4.558H28.9v23.704h4.558v-4.559h4.559z"
  })));
};

var _path$3, _path2$1;
function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var SvgIconBlur = function SvgIconBlur(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    width: "1em",
    height: "1em",
    viewBox: "0 0 41 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M19.556 8.444h11.11v11.112h-11.11V8.444ZM8.444 19.556h11.112v11.11H8.444v-11.11Z"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    d: "M31.111 37.778H8.89a6.667 6.667 0 0 1-6.667-6.667V8.89A6.667 6.667 0 0 1 8.89 2.222H31.11a6.667 6.667 0 0 1 6.667 6.667V31.11a6.667 6.667 0 0 1-6.667 6.667ZM7.963 5.556a2.407 2.407 0 0 0-2.407 2.407v24.074a2.407 2.407 0 0 0 2.407 2.407h24.074a2.407 2.407 0 0 0 2.407-2.407V7.963a2.407 2.407 0 0 0-2.407-2.407H7.963Z"
  })));
};

var _path$2;
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var SvgIconRecall = function SvgIconRecall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    width: "1em",
    height: "1em",
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    d: "M17.578 8.55v1.233a1.916 1.916 0 1 0 3.832 0v-5.06A2.222 2.222 0 0 0 17.572 3.2L3.233 18.396a3.333 3.333 0 0 0-.106 4.458l12.737 14.85a2.222 2.222 0 0 0 3.909-1.446V25.232c3.433.394 6.289 1.165 8.568 2.313a4.342 4.342 0 0 0 5.407-6.511 17.316 17.316 0 0 0-2.306-2.482c-3.194-2.823-7.094-4.592-11.7-5.306a1.593 1.593 0 0 0-1.836 1.574c0 .971.726 1.79 1.69 1.906 2.406.29 4.77 1.17 7.093 2.639 2.865 1.81 4.913 4.108 6.144 6.89-3.784-1.752-6.871-2.89-9.262-3.414a64.961 64.961 0 0 0-4.35-.804 2.222 2.222 0 0 0-2.548 2.198v9.438l-9.364-11.22a2.222 2.222 0 0 1 .078-2.936L17.578 8.55Z"
  })));
};

var ToolsMap = [
    { icon: jsx(SvgIconPencil, {}), name: 'Pencil' },
    { icon: jsx(SvgIconWords, {}), name: 'Words' },
    { icon: jsx(SvgIconCut, {}), name: 'Cut' },
    { icon: jsx(SvgIconBlur, {}), name: 'Blur' },
    { icon: jsx(SvgIconRecall, {}), name: 'Recall' },
];
var ToolContainer = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-bottom: 20px;\n  background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-bottom: 20px;\n  background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);\n"])));
var ToolbarContainer = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-evenly;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 0;\n"], ["\n  display: flex;\n  justify-content: space-evenly;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 0;\n"])));
var ToolbarItem = React__default.memo(styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #fff;\n  line-height: 20px;\n  border: 1px solid transparent;\n  transition: all 0.3s ease-in-out;\n  svg {\n    width: 20px;\n    height: 20px;\n    margin-bottom: 2px;\n    fill: #fff;\n  }\n  ", "\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #fff;\n  line-height: 20px;\n  border: 1px solid transparent;\n  transition: all 0.3s ease-in-out;\n  svg {\n    width: 20px;\n    height: 20px;\n    margin-bottom: 2px;\n    fill: #fff;\n  }\n  ", "\n"])), function (props) {
    return props.isActive && css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n      color: #0096ff;\n      background: #e6f5ff;\n      box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);\n      border-radius: 5px;\n      border: 1px solid #0096ff;\n      svg {\n        fill: #0096ff;\n      }\n    "], ["\n      color: #0096ff;\n      background: #e6f5ff;\n      box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);\n      border-radius: 5px;\n      border: 1px solid #0096ff;\n      svg {\n        fill: #0096ff;\n      }\n    "])));
}));
var ColorItem$1 = styled.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  ", "\n"], ["\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  ", "\n"])), function (props) {
    return css(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: ", ";\n      border: ", ";\n    "], ["\n      background: ", ";\n      box-shadow: ", ";\n      border: ", ";\n    "])), props.color, props.color === props.currentColor ? '0px 0px 4px 0px #0096ff' : 'none', props.color === props.currentColor ? '1px solid #0096FF;' : '1px solid #FFFFFF');
});
var ColorSelector$1 = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  padding: 0 30px;\n  box-sizing: border-box;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  padding: 0 30px;\n  box-sizing: border-box;\n"])));
var Toolbar = function (_a) {
    var onSelect = _a.onSelect;
    var _b = useEditor(), activeTool = _b.activeTool, pencilConfig = _b.pencilConfig, editorColors = _b.editorColors, handleSelectTool = _b.handleSelectTool, changeColor = _b.changeColor;
    var undo = useHistory().undo;
    var isColorSelectorShow = useMemo(function () {
        return ['Pencil'].includes(activeTool);
    }, [activeTool]);
    var handleToolSelect = function (tool) {
        switch (tool) {
            case 'Recall':
                undo();
                break;
            case 'Words':
                handleSelectTool('Words');
                break;
            case 'Cut':
                handleSelectTool(tool);
                break;
            default:
                handleSelectTool(tool);
        }
        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
    };
    return (jsxs(ToolContainer, { children: [isColorSelectorShow && (jsx(ColorSelector$1, { children: editorColors === null || editorColors === void 0 ? void 0 : editorColors.map(function (color) { return (jsx(ColorItem$1, { color: color, currentColor: pencilConfig.stroke, onClick: function () { return changeColor(color); } }, color)); }) })), !['Words', 'Cut'].includes(activeTool) && (jsx(ToolbarContainer, { children: ToolsMap.map(function (tool) { return (jsxs(ToolbarItem, __assign({ onClick: function () { return handleToolSelect(tool.name); }, isActive: tool.name === activeTool }, { children: [tool.icon, jsx("span", { children: tool.name })] }), tool.name)); }) }))] }));
};
var templateObject_1$3, templateObject_2$3, templateObject_3$2, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7$1;

var getImageSize = function (imageWidth, imageHeight, width, height) {
    var imageRatio = imageWidth / imageHeight;
    var containerRatio = width / height;
    return imageRatio < containerRatio
        ? [imageRatio * height, height]
        : [width, (1 / imageRatio) * width];
};
var rotatePoint = function (x, y, r) {
    var rRadians = r * (Math.PI / 180);
    var xOffset = x * Math.cos(rRadians) - y * Math.sin(rRadians);
    var yOffset = x * Math.sin(rRadians) + y * Math.cos(rRadians);
    return [xOffset, yOffset];
};
var getDistance = function (p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};
var getCenter = function (p1, p2) {
    return {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2,
    };
};
var getRotateDistance = function (dx, dy, r) {
    var rotationStage = ((r / 90) % 4) + 1;
    switch (rotationStage) {
        case 1:
            return [dx, dy];
        case 2:
            return [dy, -dx];
        case 3:
            return [-dx, -dy];
        case 4:
            return [-dy, dx];
        default:
            return [dx, dy];
    }
};
// 主要用于在马赛克时，进行图片像素处理
var generateImageData = function (imgObj, width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(imgObj, 0, 0, width, height);
    return ctx.getImageData(0, 0, width, height);
};

var _path$1, _path2;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var SvgIconRotate = function SvgIconRotate(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M5.183 19.76h25.364a2.114 2.114 0 0 1 2.114 2.114v19.023a2.114 2.114 0 0 1-2.114 2.114H5.183a2.114 2.114 0 0 1-2.114-2.114V21.874a2.114 2.114 0 0 1 2.114-2.114Zm2.114 4.227v14.796h21.137V23.987H7.297Z",
    fill: "#FFF"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M26.039 13.171v3.207a.423.423 0 0 1-.676.338l-7.329-5.496a.423.423 0 0 1 0-.676l7.329-5.496a.423.423 0 0 1 .676.339v3.557c10.5.008 19.009 8.523 19.009 19.023a2.114 2.114 0 1 1-4.228 0c0-8.165-6.615-14.787-14.781-14.796Z",
    fill: "#FFF"
  })));
};

var AnchorPositons = [
    'top-left',
    'top-center',
    'top-right',
    'middle-left',
    'middle-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
];
var useAnchor = function () {
    var anchorsRef = useRef({});
    var drawAnchors = function (transformer) {
        var e_1, _a;
        try {
            for (var AnchorPositons_1 = __values(AnchorPositons), AnchorPositons_1_1 = AnchorPositons_1.next(); !AnchorPositons_1_1.done; AnchorPositons_1_1 = AnchorPositons_1.next()) {
                var positon = AnchorPositons_1_1.value;
                var rect = transformer.findOne(".".concat(positon));
                rect === null || rect === void 0 ? void 0 : rect.fillPriority('pattern');
                rect === null || rect === void 0 ? void 0 : rect.fillPatternRepeat('no-repeat');
                rect === null || rect === void 0 ? void 0 : rect.fillPatternImage(anchorsRef.current[positon]);
                rect === null || rect === void 0 ? void 0 : rect.strokeEnabled(false);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (AnchorPositons_1_1 && !AnchorPositons_1_1.done && (_a = AnchorPositons_1.return)) _a.call(AnchorPositons_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        transformer === null || transformer === void 0 ? void 0 : transformer.getLayer().batchDraw();
    };
    useLayoutEffect(function () {
        var e_2, _a;
        try {
            for (var AnchorPositons_2 = __values(AnchorPositons), AnchorPositons_2_1 = AnchorPositons_2.next(); !AnchorPositons_2_1.done; AnchorPositons_2_1 = AnchorPositons_2.next()) {
                var positon = AnchorPositons_2_1.value;
                anchorsRef.current[positon] = anchorShapeCanvasFactory(positon);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (AnchorPositons_2_1 && !AnchorPositons_2_1.done && (_a = AnchorPositons_2.return)) _a.call(AnchorPositons_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }, []);
    return drawAnchors;
};
var anchorShapeCanvasFactory = function (position, color) {
    if (color === void 0) { color = '#0096FF'; }
    var canvas = document.createElement('canvas');
    canvas.width = 24;
    canvas.height = 24;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.lineCap = 'round';
    ctx.beginPath();
    switch (position) {
        case 'top-left':
            ctx.lineTo(10, 10);
            ctx.lineTo(24, 10);
            ctx.lineTo(24, 12);
            ctx.lineTo(12, 12);
            ctx.lineTo(12, 24);
            ctx.lineTo(10, 24);
            break;
        case 'top-center':
            ctx.lineTo(0, 14);
            ctx.lineTo(24, 14);
            ctx.lineTo(24, 12);
            ctx.lineTo(0, 12);
            break;
        case 'top-right':
            ctx.lineTo(0, 10);
            ctx.lineTo(14, 10);
            ctx.lineTo(14, 24);
            ctx.lineTo(12, 24);
            ctx.lineTo(12, 12);
            ctx.lineTo(0, 12);
            break;
        case 'bottom-center':
            ctx.lineTo(0, 10);
            ctx.lineTo(24, 10);
            ctx.lineTo(24, 12);
            ctx.lineTo(0, 12);
            break;
        case 'middle-left':
            ctx.lineTo(12, 0);
            ctx.lineTo(12, 24);
            ctx.lineTo(14, 24);
            ctx.lineTo(14, 0);
            break;
        case 'middle-right':
            ctx.lineTo(12, 0);
            ctx.lineTo(12, 24);
            ctx.lineTo(10, 24);
            ctx.lineTo(10, 0);
            break;
        case 'bottom-left':
            ctx.lineTo(12, 0);
            ctx.lineTo(12, 12);
            ctx.lineTo(24, 12);
            ctx.lineTo(24, 14);
            ctx.lineTo(10, 14);
            ctx.lineTo(10, 0);
            break;
        case 'bottom-right':
            ctx.lineTo(12, 12);
            ctx.lineTo(12, 0);
            ctx.lineTo(14, 0);
            ctx.lineTo(14, 14);
            ctx.lineTo(0, 14);
            ctx.lineTo(0, 12);
            break;
    }
    ctx.closePath();
    ctx.fill();
    return canvas;
};

var tileHeight = 10;
var tileWidth = 10;
var Tile = function (_a) {
    var tile = _a.tile;
    if (tile.isFilled) {
        jsx(Fragment, {});
    }
    if (!tile.color) {
        var dataLen = tile.data.length;
        var r = 0, g = 0, b = 0, a = 0;
        for (var i = 0; i < dataLen; i += 4) {
            r += tile.data[i];
            g += tile.data[i + 1];
            b += tile.data[i + 2];
            a += tile.data[i + 3];
        }
        // Set tile color.
        var pixelLen = dataLen / 4;
        tile.color = {
            r: Math.round(r / pixelLen),
            g: Math.round(g / pixelLen),
            b: Math.round(b / pixelLen),
            a: Math.round(a / pixelLen),
        };
    }
    var color = tile.color;
    var x = tile.column * tileWidth;
    var y = tile.row * tileHeight;
    var w = tile.pixelWidth;
    var h = tile.pixelHeight;
    return (jsx(Rect, { globalCompositeOperation: 'source-over', x: x, y: y, width: w, height: h, fill: "rgba(".concat(color.r, ", ").concat(color.g, ", ").concat(color.b, ", ").concat(color.a / 255, ")") }));
};
var Blurs = function (_a) {
    var _b = _a.currentBlur, currentBlur = _b === void 0 ? [] : _b;
    var _c = useEditor(), width = _c.width, height = _c.height;
    var _d = useHistory(), image = _d.image, group = _d.group, blurs = _d.blurs;
    var tiles = useRef([]);
    var tileRowSize = Math.ceil(height / tileHeight);
    var tileColumnSize = Math.ceil(width / tileWidth);
    var _e = __read(useState(false), 2), isInt = _e[0], setIsInt = _e[1];
    var getTilesByPoint = function (x, y, strokeWidth) {
        var ts = [];
        var startRow = Math.max(0, Math.floor(y / tileHeight) - Math.floor(strokeWidth / 2));
        var startColumn = Math.max(0, Math.floor(x / tileWidth) - Math.floor(strokeWidth / 2));
        var endRow = Math.min(tileRowSize, startRow + strokeWidth);
        var endColumn = Math.min(tileColumnSize, startColumn + strokeWidth);
        while (startRow < endRow) {
            var column = startColumn;
            while (column < endColumn) {
                ts.push(tiles.current[startRow * tileColumnSize + column]);
                column += 1;
            }
            startRow += 1;
        }
        return ts;
    };
    var currentTiles = useMemo(function () {
        var posTotiles = [];
        if (!isInt)
            return posTotiles;
        currentBlur.forEach(function (pos) {
            posTotiles.push.apply(posTotiles, __spreadArray([], __read(getTilesByPoint(pos.x, pos.y, 5)), false));
        });
        return posTotiles;
    }, [currentBlur, isInt]);
    var bluredTiles = useMemo(function () {
        var posTotiles = [];
        if (!isInt)
            return posTotiles;
        blurs.forEach(function (currentBlur) {
            currentBlur.forEach(function (pos) {
                posTotiles.push.apply(posTotiles, __spreadArray([], __read(getTilesByPoint(pos.x, pos.y, 5)), false));
            });
        });
        return posTotiles;
    }, [blurs, isInt]);
    useEffect(function () {
        var imageData = generateImageData(image, group.width, group.height);
        for (var i = 0; i < tileRowSize; i++) {
            for (var j = 0; j < tileColumnSize; j++) {
                var tile = {
                    row: i,
                    column: j,
                    pixelWidth: tileWidth,
                    pixelHeight: tileHeight,
                    data: [],
                };
                var data = [];
                // 转换为像素图形下，起始像素位置
                var pixelPosition = (width * tileHeight * tile.row + tile.column * tileWidth) * 4;
                // 转换为像素图形下，包含多少行
                var pixelRowAmount = tile.pixelHeight;
                // 计算，转换为像素图形使，一个贴片所包含的所有像素数据。先遍历贴片范围内的每一列，每一列中再单独统计行的像素数量
                for (var i_1 = 0; i_1 < pixelRowAmount; i_1++) {
                    // 当前列的起始像素位置
                    var position = pixelPosition + width * 4 * i_1;
                    // 贴片范围内一行的像素数据，等于贴片宽度 * 4
                    data = __spreadArray(__spreadArray([], __read(data), false), __read(imageData.data.slice(position, position + tile.pixelWidth * 4)), false);
                }
                tile.data = data;
                tiles.current.push(tile);
            }
        }
        setIsInt(true);
    }, [image]);
    return (jsxs(Fragment, { children: [currentTiles.length > 0 && (jsx(Group, { children: currentTiles.map(function (tile, index) {
                    return tile && jsx(Tile, { tile: tile }, "".concat(index, "-").concat(tile.row, "-").concat(tile.column));
                }) })), bluredTiles.length > 0 && (jsx(Group, { children: bluredTiles.map(function (tile, index) {
                    return tile && jsx(Tile, { tile: tile }, "".concat(index, "-").concat(tile.row, "-").concat(tile.column));
                }) }))] }));
};

var ClipContainer = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #000;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #000;\n"])));
var InputActions$1 = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 12px 20px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 16px;\n  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  box-sizing: border-box;\n  div {\n    position: relative;\n    &::after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: 200%;\n      height: 200%;\n      content: '';\n      transform: translate(-50%, -50%);\n    }\n  }\n"], ["\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 12px 20px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 16px;\n  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  box-sizing: border-box;\n  div {\n    position: relative;\n    &::after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: 200%;\n      height: 200%;\n      content: '';\n      transform: translate(-50%, -50%);\n    }\n  }\n"])));
var ClipStage = function (_a) {
    var onCutDone = _a.onCutDone;
    var _b = useHistory(), image = _b.image, texts = _b.texts, lines = _b.lines, group = _b.group, clipRect = _b.clipRect;
    var _c = useEditor(), width = _c.width, height = _c.height, handleSelectTool = _c.handleSelectTool;
    var drawAnchors = useAnchor();
    var scaleGroup = useRef(null);
    var currentImage = useRef(null);
    var stageRef = useRef(null);
    var reRef = useRef(null);
    var trRef = useRef(null);
    var lastCenter = useRef(null);
    var lastDist = useRef(0);
    var _d = __read(useState(clipRect), 2), clipInfo = _d[0], setClipInfo = _d[1];
    var _e = __read(useState(group.rotation), 2), rotation = _e[0], setRotaion = _e[1];
    var basicScaleRatio = useMemo(function () {
        var rotationStage = ((rotation / 90) % 4) + 1;
        var containerSize = [width, height * 0.8];
        if (rotationStage % 2 === 0) {
            containerSize = [height * 0.8, width];
        }
        var _a = __read(getImageSize.apply(void 0, __spreadArray([clipInfo.width, clipInfo.height], __read(containerSize), false)), 1), clipContainWidth = _a[0];
        return clipContainWidth / clipInfo.width;
    }, [clipInfo, rotation]);
    var _f = __read(useMemo(function () {
        var centerX = width / 2;
        var centerY = (height * 0.8) / 2;
        var clipCenterX = group.x + (clipInfo.x + clipInfo.width / 2) * basicScaleRatio;
        var clipCenterY = group.y + (clipInfo.y + clipInfo.height / 2) * basicScaleRatio;
        var _a = __read(rotatePoint(clipCenterX, clipCenterY, rotation), 2), rdx = _a[0], rdy = _a[1];
        var dx = isNaN(clipCenterX - centerX) ? 0 : rdx - centerX;
        var dy = isNaN(clipCenterY - centerY) ? 0 : rdy - centerY;
        return [dx, dy];
    }, [group, clipInfo, rotation, basicScaleRatio]), 2), dx = _f[0], dy = _f[1];
    var groupX = group.x - dx;
    var groupY = group.y - dy;
    var clipRectFill = useMemo(function () {
        var canvas = document.createElement('canvas');
        canvas.width = clipInfo.width * basicScaleRatio;
        canvas.height = clipInfo.height * basicScaleRatio;
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#0096FF';
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.lineTo(0, canvas.height / 3);
        ctx.lineTo(width, canvas.height / 3);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineTo(0, (canvas.height / 3) * 2);
        ctx.lineTo(width, (canvas.height / 3) * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineTo(canvas.width / 3, 0);
        ctx.lineTo(canvas.width / 3, height);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineTo((canvas.width / 3) * 2, 0);
        ctx.lineTo((canvas.width / 3) * 2, height);
        ctx.stroke();
        return canvas;
    }, [clipInfo.width, clipInfo.height, rotation]);
    var handleTransformEnd = function () {
        var _a, _b;
        var node = reRef.current;
        var scaleX = node.scaleX();
        var scaleY = node.scaleY();
        var currentRectBox = {
            width: node.width() * scaleX,
            height: node.height() * scaleY,
            x: +((_a = node.position().x) === null || _a === void 0 ? void 0 : _a.toFixed(5)),
            y: +((_b = node.position().y) === null || _b === void 0 ? void 0 : _b.toFixed(5)),
        };
        node.scaleX(1);
        node.scaleY(1);
        if (currentRectBox.x < 0) {
            currentRectBox.width += currentRectBox.x;
            currentRectBox.x = 0;
            node.x(0);
        }
        if (currentRectBox.y < 0) {
            currentRectBox.height += currentRectBox.y;
            currentRectBox.y = 0;
            node.y(0);
        }
        if (currentRectBox.x + currentRectBox.width > group.width) {
            currentRectBox.width = group.width - currentRectBox.x;
        }
        if (currentRectBox.y + currentRectBox.height > group.height) {
            currentRectBox.height = group.height - currentRectBox.y;
        }
        currentRectBox.height =
            currentRectBox.height < 0 ? -currentRectBox.height : currentRectBox.height;
        currentRectBox.width = currentRectBox.width < 0 ? -currentRectBox.width : currentRectBox.width;
        setClipInfo(currentRectBox);
    };
    var handleCutDown = function () {
        onCutDone(clipInfo, rotation);
    };
    var hanldeCutCancel = function () {
        handleSelectTool(null);
    };
    var hanldeRotate = function () {
        setRotaion(function (preRotation) { return preRotation + 90; });
    };
    var handleTouchMove = function (e) {
        var _a, _b;
        var _c, _d, _e;
        e.evt.preventDefault();
        var touchTarget = scaleGroup.current;
        var touch1 = e.evt.touches[0];
        var touch2 = e.evt.touches[1];
        if (touch1 && touch2) {
            if ((_c = stageRef.current) === null || _c === void 0 ? void 0 : _c.isDragging()) {
                (_d = stageRef.current) === null || _d === void 0 ? void 0 : _d.stopDrag();
            }
            var p1 = {
                x: touch1.clientX,
                y: touch1.clientY,
            };
            var p2 = {
                x: touch2.clientX,
                y: touch2.clientY,
            };
            var newCenter = getCenter(p1, p2);
            if (!lastCenter.current) {
                lastCenter.current = newCenter;
                return;
            }
            var dist = getDistance(p1, p2);
            if (!lastDist.current) {
                lastDist.current = dist;
            }
            var pointTo = {
                x: (newCenter.x - touchTarget.x()) / touchTarget.scaleX(),
                y: (newCenter.y - touchTarget.y()) / touchTarget.scaleX(),
            };
            var scale = touchTarget.scaleX() * (dist / lastDist.current);
            touchTarget.scaleX(scale);
            touchTarget.scaleY(scale);
            var dx_1 = newCenter.x - lastCenter.current.x;
            var dy_1 = newCenter.y - lastCenter.current.y;
            _a = __read(getRotateDistance(dx_1, dy_1, rotation), 2), dx_1 = _a[0], dy_1 = _a[1];
            var newPos = {
                x: newCenter.x - pointTo.x * scale + dx_1,
                y: newCenter.y - pointTo.y * scale + dy_1,
            };
            touchTarget.position(newPos);
            lastDist.current = dist;
            lastCenter.current = newCenter;
            return;
        }
        if (touch1) {
            if ((_e = trRef.current) === null || _e === void 0 ? void 0 : _e.isTransforming())
                return;
            var p1 = {
                x: touch1.clientX,
                y: touch1.clientY,
            };
            if (!lastCenter.current) {
                return (lastCenter.current = p1);
            }
            var dx_2 = p1.x - lastCenter.current.x;
            var dy_2 = p1.y - lastCenter.current.y;
            _b = __read(getRotateDistance(dx_2, dy_2, rotation), 2), dx_2 = _b[0], dy_2 = _b[1];
            touchTarget.move({
                x: dx_2,
                y: dy_2,
            });
            lastCenter.current = p1;
        }
    };
    var handleTouchEnd = function () {
        lastDist.current = 0;
        lastCenter.current = null;
        var node = reRef.current;
        var touchTarget = scaleGroup.current;
        var scaleX = touchTarget.scaleX();
        var scaleY = touchTarget.scaleY();
        // if (scaleX * basicScaleRatio < 1 || scaleY * basicScaleRatio < 1) {
        //   return touchTarget.to({
        //     scaleX: 1,
        //     scaleY: 1,
        //     x: 0,
        //     y: 0,
        //     duration: 0.1,
        //   });
        // }
        var currentRectBox = {
            width: node.width() / scaleX,
            height: node.height() / scaleY,
            x: (node.position().x - touchTarget.x()) / scaleX,
            y: (node.position().y - touchTarget.y()) / scaleY,
        };
        touchTarget.scaleX(1);
        touchTarget.scaleY(1);
        touchTarget.position({
            x: 0,
            y: 0,
        });
        if (currentRectBox.x < 0) {
            currentRectBox.width += currentRectBox.x;
            currentRectBox.x = 0;
            node.x(0);
        }
        if (currentRectBox.y < 0) {
            currentRectBox.height += currentRectBox.y;
            currentRectBox.y = 0;
            node.y(0);
        }
        // TODO: 限制裁剪合理化
        if (currentRectBox.x + currentRectBox.width > group.width) {
            currentRectBox.width = group.width - currentRectBox.x;
        }
        if (currentRectBox.y + currentRectBox.height > group.height) {
            currentRectBox.height = group.height - currentRectBox.y;
        }
        currentRectBox.height =
            currentRectBox.height < 0 ? -currentRectBox.height : currentRectBox.height;
        currentRectBox.width = currentRectBox.width < 0 ? -currentRectBox.width : currentRectBox.width;
        setClipInfo(currentRectBox);
    };
    useLayoutEffect(function () {
        var _a;
        (_a = trRef.current) === null || _a === void 0 ? void 0 : _a.nodes([reRef.current]);
        drawAnchors(trRef.current);
    }, []);
    return (jsxs(ClipContainer, { children: [jsx(Stage, __assign({ ref: stageRef, width: width, height: height, scale: {
                    x: 0.96,
                    y: 0.96,
                }, x: width * 0.02, y: height * 0.02, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd }, { children: jsxs(Layer, { children: [jsxs(Group, __assign({ x: groupX, y: groupY, width: group.width, height: group.height, scaleX: basicScaleRatio, scaleY: basicScaleRatio, rotation: rotation }, { children: [jsxs(Group, __assign({ ref: scaleGroup }, { children: [jsx(Image, { ref: currentImage, image: image, width: group.width, height: group.height }), jsx(Blurs, {}, 'clipBlur'), texts.map(function (text, index) { return (jsx(Text, __assign({ draggable: true }, text), index)); }), lines.map(function (line, index) { return (jsx(Line, __assign({}, line), index)); })] })), jsx(Rect, { ref: reRef, x: clipInfo.x, y: clipInfo.y, width: clipInfo.width, height: clipInfo.height, fillPriority: 'pattern', fillPatternImage: clipRectFill, fillPatternRepeat: 'no-repeat', fillPatternScale: {
                                        x: 1 / basicScaleRatio,
                                        y: 1 / basicScaleRatio,
                                    }, onTransformEnd: handleTransformEnd })] })), jsx(Transformer, { ref: trRef, rotateEnabled: false, anchorSize: 24 })] }) })), jsxs(InputActions$1, { children: [jsx("div", __assign({ onClick: hanldeCutCancel }, { children: "Cancel" })), jsx(SvgIconRotate, { width: 24, height: 24, onClick: hanldeRotate }), jsx("div", __assign({ onClick: handleCutDown }, { children: "Done" }))] })] }));
};
var templateObject_1$2, templateObject_2$2;

var useVisualViewport = function (callback) {
    var _a = __read(useState({
        width: window.innerWidth,
        height: window.innerHeight,
    }), 2), viewport = _a[0], setViewport = _a[1];
    useEffect(function () {
        var _a, _b;
        var handler = function () {
            if (!window.visualViewport)
                return;
            setViewport({
                width: window.visualViewport.width,
                height: window.visualViewport.height,
            });
        };
        (_a = window.visualViewport) === null || _a === void 0 ? void 0 : _a.addEventListener('resize', handler);
        (_b = window.visualViewport) === null || _b === void 0 ? void 0 : _b.addEventListener('scroll', handler);
        return function () {
            var _a, _b;
            (_a = window.visualViewport) === null || _a === void 0 ? void 0 : _a.removeEventListener('resize', handler);
            (_b = window.visualViewport) === null || _b === void 0 ? void 0 : _b.removeEventListener('scroll', handler);
        };
    }, []);
    useEffect(function () {
        callback === null || callback === void 0 ? void 0 : callback();
    }, [viewport]);
    return viewport;
};

var ColorItemStyle = function (props) { return css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: ", ";\n  border: ", ";\n"], ["\n  background: ", ";\n  box-shadow: ", ";\n  border: ", ";\n"])), props.color, props.color === props.currentColor ? '0px 0px 4px 0px rgba(0,150,255,1)' : 'none', props.color === props.currentColor ? '1px solid #0096FF;' : '1px solid #FFFFFF'); };
var ColorItem = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  color: #fff;\n  background: #fff;\n  box-sizing: border-box;\n  ", "\n  &::after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 30px;\n    height: 30px;\n    transform: translate(-50%, -50%);\n    content: '';\n  }\n"], ["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  color: #fff;\n  background: #fff;\n  box-sizing: border-box;\n  ", "\n  &::after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 30px;\n    height: 30px;\n    transform: translate(-50%, -50%);\n    content: '';\n  }\n"])), ColorItemStyle);
var ColorSelectorStyle = function (props) { return css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  transform: translateY(calc(", "px - 100%));\n"], ["\n  transform: translateY(calc(", "px - 100%));\n"])), props.viewprotHeight - 20); };
var ColorSelector = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  padding: 0 30px;\n  box-sizing: border-box;\n  transition: transform 0.2s ease;\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  padding: 0 30px;\n  box-sizing: border-box;\n  transition: transform 0.2s ease;\n  ", "\n"])), ColorSelectorStyle);
var WordInputModal = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding: 100px 15px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding: 100px 15px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n"])));
var InputArea = styled.textarea(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 105px;\n  padding: 0 12px;\n  background: #ffffff;\n  box-shadow: 0px 0px 8px 0px rgba(0, 150, 255, 0.4);\n  border-radius: 8px;\n  border: 1px solid #38a1f6;\n  resize: none;\n  font-size: 30px;\n  font-weight: 500;\n  color: #222222;\n  line-height: 42px;\n"], ["\n  width: 100%;\n  height: 105px;\n  padding: 0 12px;\n  background: #ffffff;\n  box-shadow: 0px 0px 8px 0px rgba(0, 150, 255, 0.4);\n  border-radius: 8px;\n  border: 1px solid #38a1f6;\n  resize: none;\n  font-size: 30px;\n  font-weight: 500;\n  color: #222222;\n  line-height: 42px;\n"])));
var InputActions = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 12px 20px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 16px;\n  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  box-sizing: border-box;\n  div {\n    position: relative;\n    &::after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: 200%;\n      height: 200%;\n      content: '';\n      transform: translate(-50%, -50%);\n    }\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 12px 20px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 16px;\n  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  box-sizing: border-box;\n  div {\n    position: relative;\n    &::after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: 200%;\n      height: 200%;\n      content: '';\n      transform: translate(-50%, -50%);\n    }\n  }\n"])));
var WordInput = function (_a) {
    var _b = _a.defaultWord, defaultWord = _b === void 0 ? '' : _b, onDone = _a.onDone, onCancel = _a.onCancel;
    var textareaEl = useRef(null);
    var viewprot = useVisualViewport(function () {
        var _a;
        (_a = textareaEl.current) === null || _a === void 0 ? void 0 : _a.focus();
    });
    var _c = useEditor(), editorColors = _c.editorColors, textConfig = _c.textConfig, changeColor = _c.changeColor;
    var handleCancel = function (e) {
        e.stopPropagation();
        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    };
    var hanldeDone = function (e) {
        e.stopPropagation();
        onDone === null || onDone === void 0 ? void 0 : onDone(textareaEl.current.value);
    };
    var handleChangeColor = function (e, color) {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        changeColor(color);
        (_a = textareaEl.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    useEffect(function () {
        var _a;
        (_a = textareaEl.current) === null || _a === void 0 ? void 0 : _a.focus();
        textareaEl.current.value = defaultWord;
    }, []);
    return ReactDOM.createPortal(jsxs(WordInputModal, __assign({ onClick: function (e) { return e.stopPropagation(); } }, { children: [jsxs(InputActions, { children: [jsx("div", __assign({ onClick: handleCancel }, { children: "Cancel" })), jsx("div", __assign({ onClick: hanldeDone }, { children: "Done" }))] }), jsx(InputArea, { ref: textareaEl, autoComplete: 'off', wrap: 'hard', style: { color: textConfig.fill } }), jsx(ColorSelector, __assign({ viewprotHeight: viewprot.height }, { children: editorColors === null || editorColors === void 0 ? void 0 : editorColors.map(function (color) { return (jsx(ColorItem, { color: color, currentColor: textConfig.fill, onClick: function (e) { return handleChangeColor(e, color); } }, color)); }) }))] })), document.body);
};
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgIconDelete = function SvgIconDelete(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M32.569 3a1.43 1.43 0 0 1 1.428 1.433v3.584h8.576c.51 0 .981.273 1.236.717.255.444.255.99 0 1.433a1.427 1.427 0 0 1-1.238.716h-1.505l-3.477 31.294A4.291 4.291 0 0 1 33.33 46H14.67a4.29 4.29 0 0 1-4.258-3.823L6.935 10.883H5.428A1.43 1.43 0 0 1 4 9.45c0-.792.64-1.433 1.428-1.433h8.576V4.433c0-.791.64-1.433 1.428-1.433Zm5.624 7.883H9.808L13.25 41.86a1.43 1.43 0 0 0 1.42 1.274H33.33a1.43 1.43 0 0 0 1.42-1.274l3.442-30.976Zm-9.908 3.544a1.43 1.43 0 0 1 1.428 1.433v21.044a1.43 1.43 0 0 1-1.428 1.433 1.43 1.43 0 0 1-1.428-1.433V15.86c0-.792.639-1.433 1.428-1.433Zm-7.855 0a1.43 1.43 0 0 1 1.428 1.433v21.044a1.43 1.43 0 0 1-1.428 1.433 1.43 1.43 0 0 1-1.428-1.433V15.86c0-.792.64-1.433 1.428-1.433Zm10.71-8.56H16.86v2.15h14.28v-2.15Z"
  })));
};

var StageContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background: #000;\n"], ["\n  position: relative;\n  background: #000;\n"])));
var DeleteArea = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  display: var(--is-show);\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 150px;\n  height: 80px;\n  padding: 14px 0 15px;\n  background: #e2f0fe;\n  box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);\n  border-radius: 10px;\n  border: 1px solid var(--fill-color);\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--fill-color);\n  line-height: 20px;\n  opacity: var(--optaicy);\n  transition: all 0.1s ease;\n  box-sizing: border-box;\n  svg {\n    width: 24px;\n    height: 24px;\n    fill: var(--fill-color);\n    transition: inherit;\n  }\n"], ["\n  ", "\n  display: var(--is-show);\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 150px;\n  height: 80px;\n  padding: 14px 0 15px;\n  background: #e2f0fe;\n  box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);\n  border-radius: 10px;\n  border: 1px solid var(--fill-color);\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--fill-color);\n  line-height: 20px;\n  opacity: var(--optaicy);\n  transition: all 0.1s ease;\n  box-sizing: border-box;\n  svg {\n    width: 24px;\n    height: 24px;\n    fill: var(--fill-color);\n    transition: inherit;\n  }\n"])), function (props) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    --optaicy: ", ";\n    --fill-color: ", ";\n    --is-show: ", ";\n  "], ["\n    --optaicy: ", ";\n    --fill-color: ", ";\n    --is-show: ", ";\n  "])), props.deleteAreaStatus === 'active' ? 0.9 : 1, props.deleteAreaStatus === 'active' ? '#ff6650' : '#0096ff', props.deleteAreaStatus === 'none' ? 'none' : 'flex'); });
var EditorStage = forwardRef(function (_, ref) {
    var _a = useEditor(), width = _a.width, height = _a.height, activeTool = _a.activeTool, pencilConfig = _a.pencilConfig, textConfig = _a.textConfig, handleSelectTool = _a.handleSelectTool;
    var _b = useHistory(), image = _b.image, texts = _b.texts, lines = _b.lines, group = _b.group, clipRect = _b.clipRect, setLines = _b.setLines, setTexts = _b.setTexts, setImage = _b.setImage, setBlurs = _b.setBlurs;
    var _c = __read(useState([]), 2), currentBlurPos = _c[0], setBlurPos = _c[1];
    var _d = __read(useState('none'), 2), deleteAreaStatus = _d[0], setDeleteAreaStatus = _d[1];
    var stage = useRef(null);
    var layer = useRef(null);
    var scaleGroup = useRef(null);
    var clipGroup = useRef(null);
    var currentImage = useRef(null);
    var currentLine = useRef(null);
    var trRef = useRef(null);
    var lastDist = useRef(0);
    var lastTextScale = useRef(1);
    var deleteAreaRef = useRef(null);
    var basicScaleRatio = useMemo(function () {
        var rotationStage = ((group.rotation / 90) % 4) + 1;
        var containerSize = [width, height * 0.8];
        if (rotationStage % 2 === 0) {
            containerSize = [height * 0.8, width];
        }
        var _a = __read(getImageSize.apply(void 0, __spreadArray([clipRect.width, clipRect.height], __read(containerSize), false)), 1), clipContainWidth = _a[0];
        return clipContainWidth / clipRect.width;
    }, [clipRect, group.rotation]);
    var _e = __read(useMemo(function () {
        var centerX = width / 2;
        var centerY = (height * 0.8) / 2;
        var clipCenterX = group.x + (clipRect.x + clipRect.width / 2) * basicScaleRatio;
        var clipCenterY = group.y + (clipRect.y + clipRect.height / 2) * basicScaleRatio;
        var _a = __read(rotatePoint(clipCenterX, clipCenterY, group.rotation), 2), rdx = _a[0], rdy = _a[1];
        var dx = isNaN(clipCenterX - centerX) ? 0 : rdx - centerX;
        var dy = isNaN(clipCenterY - centerY) ? 0 : rdy - centerY;
        return [dx, dy];
    }, [group, clipRect, group.rotation, basicScaleRatio]), 2), dx = _e[0], dy = _e[1];
    var groupX = group.x - dx;
    var groupY = group.y - dy;
    var handleDrawStart = function () {
        var drawTarget = scaleGroup.current;
        var pos = drawTarget.getRelativePointerPosition();
        if (activeTool === 'Pencil') {
            currentLine.current = new Konva.Line(__assign(__assign({}, pencilConfig), { strokeWidth: pencilConfig.strokeWidth / basicScaleRatio, points: pos ? [pos.x, pos.y, pos.x, pos.y] : [] }));
            drawTarget.add(currentLine.current);
        }
        else if (activeTool === 'Blur') {
            setBlurPos(function (preBlurPos) { return __spreadArray(__spreadArray([], __read(preBlurPos), false), [pos], false); });
        }
    };
    var handleDraw = function () {
        var _a;
        var lastLine = currentLine.current;
        var pos = (_a = scaleGroup.current) === null || _a === void 0 ? void 0 : _a.getRelativePointerPosition();
        if (activeTool === 'Pencil' && lastLine) {
            var newPoints = lastLine.points().concat([pos.x, pos.y]);
            lastLine.points(newPoints);
        }
        if (activeTool === 'Blur' && currentBlurPos.length) {
            setBlurPos(function (preBlurPos) { return __spreadArray(__spreadArray([], __read(preBlurPos), false), [pos], false); });
        }
    };
    var handleDrawEnd = function () {
        var lastLine = currentLine.current;
        if (activeTool === 'Pencil' && lastLine) {
            setLines(function (preLines) {
                return __spreadArray(__spreadArray([], __read(preLines), false), [
                    __assign(__assign({}, pencilConfig), { strokeWidth: pencilConfig.strokeWidth / basicScaleRatio, points: lastLine.points() }),
                ], false);
            });
            setTimeout(function () {
                lastLine.destroy();
                currentLine.current = null;
            }, 50);
        }
        if (activeTool === 'Blur') {
            setBlurs(function (preBlurs) { return __spreadArray(__spreadArray([], __read(preBlurs), false), [currentBlurPos], false); });
            setBlurPos([]);
        }
    };
    var handleTextAdd = function (text) {
        if (text) {
            var fontSize_1 = textConfig.fontSize / basicScaleRatio;
            var maxWidth = textConfig.width / basicScaleRatio;
            var textWidth_1 = Math.min(maxWidth, text.length * fontSize_1);
            setTexts(function (preTexts) { return __spreadArray(__spreadArray([], __read(preTexts), false), [
                __assign(__assign({}, textConfig), { fontSize: fontSize_1, text: text, align: 'center', width: textWidth_1, x: group.width / 2, y: group.height / 2, offsetX: textWidth_1 / 2, offsetY: fontSize_1 / 2, rotation: -group.rotation }),
            ], false); });
            handleSelectTool(null);
        }
    };
    var handleTextDragMove = function (e) {
        var _a;
        var currentText = e.target;
        var position = currentText.absolutePosition();
        var textHeight = currentText.height();
        var deleteAreaTop = (_a = deleteAreaRef.current) === null || _a === void 0 ? void 0 : _a.y();
        if (position.y >= deleteAreaTop - textHeight) {
            setDeleteAreaStatus('active');
        }
        else {
            setDeleteAreaStatus('show');
        }
    };
    var handleTextDragEnd = function (e) {
        var _a;
        var currentText = e.target;
        var index = currentText.attrs.id.slice(-1);
        switch (deleteAreaStatus) {
            case 'show':
            case 'none':
                var position_1 = currentText.position();
                setTexts(function (preTexts) {
                    preTexts[index].x = position_1.x;
                    preTexts[index].y = position_1.y;
                    return preTexts;
                });
                break;
            case 'active':
                setTexts(function (preTexts) {
                    preTexts.splice(index, 1);
                    return __spreadArray([], __read(preTexts), false);
                });
                break;
        }
        setDeleteAreaStatus('none');
        currentText === null || currentText === void 0 ? void 0 : currentText.moveTo(clipGroup.current);
        if (deleteAreaStatus === 'active') {
            (_a = trRef.current) === null || _a === void 0 ? void 0 : _a.nodes([]);
        }
    };
    var handleRemoveTransfromer = function () {
        var _a;
        (_a = trRef.current) === null || _a === void 0 ? void 0 : _a.nodes([]);
    };
    // TODO: ts
    var handleCut = function (clipInfo, rotation) {
        setImage(clipInfo, rotation);
        handleSelectTool(null);
    };
    var handleMouseDown = function (e) {
        var _a, _b, _c, _d;
        if (['Blur', 'Pencil'].includes(activeTool)) {
            handleDrawStart();
        }
        else if (e.target.className === 'Text') {
            e.target.moveTo(scaleGroup.current);
            (_a = trRef.current) === null || _a === void 0 ? void 0 : _a.nodes([e.target]);
        }
        else if (e.target === currentImage.current) {
            (_c = (_b = trRef.current) === null || _b === void 0 ? void 0 : _b.nodes()[0]) === null || _c === void 0 ? void 0 : _c.moveTo(clipGroup.current);
            (_d = trRef.current) === null || _d === void 0 ? void 0 : _d.nodes([]);
        }
    };
    var handleTouchStart = function (e) {
        var _a;
        if (['Blur', 'Pencil'].includes(activeTool)) {
            handleDrawStart();
        }
        else if (e.target.className === 'Text') {
            e.target.moveTo(scaleGroup.current);
            (_a = trRef.current) === null || _a === void 0 ? void 0 : _a.nodes([e.target]);
        }
    };
    var handleMouseMove = function (e) {
        e.evt.preventDefault();
        if (['Blur', 'Pencil'].includes(activeTool)) {
            handleDraw();
        }
    };
    var handleTouchMove = function (e) {
        var _a, _b;
        e.evt.preventDefault();
        if (['Blur', 'Pencil'].includes(activeTool)) {
            handleDraw();
        }
        else if (e.evt.touches.length > 1) {
            var touchTarget = trRef.current.nodes()[0];
            touchTarget.draggable(false);
            var touch1 = e.evt.touches[0];
            var touch2 = e.evt.touches[1];
            if ((_a = stage.current) === null || _a === void 0 ? void 0 : _a.isDragging()) {
                (_b = stage.current) === null || _b === void 0 ? void 0 : _b.stopDrag();
            }
            var p1 = {
                x: touch1.clientX,
                y: touch1.clientY,
            };
            var p2 = {
                x: touch2.clientX,
                y: touch2.clientY,
            };
            var dist = getDistance(p1, p2);
            if (!lastDist.current) {
                lastDist.current = dist;
                lastTextScale.current = touchTarget.scaleX();
            }
            var rotaio = (dist / lastDist.current - 1) * 0.8 + 1;
            var scale = lastTextScale.current * rotaio;
            touchTarget.scaleX(scale);
            touchTarget.scaleY(scale);
        }
    };
    var handleMouseUp = function (e) {
        if (['Blur', 'Pencil'].includes(activeTool)) {
            handleDrawEnd();
        }
    };
    var handleTouchEnd = function (e) {
        if (['Blur', 'Pencil'].includes(activeTool)) {
            handleDrawEnd();
        }
        var touchTarget = trRef.current.nodes()[0];
        if (touchTarget && touchTarget.scaleX() > lastTextScale.current) {
            var index_1 = touchTarget.attrs.id.slice(-1);
            setTexts(function (preTexts) {
                preTexts[index_1].scaleX = touchTarget.scaleX();
                preTexts[index_1].scaleY = touchTarget.scaleY();
                return __spreadArray([], __read(preTexts), false);
            });
        }
        touchTarget === null || touchTarget === void 0 ? void 0 : touchTarget.draggable(true);
        lastDist.current = 0;
        lastTextScale.current = 1;
    };
    useEffect(function () {
        var _a;
        deleteAreaRef.current = (_a = stage.current) === null || _a === void 0 ? void 0 : _a.findOne('#delete-area');
    }, []);
    useImperativeHandle(ref, function () {
        return {
            exportImage: function () {
                var _a;
                return (_a = scaleGroup.current) === null || _a === void 0 ? void 0 : _a.toDataURL({
                    x: clipRect.x * basicScaleRatio - dx,
                    y: clipRect.y * basicScaleRatio - dy,
                    width: clipRect.width * basicScaleRatio,
                    height: clipRect.height * basicScaleRatio,
                });
            },
        };
    }, [clipRect]);
    return (jsxs(StageContainer, __assign({ style: {
            width: width,
            height: height,
        } }, { children: [jsx(Stage, __assign({ ref: stage, width: width, height: height, onMouseDown: handleMouseDown, onTouchStart: handleTouchStart, onMouseMove: handleMouseMove, onTouchMove: handleTouchMove, onMouseUp: handleMouseUp, onTouchEnd: handleTouchEnd }, { children: jsxs(Layer, __assign({ ref: layer }, { children: [jsx(Group, __assign({ ref: scaleGroup, x: groupX, y: groupY, width: group.width, height: group.height, scale: {
                                x: basicScaleRatio,
                                y: basicScaleRatio,
                            }, rotation: group.rotation }, { children: jsxs(Group, __assign({ ref: clipGroup, clipX: clipRect.x, clipY: clipRect.y, clipHeight: clipRect.height, clipWidth: clipRect.width }, { children: [jsx(Image, { ref: currentImage, image: image, width: group.width, height: group.height }), jsx(Blurs, { currentBlur: currentBlurPos }), texts.map(function (text, index) { return (createElement(Text, __assign({}, text, { key: index, id: "text-".concat(index), x: text.x, y: text.y, draggable: true, onDragMove: handleTextDragMove, onDragEnd: handleTextDragEnd }))); }), lines.map(function (line, index) { return (jsx(Line, __assign({}, line), index)); })] })) })), jsx(Html, __assign({ groupProps: {
                                id: 'delete-area',
                                y: height - 120,
                                x: width / 2 - 75,
                                width: 150,
                                height: 80,
                            } }, { children: jsxs(DeleteArea, __assign({ deleteAreaStatus: deleteAreaStatus }, { children: [jsx(SvgIconDelete, {}), jsx("div", { children: "Drag here to delete" })] })) })), jsx(Transformer, { ref: trRef, rotateEnabled: false, resizeEnabled: false, anchorStroke: 'rgba(0,0,0,0)', anchorFill: 'rgba(0,0,0,0)', borderStroke: '#ccc' })] })) })), activeTool === 'Cut' && jsx(ClipStage, { onCutDone: handleCut }), activeTool === 'Words' && (jsx(WordInput, { onDone: handleTextAdd, onCancel: function () { return handleSelectTool(null); } })), deleteAreaStatus === 'none' && jsx(Toolbar, { onSelect: handleRemoveTransfromer })] })));
});
var templateObject_1, templateObject_2, templateObject_3;

var HistoryProvider = function (_a) {
    var children = _a.children, imageUrl = _a.image;
    var _b = useEditor(), width = _b.width, height = _b.height;
    var _c = __read(useState({
        group: {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            rotation: 0,
        },
        clipRect: {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
        },
        lines: [],
        texts: [],
        blurs: [],
    }), 2), state = _c[0], setState = _c[1];
    var _d = __read(useState(false), 2), isInt = _d[0], setIsInt = _d[1];
    var stateRef = useRef(state);
    stateRef.current = state;
    var _e = __read(useImage(imageUrl), 2), mainImage = _e[0], imageStatus = _e[1];
    var handleDataChange = function (state) {
        // console.log('historyChange', state);
        setState(state);
        stateRef.current = state;
    };
    var history = useRef();
    var handleLineChange = function (callback) {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.pushSync(__assign(__assign({}, stateRef.current), { lines: callback(stateRef.current.lines) }));
    };
    var handleBlurChange = function (callback) {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.pushSync(__assign(__assign({}, stateRef.current), { blurs: callback(stateRef.current.blurs) }));
    };
    var handleTextChange = function (callback) {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.pushSync(__assign(__assign({}, stateRef.current), { texts: callback(stateRef.current.texts) }));
    };
    var handleImagechange = function (clipRect, rotation) {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.pushSync(__assign(__assign({}, stateRef.current), { clipRect: Object.assign({}, stateRef.current.clipRect, clipRect), group: Object.assign({}, stateRef.current.group, { rotation: rotation }) }));
    };
    var handleGroupChange = function (groupConfig) {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.pushSync(__assign(__assign({}, stateRef.current), { group: Object.assign({}, stateRef.current.group, groupConfig) }));
    };
    var handleRedo = function () {
        var _a, _b;
        if ((_a = history.current) === null || _a === void 0 ? void 0 : _a.hasRedo) {
            (_b = history.current) === null || _b === void 0 ? void 0 : _b.redo().get();
        }
    };
    var handleUndo = function () {
        var _a, _b;
        if ((_a = history.current) === null || _a === void 0 ? void 0 : _a.hasUndo) {
            (_b = history.current) === null || _b === void 0 ? void 0 : _b.undo().get();
        }
    };
    useLayoutEffect(function () {
        if (imageStatus === 'loaded' && mainImage) {
            var _a = __read(getImageSize(mainImage.width, mainImage.height, width, height), 2), imageWidth_1 = _a[0], imageHeight_1 = _a[1];
            history.current = new History({
                initialState: __assign(__assign({}, stateRef.current), { image: mainImage, group: {
                        width: imageWidth_1,
                        height: imageHeight_1,
                        x: 0,
                        y: 0,
                        rotation: 0,
                    }, clipRect: {
                        width: imageWidth_1,
                        height: imageHeight_1,
                        x: 0,
                        y: 0,
                    } }),
                delay: 0,
                onChange: handleDataChange,
            });
            setState(function (preVal) {
                return __assign(__assign({}, preVal), { group: {
                        width: imageWidth_1,
                        height: imageHeight_1,
                        x: 0,
                        y: 0,
                        rotation: 0,
                    }, clipRect: {
                        width: imageWidth_1,
                        height: imageHeight_1,
                        x: 0,
                        y: 0,
                    } });
            });
            setIsInt(true);
            // console.log(history.current);
        }
    }, [imageStatus]);
    return (jsx(EditorContext.Provider, __assign({ value: __assign(__assign({}, state), { image: mainImage, setGroup: handleGroupChange, setLines: handleLineChange, setBlurs: handleBlurChange, setTexts: handleTextChange, setImage: handleImagechange, redo: handleRedo, undo: handleUndo }) }, { children: isInt && children })));
};

// TODO: i18n
// TODO: 配置项完善
var Editor = forwardRef(function (_a, ref) {
    var image = _a.image, _b = _a.width, width = _b === void 0 ? window.innerWidth : _b, _c = _a.height, height = _c === void 0 ? window.innerHeight : _c;
    return (jsx(EditorProvider, __assign({ width: width, height: height }, { children: jsx(HistoryProvider, __assign({ image: image }, { children: jsx(EditorStage, { ref: ref }) })) })));
});

export { Editor as default };
