import {useState} from "react";
import "./Works.scss"
export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
       
        {
            id: 1,
            icon: "./assets/mobile.png",
            title: "Future is in Crypto!",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            img: 
            "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 "
        },
         {
            id: 2,
            icon: "./assets/globe.png",
            title: "Crypto content",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            img: 
            " https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        },
    
        {
            id: 3,
            icon: "./assets/writing.png",
            title: "Content Networking",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: 
            " https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 "
        },
     ];
     
     const handleClick = (way)=>{
      way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
      : setCurrentSlide(currentSlide<data.length -1 ? currentSlide +1 : 0)
  };




    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
                {data.map((d) =>(               
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img 
                            src={d.img} 
                            alt=""
                            />
                        </div>
                    </div>
                </div>
                 ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()} />
        </div>
    )
}