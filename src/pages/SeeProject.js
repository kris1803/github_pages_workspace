import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import styles from '../styles/main.module.css';
import MyNavbar from "./components/Navbar";
import projects from '../data/projects.json';
import Error from './Error';

export default function SeeProject(props) {
   let params = useParams();
   let projectCount = projects.length;
   let id = parseInt(params.id)-1;
   if (id > projectCount || id < 0) {
      return (<Error />)
   }
   let project = projects[id];


   return (
      <Container fluid className={'m-0 p-0 min-vh-100 d-flex flex-column ' + styles.pagebackground} >
         <MyNavbar />
         <Container fluid style={{ flex:1 }} className="d-flex flex-column align-items-center p-0 m-0">
            <h1>Seeproject page</h1>
            {JSON.stringify(project)}
         </Container>
      </Container>
   )
}