import styled from 'styled-components';
import movieHeader from 'images/movie-header.jpg';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: black;
  background-image: url(${movieHeader});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    height: 150px;
  }
  @media screen and (min-width: 1280px) {
    height: 200px;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  outline: red 1px solid;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    justify-content: start;
    padding-left: 40px;
  }
`;

export const HeaderLink = styled(NavLink)`
  font-size: 28px;
  color: #fff;
  text-decoration: none;
  text-shadow: 2px 0 0px #800040, 3px 2px 0px rgba(77, 0, 38, 0.5),
    3px 0 3px #ff002b, 5px 0 3px #800015, 6px 2px 3px rgba(77, 0, 13, 0.5),
    6px 0 9px #ff5500, 8px 0 9px #802a00, 9px 2px 9px rgba(77, 25, 0, 0.5);
  padding: 20px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 40px 20px;
  }
  &:hover {
    text-shadow: 2px 0 0px #800040, 3px 2px 0px rgba(77, 0, 38, 0.5),
      3px 0 3px #ff002b, 5px 0 3px #800015, 6px 2px 3px rgba(77, 0, 13, 0.5),
      6px 0 9px #ff5500, 8px 0 9px #802a00, 9px 2px 9px rgba(77, 25, 0, 0.5),
      9px 0 18px #ffd500, 11px 0 18px #806a00,
      12px 2px 18px rgba(77, 66, 0, 0.5), 12px 0 30px #d4ff00,
      14px 0 30px #6a8000, 15px 2px 30px rgba(64, 77, 0, 0.5),
      15px 0 45px #80ff00, 17px 0 45px #408000,
      17px 2px 45px rgba(38, 77, 0, 0.5);
  }
`;
