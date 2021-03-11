import React from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import {
   MobileIcon,
   Nav,
   NavbarContainer,
   NavItem,
   NavLinks,
   NavMenu,
} from "./HeaderElements";

const Header = () => {
   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const logoutHandler = () => {
      dispatch(logout());
   };

   return (
      <Nav>
         <NavbarContainer>
            <MobileIcon>
               <FaBars />
            </MobileIcon>

            <NavMenu>
               {!userInfo ? (
                  <>
                     <NavItem>
                        <NavLinks to="/register">Register</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to="/login">Login</NavLinks>
                     </NavItem>
                  </>
               ) : (
                  <NavItem>
                     <NavLinks to="/profile">Profile</NavLinks>
                  </NavItem>
               )}
            </NavMenu>
         </NavbarContainer>
      </Nav>
   );
};

export default Header;
