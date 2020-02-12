import React,{useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchImages} from '../redux/actions/Actions';
const StyledDiv=styled.div`
`
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
    useEffect(()=>{props.fetchRequestedPhoto()},[props.requestedPhoto.length])
    console.log(props.requestedPhoto)
    const FilteredImage = (props.requestedPhoto.filter(FilteredImage=>FilteredImage.id === parseInt(props.match.params.photo_id)))
    return(
    <StyledDiv>
    <StyledPhoto>
    <StyledImage  src={process.env.PUBLIC_URL + String(FilteredImage[0].img).slice(7)} alt={FilteredImage.title}>
    </StyledImage>
    <StyledDescription>
    <h2>{FilteredImage[0].title}</h2>
    <h5>{FilteredImage[0].description}</h5>
    <a>{FilteredImage[0].name}</a>
    <br />
    <br />
    <i className="fab fa-facebook-f"></i>  
    <i className="fab fa-twitter"></i></StyledDescription>
    </StyledPhoto>
    </StyledDiv>
)
}
const mapStateToProps = state =>( {
    requestedPhoto:state.images
})
const mapDispatchToProps = () =>( {
    fetchRequestedPhoto:()=>{return fetchImages()}
})
export default connect(mapStateToProps,mapDispatchToProps)(Photos);