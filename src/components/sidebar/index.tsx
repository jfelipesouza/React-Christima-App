import React, { useContext } from "react";
import { Context } from "../../services/context";
import {
  Container as SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  
} from "./styled";

const Sidebar: React.FC = () => {
  const { open, setOpen } = useContext(Context);

  return (
    <SidebarContainer isOpen={open} onClick={() => setOpen(!open)}>
      <Icon>
        <CloseIcon onClick={() => setOpen(!open)} />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="#home" onClick={() => setOpen(!open)}>
            Home
          </SidebarLink>
          <SidebarLink href="#celebrate" onClick={() => setOpen(!open)} >
            Comemore
          </SidebarLink>
          <SidebarLink href="#gifts" onClick={() => setOpen(!open)} >
            Presentes
          </SidebarLink>
          <SidebarLink href="#new" onClick={() => setOpen(!open)} >
            Novo
          </SidebarLink>
          <SidebarLink href="#contact" onClick={() => setOpen(!open)} >
            Mande Mensagens
          </SidebarLink>
        </SidebarMenu>

        
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
