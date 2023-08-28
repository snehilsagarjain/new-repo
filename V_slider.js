import React from "react"; //, {useRef}
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Outlet, Link, NavLink } from "react-router-dom";
import "./hp.css";
//import Home from "./home";
//import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css'
//import React from 'react';
import { Slide } from 'react-slideshow-image'; 
import 'react-slideshow-image/dist/styles.css';
//import pic from "./images/snehil.jpg.jpg";
/* , Slideshowref */
//var back() { this.slideRef.current.goBack(); }
//var next() { this.slideRef.current.goNext(); }


class V_slider extends Component {
  constructor() { super(); this.slideRef = React.createRef();
    /*this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = { current: 0 };*/
  }
  /*back() { this.slideRef.current.goBack(); }
  next() { this.slideRef.current.goNext(); }*/

  render() {
    const properties = {
      duration: 5000, autoplay: true, transitionDuration: 500, arrows  : true, 
      infinite: true, easing            : "ease" //, indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = [
      "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    ];
    /*      "C:\Users\DELL\Pictures\camera\_20160513_103559.jpg", */
    /*const images = require.context('./images', true);
    const imageList = images.keys().map(image => images(image));*/
    return (
      /*<div>*/
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
          {/*{imageList.map((each, index) => (
            <div key={index} className="each-slide">
              <img key={index} className="lazy" src={each} alt={`image-${index}`} />
            </div>
            ))}*/}
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide"> 
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
            {/*<img src={pic} />*/}
            {/*<img key={index} className="lazy" src={process.env.PUBLIC_URL+"images/"+each.default} alt={`image-${index}`}/>*/}
          </Slide>
        </div>
    );
  }
}
export default V_slider;