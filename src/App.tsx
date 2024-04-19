import React from "react";
import "./App.css";
import ImagesGallery from "./components/ImagesGallery";
import HeaderTop from "./components/HeaderTop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderTop />
      <ImagesGallery />
    </div>
  );
}

export default App;
