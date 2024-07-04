// app/ImageContext.js
import React, { createContext, useState } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const addImage = (uri) => {
    setImages((prevImages) => [...prevImages, uri]);
  };

  return (
    <ImageContext.Provider value={{ images, addImage }}>
      {children}
    </ImageContext.Provider>
  );
};
