import React, { Component } from 'react';
import Card from 'react-bootstrap/lib/Card';

function Movie(props) {
  return (
    <Card>
      <Card.Title>Movie: {props.title}</Card.Title>
      <Card.Subtitle>
         Year of release: {props.releaseYearRoman}
      </Card.Subtitle>
      <Card.Link href={'/movies/' + props.id}>View entire data</Card.Link>
    </Card>
  )
}

export default Movie;
