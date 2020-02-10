import React from 'react'
import {BrowserRouter as Router , Route } from 'react-router-dom'
import HomePage from '../components/home'
import Categories from '../components/categories'
import  Photos from '../components/photos.js'
import Category from '../components/category'
const Routes = () => {
    return(
        <Router>

        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/categories' component={Categories}></Route>
        <Route exact path='/photo/:photo_id' component={Photos}></Route>
        <Route exact path='/categories/:category_id' component={Category}></Route>



        </Router>
    )
   
}
export default Routes;