import React from "react";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <SearchForm />
      </Router>
    </div>
  );
}

export default App;
