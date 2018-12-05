import { generateMedia } from 'styled-media-query';
import { rem } from 'polished';

export const media = generateMedia({
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
});

export const defaultTheme = {
  feedItem: {
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  media: media,
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
    borderRadius: rem(4),
    margin: '2rem auto',
  },
  anchorButton: {
    padding: '0.75rem 1.25rem',
    color: 'white',
    backgroundColor: 'black',
    backgroundColorHover: 'black',
    borderRadius: rem(4),
    margin: '0',
  },
};
