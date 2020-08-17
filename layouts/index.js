import Nav from '~/components/Nav';
import { Container, InnerContainer, Main } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <Container>
      <Main
        backgroundImage={require('~/public/static/images/nathan-dumlao.jpg')}
      >
        <InnerContainer>{children}</InnerContainer>
      </Main>
      <Nav />
    </Container>
  );
};

Layout.defaultProps = {};

Layout.propTypes = {};

export default Layout;
