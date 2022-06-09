import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import styles from '../styles/main.module.css';
import MyNavbar from "./components/Navbar";
import projects from '../data/projects.json';
import Error from './Error';

export default function SeeProject(): JSX.Element {
   let params = useParams();
   let projectCount :number = projects.length;
   if (!params.id) {
      return <Error />;
   }
   let id: number = parseInt(params.id) - 1;
   if (id > projectCount || id < 0 || isNaN(id)) {
      return (<Error />)
   }
   // picking the right project from the json file
   let project = projects[id];

   return (
      <Container fluid className={'m-0 p-0 min-vh-100 d-flex flex-column ' + styles.pagebackground} >
         <MyNavbar />
         <Container fluid style={{ flex: 1 }} className="d-flex flex-column align-items-center justify-content-center mt-3 p-0 m-0">
            {/* main content white box */}
            <Row className='mx-0 mb-3 p-0 w-100 bg-white' style={{ maxWidth: 1280, borderRadius: 40 }}>
               <Col xs={12} className='d-flex justify-content-center align-items-center' style={{ height: 80, backgroundColor: '#eee', borderRadius: 40 }}>
                  <h3 className='m-0 p-0'>{project.name}</h3>
               </Col>
               <Col xs={12} className='mt-3 mb-3'>
                  <Row className='m-0 p-0 flex-row-reverse'>
                     <Col xs={12} lg={6}>
                        <img src={project.img} className='img-fluid rounded-3' alt='Project screenshot' />
                     </Col>
                     <Col xs={12} lg={6} className='pt-3 pb-3 d-flex align-items-center'>
                        <p style={{ fontSize: 14 }}>{project.description}</p>
                     </Col>
                     <Col xs={12} className='mt-3 mb-3'>
                        <div className='d-flex'>
                           <img src='/img/assets/language.png' alt='' className='me-2' /><p className='m-0 p-0' >Language : {project.lang}</p>
                        </div>
                        <div className='d-flex mt-3'>
                           <img src='/img/assets/stack.png' alt='' className='me-2' />
                           <p className='m-0 p-0'>Technologies : {project.stack.join(', ')}</p>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Container>
      </Container>
   )
}