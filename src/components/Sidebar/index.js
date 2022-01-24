import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SideBtnWrap 
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarMenu>
            <SidebarLink to='/cars'>Cars</SidebarLink>
            <SidebarLink to='/trucks'>Trucks</SidebarLink>
            <SidebarLink to='/suvs'>SUVs</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/'>Reserve Now</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
    
  )
};

export default Sidebar;
