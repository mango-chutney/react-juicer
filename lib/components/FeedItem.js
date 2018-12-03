"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var styles = __importStar(require("../styles"));
exports.FeedItemHover = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background: #00000055;\n  display: none;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  align-items: center;\n  background: #00000055;\n  display: none;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var FeedItem = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-position: center;\n  background-size: cover;\n  flex: 0 0 auto;\n  margin: 0;\n  max-width: ", "%;\n  padding: 0;\n  position: relative;\n\n  ", ";\n\n  &::before {\n    content: '';\n    display: block;\n    padding-bottom: 100%;\n  }\n\n  &:active,\n  &:hover {\n    ", " {\n      display: flex;\n    }\n  }\n\n  img {\n    display: inline-block;\n    height: 0;\n    opacity: 0;\n    width: 100%;\n  }\n"], ["\n  background-position: center;\n  background-size: cover;\n  flex: 0 0 auto;\n  margin: 0;\n  max-width: ", "%;\n  padding: 0;\n  position: relative;\n\n  ",
    ";\n\n  &::before {\n    content: '';\n    display: block;\n    padding-bottom: 100%;\n  }\n\n  &:active,\n  &:hover {\n    ", " {\n      display: flex;\n    }\n  }\n\n  img {\n    display: inline-block;\n    height: 0;\n    opacity: 0;\n    width: 100%;\n  }\n"])), 100 / 2, function (_a) {
    var _b = _a.theme, media = _b.media, columns = _b.columns;
    return media &&
        columns && styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", ";\n    "], ["\n      ",
        ";\n    "])), Object.keys(columns).map(function (breakpoint) {
        return breakpoint === 'default'
            ? styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n              max-width: ", "%;\n            "], ["\n              max-width: ", "%;\n            "])), 100 / columns[breakpoint]) : media.greaterThan(breakpoint)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                max-width: ", "%;\n              "], ["\n                max-width: ", "%;\n              "])), 100 / columns[breakpoint]);
    }));
}, exports.FeedItemHover);
exports.FeedItemHover.defaultProps = {
    theme: styles.defaultTheme,
};
FeedItem.defaultProps = {
    theme: styles.defaultTheme,
};
exports.default = FeedItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
