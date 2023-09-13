import React, { useContext } from "react";
import { places } from "./Data";
import Place from "./Place";
import { imgPlaceContext } from "./MyContext";
const List = () => {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <imgPlaceContext.Provider value = {{id:place.id, name: place.name, description: place.description, imageId: place.imageId}}>
        <Place />
      </imgPlaceContext.Provider>
      
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default List;
