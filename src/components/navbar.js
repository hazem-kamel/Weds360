import React from "react";
import styled from "styled-components";

const DesktopNavBar = styled.div`
  padding-top: 30px;
  display: flex;
  margin: 0 120px;
  position: relative;

  @media (max-width: 767px) {
    display: none;
  }

  img {
    width: 100px;
    height: 100%;
    margin: 0 20px;
  }
`;

const StyledNav = styled.div`
  float: left;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  display: flex;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
  padding: 0 15px;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
  li {
    text-align: center;
    margin: 0 15px;
    white-space: nowrap;
    display: list-item;
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
  text-align: left;
  padding: 10px;
  margin: 10px;
  font-size: 12px;
  font-weight: bold;
  color: Black;
`;

const HiddenMenu = styled.div`
  &.HiddenMenu {
    display: none;
  }
  @media (max-width: 767px) {
    &.HiddenMenu {
      display: flex;
      i {
        width: 30px;
      }
    }
  }
`;
const NavBar = props => {
  return (
    <>
      <HiddenMenu className="HiddenMenu">
        <i className="fas fa-bars"></i>
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
