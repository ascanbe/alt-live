import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logoLarge from '../img/alt-live-logo-large.png';

const Header = () => {
  return (
    <Container>
      <StyledLink link="/">
        <Logo src={logoLarge} />
      </StyledLink>
      <VertCentre>
        <MobileMenu />
        <Nav />
      </VertCentre>
    </Container>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  width: 54px;
`;

const VertCentre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
