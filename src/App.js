import React from "react";
import { Navbar, Heroes, Imagesfaces, Movies,Card } from "./Components";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Heroes />
      <Imagesfaces />
      <Movies />
      <Card />
    </div>
  );
}

export default App;
