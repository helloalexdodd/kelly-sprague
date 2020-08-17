import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[6]};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[5]};
  margin-top: 25px;
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[4]};
`;

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;
