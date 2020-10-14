import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { CardStyle } from "./index.style";
export const MovieCard = ({
  poster,
  title,
  overview,
  contributor,
  showtime,
  watched,
}) => {
  return (
    <Grid container item xs={12} sm={4}>
      <CardStyle watched={watched} poster={poster}>
        <div className="card-text">
          <h3>{contributor}</h3>
        </div>
      </CardStyle>
    </Grid>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  showtime: PropTypes.string.isRequired,
  watched: PropTypes.bool,
};

MovieCard.defaultProps = {
  watched: false,
};
export default MovieCard;
