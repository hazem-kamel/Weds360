import React , {useState,useEffect} from 'react';
import styled from "styled-components";
import Search from '../components/searchbar';
import Pagination from '../components/pagination';
import {connect } from 'react-redux';
import {fetchImages} from '../redux/actions/Actions';
import { useHistory } from "react-router-dom";

const StyledCategory=styled.div`
  @media(max-width:767px){
      
    }

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
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(9);

    useEffect( () => {props.getCategoryElements()},[props.categoryElements.length])
    const history = useHistory();
    const navigate = imageId => {
    history.push("/photo/" + imageId);
      }
      const indexOfLast=currentPage * postsPerPage;
  
    return(
    <StyledCategory>
    <StyledCategorySection>
    <Search className='SearchSection'/>
            <StyledGallery >
            {props.categoryElements.filter(image => image.categoryId === parseInt(props.match.params.category_id)).map( (image ,i) =>(
                <div onClick={()=>{navigate(image.id)}}>
                <img src={process.env.PUBLIC_URL + String(image.img).slice(7) } alt={image.title}></img>
                <h3>{image.title}</h3>
                </div>
            ))}
            </StyledGallery>
    </StyledCategorySection>
    <Pagination/>
    </StyledCategory>
    )
    }
    const mapStateToProps = (state) =>(
        {
            categoryElements:state.images
        }
    )
    const mapDispatchToProps= dispatch =>({
        getCategoryElements:() => dispatch(fetchImages())
    })
export default connect(mapStateToProps,mapDispatchToProps)(Category);