import { Container, Navbar } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from "react-router-dom";

export default function MyNavbar() {
   return (
      <Container fluid>
         <div class="row justify-content-center bg-success shadow">
            <div class="col-12 col-lg-8">
               <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                  <div class="container-fluid">
                     <LinkContainer to='/'>
                        <Navbar.Brand class="navbar-brand" >ProvinceSell <span class="text-warning">(Beta)</span></Navbar.Brand>
                     </LinkContainer>
                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav me-auto">
                           <Link class="nav-link" aria-current="page" to="/all">Обьявления</Link>
                           <Link class="nav-link" to="/about">Как это работает</Link>
                        </div>
                        <div class="navbar-nav py-1">
                           <a class="nav-link text-decoration-none p-0" href="/users/">
                              Мой аккаунт</a>
                        </div>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
      </Container>
   );
}