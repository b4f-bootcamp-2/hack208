import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Info } from "./ImgInfo";
import style from "./styles/main.module.css";

export function RenderPortfolio() {
    // portfolio goes here
    
    return (
        <div className={style.box}>
            <div className={style.row}>
              <Link to="/portfolio/1_onda_musical"><img className={style.photo} src="img/1_onda_musical.jpg" alt="coisas"></img> </Link>
            <Link to="/portfolio/2_spider_crab"><img className={style.photo} src="img/2_spider_crab.jpg" alt="coisas"></img> </Link>
            <Link to="/portfolio/6_seahorse"><img className={style.photo} src="img/6_seahorse.jpg" alt="coisas"></img> </Link>   
            <img className={style.photo} src="img/7_bunny.jpg" alt="coisas"></img> 
            </div>
            <div className={style.row}>
            <img className={style.photo} src="img/8_barrel_seats.jpg" alt="coisas"></img> 
            <img className={style.photo} src="img/9_chameleon.jpg" alt="coisas"></img> 
            <img className={style.photo} src="img/10_garden.webp" alt="coisas"></img> 
            </div>
            <div className={style.row}>
            <img className={style.photo} src="img/11_frog.jpg" alt="coisas"></img> 
            </div>
        </div>
    )
}

export function RenderHighlights() {
    // highlights goes here 
    return (
        <div className={style.box}>
            <Link to="/portfolio/6_seahorse"><img className={style.photo} src="img/6_seahorse.jpg" alt="coisas"></img> </Link>
            <Link to="/portfolio/8_barrel_seats"><img className={style.photo} src="img/8_barrel_seats.jpg" alt="coisas"></img> </Link>
            <Link to="/portfolio/7_bunny"><img className={style.photo} src="img/7_bunny.jpg" alt="coisas"></img> </Link> 
        </div>
    ) 
}

export function RenderAbout() {
    // about me goes here
    return (
        <div className={style.aboutMe}>
            <h1 className={style.me}>Who am I?</h1>
            <p className={style.about}>
            I am Fabio.
            <br></br> My mother gave birth to me in the woods, 
            and after she died, I was raised by wolves. I loved my wolf parents, 
            but they tragically died when they choked on trash at the beach. Ever since
            their death, I decided to start making art to raise awareness 
            to pollution in nature, by going to beaches on my van across the world
            and collecting trash to make my pieces.
            </p>
        </div>
    )
}



