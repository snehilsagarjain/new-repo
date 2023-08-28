import React from "react";
import "./Frontpage.css";
import Header from "./header";
import V_slider from "./V_slider";
function Frontpage(props) {
    const slideImages = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      ];
    return( 
        <> {/*<V_slider/>*/} <Header/>        <h1><small>Fullscreen</small> Ken Burns effect <small>without javascript</small></h1>
           {/*<!-- You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS -->*/}
        <div className="slideshow">
            {slideImages.map((each, index) => (
             <div key={index} className="slideshow-image"> {/*"className=each-slide" */} <img className="lazy" src={each} alt="sample" /> </div>
             ))}
  {/*<div className="slideshow-image" /*style="background-image: url('https://source.unsplash.com/category/nature/1600x1400')"*///></div>
   /*<div className="slideshow-image" /*style="background-image: url('https://source.unsplash.com/category/buildings/1600x1400')"*///></div>
   /*<div className="slideshow-image" /*style="background-image: url('https://source.unsplash.com/category/food/1600x1400')"*///></div>
  /*<div className="slideshow-image" /*style="background-image: url('https://source.unsplash.com/category/technology/1600x1400')"*/ //></div>
        }
        </div>
        {/*<div>
        <div className="bg">
            <div></div>
            <input type = "text"/></div>
        {/*<img src = "https://img.freepik.com/free-vector/e-commerce-banners-collection_1284-19367.jpg?w=740&t=st=1673882265~exp=1673882865~hmac=1d5f14f05449e38474d564a1533e0b0a295590951f59d2240f98e908501ea617"
                alt = "E-commerce banner"
                className = "banner"
                height = "100%"
    width = "100%" / >*//*}
    </div>*/}
        </>
    );
}
export default Frontpage;