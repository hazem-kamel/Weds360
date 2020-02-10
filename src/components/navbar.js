import React from 'react'
import styled from "styled-components";




const DesktopNavBar=styled.nav `
    width: 100%;
    margin-left: auto ;
    margin-right: auto ;

    .nav-links{
  list-style-type: none;
  margin: 60px;
  padding: 0;
  overflow: hidden;
    }

    .logo{
        width:90px;
        margin-left:30px;

        
    }

`

const Styledil=styled.li `
    float:left;
    margin:30px;

    &.planner-drop:hover .planners-drop{
        display:block
    }
    .planners-drop{
        display:none;
        background-color: white;
        max-width: 100px;
        position: relative;
        height:100%;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        
    }
    &:nth-child(5) , &:nth-child(6)  , &:nth-child(7){

        float:right;

    

    }
    &:nth-child(1) , &:nth-child(2)  , &:nth-child(3) , &:nth-child(4){

        float:left;
}

 
`

const StyledDropPlanner=styled.a`


text-align:left;
padding:10px;
margin:10px;
font-size:12px;

font-weight:bold;


display: inline-block;
color:Black;

`


 const NavBar = props => {
     return(
        <DesktopNavBar>

        <ul className='nav-links'>

        <Styledil  className='planner-drop'>360 PLANNER

        <div className='planners-drop'>
        <StyledDropPlanner href='' >CHECKLIST</StyledDropPlanner>
        <StyledDropPlanner href='' >BUDGETER</StyledDropPlanner>
        <StyledDropPlanner href='' >REGISTERY LIST</StyledDropPlanner>
        <StyledDropPlanner href='' >GUEST LIST</StyledDropPlanner>
        <StyledDropPlanner href='' >WEDDING WEBSITE</StyledDropPlanner>
        <StyledDropPlanner href='' >COUPLE WEBSITE</StyledDropPlanner>
        <StyledDropPlanner href='' >MORE</StyledDropPlanner>

        </div>
        </Styledil>

        <Styledil className=''>HER </Styledil>
        <Styledil className=''>HIM </Styledil>
        <Styledil className=''>THE WEDDING</Styledil>
        <Styledil className=''>VENDORS</Styledil>
        <Styledil className=''>GALLERY</Styledil>
        <Styledil className=''>IDEAS&MORE</Styledil>

        <img className='logo' src='https://weds360.com/assets/logo-a44ab28137d9c6c366386172e63d31ba35dfd616b594a0b39e1f5d45a3130973.png' alt='logo'></img>


        </ul>
         </DesktopNavBar>

     );

}

export default NavBar;