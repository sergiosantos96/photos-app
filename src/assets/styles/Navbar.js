import styled from "styled-components";
import { FcRotateCamera } from "react-icons/fc";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background-color: black;
  color: white;
  font-family: "Roboto", sans-serif;
  padding: 1em 0;
`;

export const CameraIcon = styled(FcRotateCamera)`
  font-size: 2.3rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .4em;
  cursor: pointer;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  gap: 1.8em;
  cursor: pointer;
`;

export const NavListItem = styled.li`
  padding: 0.5em;
  border-radius: 5px;

  &:hover {
    background-color: var(--primary-color);
  }
`;
