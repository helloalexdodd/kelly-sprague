import styled from 'styled-components';
import theme from '../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  display: flex;
`;

export const InnerContainer = styled.section`
  background: ${({ theme }) => theme.colors.whiteTransparent};
  background-attachment: fixed;
  padding: 50px;

  @media (max-width: ${theme.breakpoints[1]}) {
    margin-top: 70px;
  }

  @media (max-width: ${theme.breakpoints[2]}) {
    padding: 30px;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 30%;
  background-size: calc(72%);
  background-attachment: fixed;
  min-height: 100vh;
  width: 72%;
  padding: 5%;

  @media (max-width: ${theme.breakpoints[0]}) {
    background-size: cover;
    width: 65%;
  }
  @media (max-width: ${theme.breakpoints[1]}) {
    align-items: flex-start;
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints[2]}) {
    padding: 0;
  }
`;

export const I = styled(FontAwesomeIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: ${theme.fontSizes[6]};
  color: ${theme.colors.white};
  cursor: pointer;
`;
