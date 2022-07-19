import React from "react";
import "./style.css";
import Depoimento1 from "../../assets/image/depoimentoFoto1.jpeg";
import Depoimento2 from "../../assets/image/depoimentoFoto2.jpeg";
import Depoimento3 from "../../assets/image/depoimentoFoto3.jpeg";
import Depoimento4 from "../../assets/image/depoimentoFoto4.jpeg";
import Depoimento5 from "../../assets/image/depoimentoFoto5.jpeg";
import Depoimento6 from "../../assets/image/depoimentoFoto6.jpeg";
import Button from "../../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'


export default () => {
    return (
        <>
            <div className="container-feedback">
                <h1>DEPOIMENTOS</h1>
                <h6>
                    Alguns de nossos alunos que estão usando nossa
                    sala de sinais.
                </h6>
                <div className="main-feedback">
                    <img src={Depoimento1} alt="" />
                    <img src={Depoimento2} alt="" />
                    <img src={Depoimento3} alt="" />
                    <img src={Depoimento4} alt="" />
                    <img src={Depoimento5} alt="" />
                    <img src={Depoimento6} alt="" />
                </div>
            </div>
            <div className="container-feedback-button">
                <div className="container-feedback-button-filtro">
                        <h2>CLIQUE NO BOTAO E GARANTA SUA VAGA</h2>
                        <FontAwesomeIcon icon={faChevronCircleDown} size="3x"/>
                    <Button
                        text="Quero garantir minha vaga"
                        color="#29D420"
                    />
                </div>
            </div>
        </>
    );
};
