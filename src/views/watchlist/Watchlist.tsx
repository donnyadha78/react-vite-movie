import { Container } from '@app/components/common';
import { MovieList } from '@app/components/main';
import { numberWithCommas } from '@app/helpers';
import { useDocumentTitle } from '@app/hooks';
import { IRootState } from '@app/types/types';
import React from 'react';
import { useSelector } from 'react-redux';

const Watchlist = () => {
  useDocumentTitle('My Watchlist');
  const watchlist = useSelector((state: IRootState) => state.watchlist);

  return (
    <>
      {watchlist.length >= 1 ? (
        <Container>
          <div className="movie__header">
            <div className="movie__header-title">
              <h1>My WatchList Movies</h1>
              <h3>{numberWithCommas(watchlist.length)} Movies</h3>
            </div>
          </div>
          <MovieList
            category="movie"
            movies={watchlist}
          />
        </Container>
      ) : (
        <div className="error">
          <h1>You Don't Have Watchlist</h1>
          <p>Click the List icon on the movie card to add it to watchlist</p>
        </div>
      )}
    </>
  );
};

export default Watchlist;
