import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  padding: 30px;
  justify-content: center;
  align-items: center;
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

export const DefaultTitle = styled.h1`
  text-align: center;
  text-shadow: 2px 0 0px #4b0080, 3px 2px 0px rgba(0, 10, 77, 0.5),
    3px 0 3px #00b7ff, 5px 0 3px #290080;
`;
export const DefaultImg = styled.img`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;
