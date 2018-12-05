"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var styles = __importStar(require("../styles"));
var get_1 = __importDefault(require("lodash/get"));
var AnchorButton = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: block;\n  margin: ", ";\n  padding: ", ";\n  text-align: center;\n  text-decoration: none;\n  transition: all 300ms ease;\n\n  &:hover,\n  &:active {\n    background-color: ", ";\n  }\n"], ["\n  background-color: ",
    ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: block;\n  margin: ", ";\n  padding: ", ";\n  text-align: center;\n  text-decoration: none;\n  transition: all 300ms ease;\n\n  &:hover,\n  &:active {\n    background-color: ",
    ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return get_1.default(theme, 'anchorButton.backgroundColor');
}, function (_a) {
    var theme = _a.theme;
    return get_1.default(theme, 'anchorButton.borderRadius');
}, function (_a) {
    var theme = _a.theme;
    return get_1.default(theme, 'anchorButton.color');
}, function (_a) {
    var theme = _a.theme;
    return get_1.default(theme, 'anchorButton.margin');
}, function (_a) {
    var theme = _a.theme;
    return get_1.default(theme, 'anchorButton.padding');
}, function (_a) {
    var theme = _a.theme;
    return get_1.default(theme, 'anchorButton.backgroundColorHover');
});
AnchorButton.defaultProps = {
    theme: styles.defaultTheme,
};
exports.default = AnchorButton;
var templateObject_1;
