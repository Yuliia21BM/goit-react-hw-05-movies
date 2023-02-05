import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    transform: translateY(-80px);
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    transform: translateY(-90px);
  }
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 10px 5px;
  border: 2px solid #fff;
  border-radius: 2px;
  background-color: #000;
  color: #fff;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 10px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 2px;

  &:hover,
  &:focus {
    background-color: #000;
    text-shadow: 3px 2px 2px #f01e0f;
    color: #fff;
    border-color: #fff;
  }
`;
