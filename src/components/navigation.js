import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import HomePage from "../components/home";
import Categories from "../components/categories";
import Photos from "../components/photos.js";
import Category from "../components/category";
const Routes = () => {
  return (
    <Router history={useHistory}>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/categories" component={Categories}></Route>
      <Route path="/category/:category_id" component={Category}></Route>
      <Route path="/photo/:photo_id" component={Photos}></Route>
    </Router>
  );
};
export default Routes;
