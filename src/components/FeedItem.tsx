import styled, { css } from 'styled-components';
import * as styles from '../styles';

export const FeedItemHover = styled.div`
  align-items: center;
  background: #00000055;
  display: none;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const FeedItem = styled.div`
  background-position: center;
  background-size: cover;
  flex: 0 0 auto;
  margin: 0;
  max-width: ${100 / 2}%;
  padding: 0;
  position: relative;

  ${({ theme: { media, columns } }) =>
    media &&
    columns &&
    css`
      ${Object.keys(columns).map(breakpoint =>
        breakpoint === 'default'
          ? css`
              max-width: ${100 / columns[breakpoint]}%;
            `
          : media.greaterThan(breakpoint)`
                max-width: ${100 / columns[breakpoint]}%;
              `,
      )};
    `};

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  &:active,
  &:hover {
    ${FeedItemHover} {
      display: flex;
    }
  }

  img {
    display: inline-block;
    height: 0;
    opacity: 0;
    width: 100%;
  }
`;

FeedItemHover.defaultProps = {
  theme: styles.defaultTheme,
};

FeedItem.defaultProps = {
  theme: styles.defaultTheme,
};

export default FeedItem;
