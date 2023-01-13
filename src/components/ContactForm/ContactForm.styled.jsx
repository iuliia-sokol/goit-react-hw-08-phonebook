import styled from 'styled-components';

export const Form = styled.form`
  height: fit-content;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px 16px;
  border-radius: 12px;
  background-color: hsla(215, 98%, 79%, 0.2);
  border: 2px solid blanchedalmond;
  box-shadow: 10px 12px 12px 0px #cab1b14d;
  color: #010101;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 30vw;
    margin-bottom: 0;
    padding: 32px;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  font-weight: bold;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
