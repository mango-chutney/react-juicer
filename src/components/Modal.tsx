import ReactModal from 'react-modal';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

const StyledReactModal = styled(ReactModal).attrs({
  style: () => ({
    overlay: {
      background: `#00000040`,
      alignItems: 'safe center',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'safe center',
      overflow: 'auto',
      zIndex: '9999',
      padding: '1rem',
    },
    content: {
      color: `inherit`,
      background: `white`,
      border: 0,
      borderRadius: `${rem(4)}`,
    },
  }),
})`
  box-sizing: border-box;
  margin: auto;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: auto;

  * {
    box-sizing: border-box;
    font-family: inherit;
  }

  &:focus {
    outline: 0;
  }
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-flow: row;
  max-width: 100%;
  width: ${rem(1200)};

  ${({ theme: { media } }) =>
    media &&
    css`
      ${media.lessThan('medium')`
        flex-flow: column;
      `}
    `};

  ${({ theme: { media } }) =>
    media &&
    css`
      ${media.lessThan('large')`
        width: ${rem(800)};
      `}
    `};
`;

export const ModalContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  padding: 1rem 0;
`;

export const ModalNext = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer
  display: flex;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  opacity: 0;
  outline: 0;
  padding: 0.5rem;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 350ms ease;
  width: 50%;
`;

export const ModalPrevious = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer
  display: flex;
  height: 100%;
  justify-content: flex-start;
  left: 0;
  margin: 0;
  opacity: 0;
  outline: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  transition: all 350ms ease;
  width: 50%;
`;

export const ModalImageContainer = styled.div`
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #000000;
  flex: 0 0 auto;
  height: ${rem(600)};
  max-width: 100%;
  position: relative;
  width: 60%;

  &:hover,
  &:active {
    ${ModalNext},
    ${ModalPrevious} {
      opacity: 0.75;
    }
  }

  ${({ theme: { media } }) =>
    media &&
    css`
      ${media.lessThan('medium')`
        height: ${rem(400)};
        width: 100%;
      `}
    `};
`;

export const ModalAvatarContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row;
  padding: 0 1rem;
`;

export const ModalAvatar = styled.div`
  background-color: #eff3f6;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  height: ${rem(50)};
  margin-right: 1rem;
  width: ${rem(50)};
`;

export const ModalButtonContainer = styled.div`
  margin-top: auto;
  max-width: 100%;
  padding: 1rem;
`;

export const ModalMessage = styled.div`
  max-height: ${rem(425)};
  overflow: auto;
  padding: 0 1rem;
`;

export const ModalClose = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  font-size: ${rem(12)};
  outline: 0;
  padding: 0;
  position: absolute;
  right: 0.5rem;
  text-align: center;
  top: 0.75rem;
  z-index: 9999;

  i {
    display: block;
  }
`;

export default StyledReactModal;
