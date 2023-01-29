import styled from 'styled-components';
import movieHeader from 'images/movie-header.jpg';

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
