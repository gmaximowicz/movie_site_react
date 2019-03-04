import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Movie from '../../movies/components/movie'

class Movies extends Component{
  state = {
    movies : []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies : data }))
  }

  render(){
    return (
      <Container>
        <h1>List of movies</h1>
        {
          this.state.movies.map((movie) => (
            <Movie
              {...movie}
              key={movie.id}
              />
          ))
        }
      </Container>
    )
  }
}

export default Movies;
