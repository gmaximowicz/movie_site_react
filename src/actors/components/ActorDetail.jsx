import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Card from 'react-bootstrap/lib/Card';

function ActorDetail(props) {
  const aliases = props.aliases ? props.aliases : "no aliases";
  return(
    <Container>
      <Row>
        <Col>
          <h3>Actor Detail</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Title>Full Name: {props.name.first} {props.name.last}</Card.Title>
            <Card.Subtitle>
               Aliases: {aliases}
            </Card.Subtitle>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Movies as Actor/actress</p>
          <ListGroup>
            {
              props.moviesAsActor.map((movie) => (
                <ListGroup.Item key={movie.id}>{movie.title}</ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
        <Col>
          <p>Movies As Director</p>
            <ListGroup>
              {
                props.moviesAsDirector.map((movie) => (
                  <ListGroup.Item key={movie.id}>{movie.title}</ListGroup.Item>
                ))
              }
            </ListGroup>
        </Col>
        <Col>
          <p>Movies as Producer</p>
            <ListGroup>
              {
                props.moviesAsProducer.map((movie) => (
                  <ListGroup.Item key={movie.id}>{movie.title}</ListGroup.Item>
                ))
              }
            </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ActorDetail;
