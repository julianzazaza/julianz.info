import React from "react";
import moment from "moment-timezone";
import PropTypes from "prop-types";
import { Grid, Paper, CardMedia, Typography } from "@material-ui/core";
import { FocusedWrapper } from "./index.style";

export const FocusedMovie = ({ poster, title, overview, contributor }) => {
  var dateFormat = "MMMM Do YYYY, h:mm a";
  var showtimeTime = moment.utc(
    "September 12 2020, 2:00",
    "MMMM Do YYYY, h:mm a"
  );
  var localDate = showtimeTime.local();
  var duration = moment.duration(showtimeTime).subtract(moment());
  return (
    <FocusedWrapper>
      <Paper elevation={3}>
        <h1>
          <span>Up Next</span>
        </h1>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <CardMedia component="img" image={poster} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <p>
              <Typography gutterBottom variant="body" component="h1">
                {title}
              </Typography>
              <Typography gutterBottom variant="body" component="h3">
                Showtime: {localDate.format(dateFormat)} (that's in{" "}
                {duration.humanize()}
                !)
              </Typography>
              <Typography gutterBottom variant="body" component="h4">
                Submitted By: {contributor}
              </Typography>
              <Typography gutterBottom variant="body" component="p">
                {overview}
              </Typography>
            </p>
          </Grid>
        </Grid>
      </Paper>
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
