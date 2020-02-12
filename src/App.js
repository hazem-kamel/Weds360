import React from 'react';
import NavBar from  './components/navbar'
import Footer from  './components/footer'
import Routes from './components/navigation';
import { connect } from "react-redux";
function App() {
  return (
    <div>
    <NavBar/>
    <Routes/>
    <Footer/>
    </div>
  );
}
export default connect()(App);
