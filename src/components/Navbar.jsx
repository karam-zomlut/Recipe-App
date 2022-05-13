import styled from 'styled-components';
import React from 'react'
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi'

const Navbar = () => {
  return (
    <Nav>
      <GiKnifeFork />
      <Logo to={'/ '}>delicious</Logo>
    </Nav>
  )
}

const Nav = styled.nav`
  padding: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 1.5rem;
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 400;
  font-style: italic;
  font-family: 'Lobster Two', cursive;
`;

export default Navbar