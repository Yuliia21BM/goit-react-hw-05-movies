import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLi = styled.li`
  position: relative;
  width: 100%;
  cursor: pointer;

  padding-bottom: 5px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 90px) / 4);
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    transform: scale(1.025);
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  text-decoration: none;
`;

export const MovieCardDescription = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardTitle = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  /* padding: 8px; */
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  padding-left: 0px;
  display: block;

  @media screen and (min-width: 768px) {
    padding-left: 0;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 500;

    font-size: 18px;
    /* line-height: 20px; */
  }
`;

export const MovieDate = styled.span`
  position: absolute;
  left: 5px;
  top: 5px;
  width: 45px;
  max-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #ff2d08;
  border-radius: 5px;
  margin-left: 8px;
  padding: 1px 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    width: 40px;
    font-size: 14px;
  }
`;
