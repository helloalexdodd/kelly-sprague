import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container, InnerContainer, NavLink } from './Nav.style';

const Nav = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <Link href="/services">
            <NavLink>Services</NavLink>
          </Link>
          <Link href="/about">
            <NavLink>About</NavLink>
          </Link>
          <Link href="/contact">
            <NavLink>Contact</NavLink>
          </Link>
          {/* <Link href="/products">
            <NavLink>Products</NavLink>
          </Link> */}
          <Link href="/wholesale">
            <NavLink>Wholesale</NavLink>
          </Link>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Nav;
