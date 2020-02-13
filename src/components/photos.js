import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchImages } from "../redux/actions/Actions";

const StyledDiv = styled.div`
  display: inline-flex;
  margin: 50px 120px;
  @media (max-width: 767px) {
    display: inline;
    margin: 30px 30px;
  }
`;

const StyledImage = styled.img`
  width: 50%;
  height: auto;
  @media (max-width: 767px) {
    width: 85%;
    margin-top: 60px;
    margin-right: 7px;
    height: 300px;
  }
`;

const StyledDescription = styled.div`
  padding: 0 25px;
  @media (max-width: 767px) {
    .a {
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-bottom: 5px;
    }
    .h5 {
      margin-block-start: 0px;
      margin-block-end: 0px;
      margin-bottom: 5px;
    }
    .h2 {
      margin-bottom: 5px;
    }
  }

  h2 {
    margin: 0;
    margin-bottom: 35px;
    font-size: 35.1px;
    font-weight: bold;
    color: #000;
    line-height: 1.2;
  }
  a {
    color: #337ab7;
    text-decoration: none;
    size: 100px;
    display: inline;
    display: block;
    margin: 0;
    margin-bottom: 20px;
    font-size: 23.6px;
    line-height: 1.42;
    cursor: pointer;
  }
  h5 {
    display: block;
    margin: 0;
    margin-bottom: 20px;
    font-size: 23.6px;
    line-height: 1.42;
    color: #000;
    font-family: inherit;
    font-weight: 500;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  i {
    color: white;
    background-color: black;
    padding: 10px;
    border-radius: 50%;
    font-size: 22px;
    margin: 0 5px;
  }
`;

const Photos = props => {
  useEffect(() => {
    props.fetchRequestedPhoto();
  }, [props.requestedPhoto.length]);

  if (!props.requestedPhoto.length) return null;
  const FilteredImage = props.requestedPhoto.filter(
    FilteredImage => FilteredImage.id === parseInt(props.match.params.photo_id)
  );

  return (
    <StyledDiv>
      <StyledImage
        src={process.env.PUBLIC_URL + String(FilteredImage[0].img).slice(7)}
        alt={FilteredImage.title}
      ></StyledImage>
      <StyledDescription>
        <h2>{FilteredImage[0].title}</h2>
        <h5>{FilteredImage[0].description}</h5>
        <a href="/">{FilteredImage[0].name}</a>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
      </StyledDescription>
    </StyledDiv>
  );
};
const mapStateToProps = state => ({
  requestedPhoto: state.images
});
const mapDispatchToProps = dispatch => ({
  fetchRequestedPhoto: () => dispatch(fetchImages())
});
export default connect(mapStateToProps, mapDispatchToProps)(Photos);
