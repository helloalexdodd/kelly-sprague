import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

const sharedContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.nav`
  ${sharedContainerStyles}
  position: fixed;
  right: 0;
  background: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  width: 28%;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${theme.breakpoints[0]}) {
    width: 35%;
  }

  @media (max-width: ${theme.breakpoints[1]}) {
    width: 300px;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  }
`;

export const InnerContainer = styled.div`
  ${sharedContainerStyles}
  justify-content: center;
  margin-top: calc(50vh - (400px / 2));
  width: 85%;
  height: ${({ height }) => height};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  @media (max-width: ${theme.breakpoints[0]}) {
  }
`;

export const NavLink = styled.a`
  margin: 6px 0;
  padding: 4px;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-decoration: none;
`;
