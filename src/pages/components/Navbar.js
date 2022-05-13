import { Container, Navbar } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from "react-router-dom";

export default function MyNavbar() {
   return (
      <Container fluid>
         <div className="row justify-content-center bg-dark shadow">
            <div className="col-12 col-lg-8">
               <nav className="navbar navbar-expand-lg navbar-dark">
                  <Container fluid>
                     <LinkContainer to='/'>
                        <Navbar.Brand className="navbar-brand" >Kris1803</Navbar.Brand>
                     </LinkContainer>
                     <Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </Navbar.Toggle>
                     <Navbar.Collapse className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav me-auto">
                           <Link className="nav-link" aria-current="page" to="/projects">Projects</Link>
                           <Link className="nav-link" to="/hard-skills">HardSkills</Link>
                        </div>
                        <div className="navbar-nav py-1">
                           <a className="nav-link text-decoration-none p-0" href="https://github.com/kris1803" target='_blank' rel="noreferrer" >
                              <img src="https://avatars.githubusercontent.com/u/78277770?v=4" className="rounded-circle" alt="Kris1803" width="40" height="40" />
                           </a>
                        </div>
                     </Navbar.Collapse>
                  </Container>
               </nav>
            </div>
         </div>
      </Container>
   );
}