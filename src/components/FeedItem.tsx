import styled, { css } from 'styled-components';
import * as styles from '../styles';

export const FeedItemHover = styled.div`
  align-items: center;
  background: #00000055;
  color: #ffffff;
  display: none;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  i {
    margin-right: 0.25rem;
  }

  > div {
    align-items: center;
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-right: 0.5rem;
  }
`;

FeedItemHover.defaultProps = {
  theme: styles.defaultTheme,
};

const FeedItem = styled.div`
  display: flex;
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

  &:active,
  &:hover {
    ${FeedItemHover} {
      display: flex;
    }
  }
`;

FeedItem.defaultProps = {
  theme: styles.defaultTheme,
};

export default FeedItem;
