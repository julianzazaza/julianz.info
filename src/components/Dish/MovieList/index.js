import React from "react";
import { MovieWrapper } from "./index.style";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import movies from "./movies";
import MovieCard from "./MovieCard";
import moment from "moment-timezone";
import FocusedMovie from "./FocusedMovie";

const MovieList = () => {
  const movieList = movies;

  const hasItBeenSeen = (movie) => {
    const showtime = moment.utc(movie.showtime, "MMMM Do YYYY");
    const localShowtime = showtime.local();
    if (moment().isAfter(localShowtime)) return true;
    else return false;
  };

  const seenMovieList = movieList.filter((m) => hasItBeenSeen(m));
  const unseenMovieList = movieList.filter((m) => !hasItBeenSeen(m));
  return (
    <MovieWrapper>
      <Accordion className="already-watched-accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Typography variant="h4">
            Already Watched ({seenMovieList.length})
          </Typography>
        </AccordionSummary>
        <Grid
          container
          justify="left"
          direction="row"
          alignItems="flex-start"
          spacing={2}
        >
          {seenMovieList.map((m) => (
            <MovieCard
              title={m.title}
              poster={m.poster}
              overview={m.overview}
              contributor={m.submitter}
              showtime={m.showtime}
              watched
            />
          ))}
        </Grid>
      </Accordion>
      <Accordion className="already-watched-accordion" expanded>
        <AccordionSummary>
          <Typography variant="h4">
            Coming Soon ({unseenMovieList.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justify="center" direction="row" xs={12}>
            <FocusedMovie
              title={unseenMovieList[47].title}
              contributor={unseenMovieList[47].submitter}
              overview={unseenMovieList[47].overview}
              poster={unseenMovieList[47].poster}
            />
          </Grid>
        </AccordionDetails>
        <Grid
          container
          justify="center"
          direction="row"
          alignItems="flex-start"
          spacing={2}
        >
          {unseenMovieList.map((m) => (
            <MovieCard
              title={m.title}
              poster={m.poster}
              overview={m.overview}
              contributor={m.submitter}
              showtime={m.showtime}
            />
          ))}
        </Grid>
      </Accordion>
    </MovieWrapper>
  );
};

export default MovieList;
