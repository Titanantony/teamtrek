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
  background-color: #F5F5F5;
  color: black;
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
    color: #5771ff;
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
    background-color: #5771ff;
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
  color: black;
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
const CTA = styled.nav`
/* Basic styling for the navbar */
.cta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  font-family: Arial, sans-serif;
}

/* CTA buttons container */
.cta-buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;

  gap: 10px;
}

/* Login button styling */
.login-btn,
.signup-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

/* Login button specific styles */
.login-btn {
  background-color: #555;
  color: white;
}

.login-btn:hover {
  background-color: #777;
}

/* Signup button specific styles */
.signup-btn {
  background-color: #007bff;
  color: white;
  margin-right: 1rem;
}

.signup-btn:hover {
  background-color: #0056b3;
}


`

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Adjust RootLayout default state based on screen width
  useEffect(() => {
  const handleResize = () => {
    setIsOpen(false); // Always closed regardless of screen size
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
          <Button onClick={toggleRootLayout}>{isOpen ? "✖️" : "☰"}</Button>
        </MenuBar>
      <AddButton isOpen={isOpen}>➕</AddButton>
      <CTA className="cta">
        <div className="cta-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Signup</button>
      </div>
      </CTA>
    </div>
      <ContentArea className='content' isOpen={isOpen}>     
        <Outlet /> {/* Render nested routes here */}
      </ContentArea>
    </Appcontent>
  );
};

export default RootLayout;


