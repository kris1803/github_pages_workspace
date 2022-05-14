import { useEffect } from "react";
import { Container } from 'react-bootstrap';
import Navbar from "./components/Navbar";
import styles from '../styles/main.module.css'
import projects from '../data/projects.json';

export default function Projects(props) {

    useEffect(() => {
        console.log(projects[0].name)
    }, []);


    return (
        <Container fluid className={'m-0 p-0 min-vh-100 d-flex flex-column '+styles.pagebackground} >
            <Navbar />
            <Container fluid className="text-center pt-5 m-0 p-0" style={{ flex: 1 }}>
                <h1>Projects</h1>
                <h6>Portfolio accessible at: <a href='https://github.com/kris1803/portfolio'  target='_blank' rel="noreferrer"  >Github</a></h6>
                
            </Container>
        </Container>
    );
}