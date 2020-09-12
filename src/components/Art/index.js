import React, { useState } from "react";
import Navigation from "./Navigation";
import PhotoSet from "./PhotoSet";
import { ArtWrapper } from "./index.style";
import { Helmet } from "react-helmet";
import logo from "./logo.png";

const Art = () => {
  const [photoBody, setPhotoBody] = useState("base");
  const onBodyChange = (value) => {
    setPhotoBody(value);
  };
  return (
    <ArtWrapper>
      <Helmet>
        <title>A Visual Diary</title>
        <meta name="description" content="Julian's Public Diary" />
        <link rel="icon" type="image/png" href={logo} sizes="16x16" />
      </Helmet>
      <Navigation onBodyChange={onBodyChange} />
      <PhotoSet typeName={photoBody} />
    </ArtWrapper>
  );
};

export default Art;
