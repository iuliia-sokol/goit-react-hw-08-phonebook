import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 24px;
    margin-top: -5%;
    padding: 0 62px;
  }
`;

export const ImgWrapper = styled.div`
  z-index: -100;
  transform: translateY(-20%);

  @media screen and (min-width: 1280px) {
    transform: translateY(-10%);
  }
`;

export const HomeMain = styled.main`
  text-align: center;
`;

export const HomeTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: black;

  span {
    color: rgba(48, 205, 137, 0.787);
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: -5%;
  }
`;
