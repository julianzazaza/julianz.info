import React, { useState, useEffect } from "react";
import { MovieWrapper, ButtonWrapper } from "./index.style";
import Grid from "@material-ui/core/Grid";
import movies from "./movies";
import MovieCard from "./MovieCard";
import FocusedMovie from "./FocusedMovie";

const MovieList = () => {
  // Hooks
  const [movieList, setMovieList] = useState(movies);
  const [submitterFilter, setSubmitterFilter] = useState(null);
  const [seenFilter, setSeenFilter] = useState(null);
  const uniqueSubmitters = movies
    .map((m) => m.submitter)
    .filter((s, idx) => movies.map((m) => m.submitter).indexOf(s) === idx);
  const focusedMovie = movies.filter((m) => m.queue);

  // useEffect pog
  useEffect(() => {
    if (seenFilter != null && submitterFilter != null) {
      setMovieList(
        movies.filter(
          (m) =>
            (seenFilter ? m.watched : !m.watched) &&
            m.submitter === submitterFilter
        )
      );
    } else {
      if (seenFilter != null) {
        setMovieList(
          movies.filter((m) => (seenFilter ? m.watched : !m.watched))
        );
      } else if (submitterFilter != null) {
        setMovieList(movies.filter((m) => m.submitter === submitterFilter));
      }
    }
  }, [submitterFilter, seenFilter]);

  // Handlers
  const handleUnseenFilter = () => {
    setSeenFilter(false);
  };
  const handleWatchedFilter = () => {
    setSeenFilter(true);
  };
  const handleClearFilters = () => {
    setSeenFilter(null);
    setSubmitterFilter(null);
    setMovieList(movies);
  };
  const handleSubmitterFilter = (e) => {
    setSubmitterFilter(e.target.value);
  };

  return (
    <MovieWrapper>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6}>
          <center>
            <h2>
              <span>Seen</span>
            </h2>
            <h1>{movies.filter((m) => m.watched).length}</h1>
          </center>
        </Grid>
        <Grid item xs={12} sm={6}>
          <center>
            <h2>
              <span>Unseen</span>
            </h2>
            <h1>{movies.filter((m) => !m.watched).length}</h1>
          </center>
        </Grid>
      </Grid>
      {focusedMovie && (
        <FocusedMovie
          title={focusedMovie[0].title}
          contributor={focusedMovie[0].submitter}
          overview={focusedMovie[0].overview}
          poster={focusedMovie[0].poster}
        />
      )}
      <div>
        <h2>
          <span>Filter by Seen</span>
        </h2>
        <ButtonWrapper onClick={handleClearFilters}>All</ButtonWrapper>
        <ButtonWrapper onClick={handleWatchedFilter}>Seen</ButtonWrapper>
        <ButtonWrapper onClick={handleUnseenFilter}>Unseen</ButtonWrapper>
      </div>
      <div>
        <h2>
          <span>Filter By Contributor</span>
        </h2>
        {uniqueSubmitters.map((m) => (
          <ButtonWrapper onClick={handleSubmitterFilter} value={m}>
            {m}
          </ButtonWrapper>
        ))}
      </div>
      {seenFilter !== submitterFilter && (
        <h4>
          {seenFilter !== null && <span>Seen: {seenFilter.toString()}</span>}{" "}
          {submitterFilter !== null && (
            <span>Submitter: {submitterFilter}</span>
          )}
        </h4>
      )}
      {movieList.length === 0 && (
        <p>No movies found with the chosen filters.</p>
      )}
      <br />
      <br />
      <Grid
        container
        justify="center"
        direction="row"
        alignItems="flex-start"
        spacing={2}
      >
        {movieList.map((m) => (
          <MovieCard
            title={m.title}
            poster={m.poster}
            overview={m.overview}
            contributor={m.submitter}
          />
        ))}
      </Grid>
    </MovieWrapper>
  );
};

export default MovieList;
