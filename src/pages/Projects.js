import { useEffect } from "react";
import { Container, Card, Col, Row } from 'react-bootstrap';
import Navbar from "./components/Navbar";
import styles from '../styles/main.module.css'
import projects from '../data/projects.json';

export default function Projects(props) {

   const projectComponents = projects.map((project, index) => {
      let description = project.description.slice(0, 100)+'...';
      return (
         <Col xs={12} sm={6} md={4} xl={3} key={index}>
            <Card className="mb-3">
               <div className="ratio ratio-16x9">
                  <Card.Img variant="top" src={project.img} alt='project screenshot' />
               </div>
               <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
               </Card.Body>
            </Card>
         </Col>
      )
   });

   useEffect(() => {
      console.log(projects[0].name)
   }, []);


   return (
      <Container fluid className={'m-0 p-0 min-vh-100 d-flex flex-column ' + styles.pagebackground} >
         <Navbar />
         <Container fluid className="text-center pt-5 m-0 p-0 d-flex flex-column align-items-center" style={{ flex: 1 }}>
            <h1>Projects</h1>
            <h6>Portfolio accessible at: <a href='https://github.com/kris1803/portfolio' target='_blank' rel="noreferrer"  >Github</a></h6>

            <Row className="w-100 justify-content-center">
               <Col xs={12} md={10} lg={8} >
                  <Row className="w-100">
                     {projectComponents}
                  </Row>
               </Col>
            </Row>
         </Container>
      </Container>
   );
}