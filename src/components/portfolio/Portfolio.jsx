import React, { useState, useEffect } from 'react';
import PortFolioList from "../portfoliolist/PortFolioList";
import "./Portfolio.scss"
export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    
    const list = [
{    
    id: "Featured",
    title: "featured",
},
{   
     id: "Web",
    title: "Web App",
},
{    
    id: "Mobile",
    title: "Mobile App",
},
{    
    id: "Content",
    title: "Content",
},

    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map
                (
                    item => 
                    (
                    <PortFolioList 
                    
                    title={item.title} 
                    
                    active={selected === item.id}
                    
                    setSelected={setSelected}
                    
                    id={item.id} />
                ))}

            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://cryptopro.app/wp-content/uploads/2020/07/portfolio3-1024x1024.png" alt="" />
                    <h3>Crypto App</h3>
                </div>
                <div className="item">
                    <img src="https://cryptopro.app/wp-content/uploads/2020/07/portfolio3-1024x1024.png" alt="" />
                    <h3>Crypto App</h3>
                </div>
                <div className="item">
                    <img src="https://cryptopro.app/wp-content/uploads/2020/07/portfolio3-1024x1024.png" alt="" />
                    <h3>Crypto App</h3>
                </div>
                <div className="item">
                    <img src="https://cryptopro.app/wp-content/uploads/2020/07/portfolio3-1024x1024.png" alt="" />
                    <h3>Crypto App</h3>
                </div>
            </div>
        </div>
    )
}
