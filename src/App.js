import React from "react";
import "./App.css";
import PhotoGrid from "./components/photoGrid"
import Header from "./components/Header"
import Footer from  "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <PhotoGrid />
      <Footer />
    </div>
  );
}

export default App;
