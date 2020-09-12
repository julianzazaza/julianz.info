import React from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Footer from "./Footer";
import { DishWrapper } from "./index.style";
const Dish = () => {
  document.title = "Dishcord Movie Nights";
  return (
    <DishWrapper>
      <Header />
      <MovieList />
      <Footer />
    </DishWrapper>
  );
};

export default Dish;
