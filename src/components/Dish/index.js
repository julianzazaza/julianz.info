import React from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Footer from "./Footer";
import { DishWrapper } from "./index.style";
import { Helmet } from "react-helmet";
import favicon from "./dishcord.ico";
const Dish = () => {
  document.title = "Dishcord Movie Nights";
  return (
    <DishWrapper>
      <Helmet>
        <title>Dishcord Movie Nights</title>
        <meta
          name="description"
          content="Fun lil' web app to keep track of moves we watch."
        />
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
      <Header />
      <MovieList />
      <Footer />
    </DishWrapper>
  );
};

export default Dish;
