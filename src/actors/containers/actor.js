import React, { Component } from 'react';
import ActorDetail from '../components/ActorDetail.jsx'

class Actor extends Component {
  id = this.props.match.params.id;
  state = {
    name : {
      first : "",
      last : ""
    },
    aliases : "",
    moviesAsActor : [],
    moviesAsDirector : [],
    moviesAsProducer : []
  }
  componentDidMount(){
    fetch(`http://localhost:3000/api/persons/${this.id}`)
      .then(result => result.json())
      .then(actor => this.setState({ ...actor }))
  }
  render() {
    return(
      <ActorDetail {...this.state} />
    )
  }
}

export default Actor;
