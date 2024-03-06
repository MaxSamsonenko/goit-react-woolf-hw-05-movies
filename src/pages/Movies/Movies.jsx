import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';

import { fetchMoviesByQuery } from '../../services/api';

import MoviesList from 'components/MoviesList';
import Pagination from 'components/Pagination';

import { IoSearch } from 'react-icons/io5';

import { Wrapper, Form, FormWrapper, Input, SubmitBtn } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userQuery = queryParams.get('query');
  const pageFromURL = parseInt(queryParams.get('page') || '1', 10);

  useEffect(() => {
    setQuery(userQuery || '');
    setPage(pageFromURL);
  }, [pageFromURL, userQuery]);

  useEffect(() => {
    if (userQuery) {
      getPopularMovies();
    }
    async function getPopularMovies() {
      try {
        const result = await fetchMoviesByQuery(userQuery, page);
        setMovies(result.results);
        setTotalPages(Math.min(result.total_pages, 500));
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Something went wrong please try again later');
      }
    }
  }, [page, userQuery]); // Depend on searchTerm and page

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    setPage(1);
    navigate(`/movies?query=${query}&page=1`);
  };

  const handlePageChange = newPage => {
    setPage(newPage);
    navigate(`/movies?query=${query}&page=${newPage}`);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query} // Ensure the input displays the current query
            onChange={handleQueryChange}
          />
          <SubmitBtn type="submit">
            <IoSearch />
          </SubmitBtn>
        </FormWrapper>
      </Form>

      <MoviesList moviesList={movies} currentPage={page} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default Movies;
