import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Container } from 'react-bootstrap';

export default function Projects(props) {
    useEffect(() => {
        document.title= "Kris1803 Portfolio";

    }, []);


    return (
        <>
            <Navbar />
            <Container fluid className="text-center">
                <h1>Projects</h1>
                <h6>Portfolio accessible at: <a href='https://github.com/kris1803/portfolio'  target='_blank' rel="noreferrer"  >Github</a></h6>
                <Link to='/'>Go Home</Link>
                <Link to='/hard-skills' >Go to skills.</Link>
            </Container>
        </>
    );
}