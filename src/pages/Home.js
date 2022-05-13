import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

export default function Home(props) {
    useEffect(() => {
        document.title= "Kris1803 Portfolio";

    }, []);

    return (
        <>
            <Navbar />
            <Container fluid className="text-center">
                <h1>Home</h1>
                <Link to='/hard-skills' >Go</Link>
            </Container>
        </>
    );
}