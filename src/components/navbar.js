import React, { useState } from "react";
import styled from "styled-components";
const DesktopNavBar = styled.div`
  padding-top: 30px;
  display: flex;
  margin: 0 120px;
  position: relative;
  @media (max-width: 1016px) {
    display: none;
  }
  img {
    width: 100px;
    height: 100%;
    margin: 0 20px;
    cursor: pointer;
  }
`;
const StyledNav = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  display: flex;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
  align-items: center;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
  li {
    text-align: center;
    margin: 0 15px;
    white-space: nowrap;
    display: list-item;
    cursor: pointer;
  }
  li:first-child:hover {
    .dropMenu {
      display: block;
    }
  }
  ul {
    list-style: none;
    display: inline-flex;
  }
`;
const StyledDropMenu = styled.div`
  display: none;
  background-color: white;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  top: 100%;
  left: 0;
`;
const StyledDropPlanner = styled.a`
  display: block;
  text-align: center;
  padding: 10px;
  margin: 10px;
  font-size: 12px;
  font-weight: bold;
  color: Black;
`;
const HiddenMenu = styled.button`
  &.HiddenMenu {
    display: none;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 1016px) {
    &.HiddenMenu {
      display: flex;
      position: relative;
      left: 20px;
      top: 20px;
      font-size: 30px;
      ul {
        list-style: none;
      }
      li {
        border-bottom: 1px solid black;
        cursor: pointer;
        text-align: center;
        font-size: 15px;
        margin: 20px;
        position: relative;
        top: 30px;
        right: 90px;
      }
    }
    ul {
      display: ${(props) => (props.clicked ? "block" : "none")};
    }
  }
`;
const NavBar = (props) => {
  const [clicked, setClick] = useState(false);
  console.log(clicked);
  return (
    <>
      <HiddenMenu
        clicked={clicked}
        onClick={(e) => setClick(!clicked)}
        className="HiddenMenu"
      >
        <i className="fas fa-bars"></i>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>HER</li>
          <li>HIM</li>
          <li>The Wedding</li>
          <li>VENDORS</li>
          <li>GALLERY</li>
          <li>IDEAS&MORE</li>
        </ul>
      </HiddenMenu>
      <DesktopNavBar>
        <StyledNav>
          <ul className="nav-links">
            <li className="planner-drop">
              360 PLANNER
              <StyledDropMenu className="dropMenu">
                <StyledDropPlanner href="">CHECKLIST</StyledDropPlanner>
                <StyledDropPlanner href="">BUDGETER</StyledDropPlanner>
                <StyledDropPlanner href="">REGISTERY LIST</StyledDropPlanner>
                <StyledDropPlanner href="">GUEST LIST</StyledDropPlanner>
                <StyledDropPlanner href="">WEDDING WEBSITE</StyledDropPlanner>
                <StyledDropPlanner href="">COUPLE WEBSITE</StyledDropPlanner>
                <StyledDropPlanner href="">MORE</StyledDropPlanner>
              </StyledDropMenu>
            </li>
            <li className="">HER </li>
            <li className="">HIM </li>
            <li className="">THE WEDDING</li>
          </ul>
        </StyledNav>
        <img
          href="/"
          className="logo"
          src="https://weds360.com/assets/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png"
          alt="imagee"
        ></img>
        <StyledNav>
          <ul>
            <li className="">VENDORS</li>
            <li className="">GALLERY</li>
            <li className="">IDEAS&MORE</li>
          </ul>
        </StyledNav>
      </DesktopNavBar>
    </>
  );
};
export default NavBar;
