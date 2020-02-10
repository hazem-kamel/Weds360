import React,{useState} from 'react';
import styled from 'styled-components';

const StyledPhoto=styled.div`
display: block;
width: 37%;
padding: 15px 20px;
display:grid;
grid-template-columns:55% 45%;
margin-left:60px;
`

const StyledDescription=styled.div`
margin-left:600px;
width:200px;

h2{
    margin: 0;
    margin-bottom: 35px;
    font-size: 35.1px;
    font-weight: bold;
    color: #000;
    line-height: 1.2;

}
a{
    color: #337ab7;
    text-decoration: none;
}

h5{
    display: block;
    margin: 0;
    margin-bottom: 20px;
    font-size: 23.6px;
    line-height: 1.42;
    color: #000;

}

i{
    color:white;
    margin:5px;
    background:black;
    size:100px;
    display:inline;

}





`
const StyledImage=styled.img`
width:600px;
height:600px;
`
const Photos = props => {

return(
    <StyledPhoto>



    <StyledImage src='https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/large-3bf72dfd0138f42994becb65f8d26811.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200208%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200208T093232Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=5d48d6667d718233071b5cbfb27c7250cfbfe09eabfd0f1270cd5934954f304c' alt='example'>
</StyledImage>

    <StyledDescription>
    <h2>Name</h2>

    <h5>maslan maslan yani</h5>
    <a>Photographer name</a>
    <br />
    <br />


    <i class="fab fa-facebook-f"></i>  
    <i class="fab fa-twitter"></i>    </StyledDescription>

    </StyledPhoto>
)
}

export default Photos;