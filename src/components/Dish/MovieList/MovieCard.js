import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const MovieCard = ({ poster, title, overview, submitter }) => {
  return (
    <Grid container item xs={12} sm={4}>
      <Card>
        <CardMedia
          component="img"
          alt={title}
          width={200}
          image={poster}
          title={title}
        />
        <CardContent>
          <Typography gutterButtom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
};

export default MovieCard;
