import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Using async function and await
  async function fetchMoviesList() {
    setIsLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    const transformedMovies = data.results.map(movieData =>  {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        userId: movieData.opening_crawl,
        completed: movieData.release_date
      };
    });
    setMovies(transformedMovies);
    setIsLoading(false);
  }


  // function fetchMoviesList() {
  //   fetch('https://swapi.dev/api/films').then(response => {
  //     return response.json()
  //   }).then(data => {
  //     const transformedMovies = data.results.map(movieData =>  {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   })
  // }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesList}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length === 0 && <p>Found no movies...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
