import React, { Component } from 'react';
import './App.css';
import {browserHistory, Link, Route, Router} from "react-router";
import Home from "./Home";
import About from "./About";
import Abc from "./abc";
import Image1 from "./Image1";
import Image2 from "./Image2";
import Image3 from "./Image3";
import Image4 from "./Image4";
import CustomRouter from './RouterCustom';


class App extends React.Component {

    render() {


        return (


            <Router history={browserHistory}>
            <div>

                <Home/>

                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Abc} />
                <Route exact path="/Image1" component={Image1} />
                <Route exact path="/Image2" component={Image2} />
                <Route exact path="/Image3" component={Image3} />
                <Route exact path="/Image4" component={Image4} />


            </div>
            </Router>
        );
    }



}

export default App;

