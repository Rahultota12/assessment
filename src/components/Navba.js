import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navba.css'
import top from '../images/top.png'
import star from '../images/star.png'
function Navba() {
  return (
    <>
      <div>

   <div className='Nava1'>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EN - FR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='top-center'> Bienvenue sur P<img src= {top} className='top'/> <img src={star} alt="" className='star' /> NDA</Nav>
          <Nav className="ms-auto">
            <Nav.Link >Créer un compte</Nav.Link>
            <Nav.Link >Se connecter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
   <div className="nav2">
    
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> missions de pANDA</Nav.Link>
            <Nav.Link href="#link"> Fonctionnalités</Nav.Link>
            
            <Nav.Link href="#home"> experts</Nav.Link>
            <Nav.Link href="#link"> Organisations en Afrique</Nav.Link>
            
            <Nav.Link href="#home"> Offres d'emploi</Nav.Link>
            <Nav.Link href="#link"> Evénements à venir</Nav.Link>
            
            <Nav.Link href="#home">  Témoignages</Nav.Link>
            <Nav.Link href="#link"> Fondateurs</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
      </div>
    </>
  )
}

export default Navba
