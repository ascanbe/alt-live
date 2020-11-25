import React from "react";
import { styled, connect } from "frontity";
import cn from 'classnames';
import Link from "./link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;
  const { isMobileMenuOpen } = state.theme;

  return (
    <>
      <MenuOverlay className={cn({
        'open': isMobileMenuOpen,
      })}>
        <MenuContent as="nav">
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
        </MenuContent>
      </MenuOverlay>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #57b257;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: .6s ease;

  &.open {
    left: 0;
  }
`;

const MenuContent = styled.div`
  z-index: 30;
  color: #fff;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;

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

export default connect(MenuModal);
