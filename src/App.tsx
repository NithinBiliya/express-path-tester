import React, { useEffect, useState } from "react";
import { pathToRegexp } from "path-to-regexp";
import "./App.css";

const options = {};

function App() {
  const [isMatch, setIsMatch] = useState(false);
  const [regularExp, setRegularExp] = useState<RegExp>(new RegExp(""));
  const [route, setRoute] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setRegularExp(pathToRegexp(route, undefined, options));
  }, [route]);

  useEffect(() => {
    setIsMatch(regularExp.test(path));
  }, [regularExp, path]);

  return (
    <div className="App">
      <section>
        Route -
        <input
          type="text"
          onChange={(e) => {
            setRoute(e.target.value);
          }}
        />
      </section>
      <section>
        Path -
        <input
          type="text"
          onChange={(e) => {
            setPath(e.target.value);
          }}
        />
      </section>
      <section>regex - {regularExp.toString()}</section>
      <section>Match - {JSON.stringify(isMatch)}</section>
    </div>
  );
}

export default App;
