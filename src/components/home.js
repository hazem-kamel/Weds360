import React , {useState,useEffect} from 'react';
import styled from "styled-components";
import Search from '../components/searchbar'
import Pagination from '../components/pagination'
import {fetchImages} from '../redux/actions/Actions';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const StyledHomePage=styled.div`
`
const StyledHomePageSection=styled.div`
display:grid;
grid-template-columns:25% 75%;
grid-column-gap:20px;
margin-top:90px;
max-width:100;
@media(max-width:767px){
display:grid;
      
}
`

const StyledGallery=styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
margin:0 auto;
margin-right:130px;
max-width:100%;
div{
    margin:5px;
}
img{
    width:260px;
    height:230px;
}
h3{
    text-align:center;
}
`
const  HomePage = props => {

    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(9);

    const paginate = (number) =>  setCurrentPage(number)
    useEffect( () => {props.getImages()},[props.images.length])
    const history = useHistory();
    const navigate = imageId => {
    history.push("/photo/" + imageId);
      }

    const indexOfLast=currentPage * postsPerPage;
    const indexofFirst = indexOfLast - postsPerPage;

    const Rendered=props.images.slice(indexofFirst,indexOfLast)
    return(
        <StyledHomePage>
        
        <StyledHomePageSection>
            <Search className='SearchSection'/>

            <StyledGallery>
            {Rendered.map((image,i) => (
                <div  photo_id={image.id} key={i} onClick={()=>navigate(image.id)}>
                <img src={process.env.PUBLIC_URL + String(image.img).slice(7) } alt={image.title}></img>
                <h3>{image.title}</h3>
                </div>
            ))
            }
            </StyledGallery>
        </StyledHomePageSection>
        <Pagination  totalPosts={props.images.length} postsPerPage={postsPerPage} paginate={paginate}/>
</StyledHomePage>
    )}
    const mapStateToProps = state => ({
        images:state.images
    })
    const mapDispatchToProps = dispatch =>({
        getImages: () => dispatch(fetchImages())
    })
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);