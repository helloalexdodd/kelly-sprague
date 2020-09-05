import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, InnerContainer, NavLink } from './Nav.style';

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Nav = ({ open }) => {
  const [height, setHeight] = useState('200px');

  useEffect(() => {
    const element = document.querySelector('#innerContainer');
    setHeight(element.clientWidth);
    const debouncedHandleResize = debounce(function handleResize() {
      setHeight(element.clientWidth);
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [open]);

  useEffect(() => {}, []);

  return (
    <>
      <Container open={open}>
        <InnerContainer id="innerContainer" height={`${height}px`}>
          <Link href="/services">
            <NavLink>Services</NavLink>
          </Link>
          <Link href="/about">
            <NavLink>About</NavLink>
          </Link>
          <Link href="/contact">
            <NavLink>Contact</NavLink>
          </Link>
          <Link href="/products">
            <NavLink>Products</NavLink>
          </Link>
          <Link href="/wholesale">
            <NavLink>Wholesale</NavLink>
          </Link>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Nav;
