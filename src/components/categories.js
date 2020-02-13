import React, { useEffect } from "react";
import Pagination from "../components/pagination";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "../redux/actions/Actions";

const MainStyledCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 0 75px;
`;
const StyledCategories = styled.div`
  position: relative;
  margin: 5px;
  cursor: pointer;
`;
const StyledCategoriesSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 40%);
  padding: 5px;
  .logo,
  h4 {
    color: white;
  }
`;
const StyledImage = styled.img`
  width: 360px;
  height: 230px;
`;

const Categories = props => {
  useEffect(() => {
    props.getCategories();
  }, [props.categories.length]);
  const history = useHistory();
  const navigate = categoryId => {
    history.push("/category/" + categoryId);
  };
  return (
    <>
      <MainStyledCategories>
        {props.categories.map((category, i) => (
          <StyledCategories key={i} onClick={() => navigate(category.id)}>
            <StyledImage
              src={process.env.PUBLIC_URL + String(category.img).slice(7)}
              alt={category.title}
            ></StyledImage>
            <StyledCategoriesSection>
              <h4>{category.title}</h4>
              <img
                className="logo"
                src="https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/2/icon/big-fe0ddae57072146294f233a81106c799.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200208%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200208T141149Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=df88f8cfb53a82958abab7011aa13e316719c9eb38311e291631d4ca5844edab"
                alt="logo"
              ></img>
            </StyledCategoriesSection>
          </StyledCategories>
        ))}
      </MainStyledCategories>
      <Pagination />
    </>
  );
};
const mapStateToProps = state => ({
  categories: state.categories
});
const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
});
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
