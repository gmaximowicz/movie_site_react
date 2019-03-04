import React, { Component } from 'react';
import MovieDetail from '../components/MovieDetail.jsx'

class Movie extends Component {
  id = this.props.match.params.id;
  state = {
    title : "",
    releaseYearRoman : "",
    casting : [],
    directors : [],
    producers : []
  }
  componentDidMount(){
    fetch(`http://localhost:3000/api/movies/${this.id}`)
      .then(result => result.json())
      .then(movie => this.setState({ ...movie }))
  }
  render() {
    return(
      <MovieDetail {...this.state} />
    )
  }
}

export default Movie;
