import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
`;

export const WelcomeText = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  & > p {
    font-size: 24px;
  }
`;
