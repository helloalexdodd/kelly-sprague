import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme, type }) => (type ? theme.fontWeights[type] : null)};
  font-style: ${({ type }) => type || null};
  font-family: 'Palatino Linotype';
  line-height: 1.67;
  color: ${({ theme, error }) =>
    error ? theme.colors.secondaryDark : theme.colors.black};
`;
