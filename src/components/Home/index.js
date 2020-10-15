import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Julian Zabala</title>
        <meta
          name="description"
          content="An app worth telling your friends about"
        />
        <link rel="icon" type="image/png" href={logo} sizes="16x16" />
      </Helmet>
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
                <Link to={{ pathname: "/art" }}>
                  Clicky-Clack Photo Portfolio
                </Link>
              </h5>
              <h5>
                <a href="https://vimeo.com/toseewithmyeyes">
                  Inner Monologuing On The Outside
                </a>
              </h5>
              <h5>
                <Link to={{ pathname: "/dish" }}>
                  Movie Nights: A Dishcord Project
                </Link>
              </h5>
              <h5>
                <a href="https://www.linkedin.com/in/jzabala/">🔗 LinkedIn</a>
              </h5>
              <h5>
                <a href="https://www.instagram.com/julianzazaza">
                  ❤️ Instagram
                </a>
              </h5>
              <h5>
                <a href="https://github.com/codejulen">⭐ Github</a>
              </h5>
              <h5>
                <a href="mailto:julian@toseewithmyeyes.com">📧 Email</a>
              </h5>
            </HomeBody>
          </Grid>
        </Grid>
      </HomeGrid>
    </HomeWrapper>
  );
};

export default Home;
