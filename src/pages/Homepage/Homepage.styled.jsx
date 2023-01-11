import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 62px;
  display: flex;
  gap: 24px;

  justify-content: center;
  align-items: center;

  margin-top: -5%;
`;

export const ImgWrapper = styled.div`
  /* position: absolute; */
  transform: translateY(-10%);
  z-index: -1;
`;

export const HomeMain = styled.div`
  width: 100%;
  text-align: center;
`;

export const HomeTitle = styled.h1`
  margin-top: -5%;
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */
  color: black;
  span {
    color: rgba(48, 205, 137, 0.787);
    margin-left: 10px;
  }
`;

export const HomeText = styled.p`
  margin-top: 100px;
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 500;
  color: rgb(209, 72, 17);
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
