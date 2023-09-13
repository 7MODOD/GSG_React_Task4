import React , {useContext} from "react";
import { getImageUrl } from "./Utils";
import { imgPlaceContext, imgSizeContext } from "./MyContext";
const PlaceImage = () => {

  let imageSize = useContext(imgSizeContext);
  let imagePlace = useContext(imgPlaceContext);

  return (
    <img
      src={getImageUrl(imagePlace.imageId)}
      alt={imagePlace.name}
      width={imageSize.imgSize}
      height={imageSize.imgSize}
    />
  );
};

export default PlaceImage;
