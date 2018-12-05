"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_media_query_1 = require("styled-media-query");
var polished_1 = require("polished");
exports.media = styled_media_query_1.generateMedia({
    huge: '1440px',
    large: '1170px',
    medium: '768px',
    small: '450px',
});
exports.defaultTheme = {
    feedItem: {
        color: '#ffffff',
        backgroundColor: '#000000',
    },
    media: exports.media,
    columns: {
        default: 2,
        medium: 4,
        large: 6,
    },
    button: {
        padding: '0.75rem 1.25rem',
        color: 'white',
        backgroundColor: 'black',
        backgroundColorHover: 'black',
        borderRadius: polished_1.rem(4),
        margin: '2rem auto',
    },
    anchorButton: {
        padding: '0.75rem 1.25rem',
        color: 'white',
        backgroundColor: 'black',
        backgroundColorHover: 'black',
        borderRadius: polished_1.rem(4),
        margin: '0',
    },
};
