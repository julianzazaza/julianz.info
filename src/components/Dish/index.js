import React from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Footer from "./Footer";
import { DishWrapper } from "./index.style";
const Dish = () => {
  return (
    <DishWrapper>
      <Header />
      <MovieList />
      <Footer />
    </DishWrapper>
  );
};

export default Dish;
