import styled, { css } from 'styled-components';

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
  width: 475px;
`;

export const InnerContainer = styled.div`
  ${sharedContainerStyles}
  justify-content: center;
  margin-top: calc(50vh - (400px / 2));
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
`;

export const NavLink = styled.a`
  margin: 6px 0;
  padding: 4px;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-decoration: none;
`;
