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
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Daniel Cordeiro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <div className="main-logo">
        <img src={logo} alt="" />
      </div>
      <div className="main-Header">
        <div className="main-Header-filtro">
          <div className="main-title">
            <h1>
              Assista o video e descubra o metódo para operar no mercado
              financeiro da forma mais{" "}
              <h1 style={{ color: "#29D420", letterSpacing: "3px" }}>
                SIMPLES E SEGURA
              </h1>{" "}
              utilizando os mesmos sinais que eu e meus alunos estamos usando
              para lucrar todos os dias.
            </h1>
          </div>
          <div className="header-video">
            <iframe
              width="320"
              src="https://www.youtube.com/embed/Wp9tTnGAIR4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ borderRadius: "15px" }}
            ></iframe>
          </div>{" "}
          <div>
            <Button
              text="Quero ter acesso ao conteúdo do video"
              color="#29D420"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
