import React from 'react'
import styled from 'styled-components'


const StyledPagination = styled.nav`
  display: block;
  text-align: center;
`

const StyledPaginationUL=styled.ul`

 padding-bottom: 40px;
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;

`
const StyledPaginationIL=styled.li`
height:36px;
display: inline;



`
const StyledPaginationButton = styled.button`
position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.428571429;
    text-decoration: none;
    color: #337ab7;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-left: -1px;

`
const StyledPaginationPrevious = styled.button`
width:98px;
position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.428571429;
    text-decoration: none;
    color: #337ab7;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-left: -1px;
`
const StyledPaginationNext = styled.button`
width:73px;

position: relative;
    float: left;
    padding: 6px 12px;
    line-height: 1.428571429;
    text-decoration: none;
    color: #337ab7;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-left: -1px;

    
`


const Pagination = props => {
    return(
        <StyledPagination>

        <StyledPaginationUL>

        <StyledPaginationPrevious>

        Previous
        </StyledPaginationPrevious>

        <StyledPaginationIL>
        <StyledPaginationButton>1</StyledPaginationButton>
        <StyledPaginationButton>1</StyledPaginationButton>
        <StyledPaginationButton>1</StyledPaginationButton>
        <StyledPaginationButton>1</StyledPaginationButton>
        <StyledPaginationButton>1</StyledPaginationButton>


        </StyledPaginationIL>

        <StyledPaginationNext>
         Next
        </StyledPaginationNext>

        </StyledPaginationUL>
       

        </StyledPagination>
    )
}

export default Pagination;

