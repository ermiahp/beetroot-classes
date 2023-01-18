import logo from "./logo.svg";
import "./App.css";
import ImageGallery from "react-image-gallery";
import axios from "axios";
import { useEffect, useState } from "react";

// const getApi = (number) => "https://picsum.photos/v2/list?page=2&limit=" + number;
const getApi = (number) =>
  `https://picsum.photos/v2/list?page=1&limit=${number}`;

function App() {
  const [imgArray, setImageArray] = useState([]);
  const [numberOfPicture, setNumberOfPicture] = useState(1);

  useEffect(() => {
    if (numberOfPicture > 0) {
      axios.get(getApi(numberOfPicture)).then(function (response) {
        console.log(response.data.length);
        for (let i = 0; i < response.data.length; i++) {
          let img = response.data[i];
          setImageArray((prev) => [
            ...prev,
            {
              original: img.download_url,
              thumbnail: img.download_url,
            },
          ]);
          console.log(imgArray);
        }
      });
    }
    return () => {
      setImageArray([]);
    };
  }, [numberOfPicture]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="number of picture please!"
          value={numberOfPicture}
          onChange={(event) => setNumberOfPicture(event.target.value)}
        />
        <ImageGallery items={imgArray} />
      </header>
    </div>
  );
}

export default App;
