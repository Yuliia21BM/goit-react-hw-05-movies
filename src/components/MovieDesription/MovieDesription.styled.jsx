import styled from 'styled-components';

export const DescriptionMovie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
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
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 30px;
  }
`;
