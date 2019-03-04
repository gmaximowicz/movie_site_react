import React, { Component } from 'react';
import Card from 'react-bootstrap/lib/Card';

function Actor(props) {
  const aliases = props.aliases ? props.aliases : "no aliases";
  return (
    <Card>
      <Card.Title>Actor: {props.name.first} {props.name.last}</Card.Title>
      <Card.Subtitle>
         Aliases: {aliases}
      </Card.Subtitle>
      <Card.Link href={'/actors/' + props.id}>View entire data</Card.Link>
    </Card>
  )
}

export default Actor;
