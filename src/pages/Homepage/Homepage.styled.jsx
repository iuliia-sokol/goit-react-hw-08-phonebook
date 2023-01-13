import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 16px;
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
  font-size: 18px;
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

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;
  transition: color 250ms linear;
  :hover,
  :focus {
    color: rgb(209, 72, 17);
  }
`;

export const HomeWrap = styled.p`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 150px;
  }
`;
