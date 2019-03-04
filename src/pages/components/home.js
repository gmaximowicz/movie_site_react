import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

function Home (){
  return (
    <Container>
      <Row>
        <Col>
          <h3>Welcome to the movies site, a simple site for view movies and actors</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button href="/movies" variant="primary" size="lg" block>
            View Movies
          </Button>
        </Col>
        <Col>
          <Button href="/actors" variant="secondary" size="lg" block>
            View Actors
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
