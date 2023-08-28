import "./homepage.css";
import "./hp.css";
import React from "react";
import "./productdescriptionpage.css";
function Productdescriptionpage({
    id,
    title,
    price,
    description,
    category,
    image,
    rating
}) { //now accessing details here like: props.id, etc.
    //const productdescriptionpage = ({ a }) => {
    /*
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    //const [last, setLast] = useState("");
    //const [count, setCount] = useState(0);
    var category = [],
        len = 0,
        count = 0,
        last;
    //var elem;
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setVideos(dummyData);
            //console.log("videos = " + videos)
            //console.log("set");
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
*/
/* props.data.map((list,index) => {
    if(list.id == props.id){}
}) */
    return(
    <div className="content">
        <div>
            <h2>{"title"}</h2>
            {"description"}
        </div>
        {/*<div><img src={image} alt="image not shown"></img></div>*/}
    </div>);
    //};
}
export default Productdescriptionpage;