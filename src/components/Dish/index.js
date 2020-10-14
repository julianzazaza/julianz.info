import React from "react";
import MovieList from "./MovieList";
import Footer from "./Footer";
import { DishWrapper } from "./index.style";
import { Helmet } from "react-helmet";
import favicon from "./dishcord.ico";

const Dish = () => {
  document.title = "Dishcord Movie Nights";
  return (
    <DishWrapper>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <Helmet>
        <title>Dishcord Movie Nights</title>
        <meta
          name="description"
          content="Fun lil' web app to keep track of moves we watch."
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
      <MovieList />
      <Footer />
    </DishWrapper>
  );
};

export default Dish;
