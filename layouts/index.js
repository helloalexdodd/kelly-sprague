import { useEffect, useContext } from 'react';
import dynamic from 'next/dynamic';
import { Container, InnerContainer, Main, I } from './Layout.style';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '~/public/static/images/nathan-dumlao.jpg';
import Context from '~/context/context';

const Nav = dynamic(() => import('../components/Nav'));

const Layout = ({ children }) => {
  const { open, setOpen } = useContext(Context);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    function downHandler({ key }) {
      if (key === 'Escape') {
        setOpen(false);
      }
    }
    window.addEventListener('keydown', downHandler);
    return () => window.removeEventListener('keydown', downHandler);
  }, [open]);

  return (
    <Container>
      <I icon={faBars} onClick={handleOpen} />
      <Main backgroundImage={backgroundImage}>
        <InnerContainer>{children}</InnerContainer>
      </Main>
      <Nav open={open} handleClose={handleClose} />
    </Container>
  );
};

Layout.defaultProps = {};

Layout.propTypes = {};

export default Layout;
