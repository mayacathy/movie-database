import Movie from '../Movie/Movie';
import style from './Movies.module.css';
import data from '../utils/constants/data';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function Movies() {
  const [movies, setMovies] = useState(data);

  function tambahFilm() {
    const movie = {
      id: nanoid(4),
      title: 'One Piece: Red',
      year: '2021',
      type: 'Movie',
      poster: 'https://picsum.photos/200/300?random=' + nanoid(2),
    };
    // copy and merge array
    setMovies([...movies, movie]);
  }
  return (
    <div className={style.container}>
      <section className={style.movies}>
        <h2 className={style.movies__title}>Latest Movies</h2>
        <div className={style.movie__container}>
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
