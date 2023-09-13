import React, { useContext } from "react";
import PlaceImage from "./PlaceImage";
import { imgPlaceContext } from "./MyContext";

const Place = () => {
  
  let imagePlace = useContext(imgPlaceContext);
  return (
    <>
      <PlaceImage />
      <p>
        <b>{imagePlace.name}</b>
        {": " + imagePlace.description}
      </p>
    </>
  );
};

export default Place;
