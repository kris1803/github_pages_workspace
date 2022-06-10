import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from "react-router-dom";

export default function MyNavbar() {
   return (
      <Container fluid as={'header'}>
         <Row className="justify-content-center bg-dark shadow">
            <Col xs={12} lg={8} >
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Container>
                     <LinkContainer to='/'>
                        <Navbar.Brand className="navbar-brand" >Kris</Navbar.Brand>
                     </LinkContainer>
                     <Navbar.Toggle
                       aria-controls="responsive-navbar-nav" />
                     <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                           <Link className="nav-link" aria-current="page" to="/projects">Projects</Link>
                           <Link className="nav-link" to="/hard-skills">HardSkills</Link>
                           <Link className="nav-link" to="/about">About</Link>
                        </Nav>
                     
                        <Nav className="navbar-nav py-1">
                           <a className="nav-link text-decoration-none p-0" href="https://github.com/kris1803" target='_blank' rel="noreferrer" >
                              <img src="https://avatars.githubusercontent.com/u/78277770?v=4" className="rounded-circle" alt="Kris1803" width="40" height="40" />
                           </a>
                        </Nav>
                     </Navbar.Collapse>
                  </Container>
               </Navbar>
            </Col>
         </Row>
      </Container>
   );
}