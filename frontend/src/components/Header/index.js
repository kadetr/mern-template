import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
   MobileIcon,
   Nav,
   NavbarContainer,
   NavItem,
   NavLinks,
   NavMenu,
} from "./HeaderElements";

const Header = () => {
   return (
      <Nav>
         <NavbarContainer>
            <MobileIcon>
               <FaBars />
            </MobileIcon>

            <NavMenu>
               <NavItem>
                  <NavLinks to="/about">About</NavLinks>
               </NavItem>
               <NavItem>
                  <NavLinks to="/login">Login</NavLinks>
               </NavItem>
            </NavMenu>
         </NavbarContainer>
      </Nav>
   );
};

export default Header;
