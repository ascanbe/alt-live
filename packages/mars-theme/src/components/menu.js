import React from "react";
import { styled, connect } from "frontity";
import HamburgerIcon from "./menu-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ actions }) {
  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
          <HamburgerIcon />
      </MenuToggle>
      <MenuModal />
    </>
  );
}

const MenuToggle = styled.button`
  // position: absolute;
  right: 24px;
  // top: 24px;
  background: transparent;
  border: 0;
  color: white;
  height: 40px;
  width: 40px;
  display: none;

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default connect(MobileMenu);
