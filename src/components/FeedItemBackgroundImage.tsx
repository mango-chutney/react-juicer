import styled from 'styled-components';
import * as styles from '../styles';

const FeedItemBackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

FeedItemBackgroundImage.defaultProps = {
  theme: styles.defaultTheme,
};

export default FeedItemBackgroundImage;
