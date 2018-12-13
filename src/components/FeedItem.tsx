import styled, { css } from 'styled-components';
import * as styles from '../styles';
import { FeedItemHover } from './index';

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
