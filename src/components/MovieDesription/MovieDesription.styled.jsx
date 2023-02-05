import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DescriptionMovie = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 22;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    align-items: start;
    justify-content: start;
  }
`;
export const MovieImage = styled.img`
  width: 350px;
`;
export const InfoMovie = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 60%;
    align-items: start;
    text-align: start;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 30px;
  }
`;

export const MovieName = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

export const MovieAverage = styled.span`
  position: absolute;
  right: 10px;
  top: 15px;
  padding: 15px 10px;
  color: ${({ children }) => {
    const avarange = parseFloat(children);
    if (avarange <= 100 && avarange >= 75) {
      return '#fff';
    }
    if (avarange < 75 && avarange >= 45) {
      return '#000';
    } else {
      return '#fff';
    }
  }};
  font-weight: 600;
  font-size: 18;
  background-color: ${({ children }) => {
    const avarange = parseFloat(children);
    if (avarange <= 100 && avarange >= 75) {
      return 'green';
    }
    if (avarange < 75 && avarange >= 45) {
      return '#f5f526';
    } else {
      return 'red';
    }
  }};
  border-radius: 50%;

  @media screen and (min-width: 440px) {
    right: 70px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 15px;
    right: 50px;
    font-size: 28;
  }
  @media screen and (min-width: 1280px) {
    right: 100px;
  }
`;

export const MovieAddition = styled.h3`
  color: #ffffffae;
  margin-bottom: 15px;
`;

export const MovieAdditionalLict = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;

export const AdditionalItem = styled(NavLink)`
  color: #fff;
  transform: scale(1);
  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    text-decoration 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  &.active {
    text-decoration: underline 3px solid #fff;
  }
`;
