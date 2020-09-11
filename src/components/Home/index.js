import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import logo from "./logo.png";
import {
  HomeTitle,
  HomeLogo,
  HomeBody,
  HomeWrapper,
  HomeGrid,
} from "./index.style";

const nicknames = ["Juju", "Julen", "Beep Boop Computer Man"];

const Home = () => {
  const [nickname, setNickname] = useState(null);

  useEffect(() => {
    setNickname(nicknames[Math.floor(Math.random() * nicknames.length)]);
  }, []);

  return (
    <HomeWrapper>
      <HomeGrid>
        <Grid container>
          <Grid xs={12} sm={5}>
            <HomeLogo src={logo} width={275} />
          </Grid>
          <Grid xs={12} sm={7}>
            <HomeTitle>
              Hello!
              <br />
              I'm Julian Zabala.
            </HomeTitle>
            <HomeBody>
              <h3>Some people call me {nickname}.</h3>
              <p>
                I'm a software engineer obsessed with cameras, keyboards, and my
                cat.
              </p>
              <h5>
                <a href="https://www.linkedin.com/in/jzabala/">LinkedIn </a>
              </h5>
              <h5>
                <Link to={{ pathname: "/art" }}>Photo Projects</Link>
              </h5>
              <h5>
                <a href="https://www.youtube.com/watch?v=5oVLvP8wAqU">
                  Short Films
                </a>
              </h5>
              <h5>
                <Link to={{ pathname: "/dish" }}>
                  Project: Dishcord Movie Nights
                </Link>
              </h5>
            </HomeBody>
          </Grid>
        </Grid>
      </HomeGrid>
    </HomeWrapper>
  );
  //     return (<div>      <div class="logo">
  //     <img src="public/logo-color.png" />
  //   </div>
  //   <div class="right-text">
  //     <h1>Hello! I'm Julian Zabala.</h1>
  //     <h3>
  //       Some people call me <span id="nickname"></span>.
  //     </h3>
  //     <p>
  //       I'm a software engineer obsessed with cameras, keyboards, and my cat.
  //     </p>
  //     <h5>
  //       <a href="https://www.linkedin.com/in/jzabala/">
  //         Professional Worky-Work Beep Boop Stuff
  //       </a>
  //     </h5>
  //     <h5>
  //       <a href="https://codejulen.github.io/art">To See With My Eyes</a>
  //     </h5>
  //     <h5>
  //       <a href="https://www.instagram.com/marble_tofu/">My Favorite Cat</a>
  //     </h5>
  //     <h5>
  //       <a href="https://www.youtube.com/watch?v=5oVLvP8wAqU">
  //         Inner Monologuing On The Outside
  //       </a>
  //     </h5>
  //     <h5>
  //       <a href="https://codejulen.github.io/dish">Dishcord Movie Nights</a>
  //     </h5>
  //   </div>)
};

export default Home;
