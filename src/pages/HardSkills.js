import Navbar from "./components/Navbar";
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/main.module.css';

export default function HardSkills(props) {

    const frontend = [
        'React (functional components)',
        'Redux',
        'React-Bootstrap',
        'Jquery',
        'React-Native (Expo)'
    ];
    const backend = [
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
    ]
    const production = [
        'Git & Github',
        'Github pages',
        'Heroku',
        'Netlify',
        'Vercel',
        'Kanban Agile',
        'Raspberry Pi',
    ]
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
        <Container fluid className={'m-0 p-0 min-vh-100 d-flex flex-column ' + styles.pagebackground}>
            <Navbar />
            <Container fluid className="mt-5 p-0 d-flex flex-column justify-content-center align-items-center">
                <Row className='w-100' >
                    <Col xs={12} className="text-center mb-3">
                        <h1>Hard Skills</h1>
                    </Col>
                    <Col xs={12} lg={6} className='text-center' >
                        <h3>Frontend</h3>
                        {frontend.map((skill, index) => {
                            return (
                                <p key={index} className='fw-bold'>{skill}</p>
                            )
                        })}
                    </Col>
                    <Col xs={12} lg={6} className='text-center' >
                        <h3>Backend</h3>
                        {backend.map((skill, index) => {
                            return (
                                <p key={index} className='fw-bold'>{skill}</p>
                            )
                        })}
                    </Col>
                    <Col xs={12} className="text-center mb-3">
                        <h3>Production</h3>
                        {production.map((skill, index) => {
                            return (
                                <p key={index} className='fw-bold'>{skill}</p>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}