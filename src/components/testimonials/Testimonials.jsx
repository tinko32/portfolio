import "./Testimonials.scss"
export default function Testimonials() {
    const data = [
       
        {
            id: 1,
            icon: "assets/linkedin.png",
            title: "Marko Zuckerb",
            work: "Data Scientist",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            img: 
            "https://images.pexels.com/photos/6814537/pexels-photo-6814537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 "
        },
         {
            id: 2,
            icon: "assets/linkedin.png",
            title: "Sofijana Lorilome",
            work: "Programmer",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            img: "https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            featured: true,
        },
    
        {
            id: 3,
            icon: "assets/linkedin.png",
            title: "Aleks Loriloma",
            work: "C.E.O",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            img: 
            "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 "
       },
     ];
    return (
        <div className="testimonial" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src={d.img}
                         className="user" alt="" />
                        <img src={d.icon} alt="" className="right"/>

                    </div>
                    <div className="center">
                        {d.desc}
                         </div>
                    <div className="bottom">
                        <h3>{d.title}</h3>
                        <h4>{d.work}</h4>
                    
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
