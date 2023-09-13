const { createContext } = require("react");

//** Please implement MyContext to solve the exercise */
export const imgSizeContext = createContext({imgSize: " "});
export const imgPlaceContext = createContext({id : 0, name: " ", description: " ", imageId: " "});