import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddTopRated from "../components/filterTopRated/index.jsx";

const TopRated = (props) => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['moviesTopRated', {id: movieId }],
    queryFn: getMovies,
  })

  const [rated, setRated] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => setRated(res.results))
  .catch(err => console.error(err));
      });
  

   const topMoviesQueries = useQueries({
      queries: movieIds.map((movieId) => {
        return {
          queryKey: ['movie', { id: movieId }],
          queryFn: getMovie,
        }
      })
    });

  if (isPending) {
    return <Spinner />
  }

    const movies = topMoviesQueries.map((q) => {
    q.data.ratedID = q.data.TopRated.map(g => g.id)
    return q.data
  });

   const toDo = () => true;

  if (isError) {
    return <h1>{error.message}</h1>
  }


  // Redundant, but necessary to avoid app crashing.
  const MovieTopRated = movies.filter(m => m.TopRated)
  localStorage.setItem('MovieTopRated', JSON.stringify(MovieTopRated))
    const isTopRated = (movieId) => MovieTopRated.some(m => m.id === movieId)

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(topRated) => {
        return <AddTopRated movie={topRated} />
      }}
    />
  );

};

export default TopRated;

