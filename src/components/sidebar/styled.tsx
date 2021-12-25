import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

interface SidebarContainerProps {
  isOpen: Boolean;
}

export const Container = styled.div<SidebarContainerProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  min-height: 50%;
  background-color: ${(props) => props.theme.colors.containerBackground};
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${({theme})=>theme.colors.titleColor};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${({theme})=>theme.colors.titleColor};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  grid-row-gap: 2rem;

  @media screen and (max-width: 480px) {
    grid-row-gap: 1rem;
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${({theme})=>theme.colors.titleColor};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.redAlt};
  }
`;
