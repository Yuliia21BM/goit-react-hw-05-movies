import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 40px) / 2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 60px) / 3);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 120px) / 5);
  }
`;

export const CastName = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const CastDefaultText = styled.p`
  text-align: center;
  padding: 20px;
`;
