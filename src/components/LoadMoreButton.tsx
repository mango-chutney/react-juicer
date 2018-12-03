import styled from 'styled-components';
import * as styles from '../styles';
import get from 'lodash/get';

const LoadMoreButton = styled.div`
  background-color: ${({ theme }) => get(theme, 'button.backgroundColor')};
  border-radius: ${({ theme }) => get(theme, 'button.borderRadius')};
  color: ${({ theme }) => get(theme, 'button.color')};
  cursor: pointer;
  display: inline-block;
  margin: ${({ theme }) => get(theme, 'button.margin')};
  padding: ${({ theme }) => get(theme, 'button.padding')};
  text-align: center;
  transition: all 300ms ease;

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      get(theme, 'button.backgroundColorHover')};
  }
`;

LoadMoreButton.defaultProps = {
  theme: styles.defaultTheme,
};

export default LoadMoreButton;
