import MyNavbar from "./components/Navbar";
import { Container } from 'react-bootstrap';
import styles from '../styles/main.module.css';

export default function About(props) {

   return (
      <Container fluid className={'m-0 p-0 min-vh-100 d-flex flex-column '+styles.pagebackground} >
         <MyNavbar />
         <Container fluid className="text-center pt-5 m-0 p-0" style={{ flex: 1 }}>
            <h1>
               About me
            </h1>
         </Container>
      </Container >
   )
}