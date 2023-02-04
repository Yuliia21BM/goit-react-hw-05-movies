import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledHeader,
  Container,
  HeaderNav,
  HeaderLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderNav>
          <HeaderLink to="/" end>
            Home
          </HeaderLink>
          <HeaderLink to="/movieWrap">Movies</HeaderLink>
        </HeaderNav>
      </Container>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </StyledHeader>
  );
};
