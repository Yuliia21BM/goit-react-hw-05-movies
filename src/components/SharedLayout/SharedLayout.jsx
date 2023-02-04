// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
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
          <HeaderLink href="#home">Home</HeaderLink>
          <HeaderLink href="#movies">Movies</HeaderLink>
        </HeaderNav>
      </Container>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>*/}
    </StyledHeader>
  );
};
