import React from 'react';
import styled from 'styled-components';


const StyledSearch=styled.div`
max-width:400px!important;
margin-top:30px;
margin-left:90px; 
max-width:100%;
@media(max-width:767px){
      
    }
`
const StyledButton=styled.button`

width: 55px;
height: 21px;
font-size: 12px;
border: solid 1px #000;
padding-right: 10px;
padding-left: 10px;
margin-left: 3px;
display: inline-flex;
margin-bottom: 10px;
max-width:100%;
  
&.clear{
  background-color: white;
  color: black;

}
&.apply{
    background-color: black;
    color:white;
}

`

const StyledSearchInput=styled.input`
  width: 100%;
  height:27px;
  padding-left:5px;
  border: 1px solid black;
  margin-top: 20px;
  align-items: center;
`


const Search = props => {

return(

    <StyledSearch>
    <StyledButton className='clear'> Clear </StyledButton>
    <StyledButton className='apply'> Apply </StyledButton>
    <StyledSearchInput className='search' placeholder='Search' ></StyledSearchInput>
    </StyledSearch>

)
}

export default Search;