import styled from 'styled-components';
import * as styles from '../styles';

export const FeedItemImageContainer = styled.div`
  height: 0;
  overflow: hidden;

  img {
    display: block;
    opacity: 0;
    width: 100%;
  }
`;

FeedItemImageContainer.defaultProps = {
  theme: styles.defaultTheme,
};
export default FeedItemImageContainer;
