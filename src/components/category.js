import React , {useState, useEffect} from 'react';
import styled from "styled-components";
import Search from '../components/searchbar'
import Pagination from '../components/pagination'

const StyledCategory=styled.div`

`


const StyledCategorySection=styled.div`

display:grid;
grid-template-columns:25% 75%;

`

const StyledGallery=styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
margin:0 auto;
margin-right:70px;
div{
    margin:5px;
}
img{
    width:260px;
    height:230px;
}
h3{
}


`
const Category = props => {
    console.log(props.match.params.id)
    return(
    <StyledCategory>

    <StyledCategorySection>
    <Search className='SearchSection'/>
            <StyledGallery>
            <div>
                <img src='https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/large-3bf72dfd0138f42994becb65f8d26811.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200207%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200207T191104Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=7adf373848b7f8968e6b26cbbd8fcb1b1b70ad64088c41ae15c79e83700a3d3e' alt='example'></img>
                <h3>Name </h3>
                </div>
                <div>
                <img src='https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/large-3bf72dfd0138f42994becb65f8d26811.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200207%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200207T191104Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=7adf373848b7f8968e6b26cbbd8fcb1b1b70ad64088c41ae15c79e83700a3d3e' alt='example'></img>
                <h3>Name </h3>
                </div>
                <div>
                <img src='https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/large-3bf72dfd0138f42994becb65f8d26811.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200207%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200207T191104Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=7adf373848b7f8968e6b26cbbd8fcb1b1b70ad64088c41ae15c79e83700a3d3e' alt='example'></img>
                <h3>Name </h3>
                </div>
                <div>
                <img src='https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/large-3bf72dfd0138f42994becb65f8d26811.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200207%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200207T191104Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=7adf373848b7f8968e6b26cbbd8fcb1b1b70ad64088c41ae15c79e83700a3d3e' alt='example'></img>
                <h3>Name </h3>
                </div>
                <div>
                <img src='https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/large-3bf72dfd0138f42994becb65f8d26811.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200207%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200207T191104Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=7adf373848b7f8968e6b26cbbd8fcb1b1b70ad64088c41ae15c79e83700a3d3e' alt='example'></img>
                <h3>Name </h3>
                </div>
                <div>
                <img src='https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/large-3bf72dfd0138f42994becb65f8d26811.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200207%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200207T191104Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=7adf373848b7f8968e6b26cbbd8fcb1b1b70ad64088c41ae15c79e83700a3d3e' alt='example'></img>
                <h3>Name </h3>
                </div>
                <div>
                <img src='https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/large-3bf72dfd0138f42994becb65f8d26811.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200207%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200207T191104Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=7adf373848b7f8968e6b26cbbd8fcb1b1b70ad64088c41ae15c79e83700a3d3e' alt='example'></img>
                <h3>Name </h3>
                </div>
                <div>
                <img src='https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/large-3bf72dfd0138f42994becb65f8d26811.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200207%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200207T191104Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=7adf373848b7f8968e6b26cbbd8fcb1b1b70ad64088c41ae15c79e83700a3d3e' alt='example'></img>
                <h3>Name </h3>
                </div>
                <div>
                <img src='https://weds360-production.s3.eu-west-1.amazonaws.com/store/photo/397/src/large-3bf72dfd0138f42994becb65f8d26811.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200207%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200207T191104Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=7adf373848b7f8968e6b26cbbd8fcb1b1b70ad64088c41ae15c79e83700a3d3e' alt='example'></img>
                <h3>Name </h3>
                </div>

            </StyledGallery>
    </StyledCategorySection>
    <Pagination/>

    </StyledCategory>

    )

}
export default Category;