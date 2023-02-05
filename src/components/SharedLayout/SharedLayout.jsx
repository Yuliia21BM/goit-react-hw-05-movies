import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../ButtonScpollToTop/BtnScrollToTop';
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
      <ScrollToTop />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </StyledHeader>
  );
};
