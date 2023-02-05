import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BtnGoBack.styled';

export const BtnGoBack = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
