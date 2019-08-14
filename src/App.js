import React from "react";
import "./App.css";
import PhotoGrid from "./components/photoGrid"

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="rocket">🚀</span>!
      </p>
      <PhotoGrid />
    </div>
  );
}

export default App;
