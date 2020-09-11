import React from "react";
import { HeaderStyle } from "./index.style";
import Typography from "@material-ui/core/Typography";

export const Header = () => {
  return (
    <HeaderStyle>
      <Typography gutterBottom variant="h4" component="h2">
        Heyo Dishcord!
      </Typography>
      <Typography gutterBottom variant="body" component="p">
        Every week (ish), we try to coordinate movie nights where we all gather
        together virtually to watch a movie in the Discord. Below are all the
        movies on the list.
      </Typography>
    </HeaderStyle>
  );
};

export default Header;
