import Navbar from "./components/Navbar";
import { Container } from 'react-bootstrap';
import styles from '../styles/main.module.css';

export default function HardSkills(props) {

    /*
        Frontend:
            React (functional components)
            Redux
            React-router
            Jquery
            Bootstrap
            React-bootstrap
            React-Native (Expo)
            HTTPS (SSL)

        Backend:
            Node.js
            Express.js
            MongoDB
            Mongoose
            RESTful API
            Authentication
            Bcrypt
            MVC
            Express EJS views
            Sessions
            Token based authentication
            Websockets

        Production:
            - Heroku
            - Github Pages
            - Git & Github
            - Kanban
            - Raspberry pi
    */

    return (
        <Container fluid className={'m-0 p-0 min-vh-100 d-flex flex-column '+styles.pagebackground}>
            <Navbar />
            <Container fluid className="d-flex flex-row justify-content-center align-items-center">
                <h1>Hard Skills</h1>
                
            </Container>
        </Container>
    );
}