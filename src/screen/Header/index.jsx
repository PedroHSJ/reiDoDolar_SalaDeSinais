import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
import Button from "../../components/Button";
import logo from "../../assets/image/logo.jpeg";
import background from "../../assets/image/bitcoin.jpg";
export default () => {
    return (
        <div className="header-container">
            <div className="main-logo">
                <img src={logo} alt="" />
            </div>
            <div className="main-Header">
                <div className="main-Header-filtro">
                    <div className="main-title">
                        <h1>
                            Assista o video e descubra o metódo para
                            operar no mercado financeiro da forma mais{" "}
                            <h1
                                style={{
                                    color: "#29D420",
                                    letterSpacing: "3px",
                                }}
                            >
                                SIMPLES E SEGURA
                            </h1>{" "}
                            utilizando os mesmos sinais que eu e meus
                            alunos estamos usando para lucrar todos os
                            dias.
                        </h1>
                    </div>
                    <div className="header-video">
                        <iframe
                            width="320"
                            src="https://www.youtube.com/embed/Wp9tTnGAIR4"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            style={{
                                borderRadius: "15px",
                                border: "4px solid #222",
                            }}
                        ></iframe>
                    </div>{" "}
                    <Button
                        text="Quero ter acesso ao conteúdo do video"
                        color="#29D420"
                        width="150px"
                    />
                </div>
            </div>
        </div>
    );
};
