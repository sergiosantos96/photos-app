import React from "react";
import {
  Navbar,
  NavList,
  NavListItem,
  TitleWrapper,
  CameraIcon,
} from "../assets/styles/Navbar";

function NavBar() {
  return (
    <Navbar>
      <TitleWrapper>
        <h2>PhotosApp</h2>
        <CameraIcon />
      </TitleWrapper>
      <NavList>
        <NavListItem>About</NavListItem>
        <NavListItem>Services</NavListItem>
        <NavListItem>Contact</NavListItem>
      </NavList>
    </Navbar>
  );
}

export default NavBar;
