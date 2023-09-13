import { useState } from "react";
import List from "./components/List.js";
import { imgSizeContext } from "./components/MyContext.js";
export default function App() {

  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <imgSizeContext.Provider value = {{imgSize : imageSize}}>
      <List />
      </imgSizeContext.Provider>
    </>
  );
}
