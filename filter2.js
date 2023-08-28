import React from "react"; //, { useState, useEffect }
import { Link, NavLink, useParams } from "react-router-dom"; //Outlet, 
//import { useState, useEffect, useRef, useMemo } from "react";
//import {Component} from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import dummyData from "./data";
//import Productdescriptionpage from "./productdescriptionpage";
import "./hp.css";
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
//import 'https://kit.fontawesome.com/a076d05399.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { useParams } from 'react-router-dom';

//import Category from "./category";
/*const linkStyle = {
    /*margin: "1rem",*/
    /*textDecoration: "none",
    color: 'blue',
    width           : "207px"/*,
    border          : "green 50px"*//*
  };*/

{/*
function myFunction(x) { x.classList.toggle("change"); }
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";  
}  */}
function Filter2(props){
    var //title = [], //newArray = [],
    category = [], //image = [],
    //len = 0, 
    //len1,
    count = 0//, //count1 = 0,
    //previ,
    //last, last1,
    //myStyle
    ;
    //var checkedState = [];
    var j = -1; //i = 0, 
    //const [data, setData] = useState([]); //var p = "/";
    var p = "/sagar";
    /*const [cate, setCate] = useState("none"); const [times, setTimes] = useState(props.times); const time = "none";
      const [checkedState, setCheckedState] = useState(newArray.fill(false)); checkedState[i] = true; */
    const { id } = useParams(); console.log("id ="+id);
    return(
        <div className = "filter" > {/*navbar */}
            {/*<div class="navbar">
                <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> 
                <a href="#"><i class="fa fa-fw fa-search"></i> Search</a> 
                <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a> 
                <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
            </div>*/
            /*<div class="container" onclick="myFunction(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div> */
            /*<div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
            </div> */
            /*<div id="mySidebar" class="sidebar">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            <div id="main">
            <button class="openbtn" onclick="openNav()">☰ Open Sidebar</button>
            </div>  */
            /* onclick="myFunction(this)" */
            /*
            <div class="navbar">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <div class="dropdown">
                    <button class="dropbtn">Dropdown <i class="fa fa-caret-down"></i> </button>
                    <div class="dropdown-content"> /*sidebar *//*
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div> 
            </div>
            */
            }
            {/*<div className = "dropdown"> -- for complete button and menu */}
            <div className="dropdown">
                <div className="container" id="main">
                    {/*<i class="fa fa-caret-down"></i> */}
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="dropdown-content">
                    <NavLink to ={p} className="square border border-primary border-3"> 
                                    <button className="cl" ><div className="aligncat">{"NONE"}</div></button> </NavLink>
                    { 
                        props.data.map((list) => { //, index
                            /* setCount(0); */ count = 0; 
                            for (let x of category){ if (x === list.category){ return null; } else{ count = count + 1; } }
                            if (count === category.length) { category.push(list.category);
                            //                                i = i + 1;                 category.push(list.category); //checkedState.push("false");
                            //                                len = category.length - 1; last = category[len];         previ = i; 
                            } 
                                //var path = "http://localhost:3000/Category/"+list.category;
                            var lc = list.category; console.log("lc ="+lc);
                            var pa = "/sagar/category/"+lc; console.log("pa="+pa);
                            return ( 
                                <li key={list.category}> 
                                    <Link to={`/sagar/category/jewelery`} className="lk">
                                        <button className="cl"> {/*<i class='fas fa-tshirt' style='font-size:48px;color:red'></i>*/} {list.category + "1"} </button> 
                                    </Link>
                                                
                                    <Link to={pa} className="lk"> 
                                        <button className="cl"> <i className="fa fa-diamond" aria-hidden="true"></i> {/*<FontAwesomeIcon icon="fa-solid fa-person-dress" />*/} {list.category}+"2" </button> 
                                    </Link> {/* */} 
                                                
                                    <NavLink to ={pa} className="lk"> 
                                        <button className="cl"> <i className="fa fa-female" aria-hidden="true"></i> {list.category} </button>
                                    </NavLink>     
                                </li>     
                            );
                        })
                    } 
    {/*
                    <ul className = "toppings-list" id = "cats" > 
                        <li key = {j + 1} > 
                            <div className = "toppings-list-item" >
                            {/*<Link to={p}>Blue Whale</Link>*//*}
                            <NavLink to ={p} className="square border border-primary border-3"> 
                                    <button className="cl" ><div className="aligncat">{"NONE"}</div></button> </NavLink>
                                {/*<NavLink to = "/category/none" style={({ isActive }) => ({ 
                                color: isActive ? 'greenyellow' : 'blue' })}>None</NavLink>*//*}
                            </div >
                        </li>                                       
                        { 
                            props.data.map((list, index) => { 
                                /* setCount(0); *//* count = 0; 
                                for (let x of category){ if (x === list.category){ return null; } else{ count = count + 1; } }
                                if (count === category.length) { category.push(list.category);
                            //                                i = i + 1;                 category.push(list.category); //checkedState.push("false");
                            //                                len = category.length - 1; last = category[len];         previ = i; 
                                } 
                                //var path = "http://localhost:3000/Category/"+list.category;
                                var lc = list.category; console.log("lc ="+lc);
                                var pa = "/sagar/category/"+lc; console.log("pa="+pa);
                                return ( 
                                    <li key = { list.category } > {console.log("458filter(1)")}
                                        <div className = "toppings-list-item" > {console.log("458filter(2)")}
                                        {/*<NavLink to ={p} className="square border border-primary border-3"> 
                                        <button className="cl" ><div className="aligncat">{list.category}</div></button>  </NavLink>*//*}
                                            {/*<a href= {path}> *//*}
                                            {/*<NavLink to ={pa} className="lk"> {list.category} </NavLink>
                                        {/*                           ${lc}             <NavLink to={"/category/none"}>First</NavLink>*//*}
                                            <Link to={`/sagar/category/jewelery`} className="lk">
                                            <button className="cl"> {/*<i class='fas fa-tshirt' style='font-size:48px;color:red'></i>*//*} {list.category + "1"} </button> 
                                            </Link>
                                            
                                            <Link to={pa} className="lk"> 
                                            <button className="cl"> <i className="fa fa-diamond" aria-hidden="true"></i> {/*<FontAwesomeIcon icon="fa-solid fa-person-dress" />*//*} {list.category}+"2" </button> 
                                            </Link> {/* *//*} 
                                            
                                            <NavLink to ={pa} className="lk"> 
                                            <button className="cl"> <i className="fa fa-female" aria-hidden="true"></i> {list.category} </button>
                                            </NavLink>
                                            
                                            {/*<i className="fa-solid fa-plug"></i>*//*}
                                        {/*                                        {console.log("pa")}
                                            <NavLink to = {pa} style={({ isActive }) => ({ 
                                                color: isActive ? 'greenyellow' : 'blue' })}>{list.category}</NavLink>
                                            {/*<NavLink to ={pa} className="lk"> {list.category} </NavLink>*//*}
                                            {/*onClick={handleClick2} </a>*//*}
                                        </div >
                                    </li>
                                );
                            })
                        } 
                    </ul>*/
    }
                </div >
                {/*<div className = "price" > 
                    <ul> <li type = "radio"> Increasing </li> <li type = "radio"> Decreasing </li> </ul>
                </div > -- likewise, more categories could also be created.  */}
            </div>
        </div >
    );
}
export default Filter2;
{ /*{   /*console.log("list = " + JSON.stringify(list));                
/*console.log("category.length = " + category.length);                
//console.log("id = " + list.id);
/*if (category.length === 0) {
    //category.push(list.category); //console.log("push");   
    //console.log("category.length = " + category.length)
    //len = category.length - 1; console.log("len=" + len);                    
    //console.log("category[len]=" + category[len]);
    //last = category[len]; console.log("last=" + last); setLast(elem);
} else { //console.log("else");         */   /*
}
       //{/*<Category data = {props.data} newcate = {"electronics"} memoizedValue={props.memoizedValue}/>*//*}         
    /*
    function NameList(arg){ 
        //return <h2>I am a { props.arg }!</h2>;
        //const myLists = props.mylists; 
        console.log("NameList");
        image.length = 0;
        title.length = 0;
        const newcat = arg;
        console.log("newcat="+newcat);
        //<ul className = "listings-list" id = "lists" >
        {
            props.data.map((list, index) => { console.log("arg="+arg);
                //if (newcate === "none"){
                if(list.category === arg){
                    //console.log("map");
                    /* setCount(0); */ //count = 0; count1 = 0;

                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);
                    /*if (image.length === 0) { 
                        image.push(list.image); len = image.length - 1; 
                        last = image[len]; console.log("last="+last);       }
                    else {
                        for (let x of image) { 
                            if (x === list.image) { console.log("1) return null"); return null; } 
                            else { count = count + 1; }     }
                        if (count === image.length) { 
                            image.push(list.image); len = image.length - 1; 
                            last = image[len]; console.log("1)last="+last);     }
                    }

                    if (title.length === 0) { 
                        title.push(list.title); len1 = title.length - 1; 
                        last1 = title[len]; console.log("last1="+last1);    } 
                    else { 
                        for (let x of title) { 
                            if (x === list.title) { console.log("2) return null"); return null; } 
                            else { count1 = count1 + 1; }   }
                        if (count === title.length) { 
                            title.push(list.title); len1 = title.length - 1; 
                            last1=title[len]; console.log("1)last1="+last1);    }
                        myStyle = { backgroundimage: "url(last)" }
                    }
                    {
                    //checked = { checkedState[index] }
                    //onChange = { () => handleOnChange(index) }
                    //return '<li> <div> <button> buy now </button> </div> </li>';
                    }
                    
                    return ( 
                        <li key = { index } > {console.log("li start")}
                            <div className = "listings-list-item" >
                                {console.log("list--item")}
                                <div style = { myStyle } > {console.log("style")}
                                    {/*<input type = "radio"
                                    className = "form-check-input"
                                    id = { `custom-checkbox-${index}` }
                                    name = "title"
                                    value = { last1 }/>
                                    {/*backgroundimage = "url({last})" /> *//*}
                                    {console.log("input")}
                                    <label htmlFor = { `custom-checkbox-${index}` } > 
                                        { last1 } 
                                    </label> {console.log("label")}
                                </div > 
                                
                                <div className = "buy" > 
                                {/*{ 
                                    <div > 
                                        //{/*list.id */ //}
                                    /*    <button key = { index }
                                        value = {last1}
                                        onClick = {
                                            () => {
                                                alert("Hello");
                                                data.map((list) => {
                                                    if (list.category === title[index]) {
                                                        var id = list.id;
                                                        //var title = list.title;
                                                        var price = list.price;
                                                        var description = list.description;
                                                        var category = list.category;
                                                        var image = list.image;
                                                        var rating = list.rating; } 
                                                    else { return null; }
                                                    return ( <Productdescriptionpage id = { id }
                                                                title = { list.title }
                                                                price = { price }
                                                                description = { description }
                                                                category = { category }
                                                                image = { image }
                                                                rating = { rating } /> );
                                                        /* <Productdescriptionpage  ii = { id } title = { title } price = { price } description = { description } 
                                                            category = { category[index] } image = { image } rating = { rating } /> */ 
                                     /*           })
                                                    //productdescriptionpage(element) 
                                            }
                                        } > 
                                            { "Buy Now" } 
                                        < /button> 
                                        <br/ >
                                    </div>
                                    } *//*
                                }
                                </div> {console.log("buy")}
                            </div> 
                        </li> 
                    ); 
                    {/* <img src = { last } alt = "images" width = "60px" height = "60px" / > </div>*/ /*}
                            }
            })    
        }
        {/*</ul>*//*}

        {
        /*
        const listItems = 
            data.map((list, index)=>{
                if(list.category === newcat){ 
                    return(
                        '<li key = {'+index+'}>'+ 
                            '<div className = "listings-list-item">'+
                                '<div>'+
                                    '<input type = "radio" className = "form-check-input" id = { `custom-checkbox-${'+index+'}` } name = "title" value = {'+list.title+'} />'+
                                    '<label htmlFor = { `custom-checkbox-${'+ index +'}` } > {'+list.title+'} </label>'+
                                '</div>'+
                                '<div className = "buy" > <button key = {'+index+'} onClick = "click()"> Buy Now < /button> </div > <br/>'+
                            '</div>'+ 
                        '</li>'
                    );
                }
                else{ return null; }
            }).join('');
        console.log("listitems = "+listItems);
        
        return({listItems});
        */
        /*}
    }
    function go(){ console.log("go"); <Category data = {props.data} newcate = {"jewellery"}/> }
    function onCateChange(e, source) {
        const newcate = e.target.value; setCate(newcate);
        {/*
        var ee = document.querySelector('#lists');
        
        //e.firstElementChild can be used.
        var child = ee.lastElementChild; 
        while (child) {
            ee.removeChild(child);
            child = ee.lastElementChild;
        }
        let li = document.createElement('li')
        li.textContent = 'yes'
        ee.appendChild(li);
        console.log("yes li added")
        child = ee.lastElementChild; 
        ee.removeChild(child);
        /*        let newDog = document.createElement('ul')
                newDog.classList.add('listings-list')
                newDog.setAttribute("id","lists");
                console.log("new dynamic add")
                let li = document.createElement('li')
         //       li.setAttribute("key",index);
                li.textContent = 'yes'
                newDog.appendChild(li);
                return(                document.querySelector('#lists').appendChild(newDog) );
     */
        //console.log("source="+source);
        //console.log("source="+typeof(source));
        //console.log("catenew="+cate);
        
        //console.log("newcate1="+newcate);
        //console.log("newcate="+typeof(newcate));
        //console.log("cate ="+cate);
       
        //console.log("newcate = "+newcate);
        //go();
        //return( 
            //{<Category data = {data} newcate = {"jewellery"}/>} 
            //);  //~~
        //<Category data = {data} newcate = {source}/>
        
        
         //NameList(newcate);
         /*if(newcate === "none"){         console.log("newcate1 = "+newcate);
            //document.querySelector('#lists').innerHTML= start();
            document.querySelector('#lists').innerHTML=            data.map((list, index) => { console.log("newcatmap");
                //if (newcate === "none"){
                
                    //console.log("map");
                    /* setCount(0); */  //count = 0; count1 = 0;

                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);
                    /*if (image.length === 0) { 
                        image.push(list.image); len = image.length - 1; 
                        last = image[len]; console.log("last="+last);       }
                    else {
                        for (let x of image) { 
                            if (x === list.image) { console.log("1) return null"); return null; } 
                            else { count = count + 1; }     }
                        if (count === image.length) { 
                            image.push(list.image); len = image.length - 1; 
                            last = image[len]; console.log("1)last="+last);     }
                    }

                    if (title.length === 0) { 
                        title.push(list.title); len1 = title.length - 1; 
                        last1 = title[len]; console.log("last1="+last1);    } 
                    else { 
                        for (let x of title) { 
                            if (x === list.title) { console.log("2) return null"); return null; } 
                            else { count1 = count1 + 1; }   }
                        if (count === title.length) { 
                            title.push(list.title); len1 = title.length - 1; 
                            last1=title[len]; console.log("1)last1="+last1);    }
                        myStyle = { backgroundimage: "url(last)" }
                    }
                    //checked = { checkedState[index] }
                    //onChange = { () => handleOnChange(index) }
                    //return '<li> <div> <button> buy now </button> </div> </li>';
                    
                    return ( 
                        <li key = { index } > {console.log("li start")}
                            <div className = "listings-list-item" >
                                {console.log("list--item")}
                                <div style = { myStyle } > {console.log("style")}
                                    <input type = "radio"
                                    className = "form-check-input"
                                    id = { `custom-checkbox-${index}` }
                                    name = "title"
                                    value = { last1 }
                                    backgroundimage = "url({last})" /> {console.log("input")}
                                    <label htmlFor = { `custom-checkbox-${index}` } > 
                                        { last1 } 
                                    </label> {console.log("label")}
                                </div > 
                                <div className = "buy" > 
                                { 
                                    <div > 
                                        {/*list.id *//*}
                                        <button key = { index }
                                        value = {last1}
                                        onClick = {
                                            () => {
                                                alert("Hello");
                                                data.map((list) => {
                                                    if (list.category === title[index]) {
                                                        var id = list.id;
                                                        //var title = list.title;
                                                        var price = list.price;
                                                        var description = list.description;
                                                        var category = list.category;
                                                        var image = list.image;
                                                        var rating = list.rating; } 
                                                    else { return null; }
                                                    return ( <Productdescriptionpage id = { id }
                                                                title = { list.title }
                                                                price = { price }
                                                                description = { description }
                                                                category = { category }
                                                                image = { image }
                                                                rating = { rating } /> );
         /* <Productdescriptionpage  ii = { id } title = { title } price = { price } description = { description } 
                                category = { category[index] } image = { image } rating = { rating } /> */ 
                                                /*})
                                                    //productdescriptionpage(element) 
                                            }
                                        } > 
                                            { "Buy Now" } 
                                        < /button> 
                                        <br/ >
                                    </div>
                                } 
                                </div> {console.log("buy")}
                            </div> 
                        </li> 
                    ); 
                    /* <img src = { last } alt = "images" width = "60px" height = "60px" / > </div>*/ 
                         //   }
            /*})   
            { /*            data.map((list, index) => { 
                //if (newcate === "none"){
                //if(list.category === newcate){
                    //console.log("map");
                    /* setCount(0); */
                    // count = 0; count1 = 0;

                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);
         /*
                    if (image.length === 0) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                    else {
                        for (let x of image) { if (x === list.image) { return null; } else { count = count + 1; } }
                        if (count === image.length) { image.push(list.image); len = image.length - 1; last = image[len]; }
                    }

                    if (title.length === 0) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                    else { 
                        for (let x of title) { if (x === list.title) { return null; } else { count1 = count1 + 1; } }
                        if (count === title.length) { title.push(list.title); len1 = title.length - 1; last1=title[len]; }
                        myStyle = { backgroundimage: "url(last)" }
                    }
                    return ( 
                        '<ul><li key = { index }>'+
                            '<div className = "listings-list-item">'+
                                '<div style = {'+ myStyle +'} > <input type = "radio" className = "form-check-input" id = { `custom-checkbox-${'+index+'}` } name = "title" value = {'+ last1 +'} backgroundimage = "url({'+last+'})" /> <label htmlFor = { `custom-checkbox-${'+index+'}` } > {'+ last1 +'} </label> </div >'+ 
                                '<div className = "buy" > { <div > <button key = {'+ index +'} value = {'+last1+'} onClick = {'+ click(this) +'} > { "Buy Now" } < /button> <br/ > </div> } </div>'+
                            '</div>'+
                        '</li></ul>'
                    ); 
            }).join('');
                    /*list.id */
                    /* {<img src = { last } alt = "images" width = "60px" height = "60px" / >} */ 
                    /*< /div >*/
                    /*}
         }
         else{ console.log("NEW_ELSE");
          //const myElement = <NameList arg= "newcate"/>;
            document.querySelector('.listing').innerHTML= NameList(newcate);
            <div dangerouslySetInnerHTML={{__html: data}} />
            {/*start();*//*}
            console.log("New2")
            {
            /*
            data.map((list, index) => {
                if(list.category === newcate){ 
                    myStyle = { backgroundimage: "url(list.image)" }
                    return( '<li key = {' + index + '}> <div className = "listings-list-item"> <div> <input type = "radio" className = "form-check-input" id = { `custom-checkbox-${' + index + '}` } name = "title" value = {'+ list.title + '} /> <label htmlFor = { `custom-checkbox-${' + index + '}` } > ' + list.title + ' </label> < /div > <div className = "buy" > <button key = {' + index + '} onClick = "' + click + '"> Buy Now < /button> </div > <br/> < /div > < /li>');
                     //                    return('<li key = {' + index + '}> <div className = "listings-list-item"> <div> <input type = "radio" className = "form-check-input" id = { `custom-checkbox-${' + index + '}` } name = "title" value = {'+ list.title + '} /> <label htmlFor = { `custom-checkbox-${' + index + '}` } > ' + list.title     + ' </label> < /div > <div                   > <button key = {' + index + '}                            >{"buynow"}< /button> </div > <br/> < /div > < /li>') ; //}).join('');

                    // wizard
                    // style = {' + myStyle + '} 
                    // backgroundimage = "url({' + list.image + '})" 

                    //return '<li> <div> <button> buy now </button> </div> </li>';
                }
                else{ return null; }
            }).join('');*/
            //document.getElementById("lists").innerHTML += data.map((list, index) => { return "<div>123</div>"; }).join('');
            /*
            data.map((list, index) => { 
                console.log("data"); 
                if(list.category === newcate){ 
                    console.log("list"); count = 0; count1 = 0; 
                    if (image.length === 0) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                    else { 
                        for (let x of image) { 
                            if (x === list.image) { return null; } 
                            else { count = count + 1; } 
                        } 
                        if (count === image.length) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                    } 
                    if (title.length === 0) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                    else { 
                        for (let x of title) { 
                            if (x === list.title) { return null; } 
                            else { count1 = count1 + 1; } 
                        } 
                        if (count === title.length) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                        myStyle = { backgroundimage: "url(last)" } 
                    } 
                    return ( <li key = { index } > <div className = "listings-list-item" > <div style = { myStyle } ><input type = "radio" className = "form-check-input" id = { `custom-checkbox-${index}` } name = "title" value = { last1 } backgroundimage = "url({last})" /> <label htmlFor = { `custom-checkbox-${index}` } > { last1 } </label> < /div > <div className = "buy" > { <div > <button key = { index } onClick = { () => { alert("Hello"); data.map((list, i) => { if (list.category === title[index]) { var id = list.id; var price = list.price; var description = list.description; var category = list.category; var image = list.image; var rating = list.rating; } else { return null; } return ( <Productdescriptionpage id = { id } title = { list.title } price = { price } description = { description } category = { category } image = { image } rating = { rating } /> ); }) }} > { "Buy Now" } < /button> <br/ ></div> } </div > < /div > < /li> ); 
                }
            }).join('');*//*}
        }*//*}
    }    
    
    function handleClick(){ console.log("handleClick"); 
        //times = props.times + 1;
        setTimes(times + 1); 
        console.log("times ="+times); time = times;
        //return(<Category data = {props.data} newcate = {"jewellery"}/>); //console.log("handleClick1");
    }
    function handleClick2(){ console.log("handleClick3"); 
        //times = props.times + 1;
        setTimes(times + 1); 
        console.log("times2 ="+times); time = times;
        //return(<Category data = {props.data} newcate = {"electronics"}/>); //console.log("handleClick4");
    }
    */
}