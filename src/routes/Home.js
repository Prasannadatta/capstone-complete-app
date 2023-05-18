import '../style/Style.css';
import React, { useEffect, useState } from 'react';
import NavBar from '.././components/NavBar';
import Footer from '.././components/Footer';
import DocumentCard from '.././components/DocumentCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useAuthHeader} from 'react-auth-kit';

function Home() {
  const [docs, setDocs] = useState([]);
  const authHeader = useAuthHeader()

  useEffect(() => {
    fetch('/api/docs')
      .then(response => response.json())
      .then(data => setDocs(data))
      .catch(error => console.error('Error fetching docs:', error));
  }, []);


  return (
    <div className="bg-main">
      <NavBar />
      {/* <Container className="upload-box">
        <div className="upload-button">
          <input type="file" />
        </div>
      </Container> */}
      <div>
            Hello {authHeader()}
        </div>
      <Container className="cards-container">
        <Row>
        {docs.map(doc => (
          <Col sm={6} md={3} lg={2}>
            <Card className="doc-card">
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title key={doc._id}>{doc._id}</Card.Title>
                <Button variant="primary card-button">Open</Button>
                <Button variant="dark card-button">Delete</Button>
              </Card.Body>
            </Card>
            {/* <DocumentCard /> */}
          </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
