import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movie}>
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                className={styles.movie__img}
              />
              <div>
                <h2 className={styles.movie__title}>
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{movie.year}</h3>
                <p>
                  {movie.summary.length > 235
                    ? `${movie.summary.slice(0, 235)}...`
                    : movie.summary}
                </p>
                <ul className={styles.movie__genres}>
                  {movie.hasOwnProperty('genres')
                    ? movie.genres.map((g) => <li key={g}>{g}</li>)
                    : null}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
