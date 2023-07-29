import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
`;

export const FooterText = styled.p`
  font-weight: bold;

  &:last-of-type {
    font-size: 14px;
    font-weight: normal;
  }
`;
