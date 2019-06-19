import React, { Component } from 'react';
import './App.css';
import {browserHistory, Link, Route, Router} from "react-router";
import Logo from "./Logo.png";
import b from "./b.png";
import a1 from './a1.jpg';
import a2 from './a2.jpg';
import a3 from './a3.jpg';
import a4 from './a4.jpg';
import Cross from './Cross.png';
import MediaQuery from 'react-responsive';
import Banner from './Banner.png';
import ReactHoverObserver from 'react-hover-observer';
import DownArrow from './DownArrow.png';

class Abc extends React.Component {

      constructor(props) {
       super(props);
       // Don't do this!
       this.state = {
       show: false,
       dis : {display : 'none'},
       img : '',
       dropdown : false
       };
      }
    render() {
        return (


            <div>
                <div className="navBarMainTopDiv"><img className="Banner" src={Banner}/><div className="navBarMainTopDivInsideOne"><marquee><h1 className="MarqueeTextStyle">Up to 50% Off On 28 December</h1></marquee></div>
                </div>
                <div className="navBarMainLeftDiv"><img className="Logo App-logo" src={Logo}/></div>
                <div className="NavBarDiv">

                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <hr/>
                        <li><Link to="/About">ABOUT US</Link></li>
                        <hr/>
                        <li><Link to="/Contact">GALLERY</Link></li>
                        <hr/>
                    </ul>

                </div>
                <div className="AddressDiv">
                    <hr/>
                    <small>Cell: <br/> 000-111-222-555</small>
                    <br/>
                    <small>Email: <br/>  12ahsanali34@gmail.com</small>
                    <hr/>

                    <img className="ContactUsImage" src={b}/>

                </div>

                <div className="navBarMainBottomDiv">
                    <div className="BottomDivColumn1"><h1 className="BottomDivTextStyle1">Management</h1><p><a className="BottomDivTextStyle1" href="#">King Burger Partners</a></p></div>
                    <div className="BottomDivColumn2"><h1 className="BottomDivTextStyle2">Social</h1><p><a className="BottomDivTextStyle2" href="#">Like Us On Facebook</a></p></div>
                    <div className="BottomDivColumn3"><h1 className="BottomDivTextStyle3">Services</h1><p><a className="BottomDivTextStyle3" href="#">Home Service</a></p></div>
                    <div className="BottomDivColumn4"><h1 className="BottomDivTextStyle4">Areas</h1><p><a className="BottomDivTextStyle4" href="#">Our Branches</a></p></div>
                </div>
                <MediaQuery query="(min-device-width:100px),(max-device-width:100px1335)">
                <div className="Style">
                    <img onClick = {()=>{this.setState({show: true, img : a1, dis : {display:'inline'} })}} className="GalleryStyle" src={a1}/>
                    <img onClick = {()=>{this.setState({show: true, img : a2, dis : {display:'inline'} })}} className="GalleryStyle" src={a2}/>
                    <img onClick = {()=>{this.setState({show: true, img : a3, dis : {display:'inline'} })}} className="GalleryStyle" src={a3}/>
                    <img onClick = {()=>{this.setState({show: true, img : a4, dis : {display:'inline'} })}} className="GalleryStyle" src={a4}/>
                    <br/>
                    <img onClick = {()=>{this.setState({show: true, img : a1 })}} className="GalleryStyle" src={a1}/>
                    <img onClick = {()=>{this.setState({show: true, img : a2 })}} className="GalleryStyle" src={a2}/>
                    <img onClick = {()=>{this.setState({show: true, img : a3 })}} className="GalleryStyle" src={a3}/>
                    <img onClick = {()=>{this.setState({show: true, img : a4 })}} className="GalleryStyle" src={a4}/>
                </div>
                </MediaQuery>
                <div id="navbarNavigatedDiv2"><div onClick = {()=>{this.setState({dropdown : true})}} id="navbarNavigatedDiv2Inside"><img id="Caret3" src={DownArrow}/></div></div>
                {this.state.show && <div className="PopupStyles"><img onClick = {()=>{this.setState({show: false , dis : {display : 'none'}})}} className="PopupClose" src={Cross}/>
                <img className="PopupImageStyle" src={this.state.img}/>
                </div>}
                {this.state.dropdown && <div id="dropdown3"><img onClick = {()=>{this.setState({dropdown : false})}} className="CrossNave" src={Cross}/></div>}
                
                
            </div>

        );
    }
}
export default Abc;