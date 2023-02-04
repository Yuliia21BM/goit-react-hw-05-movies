import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    transform: translateY(-60px);
  }
  @media screen and (min-width: 1280px) {
    transform: translateY(-70px);
  }
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 10px 5px;
  border: 2px solid #fff;
  background-color: #000;
  color: #fff;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
