import logo from './logo.svg';
import './App.css';
import React from 'react';
import { v4 as uuid } from 'uuid';
import MoviesList from './MoviesList';

const moviesData = [
  { 'hasOscars': false, 'title': 'The Shawshank Redemption', 'director': 'Frank Darabont', 'rate': '9.3', 'id': 0 },
  { 'hasOscars': true, 'title': 'The Godfather', 'director': 'Francis Ford Coppola', 'rate': '9.2', 'id': 1 },
  { 'hasOscars': true, 'title': 'The Godfather: Part II', 'director': 'Francis Ford Coppola', 'rate': '9.0', 'id': 2 },
  { 'hasOscars': true, 'title': 'The Dark Knight', 'director': 'Christopher Nolan', 'rate': '9.0', 'id': 3 },
  { 'hasOscars': false, 'title': '12 Angry Men', 'director': 'Sidney Lumet', 'rate': '8.9', 'id': 4 }
];

class App extends React.Component {

  state = {
    movies: moviesData,
    title: '',
    director: '',
    hasOscars: false
  }

  addMovie = () => {
    const newMovie = { 'hasOscars': true, 'title': 'Interstellar', 'director': 'Christopher Nolan', 'rate': '8.6', 'id': 31 };
    // create a copy, push newMovie and assign the copy to the state
    // const newMoviesList = this.state.movies.slice();
    // newMoviesList.push(newMovie);
    this.setState((state, props) => ({
      movies: state.movies.concat(newMovie)
      // movies: newMovieList
    }))
  }

  // handleTitleChange = event => {
  //   console.log(event.target.value);
  //   this.setState({
  //     title: event.target.value
  //   })
  // }

  // handleDirectorChange = event => {
  //   console.log(event.target.value);
  //   this.setState({
  //     director: event.target.value
  //   })
  // }

  // this would be used in connection with handleCheckboxChange
  // handleChange = event => {
  //   // console.log(event.target);
  //   const { name, value } = event.target
  //   console.log(event.target);
  //   console.log(name);
  //   this.setState({
  //     [name]: value
  //   })
  // }


  handleChange = event => {
    // console.log(event.target);
    // const { name, value } = event.target
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  // handleCheckboxChange = event => {
  //   this.setState({
  //     hasOscars: event.target.checked
  //   })
  // }

  handleSubmit = event => {
    // prevent the default behaviour of the form -> sending the form to itself if no action
    // and reloading the page
    event.preventDefault();
    // we want to create a new movie with the user input 
    const { title, director, hasOscars } = this.state;
    const newMovie = {
      title: title,
      director,
      hasOscars,
      // adds a unique id 
      id: uuid()
    }
    this.setState((state, props) => ({
      movies: [newMovie, ...this.state.movies],
      title: '',
      director: '',
      hasOscars: false
    }))
    // console.log(newMovie);
  }

  render() {
    // const moviesList = this.state.movies.map(movie => (<li key={movie.id}>{movie.title}</li>))
    return (
      <div className="App">
        <h1>Movies</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="director">Director</label>
          <input
            type="text"
            name="director"
            id="director"
            value={this.state.director}
            onChange={this.handleChange}
          />
          <label htmlFor="hasOscars">has Oscars</label>
          <input
            type="checkbox"
            name="hasOscars"
            id="hasOscars"
            checked={this.state.hasOscars}
            onChange={this.handleChange}
          // onChange={this.handleCheckboxChange}
          />
          <button type='submit'>Add a movie</button>
        </form>


        {/* <button onClick={this.addMovie}>Add a movie</button> */}
        {/* <ul>
          {moviesList}
        </ul> */}
        {/* // if there are no movies in the state display a message */}
        {this.state.movies.length === 0 && <h2>No movies to display</h2>}
        <MoviesList movies={this.state.movies} />

      </div>
    )
  }
}

export default App;
