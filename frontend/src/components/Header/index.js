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
   Icon,
   NavDropdownItem,
   NavDropdownBtn,
   NavDropdownContent,
   NavDropdownContentLink,
} from "./headerElements";

const Header = ({ toggle }) => {
   const dispatch = useDispatch();

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const logoutHandler = () => {
      dispatch(logout());
   };

   return (
      <Nav>
         <NavbarContainer>
            <MobileIcon onClick={toggle}>
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
                  <>
                     <NavItem>
                        <NavLinks to="/profile">Profile</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks onClick={logoutHandler}>Logout</NavLinks>
                     </NavItem>
                  </>
               )}
               {userInfo && userInfo.isAdmin && (
                  <NavDropdownItem>
                     <NavDropdownBtn>Admin</NavDropdownBtn>
                     <NavDropdownContent>
                        <NavDropdownContentLink to="/admin/userlist">
                           Users
                        </NavDropdownContentLink>
                        <NavDropdownContentLink to="/admin/productlist">
                           Products
                        </NavDropdownContentLink>
                     </NavDropdownContent>
                  </NavDropdownItem>
               )}
            </NavMenu>
         </NavbarContainer>
      </Nav>
   );
};

export default Header;
