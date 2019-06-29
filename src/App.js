import React from "react";
import Carousel from "./components/Carousel";

import "./components/Carousel/styles/core.css";
import "./components/Carousel/styles/theme/theme.default.css";

const slides = [
  {
    image: require("./slides/image1.jpg"),
    alt: "North shore (Author 翔音)"
  },
  {
    image: require("./slides/image2.jpg"),
    alt: "Orange clouds over mountains (Author Nitish Meena)"
  },
  {
    image: require("./slides/image3.jpg"),
    alt: "Icy blue mountain range (Author Elena Prokofyeva)"
  },
  {
    image: require("./slides/image4.jpg"),
    alt: "Blue lake and green shore (Author Andreas Gücklhorn)"
  }
];

const options = {
  arrows: true,
  bullets: true,
  autoplay: 3000
};

function App() {
  return (
    <div className="App">
      <Carousel slides={slides} {...options} />
    </div>
  );
}

export default App;
