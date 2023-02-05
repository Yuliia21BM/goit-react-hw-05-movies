import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  /* outline: red 1px solid; */
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

export const HomeTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
  /* text-shadow: 2px 0 0px #800040, 3px 2px 0px rgba(77, 0, 38, 0.5),
    3px 0 3px #ff002b, 5px 0 3px #800015, 6px 2px 3px rgba(77, 0, 13, 0.5),
    6px 0 9px #ff5500, 8px 0 9px #802a00, 9px 2px 9px rgba(77, 25, 0, 0.5); */
`;
