import { Container } from "react-bootstrap"
import MyNavbar from "./components/Navbar"
import styles from '../styles/main.module.css'

export default function Error(props) {

   return (
      <Container fluid className={'m-0 p-0 min-vh-100 d-flex flex-column '+styles.pagebackground} >
         <MyNavbar />
         
            <h1 style={{ textAlign: 'center', marginTop: 50 }} >
               Sorry... Page was not found.
            </h1>
         
      </Container>
   )
}