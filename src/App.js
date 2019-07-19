import React from "react"

import Joke from "./Joke";
import "./App.css"

import jokesData from "./jokesData";

const App = () => {

  const jokesComponent = jokesData.map(function (joke) {
    return ( <Joke joke={{ title:joke.title, question:joke.question, punchLine:joke.punchLine}} />);
  });

  console.log(jokesComponent);

  return (
      <div className="">
        <h2 style={{ marginLeft: "6px" }}>Butt of the Joke</h2>
        {jokesComponent}
      </div>
  );
};

export default App;