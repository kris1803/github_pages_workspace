import React, { useMemo } from "react";
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import Navbar from "./components/Navbar";
import styles from '../styles/main.module.css'
import projects from '../data/projects.json';
import { Link } from "react-router-dom";

export default function Projects() {

   const projectComponents = useMemo( () => {
      return projects.map((project, index) => {
         let description = project.description.slice(0, 100)+'...';
         return (
            <Col xs={12} sm={6} md={4} xl={3} key={index}>
               <Card className="mb-3">
                  <div className="ratio ratio-16x9">
                     <Card.Img variant="top" src={project.img} alt='project screenshot' />
                  </div>
                  <Card.Body>
                     <Card.Title>{project.name}</Card.Title>
                     <Card.Text className="m-0 p-0" >{description}</Card.Text>
                     <Card.Text ><span className="fw-bold">Language:</span> {project.lang}</Card.Text>
                     <Link to={'/project/'+(index+1)}>
                        <Button variant="outline-success" >Open</Button>
                     </Link>
                  </Card.Body>
               </Card>
            </Col>
         )
      });
   }, [])

   return (
      <Container fluid className={'m-0 p-0 min-vh-100 d-flex flex-column ' + styles.pagebackground} >
         <Navbar />
         <Container fluid className="text-center pt-5 m-0 p-0 d-flex flex-column align-items-center" style={{ flex: 1 }}>
            <h1>Projects</h1>
            <h6>Portfolio accessible at: <a href='https://github.com/kris1803' target='_blank' rel="noreferrer"  >Github</a></h6>
            <Row className="m-0 p-0 mt-3 justify-content-center">
               <Col xs={12} md={10} lg={10} xl={9} >
                  <Row className="m-0 p-0 justify-content-center">
                     {projectComponents}
                  </Row>
               </Col>
            </Row>
         </Container>
      </Container>
   );
}