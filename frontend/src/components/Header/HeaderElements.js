import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
   background: transparent;
   height: 80px;
   margin-top: 0px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;

   @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
   }
`;

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: center;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;
`;

export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      color: #926aa6;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
   }
`;

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: -22px;

   @media screen and (max-width: 760px) {
      display: none;
   }
`;

export const NavItem = styled.li`
   margin-top: 32px;
   height: 80px;
`;

export const NavLinks = styled(Link)`
   color: #926aa6;
   font-size: 1.2rem;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;

   &.active {
      border.bottom: 3 px solid #01bf71;
   }
`;
