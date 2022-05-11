import { Container } from "react-bootstrap";

export default function Nav() {
   return (
      <Container fluid>
         <div class="row justify-content-center bg-success shadow">
            <div class="col-12 col-lg-8">
               <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                  <div class="container-fluid">
                     <a class="navbar-brand" href="/">ProvinceSell <span class="text-warning">(Beta)</span></a>
                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav me-auto">
                           <a class="nav-link" aria-current="page" href="/all">Обьявления</a>
                           <a class="nav-link" href="/about">Как это работает</a>
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