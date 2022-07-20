import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./response.css";
import "./style.css";
import Depoimento1 from "../../assets/image/depoimentoFoto1.jpeg";
import Depoimento2 from "../../assets/image/depoimentoFoto2.jpeg";
import Depoimento3 from "../../assets/image/depoimentoFoto3.jpeg";
import Depoimento4 from "../../assets/image/depoimentoFoto4.jpeg";
import Depoimento5 from "../../assets/image/depoimentoFoto5.jpeg";
import Depoimento6 from "../../assets/image/depoimentoFoto6.jpeg";

export default () => {
    return(
            <>
            <Carousel className="main-feedback">
                <li>
                    <img src={Depoimento1} alt="" />

                </li>
                <li>
                    <img src={Depoimento2} alt="" />
                </li>
                <li>
                    <img src={Depoimento3} alt="" />
                </li>
                <li>
                    <img src={Depoimento4} alt="" />
                </li>
                <li>
                    <img src={Depoimento5} alt="" />
                </li>
                <li>
                    <img src={Depoimento6} alt="" />
                </li>
            </Carousel>
        </>    
    )
}