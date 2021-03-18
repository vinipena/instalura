import styled from 'styled-components';

export const ToggleWrapper = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 3rem;
  outline: none;
  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-5px)' : 'translateY(60px)')};
    }
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(60px)' : 'translateY(-5px)')};
    }
  }
`;
