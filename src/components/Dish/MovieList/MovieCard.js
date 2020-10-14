import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { CardStyle } from "./index.style";
export const MovieCard = ({ poster, contributor, watched }) => {
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
