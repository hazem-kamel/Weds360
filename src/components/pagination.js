import React from 'react'
import styled from 'styled-components'


const StyledPagination = styled.nav`
  display: block;
  text-align: center;

  @media(max-width:767px){
      
  }
`
const StyledPaginationUL=styled.ul`
 padding-bottom: 40px;
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
`
const StyledPaginationIL=styled.li`
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
const Pagination = (props) => {

    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(props.totalPosts/props.postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(

        <StyledPagination>
        <StyledPaginationUL>
        <StyledPaginationPrevious>
        <a href='/'>Previous</a>
        </StyledPaginationPrevious>
        <StyledPaginationIL>
        {pageNumbers.map(number=><StyledPaginationButton onClick={()=> props.paginate(number)}>{number}</StyledPaginationButton>)}
        </StyledPaginationIL>
        <StyledPaginationNext>
         Next
        </StyledPaginationNext>
        </StyledPaginationUL>
        </StyledPagination>
    )
}
export default Pagination;

