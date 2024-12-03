import React, { useState, useEffect }  from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";


const Appcontent = styled.div`
  height: 100vh;
  overflow: hidden;
  `;



  const RootLayoutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.isOpen ? "250px" : "0px")};
  background-color: #2c3e50;
  color: white;
  transition: width 0.3s ease-in-out;
`;

const ContentArea = styled.div`

  margin-left: ${(props) => (props.isOpen ? "250px" : "0px")};
  width: ${(props) => (props.isOpen ? "calc(100% - 250px)" : "100%")};
  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
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
  left: ${(props) => (props.isOpen ? "200px" : "40px")};
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: left 0.3s ease-in-out;

  &:hover {
    background-color: #2980b9;
  }
    @media (max-width: 768px) {
    right: 20px;
    left: auto; 
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

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Adjust RootLayout default state based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false); // Set RootLayout closed by default on small screens
      } else {
        setIsOpen(true); // Set RootLayout open by default on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleRootLayout = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Appcontent className="auth-layout">
      <div>
      <RootLayoutWrapper isOpen={isOpen}>
        
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
      </RootLayoutWrapper>
      <MenuBar>
          <Button onClick={toggleRootLayout}>{isOpen ? "❌" : "☰"}</Button>
        </MenuBar>
      <AddButton isOpen={isOpen}>➕</AddButton>
    </div>
      <ContentArea className='content' isOpen={isOpen}>     
        <Outlet /> {/* Render nested routes here */}
      </ContentArea>
    </Appcontent>
  );
};

export default RootLayout;


