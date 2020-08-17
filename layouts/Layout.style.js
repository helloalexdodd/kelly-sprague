import styled from 'styled-components';
import theme from '../styles/theme';

export const Container = styled.div`
  display: flex;
`;

export const InnerContainer = styled.section`
  background: ${({ theme }) => theme.colors.whiteTransparent};
  background-attachment: fixed;
  padding: 50px;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 30%;
  background-size: calc(100% - 450px);
  background-attachment: fixed;
  min-height: 100vh;
  width: calc(100% - 475px);
  padding: 5%;

  @media (max-width: ${theme.breakpoints[0]}) {
    background-size: cover;
  }
`;
