import React, { useState } from "react";
import Navigation from "./Navigation";
import PhotoSet from "./PhotoSet";
import { ArtWrapper } from "./index.style";

const Art = () => {
  const [photoBody, setPhotoBody] = useState("base");
  const onBodyChange = (value) => {
    setPhotoBody(value);
  };
  return (
    <ArtWrapper>
      <Navigation onBodyChange={onBodyChange} />
      <PhotoSet typeName={photoBody} />
    </ArtWrapper>
  );
};

export default Art;
