import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  /* justify-content: stretch; */
  align-items: center;
  font-size: 16px;
  color: rgb(1, 1, 1);
  padding: 24px 16px;
  border-radius: 12px;
  background-color: hsla(215, 98%, 79%, 0.2);
  border: 2px solid blanchedalmond;
  box-shadow: 10px 12px 12px 0px #cab1b14d;

  & > label {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
    max-width: 30vw;
    margin-bottom: 0;
    padding: 32px;
    font-size: 24px;
    width: 45vw;
    min-width: 40vw;
  }
  @media screen and (min-width: 1280px) {
    & > label {
      flex-direction: row;
      gap: 0;
      justify-content: stretch;
    }
  }
`;
