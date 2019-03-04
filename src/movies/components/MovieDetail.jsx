import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Card from 'react-bootstrap/lib/Card';

function MovieDetail(props) {
  return(
    <Container>
      <Row>
        <Col>
          <h3>Movie Detail</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Title>Title: {props.title}</Card.Title>
            <Card.Subtitle>
               Year of release: {props.releaseYearRoman}
            </Card.Subtitle>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Casting</p>
          <ListGroup>
            {
              props.casting.map((actor) => (
                <ListGroup.Item key={actor.id}>{actor.name.first} {actor.name.last}</ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
        <Col>
          <p>Directors</p>
            <ListGroup>
              {
                props.casting.map((actor) => (
                  <ListGroup.Item key={actor.id}>{actor.name.first} {actor.name.last}</ListGroup.Item>
                ))
              }
            </ListGroup>
        </Col>
        <Col>
          <p>Producers</p>
            <ListGroup>
              {
                props.casting.map((actor) => (
                  <ListGroup.Item key={actor.id}>{actor.name.first} {actor.name.last}</ListGroup.Item>
                ))
              }
            </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetail;
