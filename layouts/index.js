import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container, InnerContainer, Main, I } from './Layout.style';
import backgroundImage from '~/public/static/images/nathan-dumlao.jpg';

const Nav = dynamic(() => import('../components/Nav'));

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
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
      <I className="fas fa-bars" onClick={handleOpen}></I>
      <Main backgroundImage={backgroundImage} onClick={handleClose}>
        <InnerContainer>{children}</InnerContainer>
      </Main>
      <Nav open={open} onClick={handleClose} />
    </Container>
  );
};

Layout.defaultProps = {};

Layout.propTypes = {};

export default Layout;
