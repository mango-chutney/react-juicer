import styled from 'styled-components';
import * as styles from '../styles';
import get from 'lodash/get';

const AnchorButton = styled.a`
  background-color: ${({ theme }) =>
    get(theme, 'anchorButton.backgroundColor')};
  border-radius: ${({ theme }) => get(theme, 'anchorButton.borderRadius')};
  color: ${({ theme }) => get(theme, 'anchorButton.color')};
  cursor: pointer;
  display: block;
  margin: ${({ theme }) => get(theme, 'anchorButton.margin')};
  padding: ${({ theme }) => get(theme, 'anchorButton.padding')};
  text-align: center;
  text-decoration: none;
  transition: all 300ms ease;

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      get(theme, 'anchorButton.backgroundColorHover')};
  }
`;

AnchorButton.defaultProps = {
  theme: styles.defaultTheme,
};

export default AnchorButton;
