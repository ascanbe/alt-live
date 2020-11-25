import React from 'react';
import { styled, connect } from 'frontity';
import Link from "./link";

const Footer = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <StyledFooter>
      <Flexbox>
        <Nav>
          <h3>Pages</h3>
          <Links>
            {isThereLinks &&
              menu.map(([name, link]) => (
                <MenuLink
                  key={name}
                  link={link}
                  aria-current={state.router.link === link ? "page" : undefined}
                >
                  {name}
                </MenuLink>
              ))}
          </Links>
        </Nav>
      </Flexbox>
      <Divider size="1" />
      <Copyright className="centred"><p>© 2020 Copyright: altlive</p></Copyright>
    </StyledFooter>
  );
}

const Links = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledFooter = styled.footer`
  background-color: #3e3e3e;
  color: #fff;
  padding: 0 24px;
`;

const Nav = styled.nav`
  text-align: center;
`;

const Flexbox = styled.div`
  padding: 24px;
`;

const MenuLink = styled(Link)`
  width: 100%;
  outline: 0;
  font-size: 1rem;
  padding: 1rem 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

const Copyright = styled.div`
  padding: 24px;

  > p {
    margin-top: 0;
  }
`;

const Divider = styled.hr`
  // width: 300px;
  background-color: #fff;
`;

export default connect(Footer);
