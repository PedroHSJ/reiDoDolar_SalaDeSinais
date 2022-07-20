import React from "react";
import Carousel from './carousel'
import "./response.css"
import "./style.css";
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
                <div id='carrosel'>
                    <Carousel />
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
