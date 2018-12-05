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
var react_modal_1 = __importDefault(require("react-modal"));
var styled_components_1 = __importStar(require("styled-components"));
var polished_1 = require("polished");
var StyledReactModal = styled_components_1.default(react_modal_1.default).attrs({
    style: function () { return ({
        overlay: {
            background: "#00000040",
            alignItems: 'safe center',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'safe center',
            overflow: 'auto',
            zIndex: '9999',
            padding: '1rem',
        },
        content: {
            color: "inherit",
            background: "white",
            border: 0,
            borderRadius: "" + polished_1.rem(4),
        },
    }); },
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  margin: auto;\n  width: auto;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  max-width: 100%;\n\n  * {\n    box-sizing: border-box;\n    font-family: inherit;\n  }\n\n  &:focus {\n    outline: 0;\n  }\n"], ["\n  box-sizing: border-box;\n  margin: auto;\n  width: auto;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  max-width: 100%;\n\n  * {\n    box-sizing: border-box;\n    font-family: inherit;\n  }\n\n  &:focus {\n    outline: 0;\n  }\n"])));
exports.ModalContentWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: row;\n  max-width: 100%;\n  width: ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  display: flex;\n  flex-flow: row;\n  max-width: 100%;\n  width: ", ";\n\n  ",
    ";\n\n  ",
    ";\n"])), polished_1.rem(1200), function (_a) {
    var media = _a.theme.media;
    return media && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ",
        "\n    "])), media.lessThan('medium')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        flex-flow: column;\n      "], ["\n        flex-flow: column;\n      "]))));
}, function (_a) {
    var media = _a.theme.media;
    return media && styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ",
        "\n    "])), media.lessThan('large')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width: ", ";\n      "], ["\n        width: ", ";\n      "])), polished_1.rem(800)));
});
exports.ModalContentContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-flow: column;\n  padding: 1rem 0;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-flow: column;\n  padding: 1rem 0;\n"])));
exports.ModalNext = styled_components_1.default.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  align-items: center;\n  background: transparent;\n  border: 0;\n  display: flex;\n  height: 100%;\n  justify-content: flex-end;\n  margin: 0;\n  opacity: 0;\n  outline: 0;\n  padding: 0.5rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: all 350ms ease;\n  width: 50%;\n"], ["\n  align-items: center;\n  background: transparent;\n  border: 0;\n  display: flex;\n  height: 100%;\n  justify-content: flex-end;\n  margin: 0;\n  opacity: 0;\n  outline: 0;\n  padding: 0.5rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: all 350ms ease;\n  width: 50%;\n"])));
exports.ModalPrevious = styled_components_1.default.button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  align-items: center;\n  background: transparent;\n  border: 0;\n  display: flex;\n  height: 100%;\n  justify-content: flex-start;\n  left: 0;\n  margin: 0;\n  opacity: 0;\n  outline: 0;\n  padding: 0.5rem;\n  position: absolute;\n  top: 0;\n  transition: all 350ms ease;\n  width: 50%;\n"], ["\n  align-items: center;\n  background: transparent;\n  border: 0;\n  display: flex;\n  height: 100%;\n  justify-content: flex-start;\n  left: 0;\n  margin: 0;\n  opacity: 0;\n  outline: 0;\n  padding: 0.5rem;\n  position: absolute;\n  top: 0;\n  transition: all 350ms ease;\n  width: 50%;\n"])));
exports.ModalImageContainer = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  align-items: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-color: #000000;\n  flex: 0 0 auto;\n  height: ", ";\n  max-width: 100%;\n  position: relative;\n  width: 60%;\n\n  &:hover,\n  &:active {\n    ", ",\n    ", " {\n      opacity: 0.75;\n    }\n  }\n\n  ", ";\n"], ["\n  align-items: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-color: #000000;\n  flex: 0 0 auto;\n  height: ", ";\n  max-width: 100%;\n  position: relative;\n  width: 60%;\n\n  &:hover,\n  &:active {\n    ", ",\n    ", " {\n      opacity: 0.75;\n    }\n  }\n\n  ",
    ";\n"])), polished_1.rem(600), exports.ModalNext, exports.ModalPrevious, function (_a) {
    var media = _a.theme.media;
    return media && styled_components_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ",
        "\n    "])), media.lessThan('medium')(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        height: ", ";\n        width: 100%;\n      "], ["\n        height: ", ";\n        width: 100%;\n      "])), polished_1.rem(400)));
});
exports.ModalAvatarContainer = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-flow: row;\n  padding: 0 1rem;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-flow: row;\n  padding: 0 1rem;\n"])));
exports.ModalAvatar = styled_components_1.default.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  background-color: #eff3f6;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  height: ", ";\n  margin-right: 1rem;\n  width: ", ";\n"], ["\n  background-color: #eff3f6;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  height: ", ";\n  margin-right: 1rem;\n  width: ", ";\n"])), polished_1.rem(50), polished_1.rem(50));
exports.ModalButtonContainer = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  margin-top: auto;\n  max-width: 100%;\n  padding: 1rem;\n"], ["\n  margin-top: auto;\n  max-width: 100%;\n  padding: 1rem;\n"])));
exports.ModalMessage = styled_components_1.default.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  max-height: ", ";\n  overflow: auto;\n  padding: 0 1rem;\n"], ["\n  max-height: ", ";\n  overflow: auto;\n  padding: 0 1rem;\n"])), polished_1.rem(425));
exports.ModalClose = styled_components_1.default.button(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  background: none;\n  border: 0;\n  cursor: pointer;\n  font-size: ", ";\n  outline: 0;\n  padding: 0;\n  position: absolute;\n  right: 0.5rem;\n  text-align: center;\n  top: 0.75rem;\n  z-index: 9999;\n\n  > *:last-child {\n    margin-left: auto;\n  }\n"], ["\n  background: none;\n  border: 0;\n  cursor: pointer;\n  font-size: ", ";\n  outline: 0;\n  padding: 0;\n  position: absolute;\n  right: 0.5rem;\n  text-align: center;\n  top: 0.75rem;\n  z-index: 9999;\n\n  > *:last-child {\n    margin-left: auto;\n  }\n"])), polished_1.rem(12));
exports.default = StyledReactModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
