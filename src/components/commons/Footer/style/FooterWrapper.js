/* eslint-disable linebreak-style */
import styled from 'styled-components';
import get from 'lodash/get';

// eslint-disable-next-line import/prefer-default-export
export const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;
