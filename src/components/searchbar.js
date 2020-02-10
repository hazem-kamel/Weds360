import React from 'react';
import styled from 'styled-components';


const StyledSearch=styled.div`
max-width:400px!important;
`
const StyledButton=styled.button`

margin-bottom: 10px;
width: 55px;
height: 21px;
font-size: 12px;
border: solid 1px #000;
padding-right: 10px;
padding-left: 10px;
margin-left: 3px;


&.clear{
    background-color: white;
  color: black;
  margin-left:60px;

}
&.apply{
    background-color: black;
  color:white;

}

`

const StyledSearchInput=styled.input`
  width: 100%;
  width:260px;
  height:27px;
  padding-left:5px;
  border: 1px solid black;
  margin: 20px;
  display: flex;
align-items: center;
flex-wrap: wrap;
margin-left:60px;

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