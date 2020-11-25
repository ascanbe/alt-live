import React from "react";
import { styled, connect } from 'frontity';
import cn from 'classnames';

const HamburgerIcon = ({ state }) => {
  const { isMobileMenuOpen } = state.theme;

  return (
    <Hamburger className={cn({
      'open': isMobileMenuOpen,
    })}>
      <div />
      <div />
      <div />
    </Hamburger>
  );
};

const Hamburger = styled.div`
  width: 30px;
  height: 23px;
  position: relative;

  > div {
    height: 3px;
    width: 100%;
    background-color: #fff;
    position: absolute;
    transition: .6s ease;
    z-index: 30;

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 10px;
    }
    &:nth-child(3) {
      bottom: 0;
    }
  }

  &.open {
    > div {
      &:nth-child(1) {
        transform: rotate(45deg);
        top: 10px;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
        bottom: 10px;
      }
    }
  }
`;

export default connect(HamburgerIcon);
