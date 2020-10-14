import React from "react";
import moment from "moment-timezone";
import PropTypes from "prop-types";
import { Grid, Paper, CardMedia, Typography } from "@material-ui/core";
import { FocusedWrapper } from "./index.style";
export const FocusedMovie = ({ poster, title, overview, contributor }) => {
  var dateFormat = "MMMM Do YYYY, h:mm a";
  var showtimeTime = moment.utc(
    "October 10 2020, 2:00",
    "MMMM Do YYYY, h:mm a"
  );
  var localDate = showtimeTime.local();
  var duration = moment.duration(showtimeTime).subtract(moment());
  return (
    <FocusedWrapper>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3}>
          <CardMedia component="img" image={poster} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <h1>{title}</h1>
          <h2>
            {localDate.format(dateFormat)} (that's in {duration.humanize()}
            !)
          </h2>
          <span>{overview}</span>
          <p>Thanks for submitting this one, {contributor}!</p>
        </Grid>
      </Grid>
    </FocusedWrapper>
  );
};

FocusedMovie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
};

export default FocusedMovie;
