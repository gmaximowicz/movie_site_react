import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Actor from '../../actors/components/actor'

class Actors extends Component{
  state = {
    actors : []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/persons')
      .then(response => response.json())
      .then(data => this.setState({ actors : data }))
  }
  render() {
    return (
      <Container>
        <h1>List of actors</h1>
        {
          this.state.actors.map((actor) => (
            <Actor
              {...actor}
              key={actor.id}
              />
          ))
        }
      </Container>
    )
  }
}

export default Actors;
