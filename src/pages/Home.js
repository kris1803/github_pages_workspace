import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Container } from 'react-bootstrap';
import styles from '../styles/main.module.css';

export default function Home(props) {
   useEffect(() => {
      document.title = "Kristians Portfolio";

   }, []);

   return (
      <Container fluid className={'m-0 p-0 min-vh-100 d-flex flex-column '+styles.pagebackground} >
         <Navbar />
         <Container fluid style={{ flex:1 }} className="d-flex flex-column align-items-center p-0 m-0">
            <h1 className="mt-5">Home</h1>
            <h2>Kristians</h2>
            <h3>Javascript Fullstack Software Engineer</h3>
            <h3>Web & mobile</h3>
            <h5>React & React Native</h5>
            <h4>Focus on backend Node.js applications and servers.</h4>
         </Container>
      </Container>
   );
}