import React, { useState } from "react";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.isOpen ? "250px" : "0px")};
  background-color: #2c3e50;
  color: white;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isOpen ? "flex-start" : "center")};
  
  overflow: hidden;
`;

const MenuBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
position: absolute;
  top: 10px;
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const AddButton = styled.button`
  position: absolute;
  top: 15px;
  left: ${(props) => (props.isOpen ? "200px" : "70px")};
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: left 0.3s ease-in-out;

  &:hover {
    background-color: #2980b9;
  }
`;

const Nav = styled.nav`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: ${(props) => (props.isOpen ? "1rem" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  width: ${(props) => (props.isOpen ? "100%" : "0")};
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #3498db;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarWrapper isOpen={isOpen}>
        
        <Nav>
          <NavLink href="#" isOpen={isOpen}>
            Dashboard
          </NavLink>
          <NavLink href="#" isOpen={isOpen}>
            Settings
          </NavLink>
          <NavLink href="#" isOpen={isOpen}>
            Profile
          </NavLink>
          <NavLink href="#" isOpen={isOpen}>
            Logout
          </NavLink>
        </Nav>
      </SidebarWrapper>
      <MenuBar>
          <Button onClick={toggleSidebar}>{isOpen ? "❌" : "☰"}</Button>
        </MenuBar>
      <AddButton isOpen={isOpen}>➕</AddButton>
    </>
  );
};

export default Sidebar;
