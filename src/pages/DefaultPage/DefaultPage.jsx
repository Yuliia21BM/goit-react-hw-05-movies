import { Container, DefaultTitle, DefaultImg } from './DefaultPage.styled';
import sadSmile from '../../images/sad-smile-default.png';
const DefaultPage = () => {
  return (
    <Container>
      <DefaultImg src={sadSmile} alt="sad smile" />
      <DefaultTitle>
        Something went wrong! Please, reload the page!
      </DefaultTitle>
    </Container>
  );
};

export default DefaultPage;
